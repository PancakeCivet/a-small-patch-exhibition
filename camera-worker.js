// Classic worker: MediaPipe's WASM loader uses importScripts; dynamic ESM import
// loads the pinned API while inference stays off the rendering thread.
let recognizer;
self.onmessage=async ({data})=>{
  try {
    if(data.type==='init') {
      const {FilesetResolver,GestureRecognizer}=await import('./models/vision_bundle.mjs');
      const files=await FilesetResolver.forVisionTasks(new URL('./models/wasm',self.location.href).href);
      recognizer=await GestureRecognizer.createFromOptions(files,{
        baseOptions:{modelAssetPath:"https://storage.googleapis.com/mediapipe-models/gesture_recognizer/gesture_recognizer/float16/1/gesture_recognizer.task",delegate:'CPU'},
        runningMode:'VIDEO',numHands:1,minHandDetectionConfidence:0.6,minHandPresenceConfidence:0.6,minTrackingConfidence:0.6,
        canvas:new OffscreenCanvas(640,480),
      });
      self.postMessage({type:'ready'});
    } else if(data.type==='frame' && recognizer) {
      try {
        const result=recognizer.recognizeForVideo(data.bitmap,data.timestamp);
        self.postMessage({type:'result',landmarks:result.landmarks[0]??null,gesture:result.gestures[0]?.[0]??null,timestamp:data.timestamp});
      } finally {data.bitmap.close();}
    }
  } catch(error) {self.postMessage({type:'error',message:String(error)});}
};

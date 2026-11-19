# Local typefaces

All four typefaces are hosted locally. Runtime font loading does not contact a third-party font service.

| File | CSS family | Weight axis | Provenance |
| --- | --- | --- | --- |
| `source-han-serif-sc-ui.woff2` | `Small Patch Serif SC` | 250–900 | Genuine Adobe Source Han Serif SC VF (思源宋体 SC), common-Chinese/UI subset |
| `source-han-sans-sc-ui.woff2` | `Small Patch Sans SC` | 250–900 | Genuine Adobe Source Han Sans SC VF (思源黑体 SC), common-Chinese/UI subset |
| `libre-baskerville-latin.woff2` | `Libre Baskerville` | 400–700 | Complete Google Fonts upstream variable font, lossless WOFF2 compression only |
| `source-sans-3-latin.woff2` | `Source Sans 3` | 200–900 | Complete, unchanged official Adobe WOFF2; internal typographic family is `SourceSans3VF` |

The two CJK files preserve the Adobe glyph designs and variable weight axis. Their subsets include all 3,755 GB2312 level-one common Chinese ideographs plus project UI characters and punctuation. All Chinese characters and CJK punctuation in the latest `src/*.ts` modules and the supplied design statement were verified present after the new page/intro copy was added. Unsupported symbols or future uncommon characters can use the OS fallback. The serif subset has 3,979 Unicode entries and the sans subset 4,287. These are horizontal UI subsets, retaining the relevant `locl`, `kern`, `liga`, `clig`, `calt`, `ccmp`, `mark`, and `mkmk` features where supplied by the upstream font.

Adobe reserves the name “Source” under OFL 1.1. Because glyph subsetting creates a modified version, the two CJK subsets use the internal family names **Small Patch Serif SC** and **Small Patch Sans SC**, including renamed named-instance PostScript identifiers. Their original upstream identity remains credited above and in the font metadata/manifest. This follows the [official OFL FAQ, entries 2.5, 2.6 and 3.1](https://openfontlicense.org/ofl-faq/). The unchanged Latin fonts keep their upstream names.

Each font's original copyright and complete OFL 1.1 license is included in its adjacent `.OFL.txt` file, and the upstream copyright/license metadata remains in the fonts. Exact pinned official source URLs, license URLs, internal names, Unicode counts, file sizes, weight axes and SHA-256 hashes are recorded in `font-manifest.json`.

Official projects:
- [Adobe Source Han Serif](https://github.com/adobe-fonts/source-han-serif)
- [Adobe Source Han Sans](https://github.com/adobe-fonts/source-han-sans)
- [Adobe Source Sans](https://github.com/adobe-fonts/source-sans)
- [Google Fonts Libre Baskerville](https://github.com/google/fonts/tree/main/ofl/librebaskerville)

Only font assets and this documentation were added; no font is required to be installed on the participant's computer.

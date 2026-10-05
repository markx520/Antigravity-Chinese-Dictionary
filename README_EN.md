English | [简体中文](README.md)

# Antigravity Multi-Language Dictionary

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Terms: 5,800+](https://img.shields.io/badge/Terms-5%2C800%2B-green.svg)](dist/zh-cn-ui-dictionary.json)
[![Locales](https://img.shields.io/badge/Locales-zh--CN%20%7C%20zh--TW%20%7C%20ja--JP%20%7C%20en--US-blueviolet.svg)](locales/)
[![Support](https://img.shields.io/badge/Antigravity-v2.18.1%20%7C%20v2.19.1%2B-orange.svg)](https://antigravity.google)

Clean multi-language dictionary datasets for Google Antigravity.

---

## 1. Overview

Localization datasets verified through four safety audit gates:
1. **Multi-Language Coverage**:
   - Simplified Chinese (zh-CN): 5,807 terms;
   - Traditional Chinese (zh-TW): 5,087 terms;
   - Japanese (ja-JP): 47 terms;
   - English Baseline (en-US): Official metadata;
2. **Four Safety Gates**:
   - Placeholders: Preserves `${command}` and `{0}`;
   - Anti-Recursion: Prevents infinite DOM recursion;
   - Brand Preservation: Keeps `Antigravity` in original English;
   - Code & Path Immunity: Extensions (`.js`, `.py`, `.md`) and paths remain 100% untouched.

---

## 2. Directory Structure

```
Antigravity-Chinese-Dictionary/
├── locales/                     # Decoupled packages (zh-CN, zh-TW, ja-JP, en-US)
├── dicts/                       # Compatibility slices (Simplified Chinese)
├── dicts_tw/                    # Compatibility slices (Traditional Chinese)
├── dicts_ja/                    # Compatibility slices (Japanese)
├── dist/                        # Aggregated JSON dictionaries
│   ├── zh-cn-ui-dictionary.json # Simplified Chinese (5,807 terms)
│   ├── zh-tw-ui-dictionary.json # Traditional Chinese (5,087 terms)
│   └── ja-jp-ui-dictionary.json # Japanese (47 terms)
├── build-dictionary.js          # Package builder & audit pipeline
├── LICENSE                      # MIT License
└── README_EN.md                 # English documentation
```

---

## 3. Usage & Build

### 3.1 Direct JSON Loading
Load JSON from `dist/` or `locales/<lang>/dictionary.json` directly.

### 3.2 Build & Audit
Compile packages and verify safety gates (exit code 0):

```bash
# Build all locales
node build-dictionary.js all

# Build specific locale
node build-dictionary.js --locale zh-CN
```

---

## 4. Community & Disclaimer

| QQ Group (222403941) | WeChat Community |
| :---: | :---: |
| ![QQ QR](./assets/qq_group_qrcode.png) | ![WeChat QR](./assets/wechat_group_qrcode.png) |

1. **Research Purpose**: For software localization research;
2. **As-Is Basis**: Provided under MIT License;
3. **Trademark Notice**: Google and Antigravity are trademarks of Google LLC;
4. **Non-Commercial**: Reselling or repackaging is strictly prohibited.

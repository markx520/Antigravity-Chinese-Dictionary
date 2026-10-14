English | [简体中文](README.md)

# Antigravity Multi-Language Dictionary

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Terms: 23,600+](https://img.shields.io/badge/Terms-23%2C600%2B-green.svg)](dist/zh-cn-ui-dictionary.json)
[![Locales: 11 Languages](https://img.shields.io/badge/Locales-11%20Languages-blueviolet.svg)](locales/)
[![Support: Antigravity v2.18.1 - v2.22.0+](https://img.shields.io/badge/Antigravity-v2.18.1%20--%20v2.22.0%2B-orange.svg)](https://antigravity.google)

Pure multi-language localization dataset for Google Antigravity.

---

## 1. What It Is

A production-ready localization dataset secured by four crash-prevention gates (placeholders, anti-recursion, brand preservation, code/path immunity).

### Supported Locales (11 Languages, 119 Slices Each)
- **zh-CN** (Simplified Chinese): 23,646 terms
- **zh-TW** (Traditional Chinese): 23,669 terms
- **ja-JP** (Japanese): 23,684 terms
- **ko-KR** (Korean): 23,684 terms
- **de-DE** (German): 23,684 terms
- **fr-FR** (French): 23,684 terms
- **es-ES** (Spanish): 23,684 terms
- **it-IT** (Italian): 23,684 terms
- **pt-BR** (Portuguese): 23,684 terms
- **ru-RU** (Russian): 23,684 terms
- **en-US** (English): Baseline metadata

---

## 2. Quick Directory Layout

```
Antigravity-Chinese-Dictionary/
├── locales/                 # 11 locale packages (119 micro-slices each)
├── dicts/                   # Classic compatibility slices
├── dist/                    # Production standalone JSON dictionaries
├── build-dictionary.js      # Zero-dependency build & audit pipeline
└── README_EN.md
```

---

## 3. Usage & Build Commands

### Direct JSON Consumption
Load prebuilt JSON files directly from `dist/<lang>-ui-dictionary.json` or `locales/<lang>/dictionary.json`.

### Build & Audit Pipeline (build-dictionary.js)
Developers contributing terms must run the zero-dependency builder:

```bash
# Build & audit all 11 locales
node build-dictionary.js all

# Build specific locale only
node build-dictionary.js --locale zh-CN
node build-dictionary.js --locale ko-KR
node build-dictionary.js --locale ja-JP
```

---

## 4. Verification & Community

- **Acceptance Criteria**: Exit code must be `0` with `0 audit errors`.
- **QQ Group**: 222403941
- **WeChat Community**: Antigravity Nexus
- **License**: MIT License (Commercial resale strictly prohibited).

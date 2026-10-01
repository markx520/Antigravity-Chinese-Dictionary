English | [简体中文](README.md)

# Antigravity Chinese Dictionary

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Terms: 5,500+](https://img.shields.io/badge/Terms-5%2C500%2B-green.svg)](dist/zh-cn-ui-dictionary.json)
[![Format: JSON](https://img.shields.io/badge/Format-Pure%20JSON-brightgreen.svg)](dicts/)
[![Support: Antigravity v2.18.1 / v2.19.1+](https://img.shields.io/badge/Antigravity-v2.18.1%20%7C%20v2.19.1%2B-orange.svg)](https://antigravity.google)

A clean, comprehensive, and verified Chinese localization dictionary dataset for Google Antigravity.

---

## 1. Overview

1. **Pure Data**: Standard JSON key-value pairs, ready to use;
2. **Dual Mode**:
   - Simplified Chinese: 5,571 verified terms;
   - Traditional Chinese: 5,075 terms;
3. **Clean & Verified**:
   - Zero-recursion safety: eliminated self-recursive translation keys;
   - Preserved dynamic placeholders;
   - Stripped redundant bilingual brackets.

---

## 2. Structure

```
Antigravity-Chinese-Dictionary/
├── dicts/                       # Simplified Chinese slices (5,571 terms)
│   ├── 01-common.json           # General vocabulary (2,962 terms)
│   ├── 02-menu.json             # Top bar & system menus (392 terms)
│   ├── 03-chat-agent.json       # Agent & conversation (905 terms)
│   ├── 04-settings.json         # Settings & configuration (428 terms)
│   ├── 05-mcp-tools.json        # MCP tools & extensions (328 terms)
│   ├── 06-workbench-ide.json    # Workbench & wizard (450 terms)
│   └── 07-notifications.json    # Notifications & status (284 terms)
├── dicts_tw/                    # Traditional Chinese slices (5,075 terms)
│   ├── 01-common.json           # General vocabulary (2,606 terms)
│   ├── 02-menu.json             # Top bar & system menus (389 terms)
│   ├── 03-chat-agent.json       # Agent & conversation (840 terms)
│   ├── 04-settings.json         # Settings & configuration (416 terms)
│   ├── 05-mcp-tools.json        # MCP tools & extensions (302 terms)
│   ├── 06-workbench-ide.json    # Workbench & wizard (425 terms)
│   └── 07-notifications.json    # Notifications & status (275 terms)
├── dist/                        # Complete dictionaries
│   ├── zh-cn-ui-dictionary.json # Full Simplified Chinese dictionary (5,571 terms)
│   └── zh-tw-ui-dictionary.json # Full Traditional Chinese dictionary (5,075 terms)
├── LICENSE                      # MIT License
├── README.md                    # Chinese documentation
└── README_EN.md                 # English documentation
```

---

## 3. Usage

Load JSON from `dist/` directly:
```json
{
  "New Window": "新建窗口",
  "Open Project": "打开项目",
  "Command Palette": "命令面板",
  "Connect to WSL": "连接到 WSL",
  "Default Distro": "默认发行版"
}
```

---

## 4. Star History

<a href="https://star-history.com/#markx520/Antigravity-Chinese-Dictionary&Date">
  <img src="https://api.star-history.com/svg?repos=markx520/Antigravity-Chinese-Dictionary&type=Date" alt="Star History Chart" width="100%" />
</a>

---

## 5. Disclaimer

1. **Research Purpose**: For software localization and terminology alignment research;
2. **As-Is Basis**: Provided under MIT License without warranty of any kind;
3. **Trademark Notice**: Google and Antigravity are trademarks of Google LLC;
4. **Non-Commercial**: Strictly prohibits reselling or repackaging this free dataset.

[English](README_EN.md) | 简体中文

# Antigravity 中文本地化词典

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Terms: 5,500+](https://img.shields.io/badge/Terms-5%2C500%2B-green.svg)](dist/zh-cn-ui-dictionary.json)
[![Format: JSON](https://img.shields.io/badge/Format-Pure%20JSON-brightgreen.svg)](dicts/)
[![Support: Antigravity v2.18.1 / v2.19.1+](https://img.shields.io/badge/Antigravity-v2.18.1%20%7C%20v2.19.1%2B-orange.svg)](https://antigravity.google)

本项目专为 Google Antigravity 智能体开发环境整理**纯净中文本地化词典数据集**。

---

## 1. 项目概述

为社区开发者与本地化爱好者提供高质量、经过防死循环清洗的母语词库资产：
1. **纯净数据资产**：标准键值对字典，开箱即用；
2. **多语言双模支持**：
   - 简体中文：收录 5,514 条全量核心词条；
   - 繁体中文：收录 5,018 条核心词条；
3. **数据纯净合规**：
   - 剔除翻译值包含键名自身的自递归条目，避免渲染死循环；
   - 完整保护动态占位符；
   - 剥离多余英文翻译对照括号。

---

## 2. 目录数据结构

```
Antigravity-Chinese-Dictionary/
├── dicts/                       # 简体中文分片词典 (纯 JSON, 5,514 词条)
│   ├── 01-common.json           # 通用基础词汇 (2,962 词条)
│   ├── 02-menu.json             # 顶栏与系统菜单 (371 词条)
│   ├── 03-chat-agent.json       # 智能体与对话会话 (902 词条)
│   ├── 04-settings.json         # 设置中心与配置 (428 词条)
│   ├── 05-mcp-tools.json        # MCP 与插件扩展 (328 词条)
│   ├── 06-workbench-ide.json    # 工作台与向导编辑器 (419 词条)
│   └── 07-notifications.json    # 通知与系统状态 (281 词条)
├── dicts_tw/                    # 繁体中文分片词典 (纯 JSON, 5,018 词条)
│   ├── 01-common.json           # 通用基础词汇 (2,606 词条)
│   ├── 02-menu.json             # 顶栏与系统菜单 (368 词条)
│   ├── 03-chat-agent.json       # 智能体与对话会话 (837 词条)
│   ├── 04-settings.json         # 设置中心与配置 (416 词条)
│   ├── 05-mcp-tools.json        # MCP 与插件扩展 (302 词条)
│   ├── 06-workbench-ide.json    # 工作台与向导编辑器 (394 词条)
│   └── 07-notifications.json    # 通知与系统状态 (272 词条)
├── dist/                        # 聚合单文件主字典 (开箱即用)
│   ├── zh-cn-ui-dictionary.json # 权威简体主字典 (5,514 词条)
│   └── zh-tw-ui-dictionary.json # 权威繁体主字典 (5,018 词条)
├── LICENSE                      # 开源许可证
├── README.md                    # 中文说明文档
└── README_EN.md                 # 英文说明文档
```

---

## 3. 使用方式

直接读取 `dist/` 目录下的聚合单文件 JSON 字典，或根据实际业务场景按需合并 `dicts/` 下的功能分片。

键值结构示例：
```json
{
  "New Window": "新建窗口",
  "Open Project": "打开项目",
  "Command Palette": "命令面板",
  "Connect to WSL": "连接到 WSL",
  "Default Distro": "默认发行版",
  "Download the Antigravity IDE": "下载 Antigravity IDE",
  "Attach Antigravity server logs": "附加 Antigravity 服务器日志"
}
```

---

## 4. Star 增长趋势

<a href="https://star-history.com/#markx520/Antigravity-Chinese-Dictionary&Date">
  <img src="https://api.star-history.com/svg?repos=markx520/Antigravity-Chinese-Dictionary&type=Date" alt="Star 增长趋势图" width="100%" />
</a>

---

## 5. 免责声明与禁止倒卖

1. **研究目的**：本项目仅为文本数据集，供开发者进行软件本地化与词汇对齐参考；
2. **免责条款**：本项目按现状提供，使用者自行评估并承担使用风险；
3. **商标声明**：Google、Antigravity 标识为 Google LLC 的资产，本项目与 Google 无直接从属关系；
4. **禁止倒卖**：本项目基于 MIT 协议免费开源，严禁二次打包加价销售或商业牟利。

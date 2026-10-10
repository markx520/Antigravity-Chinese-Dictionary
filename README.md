[English](README_EN.md) | 简体中文

# Antigravity 多语言本地化词典

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Terms: 23,000+](https://img.shields.io/badge/Terms-23%2C000%2B-green.svg)](dist/zh-cn-ui-dictionary.json)
[![Locales: zh--CN | zh--TW | ja--JP | en--US](https://img.shields.io/badge/Locales-zh--CN%20%7C%20zh--TW%20%7C%20ja--JP%20%7C%20en--US-blueviolet.svg)](locales/)
[![Support: Antigravity v2.18.1 - v2.22.0+](https://img.shields.io/badge/Antigravity-v2.18.1%20--%20v2.22.0%2B-orange.svg)](https://antigravity.google)

专为 Google Antigravity 整理的**纯净多语言本地化词典数据集**。

---

## 1. 项目概述

为开源社区提供通过四重安全审计门禁的高质量母语词库资产：
1. **多语言全矩阵支持**：
   - 简体中文（zh-CN）：收录 23,284 条全量核心词条（62 个细粒度解耦微切片）；
   - 繁体中文（zh-TW）：收录 23,284 条核心词条（62 个细粒度解耦微切片）；
   - 日本語（ja-JP）：收录 170 条核心交互与菜单词条（7 个解耦分片）；
   - 英语基准（en-US）：官方原版元数据基线；
2. **四重安全审计门禁**：
   - 占位符守恒：完整保护 `${command}` 与 `{0}`，防止授权死循环；
   - 防自递归堆叠：剔除翻译值包含键名自身的自递归条目；
   - 品牌词绝对守恒：`Antigravity`、`Google` 保持英文原词；
   - 代码与路径绝对免疫：代码语法、扩展名（`.js`, `.py`, `.json`, `.md`）与文件路径绝对保持原始英文，零误伤；
   - 单语纯正性：剥离多余英文对照括号。

---

## 2. 目录结构速查

```
Antigravity-Chinese-Dictionary/
├── locales/                     # 现代解耦多语言包
│   ├── zh-CN/                   # 简体中文 (62微切片, 23,284 词条)
│   ├── zh-TW/                   # 繁体中文 (62微切片, 23,284 词条)
│   ├── ja-JP/                   # 日本語 (7分片, 170 词条)
│   └── en-US/                   # 英语基线元数据
├── dicts/                       # 经典兼容分片 (简体中文, 62微切片)
├── dicts_tw/                    # 经典兼容分片 (繁体中文, 62微切片)
├── dicts_ja/                    # 经典兼容分片 (日本語, 7分片)
├── dist/                        # 聚合单文件主字典 (开箱即用)
│   ├── zh-cn-ui-dictionary.json # 权威简体主字典 (23,284 词条)
│   ├── zh-tw-ui-dictionary.json # 权威繁体主字典 (23,284 词条)
│   └── ja-jp-ui-dictionary.json # 权威日文主字典 (170 词条)
├── build-dictionary.js          # 多语言独立构建器与四重审计流水线
├── LICENSE                      # 开源许可证 (MIT)
└── README.md                    # 说明文档
```

---

## 3. 使用方式与自主构建

### 3.1 直接载入单文件字典
直接读取 `dist/` 目录下的聚合单文件 JSON 字典，或从 `locales/<lang>/dictionary.json` 引用：

```json
{
  "New Window": "新建窗口",
  "Open Project": "打开项目",
  "Command Palette": "命令面板",
  "Connect to WSL": "连接到 WSL",
  "Default Distro": "默认发行版"
}
```

### 3.2 开发者自主构建与安全质检中枢 (build-dictionary.js)

`build-dictionary.js` 是本仓库的**全自动流水线装配中枢兼四重安全质检门禁**。整个构建器基于 Node.js 原生标准库实现，零第三方依赖。

**核心功能与职责**：
1. **微切片自动组装与去重**：自动读取 `locales/<lang>/dicts/` 下的微切片文件（如简体中文 62 个微切片），去重合并后生成完整的单文件大字典（`locales/<lang>/dictionary.json` 与 `dist/<lang>-ui-dictionary.json`），并同步刷新经典兼容目录（`dicts/`、`dicts_tw/`、`dicts_ja/`）；
2. **四重防崩安全安检门禁 (Zero-Crash Gates)**：合并过程中逐条审查词条，一旦命中违规直接阻断编译并返回错误退出码（exit code 1）：
   - **占位符守恒检查**：严格核销 `${command}`、`{0}` 等系统变量，缺失即拦截，防止授权逻辑死循环；
   - **防自递归死循环检查**：严禁翻译文本中包含原英文键名（如将 `Save` 误翻为 `Save 保存`），杜绝 DOM 引擎无限替换卡死；
   - **品牌专有名词守恒检查**：绝对阻断将 `Antigravity`、`Google` 误翻为“反重力”等词，捍卫官方原名；
   - **代码与文件名绝对免疫检查**：严禁翻译 `.js`、`.py`、`package.json` 等代码扩展名与工程文件，保护文件树与代码编辑器零被破坏；
3. **出厂合格证与哈希生成**：自动测算词条总数、文件大小与 SHA-256 校验指纹，写入 `locales/<lang>/manifest.json`，供客户端动态校验版本完整性。

#### 开发者调用指南

外部开发者在新增词条、修改分片或提交拉取请求 (Pull Request) 前，**必须调用此脚本验证退出码为 0**：

```bash
# 全语言包一键安检与构建（推荐提交代码前必跑）
node build-dictionary.js all

# 仅构建并校验简体中文 (zh-CN)
node build-dictionary.js --locale zh-CN

# 仅构建并校验繁体中文或日文
node build-dictionary.js --locale zh-TW
node build-dictionary.js --locale ja-JP
```

> **质检合格标准**：终端输出必须显示 `安全审计错误: 0 项` 且退出码恒为 `0` 方可合并提交。

---

## 4. 社区交流与免责声明

| QQ 交流群 | 微信交流群 |
| :---: | :---: |
| ![QQ 交流群二维码](./assets/qq_group_qrcode.png) | ![微信交流群二维码](./assets/wechat_group_qrcode.png) |
| **群号：222403941** | **Antigravity Nexus 交流群** |
| 验证信息：`Antigravity` | 扫码直接加入 |

1. **研究目的**：本项目仅为文本数据集，供开发者进行软件本地化与词汇对齐参考；
2. **免责条款**：本项目按现状提供，使用者自行评估并承担使用风险；
3. **商标声明**：Google、Antigravity 标识为 Google LLC 的资产；
4. **禁止倒卖**：本项目基于 MIT 协议免费开源，严禁二次打包加价销售。

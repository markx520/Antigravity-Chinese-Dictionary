[English](README_EN.md) | 简体中文

# Antigravity 多语言本地化词典

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Terms: 23,600+](https://img.shields.io/badge/Terms-23%2C600%2B-green.svg)](dist/zh-cn-ui-dictionary.json)
[![Locales: 11 Languages](https://img.shields.io/badge/Locales-11%20Languages-blueviolet.svg)](locales/)
[![Support: Antigravity v2.18.1 - v2.22.0+](https://img.shields.io/badge/Antigravity-v2.18.1%20--%20v2.22.0%2B-orange.svg)](https://antigravity.google)

专为 Google Antigravity 整理的**纯净多语言本地化词典数据集**。

---

## 1. 项目概述

通过四重防崩安全门禁（占位符守恒、防递归、品牌词守恒、代码扩展名免疫）的高质量全球母语词库资产。

### 支持语种全矩阵（11 大全球语言，每语言 119 微切片）
- **简体中文 (zh-CN)**：23,646 核心词条
- **繁体中文 (zh-TW)**：23,669 核心词条
- **日本語 (ja-JP)**：23,684 核心词条
- **한국어 (ko-KR)**：23,684 核心词条
- **Deutsch (de-DE)**：23,684 核心词条
- **Français (fr-FR)**：23,684 核心词条
- **Español (es-ES)**：23,684 核心词条
- **Italiano (it-IT)**：23,684 核心词条
- **Português (pt-BR)**：23,684 核心词条
- **Русский (ru-RU)**：23,684 核心词条
- **English (en-US)**：官方基线元数据

---

## 2. 目录结构速查

```
Antigravity-Chinese-Dictionary/
├── locales/                 # 现代解耦多语言包 (11 语种, 每语言 119 微切片)
├── dicts/                   # 经典兼容分片 (简体中文)
├── dicts_tw/                # 经典兼容分片 (繁体中文)
├── dicts_ja/                # 经典兼容分片 (日本語)
├── dist/                    # 开箱即用单文件主字典 (*-ui-dictionary.json)
├── build-dictionary.js      # 原生零依赖流水线构建器与四重审计门禁
└── README.md
```

---

## 3. 使用方式与构建命令

### 3.1 直接载入单文件字典
下游程序或插件可直接读取 `dist/<lang>-ui-dictionary.json` 或 `locales/<lang>/dictionary.json`。

### 3.2 开发者自主构建 (build-dictionary.js)
开发者在新增、修改词条或提交拉取请求前，必须运行流水线自检：

```bash
# 全语言包一键安检与构建 (全矩阵)
node build-dictionary.js all

# 仅构建并校验指定语言包
node build-dictionary.js --locale zh-CN
node build-dictionary.js --locale ko-KR
node build-dictionary.js --locale ja-JP
```

---

## 4. 质量验收与社区交流

- **验收基线**：终端报告 `安全审计错误: 0 项` 且退出码恒为 `0` 方可合并提交；
- **QQ 交流群**：222403941（验证信息：Antigravity）
- **微信交流群**：Antigravity Nexus 交流群
- **开源许可证**：MIT License（严格禁止二次打包加价倒卖）。

[English](README_EN.md) | 简体中文

# Antigravity 多语言本地化词典

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Terms: 5,800+](https://img.shields.io/badge/Terms-5%2C800%2B-green.svg)](dist/zh-cn-ui-dictionary.json)
[![Locales: zh--CN | zh--TW | ja--JP | en--US](https://img.shields.io/badge/Locales-zh--CN%20%7C%20zh--TW%20%7C%20ja--JP%20%7C%20en--US-blueviolet.svg)](locales/)
[![Support: Antigravity v2.18.1 / v2.19.1+](https://img.shields.io/badge/Antigravity-v2.18.1%20%7C%20v2.19.1%2B-orange.svg)](https://antigravity.google)

专为 Google Antigravity 整理的**纯净多语言本地化词典数据集**。

---

## 1. 项目概述

为开源社区提供通过四重安全审计门禁的高质量母语词库资产：
1. **多语言全矩阵支持**：
   - 简体中文（zh-CN）：收录 5,807 条全量核心词条；
   - 繁体中文（zh-TW）：收录 5,087 条核心词条；
   - 日本語（ja-JP）：收录 47 条核心交互与菜单词条；
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
│   ├── zh-CN/                   # 简体中文 (7分片, 5,807 词条)
│   ├── zh-TW/                   # 繁体中文 (7分片, 5,087 词条)
│   ├── ja-JP/                   # 日本語 (2分片, 47 词条)
│   └── en-US/                   # 英语基线元数据
├── dicts/                       # 经典兼容分片 (简体中文)
├── dicts_tw/                    # 经典兼容分片 (繁体中文)
├── dicts_ja/                    # 经典兼容分片 (日本語)
├── dist/                        # 聚合单文件主字典 (开箱即用)
│   ├── zh-cn-ui-dictionary.json # 权威简体主字典 (5,807 词条)
│   ├── zh-tw-ui-dictionary.json # 权威繁体主字典 (5,087 词条)
│   └── ja-jp-ui-dictionary.json # 权威日文主字典 (47 词条)
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

### 3.2 自主构建与安全审计
克隆仓库后运行构建脚本，自动执行四重门禁并编译产物（退出码为 0）：

```bash
# 构建并校验全部语言包
node build-dictionary.js all

# 仅构建指定语言包 (例如 zh-CN)
node build-dictionary.js --locale zh-CN
```

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

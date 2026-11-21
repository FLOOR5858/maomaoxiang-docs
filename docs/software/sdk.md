---
id: sdk
title: SDK 与开发
sidebar_position: 1
---

# SDK 与开发

## 开发环境

| 项目 | 建议 |
|---|---|
| 主机系统 | Ubuntu 22.04 LTS（x86_64） |
| 交叉编译工具链 | 跟随 SDK 自带（Rockchip arm-rockchip830-linux-uclibcgnueabihf 等） |
| 调试 | 串口（UART0）、ADB |

## SDK 来源

RV1106 属于 Rockchip 公开发行 SDK 体系的芯片，常见做法是基于原厂 SDK 或开发板厂商裁剪版进行适配。

- 原厂渠道：Rockchip 公开资料 / 授权渠道（具体获取方式待确认）
- 参考实现：幸狐 Luckfox Pico SDK（GitHub / Gitee 双仓公开，RV1106 同平台）
  - GitHub：`https://github.com/LuckfoxTECH/luckfox-pico`
  - Gitee：`https://gitee.com/LuckfoxTECH/luckfox-pico`
- 待补充：你自己维护的 SDK 仓库地址、分支策略、版本标签

> 说明：引用幸运狐 SDK 作为**参考实现**不等于本产品直接兼容其镜像。是否可直接烧录取决于 your board 的 DDR 容量、存储类型、引脚复用与设备树配置。

## 编译流程（通用参考）

```bash
# 1. 获取 SDK 后进入根目录
cd luckfox-pico

# 2. 配置交叉编译工具链环境变量（路径按实际 SDK 调整）
source tools/linux/toolchain/arm-rockchip830-linux-uclibcgnueabihf/env_install_toolchain.sh

# 3. 选择板型配置
./build.sh lunch

# 4. 完整编译
./build.sh all

# 5. 打包固件
./build.sh firmware
```

> 上述命令来自公开参考 SDK 的 README。你的 SDK 命令可能不同，确认后替换本节。

## 烧录

> 待补充：烧录工具名称与版本、进入下载模式的操作（按键组合）、分区表、镜像文件清单、Windows/Linux/macOS 各平台步骤。

## 摄像头调试

> 待补充：SC233A 驱动是否在 SDK 中默认启用、设备树节点示例、I2C 地址、寄存器配置表、raw 数据抓图命令、IQ 调优工具（如 rkisp）。

## 模型部署

> 待补充：RKNN 工具链版本、支持的算子、示例模型与转换命令、NPU 性能测试方法。

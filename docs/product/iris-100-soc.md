---
id: iris-100-soc
title: IRIS-100 视觉 SoC 主控
sidebar_position: 1
---

# IRIS-100 视觉 SoC 主控

**IRIS-100** 是毛毛象实验室 IRIS 系列视觉主控的入门型号，基于瑞芯微 **RV1106G3**，主打低功耗、小尺寸的图像采集与边缘 AI 推理。

> IRIS 系列命名：`IRIS-<数字>`，数字越大性能越高。IRIS-100 定位入门小巧，后续型号沿编号向上扩展（规划中的 IRIS-200 / IRIS-300 对应更高算力与接口）。本页参数来自 Rockchip 官方数据手册，产品级信息标注 `待确认`。

## 规格参数

以下参数来自 **Rockchip RV1106 Datasheet Rev2.2（2026-06-02）**，已逐条核对；经销商网页流传的"512 MB 内存""0.5 TOPS"与该版本手册不一致，请以官方手册为准。

| 项目 | 参数 |
|---|---|
| 系列型号 | IRIS-100 |
| 主控芯片 | Rockchip RV1106G3 |
| CPU | 单核 32-bit ARM Cortex-A7，NEON + FPU，32 KB I-Cache / 32 KB D-Cache / 128 KB L2 |
| 片内存储 | SIP 2 Gb DDR3L（**256 MB**，16-bit） |
| NPU | INT4/INT8/INT16 混合精度，算力最高 **1 TOPS**，支持 TensorFlow / MXNet / PyTorch / Caffe 模型转换 |
| ISP | 硬件 ISP，HDR、3A、LSC、3DNR、2DNR、锐化、去雾、Gamma；G3 最大输入 3840×2160 (8 MP)@15 fps |
| 视频编码 | H.265/H.264 多码流编码，22 计算单元智能视频引擎 |
| 摄像头接口 | 2 × MIPI CSI D-PHY（每路 2 lane，1.5 Gbps/lane）或 LVDS；1 × DVP（8/10/12/16-bit，最高 150 MHz） |
| 其他接口 | USB 2.0、10/100M Ethernet MAC+PHY、eMMC 4.51、SD 3.0、FSPI、12 × PWM、SARADC、音频编解码、RTC |
| 封装 | QFN128，12.3 × 12.3 mm，0.35 mm pitch |
| 工作温度 | 待确认（数据手册版本相关，按实际订货型号） |

## 片内外设速览

| 外设 | 能力 |
|---|---|
| MIPI CSI / LVDS | 2 组 D-PHY，每组 2 lane，1.5 Gbps/lane；可接 3 路摄像头传感器 |
| DVP | 8/10/12/16-bit，最高 150 MHz 输入，支持 BT601/656/1120 与 RAW 8/10/12-bit |
| USB | USB 2.0 OTG/Host |
| 网络 | 10/100M Ethernet MAC + 内置 PHY |
| 存储 | eMMC 4.51（HS200，1/4/8 bit）、SD 3.0（4 bit）、FSPI（1/2/4 bit） |
| 其他 | 12 × PWM、SARADC、音频编解码、RTC、POR、TrustZone |

## 典型应用

- 低功耗 AI 视觉节点：人形/人脸检测、目标计数、二维码识别
- IPC / 智能门铃 / 猫眼 / 家用摄像头
- 机器人、无人机的小型视觉感知模块
- 工业视觉传感器与边缘 AI 原型验证

## 产品级信息（待确认）

| 项目 | 状态 |
|---|---|
| PCB 尺寸 / 层数 | 待确认 |
| 供电输入 / 各电源域电流 | 待确认 |
| 默认存储（SPI NAND / eMMC / TF） | 待确认 |
| 是否板载 Wi-Fi / 以太网 PHY | 待确认 |
| 工作温度（实测） | 待确认 |
| 销售价格 / 购买链接 | 待确认 |

## 配套

- 摄像头：[SC233 摄像头模组](./sc233-camera.md) — 推荐搭配
- 组合方案：[IRIS-100 + SC233 组合套件](./combo-kit.md)
- 开发：[SDK 与开发](../software/sdk.md)
- 资料：[资料下载](../downloads.md)

## 系列路线图

| 型号 | 状态 | 定位 |
|---|---|---|
| IRIS-100 | 当前 | RV1106G3，入门小巧，1 TOPS |
| IRIS-200 | 规划 | 中端，更高算力/接口（待定） |
| IRIS-300 | 规划 | 高端（待定） |

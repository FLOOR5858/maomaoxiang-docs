---
id: combo-kit
title: IRIS-100 + SC233 组合套件
sidebar_position: 3
---

# IRIS-100 + SC233 组合套件

**组合套件** 把 [IRIS-100 视觉主控](./iris-100-soc.md) 与 [SC233 摄像头模组](./sc233-camera.md) 配成一套可直接开发的视觉方案：主控负责图像采集、ISP 处理与 NPU 推理，摄像头提供 2 MP 图像输入。

> 两个产品也可以单独购买。本页只说明**组合层面**的参数与搭配关系；芯片和传感器本身的规格见各自的产品页。

## 组合结构

| 组成 | 产品 | 核心 |
|---|---|---|
| 主控 | IRIS-100 | RV1106G3，1 TOPS NPU，8 MP ISP |
| 摄像头 | SC233 模组 | 2 MP CMOS，MIPI / DVP 输出 |
| 连接 | MIPI CSI 2-lane | 10-bit RAW 直连 + I2C 配置 |

## 组合参数（待补充）

| 项目 | 状态 |
|---|---|
| PCB 尺寸 / 层数 | 待确认 |
| 摄像头模组尺寸 / 焦距 / 光圈 / FOV | 待确认 |
| 供电输入 | 待确认 |
| 默认存储（SPI NAND / eMMC / TF） | 待确认 |
| 是否板载 Wi-Fi / 以太网 PHY | 待确认 |
| 工作温度 | 待确认 |
| 销售价格 / 购买链接 | 待确认 |

## 搭配提示

- 确认摄像头为 SC233A 时，10-bit RAW + MIPI 1/2 lane 可与 IRIS-100 的 MIPI CSI 直连。
- 若选 SC233HGS（全局快门 / 120 fps），注意 ISP 输入与内存带宽是否匹配实际目标帧率。
- 组合的机械堆叠、FPC 走线长度、镜头视场角需一起确认。

## 单独产品页

- [IRIS-100 视觉 SoC 主控](./iris-100-soc.md)
- [SC233 摄像头模组](./sc233-camera.md)

## 开发与资料

- [SDK 与开发](../software/sdk.md)
- [资料下载](../downloads.md)
- [常见问题](../faq.md)

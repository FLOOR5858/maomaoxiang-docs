---
id: luna-camera
title: LUNA 摄像头模组（SC233）
sidebar_position: 2
---

# LUNA 摄像头模组（SC233）

**LUNA（月球）** 是毛毛象实验室 SOLAR 家族的视觉传感产品线。当前型号基于思特威（SmartSens）**SC233** 系列 CMOS 图像传感器，面向 2 MP 级别图像采集，可与 [MERCURY 视觉主控](./solar-mercury-soc.md) 直连搭配。

> 命名说明：LUNA 是产品线名称，SC233 是传感器芯片型号（保留芯片名便于按型号检索）。`SC233` 后缀差异很大，**请先确认模组上贴的实际型号**，再对照下表。模组级信息（镜头、FPC、尺寸）标注 `待确认`。

## 传感器规格

| 型号 | 分辨率 | 像素 | 光学格式 | 快门 | 接口 | 帧率 | 来源 |
|---|---|---|---|---|---|---|---|
| **SC233A** | 2 MP，1928×1088 | 2.9 µm | 1/2.8" | 卷帘 | 10-bit DVP / 10/8-bit 1-2 lane MIPI | 1080p@60 fps | SmartSens SC233A Flyer V3.0 |
| SC233HGS | 2.3 MP，1928×1208 | 3.0 µm | 1/2.6" | 全局 | DVP / MIPI / LVDS | 1200p@120 fps | SmartSens 官方新闻稿 |
| SC233AT | 2.3 MP | — | — | 全局（车规） | — | — | SmartSens 官方新闻稿（AEC-Q100 Grade 2） |

SC233A 其他关键参数（Flyer）：灵敏度 7330 mV/Lux·s，动态范围线性 80 dB / HDR 最高 100 dB，SNR 39 dB，CRA 15°，供电 AVDD 2.8 V / DVDD 1.35 V / IOVDD 1.8 V，41-pin CSP 6.17 × 4.13 mm，工作温度 −30～+85 ℃。

## 摄像头接口

SC233A 输出 10-bit RAW，支持 DVP 或 1/2-lane MIPI。推荐走 MIPI CSI 2-lane：

| 信号 | 说明 |
|---|---|
| MIPI CSI CLK0± | 摄像头时钟 |
| MIPI CSI D0± / D1± | 2-lane 数据 |
| I2C | 传感器寄存器配置（SC233A 通过 I2C 写寄存器） |
| AVDD 2.8 V / DVDD 1.35 V / IOVDD 1.8 V | 传感器供电，需确认模组是否已板上 LDO |
| RESET / PWDN | 复位与休眠控制 |

## 模组级信息（待确认）

| 项目 | 状态 |
|---|---|
| 实际贴片型号（SC233A / HGS / AT） | 待确认 |
| 镜头焦距 / 光圈 / 视场角 FOV | 待确认 |
| 对焦方式（AA 定焦 / 可调焦） | 待确认 |
| FPC 座型号 / 引脚顺序 | 待确认 |
| 是否板上 LDO / 是否需要外部上拉 | 待确认 |
| 模组尺寸 / 高度 | 待确认 |
| 销售价格 / 购买链接 | 待确认 |

## 选型提示

- 需要更高帧率或全局快门（运动场景、条码），确认是否为 **SC233HGS**；卷帘的 SC233A 不适合高速运动无拖影场景。
- 与 MERCURY 搭配时，SC233A 的 10-bit RAW + MIPI 1/2 lane 配置可与 RV1106G3 的 MIPI CSI 直连。
- 实际帧率受传感器、镜头、SDK 配置与内存带宽共同限制，ISP 输入上限不等于 2 MP 一定能跑满 60 fps。

## 配套

- 主控：[MERCURY 视觉 SoC 主控](./solar-mercury-soc.md)
- 组合方案：[MERCURY + LUNA 组合套件](./combo-kit.md)
- 资料：[资料下载](../downloads.md)

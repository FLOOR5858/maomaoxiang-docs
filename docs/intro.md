---
id: intro
title: 产品总览
slug: /
sidebar_position: 1
---

# 毛毛象实验室 · 产品文档

面向 AI 视觉与嵌入式图像采集的产品线，采用 **SOLAR 太阳系主题命名**：行星系列视觉主控（SoC）+ 卫星系列摄像头模组（Sensor）。两类产品可单独选型，也可配成一套开箱即用的视觉方案。

> **资料状态说明**：芯片参数来自 Rockchip 与 SmartSens 公开数据手册（已注明来源）；标注 `待确认` 的字段为产品级信息，需根据实际 BOM 和样机补充。

## 命名体系

以太阳系为家族，用天体名承载产品定位与升级路线——越靠内的行星越小巧低功耗，越靠外性能越强；卫星围绕行星，对应摄像头与主控的搭配关系。

| 类别 | 系列 | 说明 |
|---|---|---|
| 视觉主控 | 行星系列 | MERCURY（水星）→ VENUS（金星）→ MARS（火星）→ JUPITER（木星） |
| 摄像头模组 | 卫星系列 | LUNA（月球），当前基于 SC233 传感器 |
| 组合套件 | — | MERCURY + LUNA |

## 产品线

### 视觉主控 · 行星系列

| 型号 | 天体 | 状态 | 主控 | 算力 | 定位 |
|---|---|---|---|---|---|
| MERCURY | 水星 | 当前 | Rockchip RV1106G3 | 最高 1 TOPS | 入门小巧，低功耗视觉采集 |
| VENUS | 金星 | 规划 | 待定 | 待定 | 中端 |
| MARS | 火星 | 规划 | 待定 | 待定 | 高端 |
| JUPITER | 木星 | 规划 | 待定 | 待定 | 旗舰 |

详见 [MERCURY 视觉 SoC 主控](./product/solar-mercury-soc.md)。

### 摄像头模组 · 卫星系列

LUNA 系列当前基于思特威 SC233 系列 CMOS，2 MP 级别，支持 MIPI / DVP 输出。

| 型号 | 分辨率 | 快门 | 帧率 |
|---|---|---|---|
| SC233A | 2 MP，1928×1088 | 卷帘 | 1080p@60 fps |
| SC233HGS | 2.3 MP，1928×1208 | 全局 | 1200p@120 fps |

详见 [LUNA 摄像头模组](./product/luna-camera.md)。

### 组合套件

[MERCURY + LUNA 组合套件](./product/combo-kit.md) 把主控与摄像头配成一套，MIPI CSI 2-lane 直连，适合快速原型验证。

## 方案速览（MERCURY）

| 项目 | 参数 | 来源 |
|---|---|---|
| 主控 | Rockchip RV1106G3，单核 Cortex-A7 + MCU | Rockchip RV1106 Datasheet Rev2.2 |
| 片内内存 | 2 Gb DDR3L（256 MB，16-bit） | Rockchip 官方数据手册 §1.2.2 |
| NPU | INT4/INT8/INT16 混合，最高 1 TOPS | Rockchip 官方数据手册 §1.1 |
| ISP | 硬件 ISP，最大 8 MP@15 fps 输入 | Rockchip 官方数据手册 §1.2.9 |
| 视频编码 | H.265/H.264，支持多码流 | Rockchip 官方数据手册 §1.1 |
| 摄像头 | SC233 系列 2 MP / 2.3 MP，MIPI 或 DVP 输出 | SmartSens 公开 Flyer |
| 封装 | RV1106G3 QFN128，12.3 × 12.3 mm | Rockchip 官方数据手册 §2.1 |

## 适用场景

- 低功耗 AI 视觉节点：人形/人脸检测、目标计数、二维码识别
- IPC / 智能门铃 / 猫眼 / 家用摄像头
- 机器人、无人机的小型视觉感知模块
- 工业视觉传感器与边缘 AI 原型验证

## 快速导航

- [MERCURY 视觉主控](./product/solar-mercury-soc.md)
- [LUNA 摄像头模组](./product/luna-camera.md)
- [组合套件](./product/combo-kit.md)
- [硬件与接口](./hardware/interfaces.md)
- [SDK 与开发](./software/sdk.md)
- [资料下载](./downloads.md)
- [常见问题](./faq.md)
- [售后政策](./support.md)

## 购买

> 待补充：淘宝 / 独立站 / 联系邮箱链接。

---
id: intro
title: 产品总览
slug: /
sidebar_position: 1
---

# RV1106G3 + SC233 摄像头模组

面向 AI 视觉与嵌入式图像采集的紧凑型方案：瑞芯微 RV1106G3 视觉处理器 + 思特威 SC233 系列 CMOS 传感器。

> **资料状态说明**：本页的芯片参数来自 Rockchip 与 SmartSens 公开数据手册（已注明来源）；标注 `待确认` 的字段为产品级信息，需要根据你的实际 BOM 和样机补充。

## 方案速览

| 项目 | 参数 | 来源 |
|---|---|---|
| 主控 | Rockchip RV1106G3，单核 Cortex-A7 + MCU | Rockchip RV1106 Datasheet Rev2.2 |
| 片内内存 | 2Gb DDR3L（256 MB，16-bit） | Rockchip 官方数据手册 §1.2.2 |
| NPU | INT4/INT8/INT16 混合，最高 1 TOPS | Rockchip 官方数据手册 §1.1 |
| ISP | 硬件 ISP，G3 最高 8 MP@15 fps 输入 | Rockchip 官方数据手册 §1.2.9 |
| 视频编码 | H.265/H.264，支持多码流 | Rockchip 官方数据手册 §1.1 |
| 摄像头 | SC233 系列 2 MP / 2.3 MP，MIPI 或 DVP 输出 | SmartSens 公开 Flyer |
| 封装 | RV1106G3 QFN128，12.3 × 12.3 mm，pitch 0.35 mm | Rockchip 官方数据手册 §2.1 |
| 模组尺寸 | 待确认 | 需要你补充 |
| 镜头 | 待确认（焦距 / 光圈 / 视场角） | 需要你补充 |
| 价格与购买 | 待确认 | 需要你补充 |

## 适用场景

- 低功耗 AI 视觉节点：人形/人脸检测、目标计数、二维码识别
- IPC / 智能门铃 / 猫眼 / 家用摄像头
- 机器人、无人机的小型视觉感知模块
- 工业视觉传感器与边缘 AI 原型验证

## 快速导航

- [产品规格](./product/rv1106g3-sc233.md) — 完整参数与版本差异
- [硬件与接口](./hardware/interfaces.md) — 引脚、供电、摄像头接口
- [软件与 SDK](./software/sdk.md) — 环境搭建、编译、烧录
- [资料下载](./downloads.md) — 数据手册、原理图、镜像
- [常见问题](./faq.md) — 烧录、接线、兼容性
- [售后政策](./support.md) — 保修范围与支持渠道

## 购买

> 待补充：淘宝 / 独立站 / 联系邮箱链接。

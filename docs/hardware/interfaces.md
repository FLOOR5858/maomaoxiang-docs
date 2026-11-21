---
id: interfaces
title: 硬件与接口
sidebar_position: 1
---

# 硬件与接口

## RV1106G3 片内外设（官方数据手册）

| 外设 | 能力 |
|---|---|
| MIPI CSI / LVDS | 2 组 D-PHY，每组 2 lane，1.5 Gbps/lane；可接 3 路摄像头传感器 |
| DVP | 8/10/12/16-bit，最高 150 MHz 输入，支持 BT601/656/1120 与 RAW 8/10/12-bit |
| USB | USB 2.0 OTG/Host |
| 网络 | 10/100M Ethernet MAC + 内置 PHY |
| 存储 | eMMC 4.51（HS200，1/4/8 bit）、SD 3.0（4 bit）、FSPI（1/2/4 bit） |
| 其他 | 12 × PWM、SARADC、音频编解码、RTC、POR、TrustZone |

## 摄像头连接

SC233A 输出 10-bit RAW，支持 DVP 或 1/2-lane MIPI。推荐走 MIPI CSI 2-lane：

| 信号 | 说明 |
|---|---|
| MIPI CSI CLK0± | 摄像头时钟 |
| MIPI CSI D0± / D1± | 2-lane 数据 |
| I2C | 传感器寄存器配置（SC233A 通过 I2C 写寄存器） |
| AVDD 2.8 V / DVDD 1.35 V / IOVDD 1.8 V | 传感器供电，需确认模组是否已板上 LDO |
| RESET / PWDN | 复位与休眠控制 |

> 待确认：实际模组的引脚顺序、FPC 座型号、是否需要外部上拉、镜头对焦方式（AA 定焦 / 可调焦）。

## 供电与功耗

> 待确认：输入电压、各路电源域电流预算、实测典型功耗与峰值功耗。

## 机械尺寸

> 待确认：PCB 外形图、安装孔位置、摄像头模组高度与视场角。

## 原理图与 PCB

资料仓库中的原理图 PDF 链接待补充后写入 [资料下载](../downloads.md)。

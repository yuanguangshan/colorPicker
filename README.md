# colorPicker: 一个功能强大的 JSBox 颜色选择器工具

[![Platform](https://apps.apple.com/app/jsbox/id1312014438)](https://apps.apple.com/app/jsbox/id1312014438)
[![License](https://img.shields.io/github/license/yuanguangshan/colorPicker)](LICENSE)


## 📸 预览

![Color Picker Screenshot 1](https://raw.githubusercontent.com/yuanguangshan/colorPicker/main/pics/IMG_2025.PNG)
![Color Picker Screenshot 2](https://raw.githubusercontent.com/yuanguangshan/colorPicker/main/pics/IMG_2026.PNG)
![Color Picker Screenshot 3](https://raw.githubusercontent.com/yuanguangshan/colorPicker/main/pics/IMG_2027.PNG)
![Color Picker Screenshot 4](https://raw.githubusercontent.com/yuanguangshan/colorPicker/main/pics/IMG_2028.PNG)

## ✨ 功能特性

### 🎨 多种颜色输入方式
- **HEX 格式**：支持 #RRGGBB 和 #RGB 格式
- **RGB 格式**：支持 R,G,B 和 R G B 格式
- **实时预览**：输入即时更新颜色预览
- **智能清除**：快速清空输入框

### 🌈 动态色阶生成
提供三种色阶生成模式，每种模式生成 100 种相关颜色：
- **邻近色阶（固定色相）**：在相同色相下，变化饱和度和明度
- **同饱和度色阶（固定饱和度）**：在相同饱和度下，变化色相和明度
- **同明度色阶（固定明度）**：在相同明度下，变化色相和饱和度

### 🏢 24+ 品牌色板
内置全球知名品牌设计色系：

<details>
<summary>查看完整品牌列表</summary>

#### 科技巨头
- Apple - iOS 系统配色
- Google Material - Material Design 色系
- Meta - Facebook/Instagram/WhatsApp 配色
- Microsoft - Fluent Design 色系
- Amazon - 电商配色方案

#### 社交平台
- Twitter/X - 品牌蓝与灰阶
- Facebook - 社交网络配色
- Instagram - 渐变色系
- LinkedIn - 专业商务色
- Reddit - 社区橙红系

#### 设计工具
- Adobe - Creative Cloud 色系
- Dribbble - 设计师粉
- Behance - 设计蓝
- Pinterest - 品牌红

#### 流媒体
- YouTube - 视频红
- Netflix - 娱乐红
- Spotify - 音乐绿
- Twitch - 直播紫

#### 中国品牌
- 微信 - 新旧版本绿
- 淘宝 - 经典橙
- 字节跳动 - 抖音红蓝
- 小米 - 品牌橙
- 华为 - 品牌红

#### 其他
- GitHub - 开发者灰蓝
- Slack - 协作紫
- Samsung - 科技蓝

</details>

### 📋 剪贴板智能监控
- **自动检测**：实时监控剪贴板中的颜色代码
- **多格式支持**：识别 HEX、RGB、RGBA 格式
- **批量提取**：一次提取多个颜色值
- **快速应用**：点击即可使用检测到的颜色

### 🎯 精确调色
- **RGB 滑块**：独立调节红、绿、蓝通道（0-255）
- **实时数值**：显示每个通道的精确数值
- **平滑过渡**：流畅的颜色变化动画

### 💾 强大的导出功能
- **单色导出**：复制当前选中颜色
- **批量导出**：导出当前色阶的所有颜色
- **JSON 导出**：包含完整信息的结构化数据
- 导出内容包括：
  - 当前颜色
  - 色板名称
  - 动态色阶模式与颜色列表
  - 剪贴板检测到的颜色

### 🎨 智能UI设计
- **自适应文字颜色**：根据背景亮度自动调整文字颜色
- **视觉反馈**：选中颜色时显示蓝色边框高亮
- **流畅交互**：优化的滚动和点击体验
- **色彩缓存**：提升动态色阶生成性能

## 🚀 安装说明

### 前置要求
- iOS 设备（iPhone/iPad）
- 已安装 JSBox 应用

### 安装步骤

#### 方法一：直接导入
1. 下载本仓库的 colorPicker.js 文件
2. 在 JSBox 中点击 + 新建脚本
3. 将代码粘贴进去
4. 保存并运行

#### 方法二：通过链接安装
```
jsbox://import?url=https://raw.githubusercontent.com/yuanguangshan/colorPicker/main/colorPicker.js
```

## 📖 使用指南

### 基础操作

#### 1. 输入颜色
- **HEX 输入**：直接输入 #007AFF 或 007AFF
- **RGB 输入**：点击 "HEX" 按钮切换到 RGB 模式，输入 0,122,255 或 0 122 255
- **按回车确认**：输入完成后按回车键应用颜色

#### 2. 选择预设颜色
- 点击顶部的品牌色板中的任意颜色
- 蓝色边框表示当前选中的颜色

#### 3. 使用动态色阶
- 切换色阶模式：邻近/同饱和/同明度
- 点击矩阵中的任意颜色快速切换
- 当前颜色会在矩阵中高亮显示

#### 4. 调节 RGB 通道
- 拖动 R/G/B 滑块精确调整颜色
- 右侧显示当前数值（0-255）

#### 5. 剪贴板功能
- 复制任何包含颜色代码的文本
- 应用会自动检测并显示在顶部区域
- 点击检测到的颜色即可使用
- 点击"重新监控"按钮可重新开始监控

#### 6. 导出颜色
- 点击右上角"导出"按钮
- 选择导出方式：
  - 导出当前颜色：复制单个颜色代码
  - 导出当前模式色阶：复制所有 100 种颜色
  - 保存 JSON 文件：导出完整的项目数据

### 高级技巧

#### 快速切换品牌色板
点击底部的品牌按钮 → 选择目标品牌 → 自动应用第一个颜色

#### 精确配色工作流
选择基础颜色（从预设或输入） → 切换到"邻近色阶"查看相似颜色 → 使用 RGB 滑块微调 → 导出整个色阶供设计使用

#### 从现有设计提取配色
复制设计稿中的颜色代码 → 查看剪贴板检测区域 → 点击应用检测到的颜色 → 使用动态色阶扩展配色方案

## 🔧 技术亮点

### 性能优化
- **色阶缓存机制**：避免重复计算，提升响应速度
- **智能更新策略**：仅在必要时刷新 UI 组件
- **高效颜色比较**：使用容差比较解决浮点精度问题

### 算法实现
- **HSV 色彩空间转换**：支持色相、饱和度、明度独立调节
- **对比度计算**：基于 WCAG 标准自动选择文字颜色
- **正则表达式解析**：智能识别多种颜色格式

### 架构设计
- **模块化代码**：功能清晰分离，易于维护
- **状态管理**：统一的颜色状态更新机制
- **事件驱动**：响应式 UI 更新

## 🛠️ 开发计划

### 近期计划
- [ ] Add HSL 颜色输入支持
- [ ] 支持颜色历史记录
- [ ] 添加更多品牌色板
- [ ] 支持自定义色板保存

### 长期规划
- [ ] 色彩和谐方案生成（补色、三角色等）
- [ ] 色盲模式预览
- [ ] 渐变色生成器
- [ ] 导出为 CSS/Swift/Android XML 等格式

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

### 如何贡献
1. Fork 本仓库
2. 创建你的特性分支 (git checkout -b feature/AmazingFeature)
3. 提交你的更改 (git commit -m 'Add some AmazingFeature')
4. 推送到分支 (git push origin feature/AmazingFeature)
5. 开启一个 Pull Request

### 代码规范
- 保持代码注释清晰
- 遵循现有代码风格
- 添加功能时更新 README

## 📄 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件

## 📁 图片资源

截图和演示图片请放在 `pics` 文件夹中，目前包含：
- `IMG_2025.PNG` - Color Picker 主界面截图
- `IMG_2026.PNG` - Color Picker 品牌色板展示
- `IMG_2027.PNG` - Color Picker 色阶生成界面
- `IMG_2028.PNG` - Color Picker 导出功能界面

## 🙏 致谢

- JSBox - 强大的 iOS 脚本运行环境
- 所有品牌的设计团队 - 提供优秀的配色方案
- 社区贡献者 - 提出宝贵的建议和反馈

// ===========================================
/* 
colorPicker v1.0
author :yuanguangshan
-  ⭐️ 内置全球知名品牌设计色系;
-  ⭐️⭐️⭐️ 强大的动态色阶即时生成功能；
-  ⭐️ 多种颜色输入方式:HEX,RGB;
-  ⭐️ 实时预览：输入即时更新颜色预览;
-  ⭐️⭐ ️剪贴板智能监控;
-  ⭐️强大的导出功能;
*/
// ===========================================

// --- 1. 全局数据定义 ---
const colorPalettes = {
  "Apple": {
    name: "Apple",
    colors: [
      // 官方 / 系统主色
      "#007AFF", // iOS 系统蓝 (Primary)
      "#34C759", // 系统绿 (Success)
      "#FF3B30", // 系统红 (Destructive)
      "#FF9500", // 系统橙 (Warning)
      "#FFCC00", // 系统黄
      "#FF2D55", // 系统粉 (Accent)
      "#AF52DE", // 系统紫
      // 近似官方 UI 扩展
      "#5856D6", // 蓝紫
      "#5AC8FA", // 浅蓝
      "#30B0C7", // 青蓝
      "#8E8E93", // 中性灰
      "#C7C7CC"  // 浅灰
    ]
  },

  "Google": {
    name: "Google Material",
    colors: [
      // Google Logo 四色（主色）
      "#4285F4", // Blue
      "#EA4335", // Red（更贴近新版）
      "#FBBC05", // Yellow
      "#34A853", // Green
      // 常用 Material 衍生色（选自 Material 500/400 段）
      "#5C6BC0", // Indigo 400
      "#AB47BC", // Purple 400
      "#00ACC1", // Cyan 600
      "#26A69A", // Teal 400
      "#FF7043", // Deep Orange 400
      "#EC407A", // Pink 400
      "#9E9E9E", // Grey 500
      "#FF5722"  // Deep Orange 500（强调）
    ]
  },

  "Meta": {
    name: "Meta",
    colors: [
      // Meta / Facebook 主色
      "#0081FB", // Meta 蓝
      "#1877F2", // Facebook 蓝
      "#0084FF", // FB 按钮蓝
      // WhatsApp / Messenger / Instagram 相关色（配色工具里实用）
      "#25D366", // WhatsApp 绿
      "#00A400", // 深绿 (变体)
      "#FF6B00", // 橙
      "#FF0080", // 品牌粉
      "#9B30FF", // 品牌紫
      "#00D4AA", // 青绿
      "#FF385C", // 桃红
      "#42B72A", // FB 辅助绿
      "#E4405F"  // Instagram 粉
    ]
  },

  "Twitter": {
    name: "Twitter",
    colors: [
      // 品牌主色 + 标准灰阶
      "#1DA1F2", // Twitter Blue
      "#14171A", // Dark text
      "#657786", // Mid gray
      "#AAB8C2", // Light gray
      "#E1E8ED", // Border gray
      "#F5F8FA", // Background
      // 衍生蓝色阶，用于 hover/press 等
      "#1C9CEA", // Hover
      "#0D8BD9", // 深一点蓝
      "#0074C2", // 更深
      "#005BA1", // 更深
      "#004680", // 近 navy
      "#003B5C"  // 极深蓝
    ]
  },

  "淘宝": {
    name: "淘宝",
    colors: [
      // 淘宝主色与常见变体
      "#FF4400", // 淘宝经典橙
      "#FF5000", // Logo 橙
      "#FF6600", // 较亮橙
      "#FF9000", // 偏黄橙
      // UI 中常见提示色扩展
      "#FFCA28", // 亮黄
      "#FFA726", // 橙黄
      "#FF7043", // 橙红
      "#E64340", // 红-错误/提示
      "#FF3E3E", // 亮红
      "#FA5151", // 粉红红
      "#FF8A65", // 暖橙
      "#FFB74D"  // 浅橙
    ]
  },

  "微信": {
    name: "微信",
    colors: [
      // 主绿系
      "#07C160", // 新版主绿
      "#09BB07", // 旧版绿
      "#2AAE67", // 中间绿
      "#00D65A", // 亮绿
      // 蓝 & 链接色
      "#10AEFF", // 亮蓝
      "#1485EE", // 按钮/链接蓝
      "#576B95", // 链接蓝灰
      // 状态/警示色
      "#FF6146", // 红
      "#FA5151", // 错误红
      "#FA9D3B", // 提示橙
      "#FFC300", // 黄
      "#3F51B5"  // 辅助蓝紫
    ]
  },

  "字节跳动": {
    name: "字节跳动",
    colors: [
      // 抖音品牌核心
      "#FE2C55", // 抖音红
      "#25F4EE", // 抖音蓝绿
      "#161823", // 深背景
      "#000000", // 黑
      "#FFFFFF", // 白
      // 视觉扩展（配色用）
      "#FF6B6B", // 亮红
      "#4ECDC4", // 青绿
      "#45B7D1", // 亮蓝
      "#74B9FF", // 浅蓝
      "#96CEB4", // 浅绿
      "#FFEAA7", // 浅黄
      "#DFE6E9"  // 浅灰
    ]
  },

  "小米": {
    name: "小米",
    colors: [
      // 品牌橙系
      "#FF6700", // 小米主橙
      "#FF8F1F", // 亮橙
      "#FFA940", // 更亮橙
      "#FFB84D", // 浅橙
      // 灰阶（从 UI 风格提取）
      "#E6E6E6", // 浅灰
      "#CCCCCC", // 中灰
      "#757575", // 深灰
      "#333333", // 文本深色
      // 常见活动/社区配色扩展
      "#FB7299", // 粉
      "#4A90E2", // 蓝
      "#50E3C2", // 青绿
      "#F5A623"  // 暖橙黄
    ]
  },

  "华为": {
    name: "华为",
    colors: [
      // 品牌红系
      "#E60012", // 华为红（主）
      "#C8161D", // 深红
      "#B91C22", // 更深红
      "#8B1014", // 暗红
      // 灰黑
      "#000000", // 黑
      "#424242", // 深灰
      "#757575", // 中灰
      "#BDBDBD", // 浅灰
      // 华为系常见蓝色 UI（参考华为云 / 企业产品）
      "#0050B3", // 深蓝
      "#1890FF", // 主蓝
      "#40A9FF", // 浅蓝
      "#69C0FF"  // 更浅蓝
    ]
  },

  "Spotify": {
    name: "Spotify",
    colors: [
      // 品牌绿 & 变体
      "#1DB954", // Spotify Green 主色
      "#1ED760", // 亮绿
      "#1AA34A", // 稍深绿
      "#169A3E", // 更深绿
      "#138636", // 深绿
      // UI 中常见灰黑
      "#191414", // 深背景
      "#282828", // 中深背景
      "#121212", // 极深背景
      "#535353", // 中灰
      "#B3B3B3", // 浅灰
      "#FFFFFF", // 白
      "#FF4F4F"  // 强调/错误红（方便工具使用）
    ]
  },


  "Microsoft": {
    name: "Microsoft",
    colors: [
      // Logo 四色
      "#F25022", // 橙
      "#7FBA00", // 绿
      "#00A4EF", // 蓝
      "#FFB900", // 黄
      // Fluent Design 常见 UI 色
      "#0078D4", // 主要蓝（按钮）
      "#005A9E", // 深蓝
      "#106EBE", // 辅助蓝
      "#2B88D8", // 亮一点的蓝
      "#D83B01", // 强调橙
      "#107C10", // 成功绿
      "#F3F2F1", // 浅背景
      "#605E5C"  // 深灰
    ]
  },

  "Amazon": {
    name: "Amazon",
    colors: [
      "#FF9900", // Amazon 橙 (主色)
      "#146EB4", // 深蓝（文字/链接常见）
      "#232F3E", // 顶部导航深色
      "#37475A", // 深蓝灰
      "#F3A847", // 辅助橙
      "#FFD814", // 黄色 (Amazon Prime / 强调)
      "#B12704", // 红 (价格/促销)
      "#111111", // 纯黑
      "#555555", // 中灰
      "#F3F3F3", // 浅灰背景
      "#E7E7E7", // 边框浅灰
      "#00A8E1"  // AWS 相关蓝
    ]
  },

  "Netflix": {
    name: "Netflix",
    colors: [
      "#E50914", // Netflix 红 (主色)
      "#B20710", // 深红
      "#F40612", // 亮红
      "#000000", // 黑
      "#141414", // 深背景
      "#221F1F", // 深灰
      "#FFFFFF", // 白
      "#B3B3B3", // 浅灰
      "#E5E5E5", // 更浅灰
      "#F5F5F1", // 面板背景
      "#FFB81C", // 强调黄（活动/促销）
      "#0073E6"  // 蓝（较少用，方便工具配色）
    ]
  },

  "YouTube": {
    name: "YouTube",
    colors: [
      "#FF0000", // YouTube 红 (主色)
      "#CC0000", // 深红
      "#E62117", // Logo 变体红
      "#282828", // 深灰背景
      "#212121", // 更深背景
      "#FFFFFF", // 白
      "#F1F1F1", // 浅灰背景
      "#AAAAAA", // 中灰
      "#606060", // 深灰
      "#3EA6FF", // 订阅/按钮蓝
      "#1D63D5", // 深蓝
      "#FFCC00"  // 警示/强调黄（扩展）
    ]
  },

  "Facebook": {
    name: "Facebook",
    colors: [
      "#1877F2", // FB 蓝 (主)
      "#166FE5", // 深一点蓝
      "#1B74E4", // 按钮蓝
      "#2D88FF", // 亮蓝
      "#E7F3FF", // 浅蓝背景
      "#F0F2F5", // 通用浅灰背景
      "#050505", // 文本黑
      "#65676B", // 中灰文本
      "#8A8D91", // 浅灰文本
      "#DADDE1", // 边框灰
      "#FFFFFF", // 白
      "#FF4949"  // 红 (通知/错误)
    ]
  },

  "Instagram": {
    name: "Instagram",
    colors: [
      // 主体为渐变，但配工具可拆成关键色
      "#E1306C", // 主粉红
      "#C13584", // 紫粉
      "#5851DB", // 蓝紫
      "#405DE6", // 蓝
      "#FD1D1D", // 红
      "#F56040", // 橙
      "#F77737", // 橙黄
      "#FCAF45", // 浅黄橙
      "#FFDC80", // 淡黄
      "#000000", // 黑
      "#262626", // 深灰
      "#FAFAFA"  // 浅灰背景
    ]
  },

  "LinkedIn": {
    name: "LinkedIn",
    colors: [
      "#0A66C2", // LinkedIn 蓝 (主)
      "#004182", // 深蓝
      "#0077B5", // 旧版蓝
      "#8D6CAB", // 紫
      "#F3F2EF", // 浅背景
      "#313335", // 深灰
      "#86888A", // 中灰
      "#CACCCE", // 浅灰
      "#FFFFFF", // 白
      "#00A0DC", // 浅蓝强调
      "#E68523", // 橙
      "#DD5143"  // 红
    ]
  },

  "Adobe": {
    name: "Adobe",
    colors: [
      "#FF0000", // Adobe 红 (主)
      "#F74902", // 橙红
      "#FF6A00", // 亮橙
      "#2E001F", // 深紫红背景
      "#000000", // 黑
      "#2D2D2D", // 深灰
      "#3F3F3F", // 中灰
      "#F5F5F5", // 浅灰
      "#31A8FF", // PS 蓝
      "#FF9A00", // AI 橙
      "#FF61F6", // XD 粉
      "#FFDC00"  // 黄色强调
    ]
  },

  "Samsung": {
    name: "Samsung",
    colors: [
      "#1428A0", // Samsung 蓝 (主)
      "#0057B8", // 深蓝
      "#0070C0", // 亮一点蓝
      "#000000", // 黑
      "#262626", // 深灰
      "#555555", // 中灰
      "#F4F4F4", // 浅灰背景
      "#FFFFFF", // 白
      "#20C997", // 青绿 (扩展)
      "#FF6F61", // 红 (促销/错误)
      "#FFC107", // 黄
      "#6C757D"  // 次要灰
    ]
  },

  "Slack": {
    name: "Slack",
    colors: [
      "#611F69", // Slack 紫 (主)
      "#4A154B", // 深紫
      "#36C5F0", // 蓝
      "#2EB67D", // 绿
      "#E01E5A", // 粉红
      "#ECB22E", // 黄
      "#F4F4F4", // 浅灰背景
      "#FFFFFF", // 白
      "#1D1D1D", // 文本黑
      "#616061", // 中灰
      "#9E9EA6", // 浅灰
      "#3F0E40"  // 更深紫
    ]
  },

  "Twitch": {
    name: "Twitch",
    colors: [
      "#9146FF", // Twitch 紫 (主)
      "#772CE8", // 深紫
      "#A970FF", // 亮紫
      "#5C16C5", // 深背景紫
      "#0E0E10", // 深背景
      "#18181B", // 更深灰
      "#FFFFFF", // 白
      "#EFEFF1", // 浅灰背景
      "#A0A0A0", // 中灰
      "#FF75E6", // 粉
      "#00F0FF", // 青蓝
      "#FF3B3B"  // 红 (警告/错误)
    ]
  },

  "GitHub": {
    name: "GitHub",
    colors: [
      "#24292E", // GitHub 深灰(接近黑，主导航)
      "#0366D6", // 主蓝
      "#2188FF", // 亮蓝
      "#79B8FF", // 浅蓝
      "#F9826C", // 橙红
      "#28A745", // 绿 (成功)
      "#F6F8FA", // 浅背景
      "#E1E4E8", // 边框灰
      "#6A737D", // 文本灰
      "#D73A49", // 红 (错误)
      "#FFFFFF", // 白
      "#000000"  // 黑
    ]
  },

  "Dribbble": {
    name: "Dribbble",
    colors: [
      "#EA4C89", // Dribbble 粉 (主)
      "#E84C88", // 变体粉
      "#C32361", // 深粉
      "#F8C1D9", // 浅粉
      "#F4F4F4", // 浅灰
      "#9E9EA7", // 中灰
      "#444444", // 深灰
      "#FFFFFF", // 白
      "#FF6F61", // 橙红
      "#8E44AD", // 紫
      "#3498DB", // 蓝
      "#2ECC71"  // 绿
    ]
  },

  "Behance": {
    name: "Behance",
    colors: [
      "#1769FF", // Behance 蓝 (主)
      "#0057FF", // 深蓝
      "#1E90FF", // 亮蓝
      "#000000", // 黑
      "#333333", // 深灰
      "#999999", // 中灰
      "#F5F5F5", // 浅灰背景
      "#FFFFFF", // 白
      "#FF3B3B", // 红
      "#FFB300", // 黄
      "#00C853", // 绿
      "#AA00FF"  // 紫
    ]
  },

  "Pinterest": {
    name: "Pinterest",
    colors: [
      "#E60023", // Pinterest 红 (主)
      "#AD081B", // 深红
      "#FF2447", // 亮红
      "#000000", // 黑
      "#111111", // 深灰
      "#767676", // 中灰
      "#E9E9E9", // 浅灰
      "#FFFFFF", // 白
      "#FFB900", // 黄
      "#00C1C1", // 青
      "#0084FF", // 蓝
      "#00B894"  // 绿
    ]
  },

  "Reddit": {
    name: "Reddit",
    colors: [
      "#FF4500", // Reddit 橙红 (主)
      "#FF5700", // 亮橙红
      "#FF8717", // 橙
      "#000000", // 黑
      "#1A1A1B", // 深背景
      "#31302F", // 深灰
      "#878A8C", // 中灰
      "#D7DADC", // 浅灰
      "#FFFFFF", // 白
      "#CEE3F8", // 浅蓝背景
      "#24A0ED", // 蓝
      "#46D160"  // 绿
    ]
  }
};
let currentPalette = "Apple";
let currentColor = {
  r: 0,
  g: 122,
  b: 255
};

// --- Clipboard monitoring variables ---
let clipboardColors = []; // Array to store multiple detected colors
let clipboardMonitorInterval = null;

// --- Dynamic color caching ---
let dynamicColorsCache = {
  mode: null,
  key: null,
  colors: []
};


function getDynamicColors(hsv, modeIndex) {
  const cacheKey = `${modeIndex}-${hsv.h.toFixed(1)}-${hsv.s.toFixed(2)}-${hsv.v.toFixed(2)}`;
  if (dynamicColorsCache.key === cacheKey && dynamicColorsCache.mode === modeIndex) {
    return dynamicColorsCache.colors; // O(1) return from cache
  }

  // Cache miss - generate new colors and update cache
  let colors = [];
  switch (modeIndex) {
    case 0: // 邻近(固H)
      colors = generateColorMatrix(hsv, {
        hueSteps: 1,
        satSteps: 10,
        valSteps: 10,
        satDelta: 0.12,
        valDelta: 0.06
      });
      break;
    case 1: // 同饱和(固S)
      colors = generateColorMatrix(hsv, {
        hueSteps: 12,
        satSteps: 1,
        valSteps: 10,
        hueDelta: 30,
        valDelta: 0.1
      });
      break;
    case 2: // 同明度(固V)
      colors = generateColorMatrix(hsv, {
        hueSteps: 12,
        satSteps: 10,
        valSteps: 1,
        hueDelta: 30,
        satDelta: 0.15
      });
      break;
    default:
      colors = generateColorMatrix(hsv, {
        hueSteps: 1,
        satSteps: 10,
        valSteps: 10,
        satDelta: 0.12,
        valDelta: 0.06
      });
  }

  dynamicColorsCache = {
    mode: modeIndex,
    key: cacheKey,
    colors: colors
  };

  return colors;
}

// --- 2. 颜色转换工具函数 ---

function rgbToHex(r, g, b) {
  return "#" + [r, g, b].map(x => {
    const value = Math.round(Math.max(0, Math.min(255, x)));
    const hex = value.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }).join("").toUpperCase();
}

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function hsvToRgb(h, s, v) {
  const c = v * s;
  const x = c * (1 - Math.abs((h / 60) % 2 - 1));
  const m = v - c;
  
  let r, g, b;
  if (h < 60) {
    [r, g, b] = [c, x, 0];
  } else if (h < 120) {
    [r, g, b] = [x, c, 0];
  } else if (h < 180) {
    [r, g, b] = [0, c, x];
  } else if (h < 240) {
    [r, g, b] = [0, x, c];
  } else if (h < 300) {
    [r, g, b] = [x, 0, c];
  } else {
    [r, g, b] = [c, 0, x];
  }
  
  return {
    r: Math.round((r + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255)
  };
}

function rgbToHsv(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, v = max;

    const d = max - min;
    if (d === 0) {
        h = s = 0;
    } else {
        s = d / max;
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h *= 60;
    }
    return { h, s, v };
}

function getLuminance(r, g, b) {
    // Calculate luminance using the relative luminance formula
    const a = [r, g, b].map(v => {
        v /= 255;
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

function getContrastTextColor(hex) {
    const rgb = hexToRgb(hex);
    if (!rgb) return $color("white"); // default to white if invalid hex

    const luminance = getLuminance(rgb.r, rgb.g, rgb.b);
    // If luminance is greater than 0.5, use dark text; otherwise use light text
    return luminance > 0.5 ? $color("black") : $color("white");
}

function colorsAreEqual(color1, color2) {
  // Convert both colors to RGB for comparison
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);

  if (!rgb1 || !rgb2) {
    // If one color is invalid, check if they're exactly equal
    return color1.toUpperCase() === color2.toUpperCase();
  }

  // Compare RGB values with small tolerance for floating-point precision errors
  const tolerance = 2; // Allow up to 2 difference in RGB values
  return Math.abs(rgb1.r - rgb2.r) <= tolerance &&
         Math.abs(rgb1.g - rgb2.g) <= tolerance &&
         Math.abs(rgb1.b - rgb2.b) <= tolerance;
}

// --- 3. 动态色阶生成和缓存 ---

function generateColorMatrix(hsv, {
  hueSteps = 1,
  satSteps = 10,
  valSteps = 10,
  hueDelta = 0,
  satDelta = 0.12,
  valDelta = 0.06
} = {}) {
  const colors = [];
  for (let h = 0; h < hueSteps; h++) {
    for (let s = 0; s < satSteps; s++) {
      for (let v = 0; v < valSteps; v++) {
        const newH = (hsv.h + h * hueDelta) % 360;
        const newS = Math.max(0.1, Math.min(1.0, hsv.s + (s - satSteps/2) * satDelta));
        const newV = Math.max(0.1, Math.min(1.0, hsv.v + (v - valSteps/2) * valDelta));
        const rgb = hsvToRgb(newH, newS, newV);
        colors.push(rgbToHex(rgb.r, rgb.g, rgb.b));
      }
    }
  }
  return colors;
}

// --- 3.1 Clipboard monitoring functions ---


function extractMultipleColors(value) {
  if (!value) return [];

  const colors = [];
  value = value.trim();

  // Find all HEX formats (#RRGGBB, #RGB)
  const hexRegex = /#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})\b/g;
  let hexMatch;
  while ((hexMatch = hexRegex.exec(value)) !== null) {
    let hex = hexMatch[0];
    // Convert 3-digit hex to 6-digit if needed
    if (hex.length === 4) {
      hex = '#' + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
    }
    const upperHex = hex.toUpperCase();
    if (!colors.includes(upperHex)) {
      colors.push(upperHex);
    }
  }

  // Find all plain hex formats (RRGGBB, RGB) - be more careful to avoid false matches
  const plainHexRegex = /\b([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})\b/g;
  let plainHexMatch;
  while ((plainHexMatch = plainHexRegex.exec(value)) !== null) {
    // Skip if it's a number that's not a color (like times, dates, etc.)
    const hexValue = plainHexMatch[0];
    // Check if it looks like a color (not a time, date, or other number)
    if (!/^(0?[0-9]|1[0-9]|2[0-4]|25[0-5])$/.test(hexValue)) { // Avoid matching time values
      let formattedHex = hexValue;
      if (formattedHex.length === 3) {
        formattedHex = formattedHex[0] + formattedHex[0] + formattedHex[1] + formattedHex[1] + formattedHex[2] + formattedHex[2];
      }
      const upperHex = '#' + formattedHex.toUpperCase();
      if (!colors.includes(upperHex) && /^#([A-Fa-f0-9]{6})$/.test(upperHex)) {
        colors.push(upperHex);
      }
    }
  }

  // Find all RGB formats: rgb(r, g, b)
  const rgbRegex = /rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)/g;
  let rgbMatch;
  while ((rgbMatch = rgbRegex.exec(value)) !== null) {
    const r = Math.min(255, Math.max(0, parseInt(rgbMatch[1])));
    const g = Math.min(255, Math.max(0, parseInt(rgbMatch[2])));
    const b = Math.min(255, Math.max(0, parseInt(rgbMatch[3])));
    const hex = rgbToHex(r, g, b);
    if (!colors.includes(hex)) {
      colors.push(hex);
    }
  }

  // Find all RGBA formats: rgba(r, g, b, a)
  const rgbaRegex = /rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*[\d.]+\s*\)/g;
  let rgbaMatch;
  while ((rgbaMatch = rgbaRegex.exec(value)) !== null) {
    const r = Math.min(255, Math.max(0, parseInt(rgbaMatch[1])));
    const g = Math.min(255, Math.max(0, parseInt(rgbaMatch[2])));
    const b = Math.min(255, Math.max(0, parseInt(rgbaMatch[3])));
    const hex = rgbToHex(r, g, b);
    if (!colors.includes(hex)) {
      colors.push(hex);
    }
  }
  return colors;
}

function startClipboardMonitoring() {
  // Clear any existing monitor
  if (clipboardMonitorInterval) {
    clearInterval(clipboardMonitorInterval);
  }

  // Create a new monitoring interval
  clipboardMonitorInterval = setInterval(() => {
    const clipboardContent = $clipboard.text;
    if (clipboardContent) {
      const extractedColors = extractMultipleColors(clipboardContent);
      if (extractedColors.length > 0) {
        // Check if the new colors are different from what we already have
        const colorsChanged = clipboardColors.length !== extractedColors.length ||
          clipboardColors.some((color, index) => color !== extractedColors[index]);

        if (colorsChanged) {
          clipboardColors = [...extractedColors];  // Copy the new colors
          // Update the clipboard color display in the UI
          updateClipboardColorDisplay();

          // Auto-stop monitoring after detecting colors
          stopClipboardMonitoring();
        }
      } else if (clipboardColors.length > 0) {
        // Clear the colors if there are none detected
        clipboardColors = [];
        updateClipboardColorDisplay();
      }
    }
  }, 1000); // Check every second

  // Hide the restart button when monitoring starts
  if ($("restartClipboardMonitorButton")) {
    $("restartClipboardMonitorButton").hidden = true;
  }
}

function stopClipboardMonitoring() {
  if (clipboardMonitorInterval) {
    clearInterval(clipboardMonitorInterval);
    clipboardMonitorInterval = null;

    // Show the restart button only if we have detected colors
    if ($("restartClipboardMonitorButton") && clipboardColors.length > 0) {
      $("restartClipboardMonitorButton").hidden = false;
    }
  }
}

function updateClipboardColorDisplay() {
  // Update the matrix if it exists
  if ($("clipboardColorsMatrix") && clipboardColors.length > 0) {
    const matrix = $("clipboardColorsMatrix");
    matrix.data = clipboardColors.map(color => ({
      colorCell: { bgcolor: $color(color) },
      colorLabel: {
        text: color,
        textColor: getContrastTextColor(color),
        font: $font(10)
      }
    }));
  }

  // Update the label to show how many colors were found
  if ($("clipboardColorsLabel")) {
    if (clipboardColors.length > 0) {
      $("clipboardColorsLabel").text = `剪切板中发现 ${clipboardColors.length} 个颜色值:`;
    } else {
      $("clipboardColorsLabel").text = "剪切板中没有发现颜色值";
    }
  }

  // Update visibility of the matrix based on whether we have colors
  if ($("clipboardColorsMatrix")) {
    $("clipboardColorsMatrix").hidden = clipboardColors.length === 0;
  }

  if ($("clipboardColorsLabel")) {
    $("clipboardColorsLabel").hidden = false;
  }

  // Show the restart button only when colors were detected and monitoring stopped
  if ($("restartClipboardMonitorButton")) {
    $("restartClipboardMonitorButton").hidden = clipboardColors.length === 0 || clipboardMonitorInterval !== null;
  }
}


// --- 4. 状态同步与UI更新 ---

function setColorFromHex(input) {
  let hex = input.trim();

  // Check if input is RGB format: r,g,b
  const commaRgbMatch = hex.match(/^(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})$/);
  if (commaRgbMatch) {
    const r = parseInt(commaRgbMatch[1]);
    const g = parseInt(commaRgbMatch[2]);
    const b = parseInt(commaRgbMatch[3]);

    if (r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255) {
      const currentHex = rgbToHex(currentColor.r, currentColor.g, currentColor.b);
      const newHex = rgbToHex(r, g, b);
      if (newHex !== currentHex) {
        currentColor.r = r;
        currentColor.g = g;
        currentColor.b = b;
      }
      return true;
    }
    return false;
  }

  // Check if input is space-separated RGB format: r g b
  const spaceRgbMatch = hex.match(/^(\d{1,3})\s+(\d{1,3})\s+(\d{1,3})$/);
  if (spaceRgbMatch) {
    const r = parseInt(spaceRgbMatch[1]);
    const g = parseInt(spaceRgbMatch[2]);
    const b = parseInt(spaceRgbMatch[3]);

    if (r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255) {
      const currentHex = rgbToHex(currentColor.r, currentColor.g, currentColor.b);
      const newHex = rgbToHex(r, g, b);
      if (newHex !== currentHex) {
        currentColor.r = r;
        currentColor.g = g;
        currentColor.b = b;
      }
      return true;
    }
    return false;
  }

  // Handle traditional HEX format
  if (!hex.startsWith("#")) {
    hex = "#" + hex;
  }
  hex = hex.toUpperCase();

  const currentHex = rgbToHex(currentColor.r, currentColor.g, currentColor.b);
  if (hex === currentHex) return true;

  const rgb = hexToRgb(hex);
  if (rgb) {
    currentColor.r = rgb.r;
    currentColor.g = rgb.g;
    currentColor.b = rgb.b;
    return true;
  }
  return false;
}

function updatePresetPalette() {
  const colors = colorPalettes[currentPalette].colors;
  const currentHex = rgbToHex(currentColor.r, currentColor.g, currentColor.b);

  const matrix = $("presetColorMatrix");
  if (matrix) {
     matrix.data = colors.map(color => {
      const isSelected = colorsAreEqual(color, currentHex);
      return {
        colorCell: { bgcolor: $color(color) },
        selectedBorder: {
          hidden: !isSelected,
          borderColor: $color("systemBlue")
        }
      };
    });
  }
}

function updateDynamicColorPalette() {
  const hsv = rgbToHsv(currentColor.r, currentColor.g, currentColor.b);

  // 根据模式切换器选择的索引选择生成函数
  let dynamicColors = [];
  if ($("modeSwitcher")) {
    const modeIndex = $("modeSwitcher").index || 0;
    // Use cached color generation for performance improvement
    dynamicColors = getDynamicColors(hsv, modeIndex);
  } else {
    // 如果没有模式切换器，默认使用邻近色阶
    dynamicColors = getDynamicColors(hsv, 0);
  }

  const currentHex = rgbToHex(currentColor.r, currentColor.g, currentColor.b);

  const matrix = $("dynamicColorMatrix");
  if (matrix) {
    matrix.data = dynamicColors.map(color => {
      // 优化：使用容忍度比较颜色，解决浮点精度问题
      const isSelected = colorsAreEqual(color, currentHex);
      return {
        colorCell: { bgcolor: $color(color) },
        selectedBorder: {
          hidden: !isSelected,
          borderColor: $color("systemBlue")
        }
      };
    });
  }
}

function updateInputFields() {
  const hexColor = rgbToHex(currentColor.r, currentColor.g, currentColor.b);
  const rgbString = `${Math.round(currentColor.r)}, ${Math.round(currentColor.g)}, ${Math.round(currentColor.b)}`;

  // Update both input fields with current values
  if ($("hexInput")) {
    $("hexInput").text = hexColor;
    // Hide clear button for hex input after updating
    if ($("hexClearButton")) $("hexClearButton").hidden = true;
  }
  if ($("rgbInput")) {
    $("rgbInput").text = rgbString;
    // Hide clear button for rgb input after updating
    if ($("rgbClearButton")) $("rgbClearButton").hidden = true;
  }
}

function updateColor() {
  const hexColor = rgbToHex(currentColor.r, currentColor.g, currentColor.b);

  // Update input fields with current color values
  updateInputFields();

  if ($("redSlider")) {
    $("redSlider").value = currentColor.r / 255;
    $("greenSlider").value = currentColor.g / 255;
    $("blueSlider").value = currentColor.b / 255;
  }

  // 更新RGB滑块右侧的数值标签
  if ($("redValueLabel")) $("redValueLabel").text = `${Math.round(currentColor.r)}`;
  if ($("greenValueLabel")) $("greenValueLabel").text = `${Math.round(currentColor.g)}`;
  if ($("blueValueLabel")) $("blueValueLabel").text = `${Math.round(currentColor.b)}`;

  // 每次更新颜色时，必须刷新所有依赖当前颜色的矩阵，保证选中唯一性
  updateDynamicColorPalette();
  updatePresetPalette();

  const hexPreview = $("hexPreview");
  if (hexPreview) hexPreview.bgcolor = $color(hexColor);

  // Update the background of the copy button and HEX input container
  const copyButton = $("copyButton");
  if (copyButton) copyButton.bgcolor = $color(hexColor);

  // Update the input mode container background
  if ($("inputModeContainer")) $("inputModeContainer").bgcolor = $color(hexColor);

  // Update the current color preview box
  if ($("currentColorPreview")) $("currentColorPreview").bgcolor = $color(hexColor);

  // Update text colors for better contrast with backgrounds
  const contrastTextColor = getContrastTextColor(hexColor);

  // Update copy button text color
  if (copyButton) copyButton.titleColor = contrastTextColor;

  // Update copy button title to show current color value
  if (copyButton) copyButton.title = `复制色值:${hexColor}`;

  // Update input mode toggle text color
  if ($("inputModeToggle")) $("inputModeToggle").titleColor = contrastTextColor;

  // Update HEX input text color
  const hexInput = $("hexInput");
  if (hexInput) hexInput.textColor = contrastTextColor;

  // Update RGB input text color
  const rgbInput = $("rgbInput");
  if (rgbInput) rgbInput.textColor = contrastTextColor;
}


// --- 5. UI 渲染 ---

$ui.render({
  props: {
    title: "颜色选择器",
    bgcolor: $color("background"),
    navButtons: [
      {
        title: "导出",
        handler: () => {
          // 弹出菜单让用户选择导出选项
          $ui.menu({
            items: ["导出当前颜色", "导出当前模式色阶", "保存JSON文件(含剪切板)"],
            handler: (title, idx) => {
              if (idx === 0) {
                // 导出当前颜色
                const currentHex = rgbToHex(currentColor.r, currentColor.g, currentColor.b);
                $clipboard.text = currentHex;
                $ui.toast("已复制当前颜色: " + currentHex);
              } else if (idx === 1) {
                // 导出当前模式色阶
                const hsv = rgbToHsv(currentColor.r, currentColor.g, currentColor.b);
                let dynamicColorsList = [];

                if ($("modeSwitcher")) {
                  const modeIndex = $("modeSwitcher").index || 0;
                  // Use cached color generation for performance improvement
                  dynamicColorsList = getDynamicColors(hsv, modeIndex);
                } else {
                  dynamicColorsList = getDynamicColors(hsv, 0);
                }

                const formattedColors = dynamicColorsList.join(", ");
                $clipboard.text = formattedColors;
                $ui.toast("已复制 " + dynamicColorsList.length + " 个颜色到剪切板");
              } else {
                // 导出JSON格式(含剪切板)
                const currentHex = rgbToHex(currentColor.r, currentColor.g, currentColor.b);
                const hsv = rgbToHsv(currentColor.r, currentColor.g, currentColor.b);
                let dynamicColorsList = [];

                // Get current dynamic color palette based on mode
                if ($("modeSwitcher")) {
                  const modeIndex = $("modeSwitcher").index || 0;
                  // Use cached color generation for performance improvement
                  dynamicColorsList = getDynamicColors(hsv, modeIndex);
                } else {
                  dynamicColorsList = getDynamicColors(hsv, 0);
                }

                // Create JSON object with all relevant data
                const exportData = {
                  currentColor: currentHex,
                  currentPalette: currentPalette,
                  currentPaletteName: colorPalettes[currentPalette].name,
                  dynamicColorsMode: $("modeSwitcher") ? ["邻近(固H)", "同饱和(固S)", "同明度(固V)"][$("modeSwitcher").index || 0] : "邻近(固H)",
                  dynamicColorCount: dynamicColorsList.length,
                  dynamicColors: dynamicColorsList,
                  clipboardColors: clipboardColors,
                  clipboardColorCount: clipboardColors.length
                };

                const jsonData = JSON.stringify(exportData, null, 2);

                // Show file save dialog
                $share.sheet([$data({string: jsonData})]).then(() => {
                  $ui.toast("JSON文件已分享");
                });
              }
            }
          });
        }
      }
    ]
  },
  views: [
    {
      type: "view",
      layout: (make, view) => {
        make.left.top.right.equalTo(view.super.safeArea);
        make.bottom.equalTo(view.super.safeArea).offset(-25);
      },
      views: [{
        type: "scroll",
        props: {
          bgcolor: $color("background")
        },
        layout: $layout.fill,
        views: [{
          type: "view",
          layout: (make, view) => {
            make.edges.equalTo(view.super);
            make.width.equalTo(view.super);
          },
          views: [
            // 1. Clipboard colors display (at the very top)
            {
              type: "view",
              props: {
                id: "clipboardColorsView",
                bgcolor: $color("systemGray6"), // Default color when no clipboard colors
                cornerRadius: 8
              },
              layout: (make, view) => {
                make.top.inset(12);
                make.left.right.inset(15);
                // Height will be dynamic based on content
                make.height.greaterThanOrEqualTo(50);
              },
              views: [
                {
                  type: "view",
                  layout: (make, view) => {
                    make.top.inset(10);
                    make.left.right.inset(12);
                    make.height.equalTo(30);
                  },
                  views: [
                    {
                      type: "label",
                      props: {
                        id: "clipboardColorsLabel",
                        text: "剪切板中没有发现颜色值",
                        font: $font("bold", 15),
                        textColor: $color("secondaryText"),
                        align: $align.left
                      },
                      layout: (make, view) => {
                        make.left.inset(0);
                        make.width.equalTo(250);
                        make.centerY.equalTo(view.super);
                      }
                    },
                    {
                      type: "button",
                      props: {
                        id: "restartClipboardMonitorButton",
                        title: "重新监控",
                        font: $font(12),
                        titleColor: $color("systemBlue"),
                        bgcolor: $color("clear")
                      },
                      layout: (make, view) => {
                        make.right.inset(0);
                        make.centerY.equalTo(view.super);
                      },
                      events: {
                        tapped: () => {
                          startClipboardMonitoring();
                          $ui.toast("已重新开始监控剪切板");
                        }
                      }
                    }
                  ]
                },
                {
                  type: "matrix",
                  props: {
                    id: "clipboardColorsMatrix",
                    columns: 6,
                    itemHeight: 50,
                    spacing: 5,
                    template: { // <--- 修改开始
                      views: [
                        {
                          type: "view",
                          props: { id: "colorCell", bgcolor: $color("systemBlue"), cornerRadius: 6 },
                          layout: (make, view) => {
                            make.top.left.right.inset(0);
                            make.bottom.inset(15);
                          }
                        },
                        {
                          type: "label",
                          props: {
                            id: "colorLabel",
                            align: $align.center,
                            font: $font(10),
                            textColor: $color("white")
                          },
                          layout: (make, view) => {
                            make.left.right.inset(0);
                            make.bottom.inset(0);
                            make.height.equalTo(15);
                          }
                        }
                      ]
                    }, // <--- 修改结束
                    data: []
                  },
                  layout: (make, view) => {
                    make.top.equalTo(view.prev.bottom).offset(5);
                    make.left.right.inset(12);
                    make.bottom.inset(10);
                    make.height.equalTo(60); // Initial height for one row
                  },
                  events: {
                    didSelect: (sender, indexPath, data) => {
                      const selectedColor = clipboardColors[indexPath.item];
                      if (selectedColor) {
                        setColorFromHex(selectedColor);
                        updateColor();
                        $ui.toast(`已使用颜色: ${selectedColor}`);
                      }
                    }
                  }
                }
              ]
            },

            // 2. HEX/RGB 输入切换
            {
              type: "view",
              props: {
                id: "inputModeContainer",
                bgcolor: $color(rgbToHex(currentColor.r, currentColor.g, currentColor.b)),
                cornerRadius: 8
              },
              layout: (make, view) => {
                make.top.equalTo(view.prev.bottom).offset(12);
                make.left.right.inset(15);
                make.height.equalTo(40);
              },
              views: [
                {
                  type: "button",
                  props: {
                    id: "inputModeToggle",
                    title: "HEX",
                    font: $font("bold", 15),
                    titleColor: getContrastTextColor(rgbToHex(currentColor.r, currentColor.g, currentColor.b)),
                    bgcolor: $color("clear"),
                    align: $align.center
                  },
                  layout: (make, view) => { make.left.equalTo(12); make.centerY.equalTo(view.super); make.width.equalTo(50); },
                  events: {
                    tapped: () => {
                      // Toggle between HEX and RGB input modes
                      const currentMode = $("inputModeToggle").title;
                      const isHexMode = currentMode === "HEX";
                      
                      $("inputModeToggle").title = isHexMode ? "RGB" : "HEX";
                      if ($("hexInput")) $("hexInput").hidden = isHexMode;
                      if ($("rgbInput")) $("rgbInput").hidden = !isHexMode;
                      if ($("hexClearButton")) $("hexClearButton").hidden = true;
                      if ($("rgbClearButton")) $("rgbClearButton").hidden = true;

                      updateInputFields(); // 刷新输入框内容
                    }
                  }
                },
                {
                  // **修改点：这是唯一的容器，用于容纳两个输入框**
                  type: "view",
                  props: {
                    bgcolor: $color("clear")
                  },
                  layout: (make, view) => { make.left.equalTo(70); make.right.inset(50); make.centerY.equalTo(view.super); make.height.equalTo(30); },
                  views: [
                    // HEX 输入框
                    {
                      type: "input",
                      props: {
                        id: "hexInput",
                        font: $font("bold", 17),
                        align: $align.center,
                        bgcolor: $color("clear"),
                        autocapitalizationType: 2,
                        textColor: getContrastTextColor(rgbToHex(currentColor.r, currentColor.g, currentColor.b)),
                        hidden: false, // 初始显示
                      },
                      layout: $layout.fill, // 填满父容器
                      events: {
                        changed: sender => {
                          const txt = sender.text.trim();
                          $("hexClearButton").hidden = txt === "";
                          if (txt.length >= 6 && setColorFromHex(txt)) {
                            updateColor();
                          }
                        },
                        returned: sender => {
                          if (setColorFromHex(sender.text)) {
                            updateColor();
                          } else if (sender.text.trim() !== "") {
                            $ui.toast("无效颜色");
                          }
                          sender.blur();
                        }
                      }
                    },
                    // RGB 输入框
                    {
                      type: "input",
                      props: {
                        id: "rgbInput",
                        font: $font("bold", 17),
                        align: $align.center,
                        bgcolor: $color("clear"),
                        textColor: getContrastTextColor(rgbToHex(currentColor.r, currentColor.g, currentColor.b)),
                        hidden: true, // 初始隐藏
                        placeholder: "R,G,B or R G B"
                      },
                      layout: $layout.fill, // 同样填满父容器
                      events: {
                        changed: sender => {
                          const txt = sender.text.trim();
                          $("rgbClearButton").hidden = txt === "";
                          if (txt !== "" && setColorFromHex(txt)) {
                            updateColor();
                          }
                        },
                        returned: sender => {
                          if (setColorFromHex(sender.text)) {
                            updateColor();
                          } else if (sender.text.trim() !== "") {
                            $ui.toast("请输入正确的RGB格式");
                          }
                          sender.blur();
                        }
                      }
                    },
                    // HEX 清除按钮
                    {
                      type: "button",
                      props: { id: "hexClearButton", title: "×", titleColor: $color("systemRed"), bgcolor: $color("clear"), font: $font("bold", 16), hidden: true },
                      layout: (make, view) => { make.right.inset(5); make.centerY.equalTo(view.super); make.size.equalTo($size(20, 20)); },
                      events: { tapped: () => { $("hexInput").text = ""; $("hexClearButton").hidden = true; } }
                    },
                    // RGB 清除按钮
                    {
                      type: "button",
                      props: { id: "rgbClearButton", title: "×", titleColor: $color("systemRed"), bgcolor: $color("clear"), font: $font("bold", 16), hidden: true },
                      layout: (make, view) => { make.right.inset(5); make.centerY.equalTo(view.super); make.size.equalTo($size(20, 20)); },
                      events: { tapped: () => { $("rgbInput").text = ""; $("rgbClearButton").hidden = true; } }
                    }
                  ]
                },
                {
                  type: "label",
                  props: {
                    id: "currentColorPreview",
                    bgcolor: $color(rgbToHex(currentColor.r, currentColor.g, currentColor.b)),
                    cornerRadius: 5
                  },
                  layout: (make, view) => { make.right.inset(12); make.centerY.equalTo(view.super); make.size.equalTo($size(30, 25)); }
                }
              ]
            },
            {
              type: "matrix",
              props: {
                id: "presetColorMatrix",
                columns: 6,
                itemHeight: 25,
                spacing: 6,
                template: {
                  views: [
                    { type: "view", props: { id: "colorCell", cornerRadius: 6 }, layout: $layout.fill },
                    { type: "view", props: { id: "selectedBorder", borderWidth: 3, borderColor: $color("systemBlue"), cornerRadius: 6, hidden: true }, layout: $layout.fill }
                  ]
                },
                data: colorPalettes[currentPalette].colors.map(color => ({
                  colorCell: { bgcolor: $color(color) },
                  selectedBorder: { hidden: true }
                }))
              },
              layout: (make, view) => {
                make.top.equalTo(view.prev.bottom).offset(8);
                make.left.right.inset(15);
                make.height.equalTo(66);
              },
              events: {
                didSelect: (sender, indexPath, data) => {
                  const selectedColorHex = colorPalettes[currentPalette].colors[indexPath.item];

                  if (setColorFromHex(selectedColorHex)) {
                    updateColor(); // 立即刷新以高亮该预设色
                  } else {
                    $ui.toast("无效颜色");
                  }
                }
              }
            },
            
            // 2. 动态邻近色阶
            {
              type: "view",
              layout: (make, view) => {
                make.top.equalTo(view.prev.bottom).offset(10);
                make.left.right.inset(15);
                make.height.equalTo(60);
              },
              views: [
                {
                  type: "label",
                  props: {
                    text: "动态色阶模式",
                    font: $font("bold", 14),
                    textColor: $color("primaryText")
                  },
                  layout: (make, view) => {
                    make.top.inset(5);
                    make.left.equalTo(0);
                  }
                },
                {
                  type: "menu", // JSBox里的分段控件
                  props: {
                    id: "modeSwitcher",
                    items: ["邻近(固H)", "同饱和(固S)", "同明度(固V)"],
                    index: 0 // 默认模式
                  },
                  layout: (make, view) => {
                    make.top.equalTo(view.prev.bottom).offset(5);
                    make.left.right.inset(0);
                    make.height.equalTo(30);
                  },
                  events: {
                    changed: (sender) => {
                      // 根据 sender.index 切换生成函数
                      updateDynamicColorPalette(); // 重新生成并刷新矩阵
                    }
                  }
                }
              ]
            },
            {
              type: "matrix",
              props: {
                id: "dynamicColorMatrix",
                columns: 10,
                itemHeight: 30,
                spacing: 2,
                template: {
                  views: [
                    { type: "view", props: { id: "colorCell", cornerRadius: 2 }, layout: $layout.fill },
                    { type: "view", props: { id: "selectedBorder", borderWidth: 2.5, borderColor: $color("systemBlue"), cornerRadius: 2, hidden: true }, layout: $layout.fill }
                  ]
                },
                data: getDynamicColors(rgbToHsv(currentColor.r, currentColor.g, currentColor.b), 0).map(color => ({
                  colorCell: { bgcolor: $color(color) },
                  selectedBorder: { hidden: true }
                }))
              },
              layout: (make, view) => {
                make.top.equalTo(view.prev.bottom).offset(8);
                make.left.right.inset(15);
                make.height.equalTo(330);
              },
              events: {
                didSelect: (sender, indexPath, data) => {
                  // 1. 重新生成列表并获取点击的颜色
                  const hsv = rgbToHsv(currentColor.r, currentColor.g, currentColor.b);
                  let dynamicColorsList = [];

                  // 根据当前模式获取正确的颜色列表
                  if ($("modeSwitcher")) {
                    const modeIndex = $("modeSwitcher").index || 0;
                    // Use cached color generation for performance improvement
                    dynamicColorsList = getDynamicColors(hsv, modeIndex);
                  } else {
                    dynamicColorsList = getDynamicColors(hsv, 0);
                  }

                  const selectedColor = dynamicColorsList[indexPath.item];

                  if (selectedColor) {
                      // 2. 更新当前颜色状态
                      if (setColorFromHex(selectedColor)) {
                        // 3. **关键修复：立即刷新所有UI，确保动态色阶的高亮是唯一的，并且RGB滑块也同步**
                        updateColor();
                      } else {
                        $ui.toast("无效颜色");
                      }
                  }
                }
              }
            },
            // RGB滑块
            {
              type: "view",
              layout: (make, view) => { make.left.right.inset(15); make.top.equalTo(view.prev.bottom).offset(18); make.height.equalTo(26); },
              views: [
                { type: "label", props: { text: "R", font: $font("bold", 15), textColor: $color("#F00") }, layout: (make, view) => { make.left.equalTo(0); make.width.equalTo(20); make.centerY.equalTo(view.super); } },
                { type: "slider", props: { id: "redSlider", tintColor: $color("#F00") }, layout: (make, view) => { make.left.equalTo(view.prev.right).offset(10); make.right.inset(50); make.centerY.equalTo(view.super); }, events: { changed: sender => { currentColor.r = sender.value * 255; updateColor(); } } },
                {
                  type: "label",
                  props: { id: "redValueLabel", text: `${Math.round(currentColor.r)}`, font: $font(14), textColor: $color("primaryText") },
                  layout: (make, view) => { make.right.inset(0); make.width.equalTo(40); make.centerY.equalTo(view.super); }
                }
              ]
            },
            {
              type: "view",
              layout: (make, view) => { make.left.right.inset(15); make.top.equalTo(view.prev.bottom).offset(12); make.height.equalTo(26); },
              views: [
                { type: "label", props: { text: "G", font: $font("bold", 15), textColor: $color("#0A0") }, layout: (make, view) => { make.left.equalTo(0); make.width.equalTo(20); make.centerY.equalTo(view.super); } },
                { type: "slider", props: { id: "greenSlider", tintColor: $color("#0A0") }, layout: (make, view) => { make.left.equalTo(view.prev.right).offset(10); make.right.inset(50); make.centerY.equalTo(view.super); }, events: { changed: sender => { currentColor.g = sender.value * 255; updateColor(); } } },
                {
                  type: "label",
                  props: { id: "greenValueLabel", text: `${Math.round(currentColor.g)}`, font: $font(14), textColor: $color("primaryText") },
                  layout: (make, view) => { make.right.inset(0); make.width.equalTo(40); make.centerY.equalTo(view.super); }
                }
              ]
            },
            {
              type: "view",
              layout: (make, view) => { make.left.right.inset(15); make.top.equalTo(view.prev.bottom).offset(12); make.height.equalTo(26); },
              views: [
                { type: "label", props: { text: "B", font: $font("bold", 15), textColor: $color("#00F") }, layout: (make, view) => { make.left.equalTo(0); make.width.equalTo(20); make.centerY.equalTo(view.super); } },
                { type: "slider", props: { id: "blueSlider", tintColor: $color("#00F") }, layout: (make, view) => { make.left.equalTo(view.prev.right).offset(10); make.right.inset(50); make.centerY.equalTo(view.super); }, events: { changed: sender => { currentColor.b = sender.value * 255; updateColor(); } } },
                {
                  type: "label",
                  props: { id: "blueValueLabel", text: `${Math.round(currentColor.b)}`, font: $font(14), textColor: $color("primaryText") },
                  layout: (make, view) => { make.right.inset(0); make.width.equalTo(40); make.centerY.equalTo(view.super); }
                }
              ]
            },
            // 切换色板
            {
              type: "view",
              props: { bgcolor: $color("secondarySurface"), cornerRadius: 8 },
              layout: (make, view) => {
                make.top.equalTo(view.prev.bottom).offset(18);
                make.left.right.inset(15);
                make.height.equalTo(35);
                make.bottom.equalTo(view.super).offset(-15); 
              },
              views: [
                {
                  type: "label",
                  props: { text: "切换品牌", font: $font("bold", 13), textColor: $color("secondaryText") },
                  layout: (make, view) => { make.left.equalTo(12); make.centerY.equalTo(view.super); }
                },
                {
                  type: "button",
                  props: {
                    id: "paletteButton",
                    title: colorPalettes[currentPalette].name,
                    font: $font(15),
                    titleColor: $color("systemBlue"),
                    bgcolor: $color("clear")
                  },
                  layout: (make, view) => { make.right.inset(8); make.centerY.equalTo(view.super); },
                  events: {
                    tapped: () => {
                      const names = Object.keys(colorPalettes);
                      $ui.menu({
                        items: names.map(k => colorPalettes[k].name),
                        handler: (title, idx) => {
                          currentPalette = names[idx];
                          $("paletteButton").title = title;
                          // Update window title to show selected palette
                          $ui.title = `${title}设计色系`;
                          updatePresetPalette();
                          // 切换品牌色后，将当前色设为该品牌的第一种颜色，并刷新所有色板
                          const newHex = colorPalettes[currentPalette].colors[0];
                          if (setColorFromHex(newHex)) {
                            updateColor();
                          } else {
                            $ui.toast("无效颜色");
                          }
                        }
                      });
                    }
                  }
                }
              ]
            }
          ]
        }]
      }]
    },
    // 底部固定复制按钮
    {
      type: "button",
      props: {
        id: "copyButton",
        title: `复制色值:${rgbToHex(currentColor.r, currentColor.g, currentColor.b)}`,
        font: $font("bold", 14),
        bgcolor: $color(rgbToHex(currentColor.r, currentColor.g, currentColor.b)),
        titleColor: getContrastTextColor(rgbToHex(currentColor.r, currentColor.g, currentColor.b)),
        cornerRadius: 0
      },
      layout: (make, view) => {
        make.left.right.bottom.equalTo(view.super.safeArea);
        make.height.equalTo(50);
      },
      views: [
        {
          type: "view",
          props: {
            id: "hexPreview",
            bgcolor: $color(rgbToHex(currentColor.r, currentColor.g, currentColor.b)),
            cornerRadius: 15
          },
          layout: (make, view) => {
            make.centerY.equalTo(view.super);
            make.right.inset(110);
            make.size.equalTo($size(20, 20));
          }
        }
      ],
      events: {
        tapped: () => {
          const hex = rgbToHex(currentColor.r, currentColor.g, currentColor.b);
          $clipboard.text = hex;
          $ui.toast(`已复制: ${hex}`);
        }
      }
    }
  ],
  events: {
    appeared: () => {
      // Set initial title with current palette name
      $ui.title = `${colorPalettes[currentPalette].name}设计色系`;
      updateColor();
      // Start clipboard monitoring when the UI appears
      startClipboardMonitoring();

      // Check clipboard immediately on startup
      const initialClipboardContent = $clipboard.text;
      if (initialClipboardContent) {
        const extractedColors = extractMultipleColors(initialClipboardContent);
        if (extractedColors.length > 0) {
          clipboardColors = [...extractedColors];
          updateClipboardColorDisplay();
        }
      }

      // Initialize clear button states
      if ($("hexClearButton")) $("hexClearButton").hidden = true;
      if ($("rgbClearButton")) $("rgbClearButton").hidden = true;
    },
    disappeared: () => {
      // Stop clipboard monitoring when the UI disappears
      stopClipboardMonitoring();
    }
  }
});
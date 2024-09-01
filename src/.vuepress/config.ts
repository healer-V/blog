import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog/",

  lang: "zh-CN",
  title: "献苓-前端博客",
  description: "个人的前端博客，记录与分享在前端开发中遇到的问题和解决方案。",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});

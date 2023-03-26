import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Develop code snippets",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],

    sidebar: [
      {
        text: "Getting Started",
        items: [{ text: "Introduction", link: "/introduction" }],
      },
      {
        text: "Vue3 Element Plus",
        items: [{ text: "SuperTable", link: "/element-plus/super-table" }],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/xiaozhuclassmate/develop-code-snippets",
      },
    ],
  },
})

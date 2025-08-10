/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  { text: '主页', link: '/' },
  { text: 'PyTorch', link: '/deeplearn/9r5680xu/' },
  { text: 'STM32', link: '/article/7ex4uq89/' },
  {
    text: '电子对抗',
    items: [
      { text: '雷达原理', link: '/leidayuanli/muggg4cx/' },
      { text: '雷达对抗原理', link: '/leida/cx94emvp/' }
    ]
  },
  { text: '博客', link: 'https://kb-talk.github.io/' },
  // { text: '标签', link: '/blog/tags/' },
  // { text: '归档', link: '/blog/archives/' },

])

/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  { text: '主页', link: '/' },
  { text: 'Deep Learning', link: '/deeplearn/9r5680xu/' },
  {
    text: '电子对抗',
    items: [
      { text: '雷达原理', link: '/leidayuanli/muggg4cx/' },
      { text: '雷达对抗原理', link: '/leida/cx94emvp/' },
      { text: '雷达数字信号处理', link: '/雷达信号处理/bo87dlwp/' }
    ]
  },
  { text: 'STM32', link: '/article/7ex4uq89/' },
  { text: '博客', link: 'https://kb-talk.github.io/' },
])

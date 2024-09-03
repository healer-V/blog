import { navbar } from 'vuepress-theme-hope'

export default navbar([
  '/',
  // "/demo/",
  {
    text: '核心基础',
    icon: 'pen-to-square',
    prefix: '/posts/',
    children: [
      // {
      //   text: "HTML",
      //   icon: "pen-to-square",
      //   prefix: "apple/",
      //   children: [
      //     { text: "苹果1", icon: "pen-to-square", link: "1" },
      //     { text: "苹果2", icon: "pen-to-square", link: "2" },
      //     // "3",
      //     // "4",
      //   ],
      // }
      {
        text: '前端基础',
        prefix: 'basics/',
        children: [
          { text: 'HTML', icon: 'pen-to-square', link: '1' },
          { text: 'HTML5', icon: 'pen-to-square', link: '2' },
          { text: 'CSS', icon: 'pen-to-square', link: '3' },
          { text: 'CSS3', icon: 'pen-to-square', link: '4' },
          { text: 'JavaScript', icon: 'pen-to-square', link: '5' },
          { text: 'ES6+', icon: 'pen-to-square', link: '6' },
          { text: 'TypeScript', icon: 'pen-to-square', link: '7' }
        ]
      },
      {
        text: '网络基础',
        prefix: 'network/',
        icon: 'pen-to-square',
        children: [
          { text: 'HTTP', icon: 'pen-to-square', link: '1' },
          { text: 'WebSocket', icon: 'pen-to-square', link: '2' },
          { text: 'TCP/IP', icon: 'pen-to-square', link: '3' }
        ]
      },
      {
        text: '浏览器基础',
        prefix: 'network/',
        icon: 'pen-to-square',
        children: [
          { text: 'V8引擎原理', icon: 'pen-to-square', link: '1' },
          { text: '浏览器渲染原理', icon: 'pen-to-square', link: '2' },
          { text: 'javascript执行原理机制', icon: 'pen-to-square', link: '3' }
        ]
      }
    ]
  },
  {
    text: '框架与库',
    icon: 'book',
    link: 'cherry',
    children: [
      { text: 'Vue', icon: 'pen-to-square', link: '1' },
      { text: 'React', icon: 'pen-to-square', link: '2' },
      { text: 'JQuery', icon: 'pen-to-square', link: '3' }
    ]
  },
  {
    text: '移动端开发',
    icon: 'book',
    link: 'cherry',
    children: [
      { text: 'uniapp', icon: 'pen-to-square', link: '1' },
      { text: 'Flutter', icon: 'pen-to-square', link: '2' },
      { text: 'React Native', icon: 'pen-to-square', link: '3' },
      { text: 'Electron', icon: 'pen-to-square', link: '4' }
    ]
  },
  {
    text: '后端开发',
    icon: 'book',
    link: 'cherry',
    children: [
      { text: 'Node.js', icon: 'pen-to-square', link: '1' },
      { text: 'Java', icon: 'pen-to-square', link: '2' },
      { text: 'Python', icon: 'pen-to-square', link: '3' }
    ]
  },
  {
    text: '前端工程化',
    icon: 'book',
    link: 'cherry',
    children: [
      { text: 'webpack', icon: 'pen-to-square', link: '1' },
      { text: 'vite', icon: 'pen-to-square', link: '2' },
      { text: 'Rollup', icon: 'pen-to-square', link: '3' },
      { text: 'Esbuild', icon: 'pen-to-square', link: '4' }
    ]
  },
  {
    text: '面试题',
    icon: 'book',
    link: 'cherry'
  }
])

import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/demo/",
  {
    text: "核心基础",
    icon: "pen-to-square",
    prefix: "/posts/",
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
        text: "前端基础",
        prefix: "basics/",
        children: [
          { text: "HTML", icon: "pen-to-square", link: "1" },
          { text: "HTML5", icon: "pen-to-square", link: "2" },
          { text: "CSS", icon: "pen-to-square", link: "3" },
          { text: "CSS3", icon: "pen-to-square", link: "4" },
          { text: "JavaScript", icon: "pen-to-square", link: "5" },
          { text: "ES6+", icon: "pen-to-square", link: "6" },
        ],
      },
      {
        text: "网络基础",
        prefix: "network/",
        icon: "pen-to-square",
        link: "7",
      },
     
      // {
      //   text: "面试题总结",
      //   prefix: "basics/",
      //   icon: "pen-to-square",
      //   children: [
      //     { text: "HTML", icon: "pen-to-square", link: "1" },
      //     { text: "HTML5", icon: "pen-to-square", link: "2" },
      //     { text: "CSS", icon: "pen-to-square", link: "3" },
      //     { text: "CSS3", icon: "pen-to-square", link: "4" },
      //     { text: "JavaScript", icon: "pen-to-square", link: "5" },
      //     { text: "ES6+", icon: "pen-to-square", link: "6" },
      //   ],
      // },
      // {
      //   text: "学习路线",
      //   icon: "book",
      //   link: "https://objtube.github.io/front-end-roadmap/?ref=www.tboxn.com#/",
      // },
      // {
      //   text: "香蕉",
      //   icon: "pen-to-square",
      //   prefix: "banana/",
      //   children: [
      //     {
      //       text: "香蕉 1",
      //       icon: "pen-to-square",
      //       link: "1",
      //     },
      //     {
      //       text: "香蕉 2",
      //       icon: "pen-to-square",
      //       link: "2",
      //     },
      //     "3",
      //     "4",
      //   ],
      // },
       {
        text: "学习路线",
        icon: "book",
        link: "cherry",
      },
     
      // { text: "樱桃", icon: "pen-to-square", link: "cherry" },
      // { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
      // "tomato",
      // "strawberry",
    ],
  },

]);

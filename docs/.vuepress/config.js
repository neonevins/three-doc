module.exports = {
  title: "threeJS学习笔记",
  description: 'this is threeJS学习笔记',
  themeConfig: {
    displayAllHeaders: true,
    nav: [
      { text: '主页', link: '/' },
    ],
    sidebar: [
      {
        title: '初识 THREEJS',
        collapsable: false,
        children: [
          '/00/-1-理论知识',
          '/00/00-前言'
        ]
      },
      {
        title: '从绘制线段出发',
        collapsable: false,
        children: [
          '/01/01. 从绘制线段出发',
        ]
      },
      {
        title: 'three控制模块',
        collapsable: false,
        children: [
          '/02/three控制模块',
        ]
      },
      {
        title: '载入模型和模型制作导出',
        collapsable: false,
        children: [
          '/03/03-载入模型和模型制作导出',
        ]
      },
      {
        title: 'three run in vue-微信小游戏',
        collapsable: false,
        children: [
          '/04/04.three run in vue-微信小游戏',
        ]
      },
      {
        title: 'three中元素的交互',
        collapsable: false,
        children: [
          '/05/05-three中元素的交互',
        ]
      },
    ]
  }
}
/*
sidebar: {
  '/00/': [
    '-1-理论知识',
    '00-前言'
  ],
  '/01/': [
    '01. 从绘制线段出发'
  ],
  '/02/': [
    'three控制模块'
  ],
  '/03/': [
    '03-载入模型和模型制作导出'
  ],
  '/04/': [
    '04.three run in vue-微信小游戏'
  ],
  '/05/': [
    '05-three中元素的交互'
  ]
}

*/
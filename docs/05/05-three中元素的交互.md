# 05-鼠标与页面的元素的交互

## 1. 鼠标与3D选中元素的拖拽交互

```js
// 场景旋转控制模块
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js'
// 拖拽物体控制模块
import { DragControls } from 'three/examples/jsm/controls/DragControls.js'

// 开启场景控制渲染
const controls = new TrackballControls(camera, renderer.domElement)
// 场景中的物体集合 scene 场景 cube 物体
const objects = []
for (let i = 0; i < 100; i ++) {
  const cube = getCube()
  scene.add(cube)
  objects.push(cube)
}

// 鼠标触摸到元素时 
const dragControls = new DragControls(objects, camera, renderer.domElement)
dragControls.addEventListener('dragstart', () => {
  // 拖拽物体时禁止控制场景
  controls.enabled = false
})
dragControls.addEventListener('dragend', () => {
  // 结束拖拽时开始控制场景 
  controls.enabled = true
})
```

## 2. 鼠标悬浮与3D元素的控制


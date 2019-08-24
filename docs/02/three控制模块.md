# threeJS控制模块

1. **控制器**包:

   可以通过上下左右按键键或者鼠标拖拽, 移动相机, 控制显示位置

   这个包在源码的 `examples/js/controls/OrbitControls.js`位置,

   导入之后通过new 执行
*   拖拽控制
```js
// camera: 相机对象
// renderer.domElement canvas dom对象
import * as THREE from './path/to/three.module.js';
import {OrbitControls} from './path/to/OrbitControls.js';
// ...
const controls = new OrbitControls(camera, renderer.domElement)
controls.update()

function animate(){
requestAnimationFrame(animate)

controls.update()
// ...其余动画操作, 保持一致
// 绘制
renderer.render( scene, camera );
}
```

* 拖拽控制进阶版( **有惯性,能漂移** )

```js
// 基本和 OrbitControls 一致
import * as THREE from './path/to/three.module.js'
import {TrackballControls} from './path/to/TrackballControls.js'
// ...
const controls = new OrbitControls(camera, renderer.domElement)
controls.update()

function animate(){
requestAnimationFrame(animate)

controls.update()
// ...其余动画操作, 保持一致
// 绘制
renderer.render( scene, camera );
}
```



*   wsad控制
```js
import * as THREE from '../path/to/three.module.js'
const clock = new THREE.Clock()
import {FlyControls } from "../path/to/FlyControls.js"
function createControls(camera){
  const controls = new FlyControls( camera )
  controls.movementSpeed = 100;
  controls.rollSpeed = Math.PI / 6;
  controls.autoForward = false;
  controls.dragToLook = true;
  return controls
}
const controls = createControls(camera)
function animate(){
  requestAnimationFrame(animate)
  const delta = clock.getDelta();
  controls.update(delta)
  renderer.render( scene, camera );
}
animate()

```

* wsad加鼠标控制方向

```js
import * as THREE from 'three'
import {PointerLockControls} from 'three/examples/jsm/controls/PointerLockControls'
var render, camera, scene, controls, cube, toLeft, toRight, toFront, toBack
// 注册键盘事件
function registerEvent(){
  renderer.domElement.addEventListener('click', () => {
    this.controls.lock()
  })
   window.addEventListener('keydown', e => {
     if (e.key === 'a') {
       toLeft = true
     }
     if (e.key === 'd') {
       toRight = true
     }
     if (e.key === 'w') {
       toFront = true
     }
     if (e.key === 's') {
       toBack = true
     }
   })
  window.addEventListener('keyup', e => {
    if (e.key === 'a') {
      toLeft = false
    }
    if (e.key === 'd') {
      toRight = false
    }
    if (e.key === 'w') {
      toFront = false
    }
    if (e.key === 's') {
      toBack = false
    }
  })
}

// 初始化各种模块
function init(){
  renderer = getRender()
  camera = getCamera()
  scene = getScene()
  controls = new PointerLockControls(this.camera)
  scene.add(controls.getObject())
  controls.lock()
  cube = getCube()
  scene.add(cube)
  registerEvent()
}

// 动画
function animate(){
  requestAnimationFrame(animate)
  if (toLeft) {
        controls.getObject().translateX(-1)
      }
      if (this.toRight) {
        controls.getObject().translateX(1)
      }
      if (toFront) {
        controls.getObject().translateZ(-1)
      }
      if (toBack) {
        controls.getObject().translateZ(1)
      }
  renderer.render( scene, camera );
}
animate()
```




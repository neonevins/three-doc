# threeJS控制模块

## 控制器包:

可以通过上下左右按键键或者鼠标拖拽, 移动相机, 控制显示位置

导入之后通过new 执行

### 拖拽控制(OrbitControls)

这个包在源码的 `examples/js/controls/OrbitControls.js`位置,

*   其中camera不能在原点

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

其中实例对象有参数: 可参考源码: 

| **属性**           | **描述**                                                     |
| ------------------ | ------------------------------------------------------------ |
| enabled            | 是否开启当前控制器，默认值是true，如果设置为false，将无法通过操作修改相机 |
| target             | 控制器的焦点位置，是一个THREE.Vector3对象，默认是(0, 0, 0)   |
| minDistance        | 相机距离焦点的最近距离 默认值是0 此属性适用于透视相机 PerspectiveCamera |
| maxDistance        | 相机距离焦点的最远距离 默认值是`Infinity`无限远 此属性适用于透视相机 PerspectiveCamera |
| minZoom            | 相机距离焦点的最近距离 默认值是0 此属性适用于正交相机 OrthographicCamera |
| maxZoom            | 相机距离焦点的最远距离 默认值是`Infinity`无限远 此属性适用于正交相机 OrthographicCamera |
| minPolarAngle      | 相机位置和焦点与焦点和最上方组成的最小夹角限制 默认值是0     |
| maxPolarAngle      | 相机位置和焦点与焦点和最上方组成的最大夹角限制 默认值是`Math.PI` 也就是180角度 |
| maxPolarAngle      | 当前相机沿水平方向顺时针旋转的弧度，默认值是`- Infinity`     |
| maxAzimuthAngle    | 当前相机沿水平方向逆时针旋转的弧度，默认值是`Infinity`       |
| enableDamping      | 是否开启拖拽惯性移动，即拖拽停止相机会有缓慢停止的距离移动，默认值是false |
| dampingFactor      | 拖拽惯性移动的阻力，默认值是`0.25`                           |
| enableZoom         | 是否开启缩放操作，默认值是`true`                             |
| zoomSpeed          | 缩放速度，默认值是`1.0`                                      |
| enableRotate       | 是否开启相机绕焦点旋转操作，默认值是`true`                   |
| rotateSpeed        | 旋转速度，默认值是`1.0`                                      |
| enablePan          | 是否开启相机平移操作，默认值是`true`                         |
| panSpeed           | 平移的速度，默认值是`1.0`                                    |
| screenSpacePanning | 修改相机平移的方向，默认值是`false`，即沿x轴正负方向和y轴正负方向移动。可选值是`true`，可以修改为沿x轴正负方向和y轴正负方向移动。 |
| keyPanSpeed        | 键盘上下左右键移动相机的速度，默认值是`7.0`                  |
| autoRotate         | 当前相机是否自动旋转，默认值是`false`，不自动旋转            |
| autoRotateSpeed    | 自动旋转的速度，默认值是`2.0`，即渲染满60帧的情况下30秒旋转360度 |
| enableKeys         | 是否开启键盘控制先机平移，默认值是`true`                     |

### 拖拽控制进阶版( **有惯性,能漂移** )

```js
// 基本和 OrbitControls 一致
import * as THREE from './path/to/three.module.js'
import {TrackballControls} from './path/to/TrackballControls.js'
// ...
const controls = new TrackballControls(camera, renderer.domElement)
controls.update()

function animate(){
requestAnimationFrame(animate)

controls.update()
// ...其余动画操作, 保持一致
// 绘制
renderer.render( scene, camera );
}
```


后续的参数自己根据单词总结

###   wsad控制
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

### wsad加鼠标控制方向

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

### 手机设备陀螺仪控制

```js
import {DeviceOrientationControls} from "../path/to/DeviceOrientationControls.js"
const controls = new DeviceOrientationControls(camera)
function animate(){
  requestAnimationFrame(animate)
 	this.controls.update()
  renderer.render( scene, camera );
}
animate()
```




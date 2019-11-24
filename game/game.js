/*
 * @Descripttion: game 基本逻辑
 * @version: 1.1
 * @Author: ZM_lee└(^o^)┘
 * @Date: 2019-11-17 20:46:45
 * @LastEditors: ZM_lee└(^o^)┘
 * @LastEditTime: 2019-11-24 10:46:07
 */

/**
 * @description: Game
 * @param {type} fps images是个对象，名字：路劲
 * @return: game
 */
// var Game = function (fps, images, runCallback) {
//   var g = {
//     scene: null,
//     actions: {},
//     keydowns: {},
//     images: {},
//   }
//   var canvas = document.getElementById("canvas-block");
//   var ctx = canvas.getContext('2d');
//   g.canvas = canvas;
//   g.ctx = ctx;

//   g.drawImage = function (guaImage) {
//     g.ctx.drawImage(guaImage.image, guaImage.x, guaImage.y);
//   }
//   // events
//   window.addEventListener('keydown', function (event) {
//     g.keydowns[event.key] = true
//   })
//   window.addEventListener('keyup', function (event) {
//     g.keydowns[event.key] = false
//   })
//   // update
//   g.update = function () {
//     g.scene.update()
//   }
//   // draw
//   g.draw = function () {
//     g.scene.draw()
//   }
//   g.registerAction = function (key, callback) {
//     g.actions[key] = callback;
//   }
//   window.fps = fps
//   var runloop = function (fps) {
//     var actions = Object.keys(g.actions)
//     for (var index = 0; index < actions.length; index++) {
//       var key = actions[index]
//       if (g.keydowns[key]) {
//         g.actions[key]();
//       }
//     }
//     // 更新
//     g.update()
//     // 清除 
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     // 绘制
//     g.draw()
//     setTimeout(function () {
//       runloop(window.fps)
//     }, 1000 / window.fps)
//   }

//   var loads = []
//   //预先载入所有图片 
//   var imagesNames = Object.keys(images)
//   console.log('imagesNames', imagesNames);

//   for (var index = 0; index < imagesNames.length; index++) {
//     let name = imagesNames[index]
//     var path = images[name]
//     let img = new Image()
//     img.src = path
//     img.onload = function () {
//       g.images[name] = img
//       loads.push(1)
//       console.log('loads', g.images, index);
//       if (loads.length === imagesNames.length) {
//         // 加载完图片了
//         g.__start()
//       }
//     }
//   }

//   g.imageByName = function (name) {
//     console.log(name, g.images);
//     var img = g.images[name]
//     var image = {
//       w: img.width,
//       h: img.height,
//       image: img
//     }
//     return image
//   }

//   g.runWithScene = function (scene) {
//     g.scene = scene
//     // 开始运行程序
//     setTimeout(function () {
//       runloop()
//     }, 1000 / fps)
//   }

//   // 场景替换
//   g.replaceScene = function (scene) {
//     g.scene = scene
//   }
//   g.__start = function (scene) {
//     runCallback(g)
//   }
//   return g;
// }

class Game {
  constructor(fps, images, runCallback) {
    window.fps = fps
    this.images = images
    this.runCallback = runCallback
    // data
    this.scene = null
    this.actions = {}
    this.keydowns = {}
    this.canvas = document.getElementById("canvas-block");
    this.ctx = this.canvas.getContext('2d');
    // methods
    var self = this
    window.addEventListener('keydown', event => {
      this.keydowns[event.key] = true
    })
    window.addEventListener('keyup', function (event) {
      self.keydowns[event.key] = false
    })
    this.init()
  }

  static instance(...args) {
    this.i = this.i || new this(...args)
    return this.i
  }
  drawImage(img) {
    this.ctx.drawImage(img.image, img.x, img.y)
  }
  // update
  update() {
    this.scene.update()
  }
  // draw
  draw() {
    this.scene.draw()
  }
  //
  registerAction(key, callback) {
    this.actions[key] = callback
  }
  runloop() {
    var g = this
    var actions = Object.keys(g.actions)
    for (var i = 0; i < actions.length; i++) {
      var key = actions[i]
      if (g.keydowns[key]) {
        // 如果按键被按下, 调用注册的 action
        g.actions[key]()
      }
    }
    // update
    g.update()
    // clear
    g.ctx.clearRect(0, 0, g.canvas.width, g.canvas.height)
    // draw
    g.draw()
    // next run loop
    setTimeout(function () {
      g.runloop()
    }, 1000 / window.fps)
  }
  imageByName(name) {
    var g = this
    var img = g.images[name]
    var image = {
      w: img.width,
      h: img.height,
      image: img
    }
    return image
  }

  runWithScene(scene) {
    var g = this
    g.scene = scene
    // 开始运行程序
    setTimeout(function () {
      g.runloop()
    }, 1000 / window.fps)
  }

  replaceScene = function (scene) {
    this.scene = scene
  }
  __start = function (scene) {
    this.runCallback(this)
  }
  
  init() {
    var g = this
    var loads = []
    // 预先载入所有图片
    var names = Object.keys(g.images)
    for (var i = 0; i < names.length; i++) {
      let name = names[i]
      var path = g.images[name]
      let img = new Image()
      img.src = path
      img.onload = function () {
        // 存入 g.images 中
        g.images[name] = img
        // 所有图片都成功载入之后, 调用 run
        loads.push(1)
        if (loads.length == names.length) {
          g.__start()
        }
      }
    }
  }
}
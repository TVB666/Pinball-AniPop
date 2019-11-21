/*
 * @Descripttion: game 基本逻辑
 * @version: 1.1
 * @Author: ZM_lee└(^o^)┘
 * @Date: 2019-11-17 20:46:45
 * @LastEditors: ZM_lee└(^o^)┘
 * @LastEditTime: 2019-11-21 23:25:27
 */

/**
 * @description: GuaGame
 * @param {type} fps images是个对象，名字：路劲
 * @return: game
 */
var GuaGame = function (fps, images,runCallback) {
  var g = {
    actions: {},
    keydowns: {},
    images: {},
  }
  var canvas = document.getElementById("canvas-block");
  var ctx = canvas.getContext('2d');
  g.canvas = canvas;
  g.ctx = ctx;

  g.drawImage = function (guaImage) {
    g.ctx.drawImage(guaImage.image, guaImage.x, guaImage.y);
  }
  // events
  window.addEventListener('keydown', function (event) {
    g.keydowns[event.key] = true
  })
  window.addEventListener('keyup', function (event) {
    g.keydowns[event.key] = false
  })
  g.registerAction = function (key, callback) {
    g.actions[key] = callback;
  }
  window.fps = fps
  var runloop = function (fps) {
    var actions = Object.keys(g.actions)
    for (var index = 0; index < actions.length; index++) {
      var key = actions[index]
      if (g.keydowns[key]) {
        g.actions[key]();
      }
    }
    // 更新
    g.update();
    // 清除 
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // 绘制
    g.draw();
    setTimeout(function () {
      runloop(window.fps)
    }, 1000 / window.fps)
  }

  var loads = []
  //预先载入所有图片 
  var imagesNames = Object.keys(images)
  console.log('imagesNames', imagesNames);
  
  for (var index = 0; index < imagesNames.length; index++) {
    let name = imagesNames[index]
    var path = images[name]
    let img = new Image()
    img.src = path
    img.onload = function () {
      g.images[name] = img
      loads.push(1)
      console.log('loads', g.images, index);
      if (loads.length === imagesNames.length) {
        // 加载完图片了
        g.run()
      }
    }
  }

  g.imageByName = function (name) {
    console.log(name, g.images);
    var img = g.images[name]
    var image = {
      w: img.width,
      h: img.height,
      image: img
    }
    return image
  }

  g.run = function () {
    runCallback(g)
    setTimeout(function () {
      runloop(fps)
    }, 1000 / fps)
  }
  return g;
}
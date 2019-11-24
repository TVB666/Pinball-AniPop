/*
 * @Descripttion: main函数
 * @version: 1.1
 * @Author: ZM_lee└(^o^)┘
 * @Date: 2019-11-18 00:07:55
 * @LastEditors: ZM_lee└(^o^)┘
 * @LastEditTime: 2019-11-24 10:43:00
 */
var blocks = [];
var loadLevel = function (game, n) {
  n = n - 1
  var level = Level[n]
  var blocks = []
  for (var i = 0; i < level.length; i++) {
    var p = level[i]
    var b = Block(game, p)
    blocks.push(b)
  }
  return blocks
}

/**
 * @description: debugger 模式
 */
var enableDebugModes = function (game, enable) {
  if (!enable) {
    return;
  }
  window.paused = false
  window.addEventListener('keydown', function () {
    var k = event.key
    console.log(k);
    if (k === 'p') {
      paused = !paused
    } else if ('123456789'.includes(k)) {
      blocks = loadLevel(game, Number(k))
    } else {

    }
  })
  // 弹球速度控制
  document.querySelector('#id-input-range').addEventListener('input', function (event) {
    var fpsValue = Number(event.target.value)
    fpsValue ? fpsValue : fpsValue = 1
    window.fps = fpsValue
  })
}

var _main = function () {
  // 载入图片
  var images = {
    paddle: 'images/paddle.png',
    ball: 'images/ball.png',
    block: 'images/block.png',
  }
  var game = Game.instance(30, images, function (g) {
    var start  =  SceneStart.new(g)   
    g.runWithScene(start)

  });
  // 画布int
  enableDebugModes(game, true)
}
_main()
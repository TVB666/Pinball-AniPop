/*
 * @Descripttion: main函数
 * @version: 1.1
 * @Author: ZM_lee└(^o^)┘
 * @Date: 2019-11-18 00:07:55
 * @LastEditors: ZM_lee└(^o^)┘
 * @LastEditTime: 2019-11-20 00:52:26
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
    paddle: 'paddle.png',
    ball: 'ball.png',
    block: 'block.png',
  }
  var game = GuaGame(30, images, function (g) {
    // 挡板int
    var paddle = Paddle(game);
    // 球int
    var ball = Ball(game);
    // 砖块int
    blocks = loadLevel(game, 1)
    // 分数int
    var srouce = 0

    game.registerAction('a', function () {
      paddle.moveLeft();
    })
    game.registerAction('d', function () {
      paddle.moveRight();
    })
    game.registerAction('f', function () {
      ball.fire()
    })
    enableDebugModes(false)
    game.update = function () {
      if (window.paused) {
        return
      }
      ball.move();
      // 挡板碰撞检测
      if (rectIntersects(paddle, ball)) {
        ball.speedY *= -1;
      }
      // 砖块碰撞检测
      for (let index = 0; index < blocks.length; index++) {
        var block = blocks[index]
        if (rectIntersects(ball, block) && block.aclived) {
          srouce += 100
          block.kill();
          ball.speedY *= -1;
          ball.speedX *= -1;
        }
      }
    }
    // 绘制图形
    game.draw = function () {
      game.drawImage(paddle)
      game.drawImage(ball)
      // 砖块碰撞检测
      for (let index = 0; index < blocks.length; index++) {
        var block = blocks[index]
        if (block.aclived) {
          game.drawImage(block)
        }
      }

      game.ctx.fillText('分数: ' + srouce, 20, 290)
    }
  });
  // 画布int

  enableDebugModes(game, true)
}
_main()
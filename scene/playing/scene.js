/*
 * @Descripttion: Scene场景
 * @version: 1.1
 * @Author: ZM_lee└(^o^)┘
 * @Date: 2019-11-23 13:53:10
 * @LastEditors: ZM_lee└(^o^)┘
 * @LastEditTime: 2019-11-23 18:04:40
 */
var Scene = function (game) {
  var s = {
    game,
  }
  // 挡板int
  var paddle = Paddle(game);
  // 球int
  var ball = Ball(game);
  // 砖块int
  blocks = loadLevel(game, 1)
  // 分数int
  var srouce = 0

  // 按键初始化
  game.registerAction('a', function () {
    paddle.moveLeft();
  })
  game.registerAction('d', function () {
    paddle.moveRight();
  })
  game.registerAction('f', function () {
    ball.fire()
  })

  // draw 背景
  s.draw = function () {
    game.ctx.fillStyle = "#27273A";
    game.ctx.fillRect(0, 0, 500, 300);
    // 景物
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

  // update
  s.update = function () {
    if (window.paused) {
      return
    }
    ball.move();
    // 判断游戏结束
    if (ball.y > paddle.y) {
      // 跳转到 游戏结束 的场景
      var end = new SceneEnd(game)
      game.replaceScene(end)
    }

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

  var enableMove = false
  // debug模式，mouse event
  game.canvas.addEventListener('mousedown', function (event) {
    if (ball.inPoint(event)) {
      console.log('点中了');
      enableMove = true
    }
  })
  game.canvas.addEventListener('mousemove', function (event) {
    if (enableMove) {
      ball.x = event.offsetX
      ball.y = event.offsetY
    }
  })
  game.canvas.addEventListener('mouseup', function (event) {
    if (enableMove) {
      enableMove = false
    }
  })
  return s;
}
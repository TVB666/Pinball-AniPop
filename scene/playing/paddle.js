/*
 * @Descripttion: 挡板
 * @version: 1.1
 * @Author: ZM_lee└(^o^)┘
 * @Date: 2019-11-17 20:32:58
 * @LastEditors: ZM_lee└(^o^)┘
 * @LastEditTime: 2019-11-24 10:46:45
 */
var Paddle = function (game) {
  var o = game.imageByName('paddle')
  o.x = 100
  o.y = 250
  o.speed = 10
  var paddle = o;
  o.moveLeft = function () {
    paddle.x -= paddle.speed;
    if (paddle.x < 0) {
      paddle.x = 0;
    }
  }
  o.moveRight = function () {
    paddle.x += paddle.speed;
    if (paddle.x > 500 - paddle.image.width) {
      paddle.x = 500 - paddle.image.width
    }
  }
  return o;
}
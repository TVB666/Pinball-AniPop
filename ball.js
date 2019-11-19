/*
 * @Descripttion:  弹球
 * @version: 1.1
 * @Author: ZM_lee└(^o^)┘
 * @Date: 2019-11-17 20:33:30
 * @LastEditors: ZM_lee└(^o^)┘
 * @LastEditTime: 2019-11-18 23:32:49
 */
var Ball = function (game) {
  var o = game.imageByName('ball')
  // var image = imageFromPath('ball.png')
  // var o = {
  //   image: image,
  //   x: 150,
  //   y: 160,
  //   speedX: 5,
  //   speedY: 5,
  //   fired: false,
  // }
  o.x = 150,
  o.y = 160,
  o.speedX = 5,
  o.speedY = 5,
  o.fired = false,
  //   y: 160,
  o.fire = function () {
    o.fired = true;
  }
  o.move = function () {
    if (o.fired) {
      if (o.x < 0 || o.x + o.image.width > 500) {
        o.speedX *= -1;
      }
      if (o.y < 0 || o.y + o.image.height> 300) {
        o.speedY *= -1;
      }
      // move
      o.x += o.speedX;
      o.y += o.speedY;
    }
  }
  return o;
}

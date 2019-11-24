/*
 * @Descripttion:  弹球
 * @version: 1.1
 * @Author: ZM_lee└(^o^)┘
 * @Date: 2019-11-17 20:33:30
 * @LastEditors: ZM_lee└(^o^)┘
 * @LastEditTime: 2019-11-22 00:05:32
 */
var Ball = function (game) {
  var o = game.imageByName('ball')
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
  o.inPoint = function(target){
    inX  = o.x < target.offsetX  && o.x + o.w > target.offsetX
    inY  = o.y < target.offsetY  && o.y + o.h > target.offsetY
    return inX && inY
  }
  return o;
}

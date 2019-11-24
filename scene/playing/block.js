/*
 * @Descripttion: 砖块文件
 * @version: 1.1
 * @Author: ZM_lee└(^o^)┘
 * @Date: 2019-11-17 20:38:16
 * @LastEditors: ZM_lee└(^o^)┘
 * @LastEditTime: 2019-11-23 16:58:52
 */

var Block = function (game, position) {
  var p = position
  var o = game.imageByName('block')
  o.x = p[0]
  o.y = p[1]
  o.aclived = true
  o.liveNumber = p[2] || 1
  o.kill = function () {
    o.liveNumber--
    if (o.liveNumber === 0) {
      o.aclived = false
    }
  }
  return o
}
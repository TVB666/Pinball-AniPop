/*
 * @Descripttion: 游戏结束
 * @version: 1.0
 * @Author: ZM_lee└(^o^)┘
 * @Date: 2019-11-23 14:43:03
 * @LastEditors: ZM_lee└(^o^)┘
 * @LastEditTime: 2019-11-23 14:43:58
 */
var SceneEnd = function(game) {
  var s = {
      game: game,
  }
  s.draw = function() {
      game.ctx.fillText('游戏结束', 100, 290)
  }
  s.update = function() {
      
  }
  return s
}

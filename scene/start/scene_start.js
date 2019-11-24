/*
 * @Descripttion: 游戏结束
 * @version: 1.0
 * @Author: ZM_lee└(^o^)┘
 * @Date: 2019-11-23 14:43:03
 * @LastEditors: ZM_lee└(^o^)┘
 * @LastEditTime: 2019-11-24 10:32:02
 */

class SceneStart extends gameScene{
  constructor(game){
    super(game)
    game.registerAction('k', function () {
      var s = Scene(game)
      game.replaceScene(s)
    })
  }
  draw () {
    this.game.ctx.fillText('按 k 开始游戏', 200, 150)
  }
}
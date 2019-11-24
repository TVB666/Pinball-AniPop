/*
 * @Descripttion: 游戏结束
 * @version: 1.0
 * @Author: ZM_lee└(^o^)┘
 * @Date: 2019-11-23 14:43:03
 * @LastEditors: ZM_lee└(^o^)┘
 * @LastEditTime: 2019-11-23 18:05:02
 */


class SceneEnd extends gameScene{
  constructor(game){
    super(game)
    game.registerAction('r', function () {
      var s = Scene(game)
      game.replaceScene(s)
    })
  }
  draw () {
    this.game.ctx.fillText('游戏结束, 拿 r 回到首页', 200, 150)
  }
}
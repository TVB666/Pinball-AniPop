/*
 * @Descripttion: 
 * @version: 1.1
 * @Author: ZM_lee└(^o^)┘
 * @Date: 2019-11-17 20:40:58
 * @LastEditors: ZM_lee└(^o^)┘
 * @LastEditTime: 2019-11-24 17:07:47
 */

var e = sel => document.querySelector(sel)
var log = function (value) {
  console.log.bind(console);
  // e('#id-text-area').value += '\n' + value
}
/**
 * @description: 图片
 * @param {type} 路径
 * @return: img
 */
var imageFromPath = function (path) {
  var img = new Image();
  img.src = path;
  return img
}

/**
 * @description: 碰撞检测 矩形 左上角顺时针开始记为a，依次为div1a,div1b,div1c,div1d
 * @param {object} 两个矩形
 * @return: boolean
 */
var rectIntersects = function (div1, div2) {
  var div1a = {
    x: div1.x,
    y: div1.y
  }
  var div1b = {
    x: div1.x + div1.image.width,
    y: div1.y
  }
  var div1c = {
    x: div1.x + div1.image.width,
    y: div1.y + div1.image.height
  }
  var div1d = {
    x: div1.x,
    y: div1.y + div1.image.height
  }
  var div2a = {
    x: div2.x,
    y: div2.y
  }
  var div2b = {
    x: div2.x + div2.image.width,
    y: div2.y
  }
  var div2c = {
    x: div2.x + div2.image.width,
    y: div2.y + div2.image.height
  }
  var div2d = {
    x: div2.x,
    y: div2.y + div2.image.height
  }
  // 表示是未碰撞
  if (div1c.x < div2a.x || div1a.y > div2c.y || div1a.x > div2c.x || div1c.y < div2a.y) {
    return false
  }
  log('相撞了')
  return true
}

// 登录
var handleLogin = function () {
  var psw = document.getElementById('id-input-psw').value
  if (psw === '123') {
    document.getElementById("id-vip-area").style = "display: block"
  } else {
    alert('账号错误')
  }
}


var switchAliveNumber = (number) => {
  const list = document.getElementsByClassName('button-vip-edit')
  for (let index = 0; index < list.length; index++) {
    list[index].classList.remove("blue")
  }
  list[number].classList.add("blue")
  window.aliveNumber = number;
  Edit()
}
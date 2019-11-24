/*
 * @Descripttion: 
 * @version: 1.1
 * @Author: ZM_lee└(^o^)┘
 * @Date: 2019-11-24 15:02:17
 * @LastEditors: ZM_lee└(^o^)┘
 * @LastEditTime: 2019-11-24 18:47:55
 */

var map = new Map()
var mapArray = []
var realMapArray = []

var Edit = () => {
  var e = {
    width: 40,
    height: 20,
    actions: {},
    
  };
  var moveing = false
  var vipBlock = document.getElementById("canvas-block-vip-block");
  var ctx = vipBlock.getContext('2d');

  var img = new Image();
  const list = ['images/alive1.png', 'images/alive2.png','images/alive3.png']

  vipBlock.addEventListener('mousedown', function (event) {
    moveing = true
    drawImages(event)
  })
  vipBlock.addEventListener('mousemove', function (event) {
      moveing && drawImages(event)
  })
  vipBlock.addEventListener('mouseup', function () {
    moveing = false
  })
  
  var drawImages = (event) => {
    var x = Math.floor(event.offsetX / e.width) * e.width
    var y = Math.floor(event.offsetY / e.height) * e.height
    // 溢出
    x === 480 ? x = 440 : ''
    const point = JSON.stringify([x, y])
    map.set(point, window.aliveNumber + 1)
    if(!mapArray.includes(point)){
      mapArray.push(point)
    }

    // 获得正在的数组(带生命)
    realMapArray = []
    for (let index = 0; index < mapArray.length; index++) {
      realMapArray.push([ mapArray[index], map.get(mapArray[index]) ])
    }
    console.log('realMapArray', realMapArray);

    img.src= list[window.aliveNumber]
    ctx.drawImage(img, x, y)
  }
  return e;
}


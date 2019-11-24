/*
 * @Descripttion: 关卡等级 对应每个砖块的坐标(默认),充钱后用户可以自定义
 * @version: 1.1
 * @Author: ZM_lee└(^o^)┘
 * @Date: 2019-11-17 21:40:16
 * @LastEditors: ZM_lee└(^o^)┘
 * @LastEditTime: 2019-11-24 19:25:32
 */

// 默认数据
const defaultData = [
  [
    [0, 0, 1]
  ],
  [
    [50, 30, 1],
    [60, 60, 2]
  ],
  [
    [70, 40, 1],
    [90, 90, 2],
    [180, 150, 3]
  ],
]
var editBlock = []
var Level = index => {
  if (editBlock.length !== 0) {
      console.log('自定义砖块数据');
      return editBlock[index];
  } else {
    console.log('默认数据');
    return defaultData[index]
  }
}

var saveBlockData = () =>{
  let map = []
  for (let index = 0; index < realMapArray.length; index++) {
    const list = JSON.parse(realMapArray[index][0])
    map.push(list.concat(realMapArray[index][1]))
  }
  console.log(map);
  editBlock[0] =  map;
  editBlock[1] =  map;
  editBlock[2] =  map;
  console.log(editBlock);
  e('#id-text-area').value = '\n' + JSON.stringify(map)
  // _main()
}
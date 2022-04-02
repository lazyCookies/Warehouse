// export命令用于规定模块的对外接口
let age = 18
let name = 'Alice'
export {name, age}
// 如果是export导出的变量，使用import { 变量名 } from ''

// export default 
const say = function (name) {
  console.log(name);
}
const person = {
  name,
  age,
  say
}
export default person
// Alice
// 如何把b.js 引入到当前的a.js内？
// import命令用于输入其他模块提供的功能。
import {name} from './b.js';



console.log(`我是${name}`);


import person from './b.js';

person.say(name)

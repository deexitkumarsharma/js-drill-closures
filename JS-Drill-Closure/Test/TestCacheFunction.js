let cacheFunction = require('../cacheFunction')

function inputValue(x){
return x;
}

let invokeCallBack = cacheFunction(inputValue());

console.log(inputValue('Mountblue'));
console.log(inputValue('is'));
console.log(inputValue('best'));
console.log(inputValue('place'));
console.log(inputValue('for'));
console.log(inputValue('start'));
console.log(inputValue('our'));
console.log(inputValue('Career'));
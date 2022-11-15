let limitFunctionCallCount = require("../limitFunctionCallCount");
function callback(){
    return 'MountBlue'
}
let limit = 3;
let invokeCallBack = limitFunctionCallCount(callback,limit);

console.log(invokeCallBack());
console.log(invokeCallBack());
console.log(invokeCallBack());
console.log(invokeCallBack());
function cacheFunction(cb){
    let cacheobj = {};
    return function invokeCb (arg){
        if(cacheobj.arg === undefined){
            cacheobj.arg = cb();
            return cacheobj.arg;
        }else {
            return cacheobj.arg;
        }
    }
}

module.exports = cacheFunction;
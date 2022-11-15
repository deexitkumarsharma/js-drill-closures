function cacheFunction(cb){
    let cacheobj = {};
    return function invokeCb (arg){
        if(cacheobj.hasOwnProperty(arg)){
            console.log(cacheobj);
            return cacheobj[arg]
        }else {
            cacheobj[arg] = cb(arg)
            return cacheobj[arg];
        }
    }
}

module.exports = cacheFunction;
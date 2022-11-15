    // Should return a function that invokes `cb`.
    // The returned function should only allow `cb` to be invoked `n` times.
    // Returning null is acceptable if cb can't be returned

function limitFunctionCallCount(cb, n){
    let count = 0;
    return function invokeCb() { //fn helping to invoke cb
        if(count < n){ //if less<n it invoke again
            count++;
            return cb();
        }else{
            //console.log('limit exceed');
            return 'limit exceed';
        }
    }
}

module.exports = limitFunctionCallCount;


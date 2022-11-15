function counterFactory(counter){

    return {
        increment : () => {
            ++counter;
            return counter;
        },
        decrement : () => {
            --counter;
            return counter;
        },
    }
}

module.exports = counterFactory;

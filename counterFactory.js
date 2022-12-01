// Return an object that has two methods called `increment` and `decrement`.
// `increment` should increment a counter variable in closure scope and return it.
// `decrement` should decrement the counter variable and return it.

function counterFactory(counter) {
  return {
    increment: () => {
      ++counter;
      return counter;
    },
    decrement: () => {
      --counter;
      return counter;
    },
  };
}

module.exports = counterFactory;

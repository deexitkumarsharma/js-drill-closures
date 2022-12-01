let counterFactory = require("../counterFactory");
let x = 100;

let expectedObj = counterFactory(x);

let output1 = expectedObj["increment"];

let output2 = expectedObj["decrement"];

console.log(output1(), output2());

const { a, add } = require("./local-1"); //common js syntex
const { a: a2, add: add2 } = require("./local-2");
console.log(add(2, 3));
console.log(add2(2, 3, 5));

//build in module
const path = require("path");
console.log("🚀 ~ file: index.js:8 ~ path:", path.parse('/home/sreemaye/Next-Level/learning-node/index.js'))


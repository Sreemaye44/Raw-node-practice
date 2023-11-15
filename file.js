const fs = require("fs");
//reading a file text

const readText = fs.readFileSync("./texts/read.txt", 'utf-8');
console.log("🚀 ~ file: file.js:5 ~ readText:", readText);

//writting a file


const writeText = fs.writeFileSync(
  "./texts/write.txt", readText+`This is Sreemaye`
);



const fs = require("fs");
const filePath = process.argv[2];
const fileContent = fs.readFileSync(filePath, "utf8");
const fileLines = fileContent.split('\n');
console.log(fileLines.length-1);

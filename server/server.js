const path = require("path");
const fs = require("fs");
let dataPath = path.join(__dirname, "../chirps.json");

let data = fs.readFileSync(path.resolve(dataPath));
let chirp = JSON.parse(data);
console.log(chirp)
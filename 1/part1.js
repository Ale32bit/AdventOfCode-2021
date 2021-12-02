const fs = require("fs");
let input = fs.readFileSync("1/input.txt", "utf8");

let scans = input.split("\n");

let n = 0;
let last = Number.MAX_SAFE_INTEGER;
for (let i = 0; i < scans.length; i++) {
    let scan = Number.parseInt(scans[i])
    if (scan > last) {
        n++;
    }
    last = scan;
}

console.log("Answer:", n);
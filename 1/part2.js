const fs = require("fs");
let input = fs.readFileSync("1/input.txt", "utf8");

let scansSource = input.split("\n");
let scans = [];
scansSource.forEach(scan => scans.push(Number.parseInt(scan)));

let n = 0;
let last = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < scans.length; i++) {
    let sum = 0;
    if (scans[i + 2] !== undefined) {
        sum += scans[i];
        sum += scans[i + 1];
        sum += scans[i + 2];

        if (sum > last)
            n++;

        last = sum;
    } else {
        break;
    }
}

console.log("Answer:", n);
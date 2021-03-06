const fs = require("fs");
const data = fs.readFileSync("2/input.txt", "utf-8").split("\n");

let hor = 0;
let depth = 0;
let aim = 0;

for (let i = 0; i < data.length; i++) {
    let d = data[i].split(" ");
    let dir = d[0];
    let units = Number.parseInt(d[1]);

    switch (dir) {
        case "forward":
            hor += units;
            depth += units * aim;
            break;
        case "up":
            aim -= units;
            break;
        case "down":
            aim += units;
            break;
    }
}

console.log("Result: ", hor * depth)
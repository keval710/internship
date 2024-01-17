const fs = require("fs");
const path = require("path");

// fs.writeFileSync("hello.txt", "hello");

//! process is process is an object referencing to the actual computer process running a Node program and allows for access to command-line arguments and much more.
// let input = process.argv; //? this is used for gating a value from parameter

// if (input[2] == "add") {
//   fs.writeFileSync(input[3], input[4]);
// } else if (input[2] == "remove") {
//   fs.unlinkSync(input[3]);
// } else {
//   console.log("invalid input");
// }

//! for gating and join the path
let paths = path.join(__dirname, "files");
// console.log(paths);

//! write file
// fs.writeFileSync(`${paths}/hello.txt`, "hello");

//! readfile
// fs.readFile(`${paths}/hello.txt`, "utf8", (err, data) => {
//   console.log(data);
// });

//!update file
// fs.appendFile(`${paths}/hello.txt`, " updated file successfully", (err) => {
//   !err ? console.log("updated") : console.log(err);
// });

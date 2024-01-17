const express = require("express");
const path = require("path");
// const EventEmitter = require("events");

const app = express();

const pathNew = path.join(__dirname, "public");

// const event = new EventEmitter();

//!event
// event.on("eventCalled", (code, msg) => {
//   console.log("first time"+ code + msg);
// });

//? middleware
// app.use(express.static(pathNew));

//?Routes
// app.get("/", (req, res) => {
//   res.send(`hello ${req.query.name}`);
// });

// app.get("/json", (req, res) => {
//   res.send({
//     name: "hey",
//   });
// });

app.get("/", (req, res) => {
  res.sendFile(`${pathNew}/index.html`);
});
app.get("*", (req, res) => {
  res.sendFile(`${pathNew}/home.html`);
});

//! eventEmitter
//? with the help of event.emit we can fire a event in node.js and event.on is handle the fired event in node.js
// app.get("/event", (req, res) => {
//   event.emit("eventCalled", 200, "OK");
// });

app.listen(5000, () => console.log("server running on port 5000"));

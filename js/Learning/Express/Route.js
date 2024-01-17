const express = require("express");
const app = express();

//!Application-level middleware
//? this is apply globally in applications

app.use((req, res, next) => {
  next();
});
app.use((req, res, next) => {
  next();
});

//!Router-level middleware
//? this is used when we have to apply a middleware in multiple function

const route = express.Router();
route.use((req, res, next) => {
  return res.send("this is router middleware");
});

//! methods
app.get("/", (req, res) => {
  res.send({ name: "keval" });
});

route.get("/route", (req, res) => {
  res.send("this is route");
});

app.use(route);

app.listen(5001, () => {
  console.log("Server started on port 5001");
});

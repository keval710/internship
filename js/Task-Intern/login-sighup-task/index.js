const express = require("express");
const router = require("./router/userRoute");
const app = express();
require("./db/connection");

//!middleware
app.use(express.json());
app.use(router);

app.listen(5000, () => console.log(`server running on port 5000`));

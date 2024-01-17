const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: "String",
    require: true,
  },
  email: {
    type: "string",
    require: true,
  },
  password: {
    type: "string",
    require: true,
  },
  incorrectCount: {
    type: "number",
    require: true,
  },
});

const User = mongoose.model("reg", userSchema);

module.exports = User;

const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
require("dotenv").config();

const getToken = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (token) {
      const user = jwt.verify(token, process.env.SECRET_KEY);
      req.userId = user.id;
    } else {
      return res.status(401).json({ message: "unauthorize user" });
    }

    next();
  } catch (error) {
    return res.status(401).json({ message: "invalid token" });
  }
};

const RegValidation = (req, res, next) => {
  const errors = validationResult(req);
  let obj = {};
  if (!errors.isEmpty()) {
    errors.array().map((res) => {
      obj[res.path] = res.msg;
    });
    return res.json({ errors: obj });
  } else {
    next();
  }
};

const LoginValidation = (req, res, next) => {
  const error = validationResult(req);
  const obj2 = {};
  if (!error.isEmpty()) {
    error.array().map((res) => {
      obj2[res.path] = res.msg;
      // console.log(res.msg);
    });
    return res.json({ error: obj2 });
  } else {
    next();
  }
};

module.exports = { getToken, RegValidation, LoginValidation };

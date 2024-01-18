const express = require("express");
const { Reg, Login } = require("../controller/userController");
const {
  RegValidationArr,
  LoginValidationArr,
} = require("../Validation/validation");
const { RegValidation, LoginValidation } = require("../middleware/middleware");

const router = express.Router();

//Routes
router.post("/reg", RegValidationArr, RegValidation, Reg);
router.post("/login", LoginValidationArr, LoginValidation, Login);

module.exports = router;

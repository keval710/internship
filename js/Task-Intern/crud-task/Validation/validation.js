const { body } = require("express-validator");

const RegValidationArr = [
  body("email")
    .not()
    .isEmpty()
    .withMessage("Enter Email")
    .isEmail()
    .withMessage("Invalid Email"),
  body("name")
    .not()
    .isEmpty()
    .withMessage("Enter Name")
    .isLength({ min: 3 })
    .withMessage("min 3 char allowed"),
  body("password", "Not Empty")
    .not()
    .isEmpty()
    .withMessage("Enter password")
    .isLength({ min: 8 })
    .withMessage("min length is 8 allowed")
    .isLength({ max: 12 })
    .withMessage("max length is 12 allowed"),
];

const LoginValidationArr = [
  body("email").not().isEmpty().withMessage("Enter Email"),
  body("password").not().isEmpty().withMessage("Enter password"),
];

module.exports = { RegValidationArr, LoginValidationArr };

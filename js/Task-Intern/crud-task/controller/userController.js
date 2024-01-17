const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../model/userSchema");
require("dotenv").config();
const nodemailer = require("nodemailer");

//!NodeMailer
const emailVerification = (name, email) => {
  const Transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSKEY,
    },
  });

  const mailOptions = {
    from: process.env.MAIL_USER,
    to: email,
    subject: "For verification mail",
    html: {
      path: "/home/admin4/Documents/js/Task-Intern/crud-task/imgs/hello.html",
    },
    attachments: [
      {
        filename: "img.jpg",
        path: "/home/admin4/Documents/js/Task-Intern/crud-task/imgs/img2.jpg",
        cid: "keval@gmail.com",
      },
      {
        filename: "img2.jpg",
        path: "/home/admin4/Documents/js/Task-Intern/crud-task/imgs/img2.jpg",
      },
    ],
  };

  Transporter.sendMail(mailOptions, (err, info) => {
    err
      ? console.log(err)
      : console.log(`Mail sended Successfully ${info.response}`);
  });
};

//!reg
const Reg = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "Email Already Exist" });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);

      const user = new User({
        name,
        email,
        password: hashedPassword,
        incorrectCount: 0,
      });
      const saveData = await user.save();

      //Generate token
      const token = jwt.sign(
        { email: user.email, id: user._id },
        process.env.SECRET_KEY
      );

      res.cookie("jwt-token", token);

      if (saveData) {
        emailVerification(name, email);
        return res.status(200).json({ message: "User Reg successfully" });
      }
    }
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong", error });
  }
};

//!login
const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      const matchPassword = await bcrypt.compare(password, userExist.password);

      if (!matchPassword) {
        if (userExist.incorrectCount < 3) {
          await User.updateOne(
            { _id: userExist._id },
            { $inc: { incorrectCount: 1 } }
          );
          return res.status(400).json({
            message: "password incorrect",
          });
        } else {
          setTimeout(async () => {
            await User.updateOne(
              { _id: userExist._id },
              { $set: { incorrectCount: 0 } }
            );
            console.log("the count is set 0");
          }, 7000);
          return res.json({
            message: "you have tried many times please come after some time",
          });
        }
      } else {
        return res.status(200).json({ message: "login successfully" });
      }
    } else {
      return res.status(404).json({ message: "user not found" });
    }
  } catch (error) {
    return res.status(400).json({ message: "something Wrong", error });
  }
};

module.exports = { Reg, Login };

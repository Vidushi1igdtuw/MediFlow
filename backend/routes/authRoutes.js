const express = require("express");

const router = express.Router();

const {
  signupReceptionist
} = require("../controllers/authController");

router.post(
  "/receptionist/signup",
  signupReceptionist
);

module.exports = router;
const User = require("../models/User");
const bcrypt = require("bcryptjs");

const accessCodes = require("../config/accessCodes");

exports.signupReceptionist = async (req, res) => {
  try {

    const {
      name,
      email,
      password,
      clinicName,
      accessCode
    } = req.body;

    if (accessCode !== accessCodes.receptionist) {
      return res.status(400).json({
        success: false,
        message: "Invalid Receptionist Access Code"
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists"
      });
    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      clinicName,
      accessCode,
      role: "receptionist"
    });

    res.status(201).json({
      success: true,
      message: "Receptionist account created",
      user
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};
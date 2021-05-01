const Users = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userCtrl = {
  register: async (req, res) => {
    try {
      const { name, email, password } = req.body;

      const user = await Users.findOne({ email: email });

      if (user) return res.status(400).json({ msg: "The email already exist" });

      if (password.length < 6) return res.status(400).json({ msg: "Password is at least 6 chractors" });

      //paswword encryption
      const passwordHash = await bcrypt.hash(password, 10);
      const newUser = new Users({
        name,
        email,
        password: passwordHash,
      });

      await newUser.save();

      // create Access token

      res.json({ msg: "Register Success" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

const createAccessToken = (user) => {};

module.exports = userCtrl;

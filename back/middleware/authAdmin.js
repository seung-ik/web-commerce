const Users = require("../models/userModel");

const authAdmin = (req, res, next) => {
  try {
    const user = Users.findOne({ id: req.user.id });

    if (user.role === 0) return res.status(400).json({ msg: "Admin resource denied" });

    next();
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
module.exports = authAdmin;

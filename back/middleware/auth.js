const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = auth;

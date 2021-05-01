const router = require("express").Router();
const userCtrl = require("../controllers/userCtrls");

router.post("/register", userCtrl.register);

module.exports = router;

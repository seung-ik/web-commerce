require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(
  fileUpload({
    useTempfile: true,
  })
);

//connect mongodb
const URI = process.env.MONGODB_URL;
mongoose.connect(
  URI,
  {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("connect mongoDB");
  }
);

app.get("/", (req, res) => {
  res.json({ msg: "get 500,000,000 from stock market" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("sever running in Port", PORT);
});

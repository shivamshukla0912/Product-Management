const express = require("express");
const mongoose = require("mongoose")
const route = require("./routes/route.js");
const multer = require("multer")
const app = express();


app.use(express.json());
app.use(multer().any())

mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://shivam:ZtpwBovMEGZbnqk2@cluster0.wyrv7bx.mongodb.net/test",{
  useNewUrlParser: true
})
  .then(() => console.log("MongoDB is connected"))
  .catch((error) => console.log(error));


app.use("/", route);

app.listen(3000, function () {
  console.log("Express App Running on Port 3000");
});

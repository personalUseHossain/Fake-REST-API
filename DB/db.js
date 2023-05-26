const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/userapi", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("sucess"))
  .catch((e) => console.log(e));

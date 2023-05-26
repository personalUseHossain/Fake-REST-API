const express = require("express");
require("./DB/db.js");
const app = express();
const port = process.env.port || 5000;
const router = require('./Routes/routes.js')

app.use(express.json());

app.use(router)

app.listen(port, () => {
    console.log("server is running...");
});

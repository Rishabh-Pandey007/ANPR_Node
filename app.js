const path = require("path");

const express = require("express");
const app = express();
// const fileUpload = require('express-fileupload');

// require("./env");

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.use(express.static('public'));

const cors = require("cors");
app.use(cors());
// app.use(fileUpload());

require('./utils/dbConnection')

// require("./Utils/All_Routes")(app)

// require("./Utils/All_Tables_Relationship"); //Requiring all table relationship

const PORT = process.env.PORT || 5001;
app.listen(PORT);
console.log("Running on port = ", PORT);

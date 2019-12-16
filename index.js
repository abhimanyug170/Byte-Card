//setting up required packages
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
mongoose.set('useFindAndModify', false);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
dotenv.config();
//DBURL - connection string from the mongo atlas project byte-card
mongoose.connect(process.env.DBURL, { useNewUrlParser: true });
app.use(express.static(__dirname + "public"));

//importing routes 
const userRoutes = require("./routes/userRoutes.js");
const cardRoutes = require("./routes/cardRoutes.js");

app.get("/", (req, res) => {
    res.send("Working fine sir");
});

app.use("/api/user", userRoutes);
app.use("/api/card", cardRoutes);


app.listen(process.env.PORT || 3000, process.env.IP, () => {
    console.log("I am at your service sir...");
});



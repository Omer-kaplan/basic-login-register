require("dotenv").config();
const express = require("express");
const app = express();
const session = require('express-session');

const mongoose = require("mongoose");
mongoose.connect(process.env.DB_CONNECTION_STRING, { 
    useUnifiedTopology: true, 
    useNewUrlParser: true 
});

app.use(session({
    secret: 'foo',    
    saveUninitialized: false,
    resave: false
}))

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));  
app.use("/", require("./routes/login"));

app.listen(process.env.PORT);

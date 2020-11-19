//Import Dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

//Port Variable
const PORT = process.env.PORT || 3000;

//Variable for express function
const app = express();

//Allow App to use morgan
app.use(logger("dev"));

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//Application Code for MongoDB Connection
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);
// routes
require("./routes/apiroutes.js")(app);
require("./routes/htmlroutes.js")(app);

//Turn on Server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
//for heroku test
// Author: Richard B. Hall
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(morgan("tiny"))

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

require("./routes/api")(app);
require("./routes/html")(app);

app.listen(PORT, function () {
    console.log("==> Listening on port %s. Visit http://localhost:%s in your browser", PORT, PORT)
});

//for heroku test
// Author: Richard B. Hall
//npm installation requisites
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

//directs app to open on local or allows for heroku to listen to
const app = express();
const PORT = process.env.PORT || 8080;

//express routing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(morgan("dev"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

require("./routes/api")(app);
require("./routes/html")(app);

app.listen(PORT, function () {
    console.log("==> Listening on port %s. Visit http://localhost:%s in your browser", PORT, PORT)
});

//for heroku test
// Author: Richard B. Hall
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

// routes for api
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const exercises = require("./routes/api/exercises");

// mLab info for db
const database = require("./config/keys").mongoURI;


const app = express();
// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Connecting to MongoDB
mongoose
  .connect(database)
  .then(() => console.log("MongoDB up and running!"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Working"));

// App Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/exercises", exercises);

if (process.env.NODE_ENV === 'production') {

  app.use(express.static('client/build'));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server running ${port}`));




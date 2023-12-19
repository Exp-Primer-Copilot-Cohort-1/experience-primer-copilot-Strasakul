// Create web server
// 1. Create a web server
// 2. Create a route for the home page
// 3. Create a route for the about page
// 4. Start and listen on the web server

// 1. Create a web server
const express = require("express");
const app = express();
const port = 3000;

// 2. Create a route for the home page
app.get("/", (req, res) => {
  res.send("Welcome to the home page!");
});

// 3. Create a route for the about page
app.get("/about", (req, res) => {
  res.send("Welcome to the about page!");
});

// 4. Start and listen on the web server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
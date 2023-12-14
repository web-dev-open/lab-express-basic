const express = require("express");

const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/about", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.sendFile(__dirname + "/views/about.html");
});

app.get("/works", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.sendFile(__dirname + "/views/works.html");
});

// Set the MIME type for CSS files
app.get("/public/stylesheets/*.css", (req, res) => {
  console.log(req.url);
  res.setHeader("Content-Type", "text/css");
  res.sendFile(__dirname + req.url);
});

app
  .listen(3000, () => {
    console.log("Example app listening on port 3000!");
  })
  .on("error", (err) => {
    console.log(err);
  });

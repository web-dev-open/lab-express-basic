import express from "express";
const app = express();

app.use((req, res, next) => {
  next();
});

app.use(
  express.static(
    "/Users/anshbindal/Desktop/Root/Week4/Day2/lab-express-basic/public"
  )
);

app.get("/", function (req, res) {
  res.sendFile(
    "/Users/anshbindal/Desktop/Root/Week4/Day2/lab-express-basic/views/home.html"
  );
});

app.get("/about", function (req, res) {
  res.sendFile(
    "/Users/anshbindal/Desktop/Root/Week4/Day2/lab-express-basic/views/about.html"
  );
});
app.get("/work", function (req, res) {
  res.sendFile(
    "/Users/anshbindal/Desktop/Root/Week4/Day2/lab-express-basic/views/work.html"
  );
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
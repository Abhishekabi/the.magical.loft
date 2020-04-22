const express = require("express");

const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index.html");
});

app.listen(PORT, () => console.log("server running at port " + PORT));

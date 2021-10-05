const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();
const port = 3000;

const connectdb = require("./db");
const authController = require("./controller/authController");
const memberControler = require("./controller/memberController");
const authMiddelware = require("./middleware/auth");

connectdb();

app.set("view engine", "ejs");
app.set("views", "./view/template");

app.use(express.static("view"));
app.use(cookieParser());
app.use(bodyParser.json());

app.get("/api", authMiddelware.auth, memberControler.insert);

app.get("/admin", (req, res) => {
  res.render("login.ejs");
});

app.post("/auth/login", authController.login);
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/list-register", authMiddelware.auth, memberControler.showList);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

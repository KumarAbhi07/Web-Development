const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs")

app.use(express.static("public"));

// const myLogger = function (req, res, next) {
//   console.log('LOGGED')
//   next()
// }

// middleware 1 - logger for ou     
app.use((req, res, next) => {
  console.log(req.headers)
  req.harry="I am harry";
  fs.appendFileSync("reqInfo.txt", `${Date.now()} is a ${req.method}\n`)
  console.log(`${Date.now()} is a ${req.method}`)
  // console.log("m1");
  // res.send("Hacked by middleware 1");
  next();
});

//middleware 2
app.use((req, res, next) => {
  console.log("m2");
  
  next();
});


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("Hello about! " + req.harry);
});

app.get("/contact", (req, res) => {
  res.send("Hello contact!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

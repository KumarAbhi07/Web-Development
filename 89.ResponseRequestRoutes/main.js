const express = require("express");
const blog = require('./routes/blog');
const shop = require('./routes/shop');

const app = express();
const port = 3000;

app.use(express.static("public")) // middleware
app.use('/blog', blog);
app.use('/shop', shop);
// app.get("/", (req, res) => { // to send the small data such as email
//   console.log("hey this is a get request");
//   res.send("Hello World!");
// });
// app.post("/", (req, res) => { // to send ythe large data to server like HTML content, json data
//   console.log("hey this is post request");
//   res.send("Hello World post");
// });

// app.put("/", (req, res) => { // to update the data
//   console.log("hey this is put request");
//   res.send("Hello World put");
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

//channing of request
app.get("/", (req, res) => { // to send the small data such as email
  console.log("hey this is a get request");
  res.send("Hello World21!");
}).post("/", (req, res) => { // to send ythe large data to server like HTML content, json data
  console.log("hey this is post request");
  res.send("Hello World post");
}).put("/", (req, res) => { // to update the data
  console.log("hey this is put request");
  res.send("Hello World put");
});

app.get("/index", (req, res) => { 
  console.log("hey its index");
  // res.send("Hello World index");
  res.sendFile('templates/index.html',{root: __dirname}) // rendering html file
})

app.get("/api", (req,res) =>{
  res.json({a:1, b:2, c:3}) // sending json data
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});



const express = require("express");

const fs = require('fs')

const app = express();

// const obj = JSON.parse("./test.json");

app.get("/", (req, res) => {
  // const obj = JSON.parse(req)
  fs.readFile('./test.json','utf-8',(err,data)=>{
    res.send(data);
  })
  
});

// app.get("/about", (req, res) => {
//   res.send(req);
// });

const PORT = 5000;

app.listen(5000, (err) => {
  if (!err) {
    console.log(`Server if running on the ${PORT}`);
  } else {
    console.log("ERROR HAPPENED");
  }
});

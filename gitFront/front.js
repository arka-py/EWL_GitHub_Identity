import express from "express";

const app = express();

app.use(express.static("public"));


app.get('/', (req, res) => {  
  res.sendFile("F:/gitFront/views/home.html");  // kindly change the path accordingly
});

app.post("/login", function (req, res) {  
  res.redirect('http://localhost:7000/auth');
});

app.get("/success", function (req, res) {
  res.sendFile("F:/gitFront/views/success.html");  // kindly change the path accordingly  
  
});

app.listen(3000,function(){
  console.log('Client running on port 3000');
});


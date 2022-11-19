import 'dotenv/config'
import express from "express";
import fetch from 'node-fetch';

const app = express();

app.get('/auth', (req, res) => {  
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`,
  );
});

//authentication
app.get('/oauth-callback', ({ query: { code } }, res) => {  
  const url = "https://github.com/login/oauth/access_token";
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",

    },
    body: JSON.stringify({
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_SECRET,
      code,
    }),
  };
  fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.access_token);
      res.redirect("/success");
    });
});


app.get("/success", function (req, res) {
  res.redirect("http://localhost:3000/success")
});

app.listen(7000,function(){
  console.log('Backend running on port 7000');
});

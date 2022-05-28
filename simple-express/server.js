//npm i express
//引用 導入 express 這個模組
const express = require("express");
//利用express 來建立一個 express application
const app = express();

app.use((request, response, next) => {
  console.log("aaa");
  response.send("商品");
  next();
});

//http request
//method: get, post, put, delete...
app.get("/", (request, response, next) => {
  response.send("首頁");
});

app.get("/about", (request, response, next) => {
  response.send("About Me");
});

app.get("/product", (request, response, next) => {
  response.send("商品");
});

app.listen(3001, () => {
  console.log("server start at 3001");
});

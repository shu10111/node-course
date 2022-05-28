// npm i express
// 導入 express 這個模組
const express = require('express');
// 利用 epxress 來建立一個 express application
const app = express();

const path = require('path');

// 使用第三方開發的中間件 cors
const cors = require('cors');
app.use(cors());

const mysql = require('mysql2');
require('dotenv').config();
// 這裡不會像爬蟲那樣，只建立一個連線 (mysql.createConnection)
// 但是，也不會幫每一個 request 都分別建立連線
// ----> connection pool
let pool = mysql
  .createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    // 為了 pool 新增的參數
    connectionLimit: 10,
  })
  .promise();

//一般中間件
app.use((request, response, next) => {
  console.log("aaa");
  next();
});

//http request
//method: get, post, put, delete...
//中間件(request, response, next) => {
//   response.send("首頁");
// });
//路由中間件
app.get("/", (request, response, next) => {
  // 送回response,結束request-response-cycle的循環
  response.send("首頁");
});

app.get("/about", (request, response, next) => {
  response.send("About Me");
});

app.get("/product", (request, response, next) => {
  response.send("商品");
});

app.get('/error', (req, res, next) => {
  // 發生錯誤，你丟一個錯誤出來
  // throw new Error('測試測試');
  // 或是你的 next 裡有任何參數
  next('我是正確的');
  // --> 都會跳去錯誤處理中間件
});

// app.get('/ssr', (req, res, next) => {
//   // 會去 views 檔案夾裡找 index.pug
//   // 第二個參數: 資料物件，會傳到 pug 那邊去，pug 可以直接使用
//   res.render('index', {
//     stocks: ['台積電', '長榮', '聯發科'],
//   });
// });

// RESTful API
// 取得 stocks 的列表
app.get('/stocks', async (req, res, next) => {
  console.log('我是股票列表');
  let [data, fields] = await pool.execute('SELECT * FROM stocks');
  res.json(data);
});

// 取得某個股票 id 的資料
app.get('/stocks/:stockId', async (req, res, next) => {
  // 取得網址上的參數 req.params
  // req.params.stockId
  console.log('get stocks by id', req.params);
  let [data, fields] = await pool.execute('SELECT * FROM stocks WHERE id = ' + req.params.stockId);

  console.log('query stock by id:', data);
  // 空資料(查不到資料)有兩種處理方式：
  // 1. 200OK 就回 []
  // 2. 回覆 404
  if (data.length === 0) {
    // 這裡是 404 範例
    res.status(404).json(data);
  } else {
    res.json(data);
  }
});

app.use((req, res, next) => {
  console.log('所有路由的後面 ==> 404', req.path);
  res.status(404).send('Not Found');
});


//5XX錯誤處理
app.use((err, req, res, next) =>{
  console.error('來自四個參數的錯誤處理中間件', req.path, err);
  res.status(500).send('Server Error: 請洽系統管理員')
})

app.listen(3001, () => {
  console.log("server start at 3001");
});

// read stock no from mysql database

// mysql2 是一個第三方套件
// npm i mysql2
// 引用進來
const mysql = require('mysql2/promise');
//const dotenv = require('dotenv')
require('dotenv').config();

//console.log(process.env.DB_HOST)
(async () => {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_POST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });


  let [data, fields] = await connection.execute('SELECT * FROM stocks');
  console.log(data);

  // results [
  //     [],
  //     []
  // ]
  //let data = results[0];
  //let fields = results[1];

  connection.end();
})();
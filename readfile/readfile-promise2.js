const fs = require('fs');
//改成其他人可以用的版本
//用函式 function 名稱 getReadfilePromise
//function  getReadfilePromise (filepath 路徑 檔名)
//fs.readFile(test.txt(改成(filepath路徑 檔名)), "utf-8", (err, data)
//return new Promise 

function getReadfilePromise(filepath) {
    return new Promise((resolve, reject) => {
      //放入 resolve reject
      fs.readFile(filepath, "utf-8", (err, data) => {
        if (err) {
          //錯誤
          reject(err);
          //console.error(err);
        } else {
          //正確(因為沒有err,所以是正確)
          resolve(data);
          //console.log(data);
        }
      });
    });
}

//加上.then catch(err)
//要讀的檔案 test.txt
//上面的函式回傳一個promise,直接加.than

getReadfilePromise('test.txt')
.then((result) => {
  console.log(result);
}).catch((err) => {
  console.error(err);
});
//讀取錯誤檔案
getReadfilePromise('test111.txt')
.then((result) => {
  console.log(result);
}).catch((err) => {
  console.error(err);
});
//(x)
// getReadfilePromise.then((result) => {
//     console.log('test1111.txt');
//   }).catch((err) => {
//     console.error(err);
//   });
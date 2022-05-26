const fs = require("fs");

//fs.readFile(path[, options], callback)
//path(路徑) options([]內的是選填 (encoding 編碼utf8) callback(規定用(error跟data ))
//錯錯誤(err) 正確(data)
//改成promise版本 先 newpromise

// fs.readFile('test.txt','utf-8',(err, data) => {
//     let p = new Promise((resolve, reject) =>{
//         //放入 resolve reject
//         if (err){
//           //錯誤
//           reject(err)
//           console.error(err)

//         }else{
//           //正確(因為沒有err,所以是正確)
//           resolve(data)
//           console.log(data)
//         }
//     })
//     //加上.then catch(err)
//     p.then((result)=>{
//         console.log(data)
//     })
//     .catch((err)=>{
//         console.error(err)
//     })
// })

const fs = require("fs");

//fs.readFile(path[, options], callback)
//path(路徑) options([]內的是選填 (encoding 編碼utf8) callback(規定用(error跟data ))
//錯錯誤(err) 正確(data)
//改成promise版本 先 newpromise (原本promise的放錯位置)
let p = new Promise((resolve, reject) => {
  //放入 resolve reject
  fs.readFile("test.txt", "utf-8", (err, data) => {
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
//加上.then catch(err)
p.then((result) => {
  console.log(result);
}).catch((err) => {
  console.error(err);
});

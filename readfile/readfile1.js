const fs = require('fs');
// fs.readFile('test11111.txt', 'utf-8', (err, data) => {
//   if (err) {
//     // 錯誤了
//     console.log('喔喔喔，發生錯誤了');
//     console.error(err);
//   } else {
//     // 因為沒有 err，所以是正確的
//     console.log(data);
//   }
// });

//new Promise((resovle, reject) => {

let p = new Promise((resolve, reject) => {
  fs.readFile("test.txt", "utf-8", (err, data) => {
    if (err) {
      // 錯誤了
      //console.log('喔喔喔，發生錯誤了');
      //console.error(err);
      reject(err);
    } else {
      // 因為沒有 err，所以是正確的
      //console.log(data);
      resolve(data);
    }
  });
});
p.then((result)=>{
  console.log(result);

}).catch((err) => {
  console.error(err);
});



const fs = require('fs');

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

async function main() {
    try{
        let result = await getReadfilePromise('test.txt');
        console.log( result);
    }catch(error) {
        console.error(error)
    }
}
main();


//老師範例
// (async () => {
//     try{
//         let result = await getReadfilePromise('test.txt');
//         console.log( result);
//     }catch(e) {
//         console.error(e);
//     }

// })();

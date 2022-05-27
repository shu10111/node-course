const fs = require('fs/promises');
//不用callbackc因為會回傳一個promise物件, 因為他已經幫你用好promise,像 readfile-promise2.js裡面的getReadfilePromise

fs.readFile('test.txt', 'utf-8').then((result) => {
    console.log('這是內建的promise版本的 readfile', result);
}).catch((error) =>{
    console.error(error)
});
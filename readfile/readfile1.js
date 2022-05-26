const fs = require('fs');

//fs.readFile(path[, options], callback) 
//path(路徑) options([]內的是選填 (encoding 編碼utf8) callback(規定用(error跟data ))
//錯錯誤(err) 正確(data)
fs.readFile('test.txt','utf-8',(err, data) => {
  if (err){
    //錯誤
    console.error(err)

  }else{
    //正確(因為沒有err,所以是正確)
    console.log(data)
  }
})

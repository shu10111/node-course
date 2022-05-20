//第一步
new promise ((resolve, reject)=>{

});
//裡面要放的東西
new promise ((resolve, reject)=>{
//把非同步工作放進來
//決定甚麼時候呼叫 resolve
//決定甚麼時候呼叫 reject
});
//用一個變數接
let p =new promise ((resolve, reject)=>{

});
//使用方式
//p.then(處理成功 處理失敗 )
p.then((resolve) =>{
  consolg.log(resolve)
},(error) =>{
console.error(error);
})
// promise 是一個表示非同步運算的最終完成或失敗的物件
// -最終完成-> 呼叫 resolve ->實現 fulfilled
// -最終失敗-> 呼叫 reject   ->拒絕 rejected
//第一步
new promise ((resolve, reject)=>{

});
//裡面要放的東西
new promise ((resolve, reject)=>{
//把非同步工作放進來
//決定甚麼時候呼叫 resolve
//決定甚麼時候呼叫 reject
});
//第一個方式
//用一個變數接
let p =new promise ((resolve, reject)=>{

});
//使用方式
//p.then(處理成功 處理失敗 )
p.then((resolve) =>{
  consolg.log(resolve)
},(error) =>{
console.error(error);
});
//第二個方式



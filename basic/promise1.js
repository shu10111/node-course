// Promise 是一個表示非同步運算的最終完成或失敗的物件。

// 1. 非同步
// 2. 「最終」成功、「最終」失敗
// 3. 物件 --> new Promise();

// -> 用來解決 callback hell

// new Promise(executor);
// new 的時候要傳入 executor --> executor 也只是一個函式

// function executor(resovle, reject) {
// 非同步工作
// 做成功的時候，你就呼叫 resolve
// 做失敗的時候，你就呼叫 reject
// }


//new Promise(執行者);
//第一步
//new Promise((resovle, reject) => {});
//第二步 把非同步工作放進去(setTimeout)
//new Promise((resovle, reject) => {
//做非同步工作(setTimeout)
// });
//拿掉callback
//用resovle(result);
//return
//取代(callback)
let dt = new Date();
console.log(`起床了 at ${dt.toISOString()}`);

let doWork = function(job, timer){
  return new Promise((resovle, reject) => {
    setTimeout(() => {
      let dt = new Date();
      let result = `完成工作: ${job} at ${dt.toISOString()}`;
      // cb(result);
      // resovle(result);
      reject("故意失敗")
    },timer); 
  });
};

let doBrushPromise= doWork('刷牙', 3000);
// 刷牙 (3000) -> 吃早餐 (5000) -> 寫功課 (3000)
//console.log(doBrushPromise);
//會出現 Promise { <pending> }(初始狀態，不是 fulfilled 與 rejected )
//.tnen()然後 結果 
//取代(callback) 
doBrushPromise.then((result) =>{
  //接到成功的結果
  console.log(result);
  let doEatPromise= doWork('吃早餐', 3000);
  return doEatPromise

// },(error)=>{
//   console.error('發生錯誤', error);
// }
}).then ((result) =>{
  console.log(result);
  let doWorkPromise= doWork('寫功課', 3000);
  return doWorkPromise
}).then ((result) =>{
  console.log(result);

}).catch((error) =>{
  //在此之前發生錯誤,都可在這被捕捉
  console.error('發生錯誤', error)
})

//doEatPromise.then(()=>{})(x)



//呼叫 resolve 處理 then函式



//老師範例
// let dt = new Date();
// console.log(`起床了 at ${dt.toISOString()}`);

// let doWork = function (job, timer) {
//   return new Promise((resolve, reject) => {
//     // 做非同步工作
//     setTimeout(() => {
//       let dt = new Date();
//       let result = `完成工作: ${job} at ${dt.toISOString()}`;
//       resolve(result);
//       // reject('故意失敗');
//     }, timer);
//   });
// };

// // 刷牙 (3000) -> 吃早餐 (5000) -> 寫功課 (3000)
// let doBrushPromise = doWork('刷牙', 3000);
// // console.log(doBrushPromise);  // => Promise { <pending> }
// // doBrushPromise.then(處理成功的函式, 處理失敗的函式)
// doBrushPromise
//   .then((result) => {
//     // 這邊就接到「刷牙」成功的結果
//     console.log(result);

//     let doEatPromise = doWork('吃早餐', 5000);
//     return doEatPromise;
//   })
//   .then((result) => {
//     // 這邊就接到「吃早餐」成功的結果
//     console.log(result);

//     let doHWPromise = doWork('寫功課', 3000);
//     return doHWPromise;
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     // 在此之前發生的錯誤，都可以在這裡被捕捉
//     console.error('發生錯誤，現在在 catch', error);
//   })
//   .finally(() => {
//     console.log('這裡是 finally');
//   });
// // Promise chain
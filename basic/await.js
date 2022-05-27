let dt = new Date();
console.log(`起床了 at ${dt.toISOString()}`);

let doWork = function (job, timer) {
  return new Promise((resovle, reject) => {
    setTimeout(() => {
      let dt = new Date();
      let result = `完成工作: ${job} at ${dt.toISOString()}`;
      // cb(result);
      resovle(result);
      //reject("故意失敗")
    }, timer);
  });
};
async function main() {
try {
    // // 刷牙 (3000) -> 吃早餐 (5000) -> 寫功課 (3000)
    // let doBrushPromise= doWork('刷牙', 3000);
    // let result = await doBrushPromise
    //console.log(result)
    let resultDoBrush = await doWork("刷牙", 3000);
    console.log(resultDoBrush);

    // let doEatPromise= doWork('吃早餐', 5000);
    // let result = await doEatPromise
    //console.log(result)
    let resultDoEat = await doWork("吃早餐", 5000);
    console.log(resultDoEat);

    // let doWorkPromise= doWork('寫功課', 3000);
    // let result = await doWorkPromise
    //console.log(result)
    let resultDoWork = await doWork("寫功課", 3000);
    console.log(resultDoWork);
} catch(error) {
  console.errer(error);
  }
}
main();
//處理錯誤用 try catch



//     async function main(){
// try{

//         // // 刷牙 (3000) -> 吃早餐 (5000) -> 寫功課 (3000)
//         // let doBrushPromise= doWork('刷牙', 3000);
//         // let await = doBrushPromise(result)
//         await resultDoBrush = doWork('刷牙', 3000);
//         // let doEatPromise= doWork('吃早餐', 5000);
//         // let await = doEatPromise(result)
//         await resultDoEat = doWork('吃早餐', 5000);
//         // let doWorkPromise= doWork('寫功課', 3000);
//         // let await = doWorkPromise(result)
//         await resultDoWork = doWork('寫功課', 3000);
//     }catch(error){
//         console.errer(error)
//     }
// }
// main();
// //處理錯誤用 try catch

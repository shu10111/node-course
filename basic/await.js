let dt = new Date();
console.log(`起床了 at ${dt.toISOString()}`);

let doWorks = function(job, timer, cb) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let dt = new Date();
            let result = `完成工作: ${job} at ${dt.toISOString()}`;
            resolve(result);
            // reject("執行失敗");
            // console.log(job, timer);
        }, timer)
    });
};


async function main() {
  let doBrushPromise = await doWork("刷牙", 3000);
  console.log(doBrushPromise);

  let doEatPromise = await doWork("吃早餐", 5000);
  console.log(doEatPromise);

  let doHWPromise = await doWork("寫功課", 3000);
  console.log(doHWPromise);

  
}
main()

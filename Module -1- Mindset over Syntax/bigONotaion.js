// const start=performance.now()
console.time('task')

for(let i =0;i<=50000;i++){
    console.log(i);
}

// const end=performance.now()

// console.log(`this code took ${end - start} ms`);

console.timeEnd("task")
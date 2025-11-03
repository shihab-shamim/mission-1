// some
const numbers=[1,3,5,67,87,107,25,307]
// const hasEvenNumber=numbers.filter(item=>item%2===0)
// console.log(hasOddNumber);

const  hasEvenNumber=numbers.some((number)=>number%2===0)
console.log(hasEvenNumber);

const currentUserRole=["user","editor"]

const featureAccessRole=["admin","manager"]

const canAccess=currentUserRole.some(role=>featureAccessRole.includes(role))


// Array.from()

// const arr=Array.from({length:5}).fill(0)
const arr=Array.from({length:5},(_,i)=>i)
// console.log(arr);


const range=(start,stop,step)=>Array.from({length:Math.ceil((stop-start)/step)},(_,i)=>start +i * step);

// console.log(range(1,11,2));

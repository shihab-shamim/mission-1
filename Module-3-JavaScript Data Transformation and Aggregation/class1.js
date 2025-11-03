// * State vs stateful 
 

// *state less
// const counter =(amount)=>{
//     let count=0;
//     count=count+amount
     
//     return count;
// }

// console.log(counter(3));
// console.log(counter(2));


// *stateful
// const counter={
//     count:0,
//     sum(amount){
//         this.count=this.count + amount
//     },


//     print(){
//      console.log(this.count)
//     }
    
// }
// counter.sum(2)
// counter.sum(3)

// counter.print()



//  closure diye ai same kaj ta kore dekhbo but ai approach a agabona

// const createCounter=()=>{
//     let count=0;
//     return (amount)=>{
//         return count+=amount
//     }
// }

// const counter=createCounter();
// console.log(counter(4));
// console.log(counter(4));


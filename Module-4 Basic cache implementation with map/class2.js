//  problems statement 

//  you are given two large array , List a , list b .each array contains user object .
//  a user object is guaranteed to have a unique id property (a string) and may contain other data , such as a name.

// your task is to write an efficient function that takes both lists as input 
// and returns te total count of users thar are present in both lists


//  --------------data setup block -------------//

const USER_COUNT=2000;
let usersA=[];
let usersB=[];

const createUser=(id)=>({id:`user_${id}`,name:`User ${id}`})

for(let i=0;i<USER_COUNT;i++){
    usersA.push(createUser(i))
    usersB.push(createUser(i+1000))
}

// console.log(usersA);

const commonFriendShow=(usersA,usersB)=>{
    const commonFriends =[]
    const idListA=new Set(usersA.map(user=>user.id))
    

    //  O(n2)
    usersB.forEach(userB=>{
        if(idListA.has(userB.id)){
            commonFriends.push(userB)
        }
       
    })
    return {count:commonFriends.length}
}

console.log(commonFriendShow(usersA,usersB));

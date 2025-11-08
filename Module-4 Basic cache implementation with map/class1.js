// problems Statement 

// implementation a simple in memory cache for an "expensive " function(like a data query or api call)
// The goal is to store of a function call so that if the same call is made again,
//  the result returned from the cache instead of running the expensive function
 
const dataCache=new Map()

const expensiveTask=(id)=>{
    console.log("Ran the expensive task for:",id)
    return {id:id, data:`some data for id: ${id}`,timeStamp:new Date().getTime()}
}
const getData=(id)=>{
    if(dataCache.has(id)){
        console.log("cache hit for id:",id);
        return dataCache.get(id)
    }
 console.log("cache miss for id:",id);
    const data=expensiveTask(id)
    dataCache.set(id,data)

    return data;

}

console.log(getData(5));
console.log(getData(5));
console.log(dataCache);
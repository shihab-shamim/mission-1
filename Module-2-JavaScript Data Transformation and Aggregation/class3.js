//  sort 
const numbers=[40,100,1,5,25,10,];
const fruits =["Banana","apple","Cherry","date"]
const sortNumber=numbers.sort((a,b)=>a-b)
// console.log(numbers);
fruits.sort((a,b)=>a.localeCompare(b))

// console.log(fruits);

// nested array flat
const arr = [1, 2, [3, 4], [5, 6, [7, 8]]];
const flatArray= arr.flat(Infinity)

// console.log(flatArray);

const tagsFromPosts=[
    ["javascript","react","css"],
    ["node","express"],
    ["css","html","react"]
]

const newCleanArray=Array.from( new Set(tagsFromPosts.flat(Infinity)))



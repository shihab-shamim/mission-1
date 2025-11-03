
const course1={name:"programming hero "}
const course2={name:"next level web development "}

const obj ={
//     nextLevel:{courseId:"label2"},
//   true:{courseId:"label1"}

}
obj.nextLevel={courseId:"hello"};
obj[course2]={courseId:"hi"};

// console.log(obj['[object Object]']);
const courses=[
    ["programming hero","level1"],
    ["next level","level2"]
]

const map =new Map(courses) ;
// map.set(1,"programming hero")
// map.set(true,"programming hero 2")
// map.set(course1,{courseId:"level-1"})
// map.set(course2,{courseId:"level-2"})
// map.set(course2,{courseId:"level-2"})
// map.clear()
// map.delete(course1)

// console.log(map.has(course1));
// map.forEach((value,key)=>{
//     console.log("key",key);
//     console.log("value,",value);
// })


// map.forEach((value,key)=>{
//     // console.log("key",key);
//     key.name="hello " + key?.name
// })




// console.log([...map.keys()]);
// console.log([...map.values()]);

console.log(map.entries());




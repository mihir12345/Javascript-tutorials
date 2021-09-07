//map and reduce


const arr=[12,22,23,55,65]

// Map.arr

// const result =arr.map((cur,ind,arr)=>{
//     return cur*2
// })

// console.log(result);


const result2=arr.reduce((acc,cur,ind,arr)=>{
    console.log(`iteration ${cur}:${acc}`);
// return acc
},0)

console.log(result2);

// const fs=require('fs');
// function filepdho(){
//     return new Promise(function(resolve){
//         let a= fs.readFile("a.txt","utf-8",function(err,data){
//             resolve(data);
//         })
//     })
// }

// function ondone(data){
//     console.log(data);
// }

// filepdho().then(ondone)

// console.log("after promise");
// console.log("after promise");
// console.log("after promise");
// console.log("after promise");
// console.log("after promise");


function mySetTimeout(duration){
    console.log("resolve se phle")
    let p = new Promise(function(resolve){
        setTimeout(resolve,duration);
        console.log("hyyy")
    })
    console.log(p);
    return p;
}

mySetTimeout(3000).then(function(){
    console.log("hogya resolve")
})
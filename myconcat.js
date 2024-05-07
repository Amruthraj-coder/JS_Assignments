// Array.prototype.myconcat=function (arr) {
  
//     let res =[...this,...arr]

//     return res
// }

// let arr=[1,2,3,5];



// console.log(arr.myconcat(["DFafs","dfsad"]));

// let num=582;
// let res=0;
// for(let i=num;i!=0;i=Math.floor(i/10)){
// console.log(i % 10);

//    res= i % 10+ res*10
// }
// console.log(res);


// console.log(Math.sqrt(58.4));


let str = "hi how are you";



console.log(str.split(" ").map((e=> { e=e.replace(e[0],e[0].toUpperCase())
   
     return e})).join(" "));







// let arr=[]
// let s="";
// for (let i = 0 ; i < str.length ; i++){
    
//     if(str.charAt(i)==" "){
//         // console.log(s);
//         arr.push(s)
//         s="";
//         continue;
//     }
//     s+=str.charAt(i)
    
//     }
//     arr.push(s)

//     console.log(arr);
//    let res= arr.map(e=> {
//        e = e.replace(e.charAt(0),e.charAt(0).toUpperCase());
//         return e
//     }).reduce((acc,e)=>acc+" "+e)
    
//     console.log(res);
   


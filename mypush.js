Array.prototype.mypush= function (...arr) {
  
    let len=arr.length+this.length;

    let j=0;
    for(let i=this.length ; i<len ;i++){
       this[i]=arr[j];

        j++;
    }
   
}

let a=[1,2,5,6];

a.mypush(null,[5,7,6],()=>{console.log("hello");});

console.log(a);
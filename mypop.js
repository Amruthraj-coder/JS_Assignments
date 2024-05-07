

Array.prototype.mypop=function(){
    let r=this[this.length-1];
    this.length=this.length-1;
    // this[this.length-1] =undefined
    return r;
}

let arr=[1,2,3,4,5,6]

let r=arr.mypop();
console.log(r);
console.log(arr);
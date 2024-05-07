Array.prototype.myevery=function (cb){
for(let i=0;i<this.length;i++){
    if(!cb(this[i])){
        return false
    }

}
return true
}

let cb =(e)=>{
   return e>10;
}


let arr = [20,30,50,80]

let res=arr.myevery(cb);

console.log(res);
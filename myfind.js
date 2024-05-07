Array.prototype.myfind=function(cb){
    let res=0
for(let i=0;i<this.length;i++){
    
    if(cb(this[i],i,this)){
        return this[i]
    }

    
}
return res
}

let arr=[1,2,3,4,5];

let cb =(e,i,a)=>{
return e>2
}
console.log(arr.myfind(cb));
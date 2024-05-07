Array.prototype.mysome=function (cb) {
    for(let i=0 ; i<this.length ;i++){
        if(cb(this[i])){
            return true
        }
    }
    return false
}
let cb= e=> e>30

let arr = [20,30,50,80]

let res=arr.mysome(cb);

console.log(res);
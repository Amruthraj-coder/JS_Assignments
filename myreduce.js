//splice ,unshift,reduce

let arr=[1,2,3,4,5];

let cb=(a,b)=>{
   
    return a+b
    } 


Array.prototype.myreduce =function (cb,x) {
    let res=x;
    let startindex=0;
    let endindex=this.length
    if(x){
        x=x;
    }
    else{
        startindex=1;
        res=this[0];
    }
//  x instanceof Number|| x instanceof Object?x:startindex=1,res=this[0];

    for(let i=startindex;i<endindex;i++){
        
    res = cb(res,this[i])

    }
    return res
}

let res=arr.reduce(cb,12)

console.log(res);

let res2=arr.myreduce(cb,12)

console.log(res2);

let obarr=[
    {fname:"amruth",age:20},
    {fname:"raj",age:24},
    {fname:"rddsad",age:25},
]

let cb1=(a,e)=>{
    return {age:a.age+e.age,
            fname:a.fname+e.fname}
}

let r=obarr.myreduce(cb1);
console.log(r);

Array.prototype.myslice=function(a,b){
    let res=[]
if( a > 0) {
    b?b:b=this.length;

for(let i=a;i<b;i++){
    res.push(this[i])
}

return res;

}

else{

    b?b:b=0; 

let obj={}
let j=-1;
for(let i=this.length-1;i>=0;i--){
    obj[j]=this[i]
    j--
}
// console.log(obj);

let x=0;

for(let i=a;i<b;i++){

res[x]=obj[i];
x++;
}

return res
}


}
let arr =[1,2,3,4,5,6];
console.log(arr.myslice(1,3));
console.log(arr.slice(1,3));

console.log(arr.myslice(-5,-2));
console.log(arr.slice(-5,-2));

console.log(arr.myslice(-4));
console.log(arr.slice(-4));

console.log(arr.myslice(3));
console.log(arr.slice(3));


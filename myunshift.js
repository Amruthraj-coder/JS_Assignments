Array.prototype.myunshift=function (...arr){
let a1=[...arr];
let a2=[...this]
let a=[]
let i=0;

while(i<this.length+arr.length){

            for(let j=0;j<a1.length;j++){
                a[i]=a1[j];
                i++;
            }


             for(let k=0;k<a2.length;k++){
                 a[i]=a2[k];
                    i++
              }


}

    for(let i=0;i<a.length;i++){
        this[i]=a[i]
    }

}

let arr = [1,2,78,8,9];

arr.myunshift(4,5,4,5,7);

console.log(arr);


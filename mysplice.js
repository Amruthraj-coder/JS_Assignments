



// Array.prototype.mysplice = function (start,num,...arr){
   
//     let arr1=this.slice(0,start);
    
//     let arr2=this.slice(start+num);
//     let resarr=arr1.concat(arr,arr2);
    
//     for(let i=0;i<resarr.length;i++){
//         this[i]=(resarr[i]);
//     }

// }


// let arr =["apple","orange","grapes","mango","fgdsf"]

// arr.mysplice(1,2,"sdhsakh","sadas")

// console.log(arr)


Array.prototype.mysplice = function (start,num,...arr){
   let a=this;
    let re=[]
    let res=[];
   for(let i=0;i<start;i++){
    re.push(a[i]);

   }
   let j=0;
   let b = true
   for(let i=start;i<start+num;i++){
    res[j]=a[i];
    if(false){
      b=true;

    }

    j++
   }



  }
  
  

  
  let arr =["apple","orange","grapes","mango","fgdsf"]
  
  let r1=arr.splice(1,3,"sdhsakh","sadas")
  
  console.log(arr,"r1");
  console.log(r1);
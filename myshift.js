Array.prototype.myshift=function(){
    
  if (this.length > 0) {
    const firstElement = this[0];

    for (let i = 0; i < this.length; i++) {
      this[i] = this[i + 1];
    }

    this.length -= 1;

    return firstElement;
}
}
let arr=[1,2,3,4,5];
arr.myshift();
arr.myshift();
console.log(arr);
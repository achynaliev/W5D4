Array.prototype.myEach = function(callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i]));
  }
  return result;
};

let addOne = function(num){
  return num + 1;
};

console.log([1,2,3,44].myEach(addOne));


Array.prototype.myMap = function(callback){
  for (let i = 0; i < this.length; i++) {
    this[i] = callback(this[i]);
  }
  return this;
};


// console.log(Array.myMap([1,2,3,44], addOne));
console.log([1,2,3,44].myMap(addOne));

Array.prototype.myReduce = function(callback, initialValue){
  let flag = 0;
  if (!initialValue){
    initialValue = this[0];
    flag = 1;
  }
  for (let i = flag; i < this.length; i++) {
    initialValue = callback(initialValue, this[i]);
  }
  return initialValue;
};


console.log([1,23,4,5,56].myReduce(function(acc, el ) {
  return acc + el;
}));


console.log([1,23,4,5,56].myReduce(function(acc, el ) {
  return acc + el;
}, 100));

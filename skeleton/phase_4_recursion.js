function badBoy(start, end) {
  if (start === end) {
    return [end];
  }

  return [start].concat(badBoy(start+1, end));
}

console.log(badBoy(1,20));

function sumRec(arr){
  if (arr.length === 0){
    return 0;
  }

  return arr[0] + sumRec(arr.slice(1,arr.length));
}

console.log(sumRec([3,124,123,123,45,12,5,123,1234]));


function exponent(base, exp){
  if (exp ===1){
    return base;
  }

  return base * exponent(base, exp-1);

}

console.log(exponent(3,5));
console.log(exponent(2,10));

function fibonacci(n) {
  if (n === 1) {
    return [1,1];
  }

  let something = fibonacci(n-1);
  return something.concat(something[something.length-2] + something[something.length-1]);
}

console.log(fibonacci(8));

function deepDup(arr) {
  let result = [];

  for(let i = 0; i < arr.length; i++ ) {
    if (Array.isArray(arr[i])) {
      result.push(deepDup(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(deepDup([12,3,4,5,[3123,[23]]]));

function bsearch(arr, target){
  if (arr.length <= 1){
    if (arr[0]===target){
      return 0;
    }else{
      return -1;
    }
  }
  let mid = Math.floor(arr.length/2);
  if (arr[mid]===target){
    return mid;
  }else if (arr[mid]<target){
    return mid + 1 + bsearch(arr.slice(mid+1,arr.length), target);
  }else{
    return bsearch(arr.slice(0,mid), target);
  }

}

console.log(bsearch([1,2,3,4,5,55,66,77,88,99,100],100));

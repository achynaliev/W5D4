Array.uniq = function(arr) {
  let result = [];
  for(var i = 0; i < arr.length; i++ ) {
    let ele = arr[i];
    if (result.indexOf(ele) === -1) {
      result.push(ele);
    }
  }
  return result;
};

console.log(Array.uniq([12,2,3,43,4,34,4,4,4,4,4,5]));


Array.twoSum = function(arr) {
  let pairs = [];
  for(var i = 0; i < arr.length-1; i++ ) {
    for(var j = i + 1; j < arr.length; j++ ) {
      let one = arr[i];
      let two = arr[j];
      if (one + two === 0) {
        pairs.push([i,j]);
      }
    }
  }
  return pairs;
};

console.log(Array.twoSum([-1,1,23,2,312,312,4,23,453,534,-4,52,34,234,23]));


Array.transpose = function(arr) {
  let result = [];
  let temp = [];
  for(var i = 0; i < arr.length; i++ ) {
    temp = [];
    for(var j = 0; j < arr.length; j++){
      temp.push(arr[j][i]);
    }
    result.push(temp);
  }
  return result;
};

console.log(Array.transpose([[1,2,3],[4,5,6], [7,8,9]]));

Array.prototype.someSort = function() {
  for(var i = 0; i < this.length; i++ ) {
    for(var j = i + 1; j < this.length; j++) {
      if (this[i] > this[j]) {
        let first = this[i];
        this[i] = this[j];
        this[j] = first;
      }
    }
  }
  return this;
};

// console.log([4,423,4,25,43,5634,6,456,34,523,4,346,45,3,2,62,456,5,245,234].someSort());

Array.prototype.bubbleSort = function() {
  let flag = true;
  while(flag){
    flag = false;
    for(var i = 0; i < this.length-1; i++ ) {
      if (this[i] > this[i+1]) {
        let first = this[i];
        this[i] = this[i+1];
        this[i+1] = first;
        flag = true;
      }
    }
  }
  return this;
};

console.log([4,423,4,25,43,5634,6,456,34,523,4,346,45,3,2,62,456,5,245,234].bubbleSort());

String.prototype.substrings = function() {
  let resultSubs = [];

  for(var i = 0; i < this.length; i++ ) {
    for (var j = i + 1; j < this.length+1; j++ ) {
      let subs = this.slice(i,j);
      if (resultSubs.indexOf(subs) === -1) {
        resultSubs.push(subs);
      }
    }
  }
  return resultSubs;
};

console.log('hllllllllllr'.substrings());

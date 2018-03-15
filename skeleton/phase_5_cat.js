function Cat(name, owner){
  this.name = name;
  this.owner = owner;
  this.cuteStatement = () =>{
    return `${owner} loves ${name}`;
  };
}

let kitten = new Cat("Earl", "Atai");
console.log(kitten.cuteStatement());

kitten.cuteStatement = function() {
  return `Everyone loves ${this.name}`;
};

console.log(kitten.cuteStatement());

Cat.prototype.meow = function() {
  return "Meow";
};

console.log(kitten.meow());

kitten.meow = function() {
  return "Meaw";
};

console.log(kitten.meow());

kitten.woof = function() {
  return "Woof";
};

console.log(kitten.woof());

var ForagerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];

  // this.color = new Bee().color; // replaced by Bee.call(this) which calls on the bee property of yellow;

  // this.food = new Grub().food; replaced by Bee.call(this) which has a Grub.call(this) method that retrns grub.food = jelly


};

ForagerBee.prototype = Object.create(Grub.prototype);
ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forage = function (treasure) {
  this.treasureChest.push(treasure);
};

// ForagerBee.prototype.eat = function () {
//   Grub.eat();
// };
// above is replaced by Object.create(Grub.prototype) which inherits methods from grub (includes eat)

var HoneyMakerBee = function() {

  Grub.call(this);
  Bee.call(this);

  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;

  // this.color = new Bee().color; // replaced by Bee.call(this) which calls/inherits on the bee property of yellow;

  // this.food = new Grub().food; replaced by grub.call(this) which calls/inherits property grub.food = jelly



};
HoneyMakerBee.prototype = Object.create(Grub.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;


HoneyMakerBee.prototype.makeHoney = function () {
  this.honeyPot++;
};

HoneyMakerBee.prototype.giveHoney = function () {
  this.honeyPot--;
};

// HoneyMakerBee.prototype.eat = function () {
//   Grub.eat();
// };
// above is replaced by Object.create(Grub.prototype) which inherits methods from grub (includes eat)
var Bee = function() {
  Grub.call(this);

  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';

  // this.food = new Grub().food; replaced by grub.call(this) which calls/inherits property grub.food = jelly

};
Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;

// Bee.prototype.eat = function () {
//   Grub.eat();
// };
// above is replaced by Object.create(Grub.prototype) which inherits methods from grub (includes eat)

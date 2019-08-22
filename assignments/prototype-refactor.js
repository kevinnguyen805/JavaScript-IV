/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

class GameObject{
     constructor (attr){
     this.createdAt = attr.createdAt;
     this.name = attr.name;
     this.dimensions = attr.dimensions;    
     }
     destroy(){
          return `${this.name} was removed from the game.`;
     }
}

class CharacterStats extends GameObject{
     constructor (attr){
          super(attr);
          this.healthPoints = attr.healthPoints;
     }
     takeDamage(){
          return `${this.name} took damage`;
     }
}

class Humanoid extends CharacterStats{
     constructor(attr){
          super(attr);
          this.team = attr.team;
          this.weapons = attr.weapons;
          this.language = attr.language;
     }
     greet(){
          return `${this.name} offers a greeting in ${this.language}`;
     }
}


// function GameObject(attr) {
//      this.createdAt = attr.createdAt;
//      this.name = attr.name;
//      this.dimensions = attr.dimensions;
// }

// function CharacterStats(attr) {
//      GameObject.call(this, attr);
//      this.healthPoints = attr.healthPoints;
// }

// function Humanoid(attr) {
//      CharacterStats.call(this, attr);
//      this.team = attr.team;
//      this.weapons = attr.weapons;
//      this.language = attr.language;
// }

// PROTOTYPE INHERITANCES

// CharacterStats.prototype = Object.create(GameObject.prototype)
// Humanoid.prototype = Object.create(CharacterStats.prototype)

// PROTOTYPE METHODS

// GameObject.prototype.destroy = function () {
//      return `${this.name} was removed from the game.`;
// }
// CharacterStats.prototype.takeDamage = function () {
//      return `${this.name} took damage`;
// }
// Humanoid.prototype.greet = function () {
//      return `${this.name} offers a greeting in ${this.language}`;
// }
///////




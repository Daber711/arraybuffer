class Magician {
	constructor() {
		 this.distance = 1;
		 this.stoned = false;
	}
 
	set stoned(value) {
		 this._stoned = value;
	}
 
	get stoned() {
		 return this._stoned;
	}
 
	set attack(value) {
		 this._attack = value;
	}
 
	get attack() {
		 const attackPower = this._attack * (1 - 0.1 * (this.distance - 1));
		 return this.stoned ? Math.round(attackPower - Math.log2(this.distance) * 5) : Math.round(attackPower);
	}
 }
 
 class Daemon extends Magician {
	constructor() {
		 super();
		 this.distance = 5;
	}
 }
 
 module.exports = { Magician, Daemon };
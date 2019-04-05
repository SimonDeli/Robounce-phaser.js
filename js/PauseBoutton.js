function PauseBoutton(game, x, y, source, callback, context){
	Phaser.Button.call(this, game, x, y, source, callback, this, 1, 0, 2);
	game.add.existing(this);

	this.anchor.set(0.5);
	this.callback = callback;
	this.id = 0;
	this.context = context;

}

PauseBoutton.prototype=Object.create(Phaser.Button.prototype);
PauseBoutton.prototype.constructor=PauseBoutton;// JavaScript Document// JavaScript Document
// JavaScript Document

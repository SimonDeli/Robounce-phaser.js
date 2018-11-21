function Bumper(game, x, y, source, debug){
	Phaser.Sprite.call(this, game, x, y, source);
	game.add.existing(this);
	game.physics.p2.enable(this, debug);
	
	this.anchor.setTo(0.5, 1);
	//this.scale.set(2, 2);
	this.body.clearShapes();
	this.body.setRectangleFromSprite(this);
	//this.restitution = 1;
	
	this.body.kinematic = true;	
	//this.body.data.gravityScale = 0;
	this.body.velocity.x = 0;
	this.body.velocity.y = 0;
	
	this.body.fixedRotation = true;
	//this.body.static = true;
	
	game.debug.body(this);

	
	//this.body.mass = 0;
}

Bumper.prototype=Object.create(Phaser.Sprite.prototype);
Bumper.prototype.constructor=Bumper;// JavaScript Document

Bumper.prototype.bumperSaut = function(){ //NE ENTRE DEDANS MAIS NE FONCTIONNE PAS
	
	var positionY = this.y;
			
	var Tween1 = game.add.tween(this.body).to({y:positionY-20}, 60, Phaser.Easing.Linear.None);
	var Tween2 = game.add.tween(this.body).to({y:positionY}, 60, Phaser.Easing.Linear.None);
	
	Tween2.onComplete.add(function(){
		//console.log("Tween "+this+" compelte");
	}, this);
	Tween1.onComplete.add(function(){ //la fonction a appellé après le "tween"
    	Tween2.start();
	}, this);
	
	
	Tween1.start();
};


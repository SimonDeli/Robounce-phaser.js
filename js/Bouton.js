function Bouton(game, x, y, type, declenche1, declenche2, deplacement, sens,  source, debug){
	Phaser.Sprite.call(this, game, x, y, source);
	game.add.existing(this);
	game.physics.p2.enable(this, debug);
	
	this.anchor.setTo(0.5, 0.5);
	this.type = type; //"porte", ""doublePorte", plateformeRebond", "plateforme" ...
	this.declenche1 = declenche1;
	this.declenche2 = declenche2;
	this.deplacement = deplacement;
	this.sens = sens;
	
	
	this.body.clearShapes();
	this.body.setRectangleFromSprite(this);
	//this.restitution = 1;
	
	this.body.kinematic = true;	
	//this.body.data.gravityScale = 0;
	this.body.velocity.x = 0;
	this.body.velocity.y = 0;
	
	this.body.fixedRotation = true;
	this.appuye = false;
	//this.body.static = true;
	//this.body.mass = 0;
}

Bouton.prototype=Object.create(Phaser.Sprite.prototype);
Bouton.prototype.constructor=Bouton;// JavaScript Document

Bouton.prototype.btnAppuye = function(distance){
	
	if(this.sens === "vertical")
	{
		if(!(this.appuye))
		{
			var positionX = this.body.x;
			var Tween1 = game.add.tween(this.body).to({x:positionX+distance}, 500, Phaser.Easing.Linear.None);	
			Tween1.onComplete.add(function(){ //la fonction a appellé après le "tween"
				console.log("Tween "+this+" complete");
				this.appuye = true;
			}, this);

			Tween1.start();
		}
	
		else
		{
			var positionX = this.body.x;
			var Tween2 = game.add.tween(this.body).to({x:positionX-distance}, 500, Phaser.Easing.Linear.None);
			Tween2.onComplete.add(function(){ //la fonction a appellé après le "tween"
				console.log("Tween "+this+" complete");
				this.appuye = false;
			}, this);

			Tween2.start();
		}
	}
	else 
	{
		if(!(this.appuye))
		{
			var positionY = this.body.y;
			var Tween1 = game.add.tween(this.body).to({y:positionY+distance}, 500, Phaser.Easing.Linear.None);	
			Tween1.onComplete.add(function(){ //la fonction a appellé après le "tween"
				console.log("Tween "+this+" complete");
				this.appuye = true;
			}, this);

			Tween1.start();
		}
	
	else
		{
			var positionY = this.body.y;
			var Tween2 = game.add.tween(this.body).to({y:positionY-distance}, 500, Phaser.Easing.Linear.None);
			Tween2.onComplete.add(function(){ //la fonction a appellé après le "tween"
				console.log("Tween "+this+" complete");
				this.appuye = false;
			}, this);

			Tween2.start();
		}
	}
};
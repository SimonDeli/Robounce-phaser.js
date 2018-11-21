function Porte(game, x, y, lumiere, lueur, deplacement, sens, source, debug){
	Phaser.Sprite.call(this, game, x, y, source);
	game.add.existing(this);
	game.physics.p2.enable(this, debug);
	
	var _this = this;
	this.anchor.setTo(0.5, 0.5);
	this.lumiere = lumiere;
	this.lueur = lueur;
	this.deplacement = deplacement;
	this.sens = sens;
	
	this.addChild(lumiere);
	this.addChild(lueur);
	
	this.body.clearShapes();
	this.body.setRectangleFromSprite(this);
	//this.restitution = 1;
	
	this.body.kinematic = true;	
	//this.body.data.gravityScale = 0;
	this.body.velocity.x = 0;
	this.body.velocity.y = 0;
	
	this.body.fixedRotation = true;
	
	this.porteOuverte = false;
	//this.body.static = true;
	//this.body.mass = 0;
}

Porte.prototype=Object.create(Phaser.Sprite.prototype);
Porte.prototype.constructor=Porte;// JavaScript Document// JavaScript Document

Porte.prototype.ouverture = function(){ //NE ENTRE DEDANS MAIS NE FONCTIONNE PAS
	
	
	if(this.sens === "vertical")
	{
		if(!(this.porteOuverte))
		{
			var positionY = this.y;
			var Tween1 = game.add.tween(this.body).to({y:positionY-this.deplacement}, 850, Phaser.Easing.Exponential.In);	
			Tween1.onComplete.add(function(){ //la fonction a appellé après le "tween"
				console.log("Tween "+this+" complete");
				this.porteOuverte = true;
			}, this);
			Tween1.start();

		}
		else
		{
			var positionY = this.y;
			var Tween2 = game.add.tween(this.body).to({y:positionY+this.deplacement}, 850, Phaser.Easing.Exponential.In);	
			Tween2.onComplete.add(function(){ //la fonction a appellé après le "tween"
				console.log("Tween "+this+" complete");
				this.porteOuverte = false;
			}, this);
			Tween2.start();

		}
	}
	else
	{
		if(!(this.porteOuverte))
		{
			var positionX = this.x;
			var Tween1 = game.add.tween(this.body).to({x:positionX-this.deplacement}, 850, Phaser.Easing.Exponential.In);	
			Tween1.onComplete.add(function(){ //la fonction a appellé après le "tween"
				console.log("Tween "+this+" complete");
				this.porteOuverte = true;
			}, this);
			Tween1.start();

		}
		else
		{
			var positionX = this.x;
			var Tween2 = game.add.tween(this.body).to({x:positionX+this.deplacement}, 850, Phaser.Easing.Exponential.In);	
			Tween2.onComplete.add(function(){ //la fonction a appellé après le "tween"
				console.log("Tween "+this+" complete");
				this.porteOuverte = false;
			}, this);
			Tween2.start();

		}
	}
};
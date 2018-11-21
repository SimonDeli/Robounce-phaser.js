function Plateforme(game, x, y, source, debug){
	Phaser.Sprite.call(this, game, x, y, source);
	game.add.existing(this);
	
	game.physics.p2.enable(this, debug);
	
	
	this.anchor.setTo(0.5, 0.5);
	this.body.clearShapes();
	//this.restitution = 1;
	
	this.body.kinematic = true;	
	//this.body.data.gravityScale = 0;
	this.body.velocity.x = 0;
	this.body.velocity.y = 0;
	
	this.body.fixedRotation = true;
	
	this.verifTourne = false;
	
	
	//this.body.static = true;
	
	
	game.debug.body(this);
	//this.body.mass = 0;
}

Plateforme.prototype=Object.create(Phaser.Sprite.prototype);
Plateforme.prototype.constructor=Plateforme;


Plateforme.prototype.rotationFunction = function(){
	if(this.verifTourne === false){
		var Tween1 = game.add.tween(this).to({angle:this.angle+90}, 800, Phaser.Easing.Exponential.In);	
	Tween1.onComplete.add(function(){ //la fonction a appellé après le "tween"
		console.log(this.angle%360);
		this.body.clearShapes();
		if(this.angle%360 === 90){
			this.body.loadPolygon("physicsData", "RebondBasGauche");
		}
		else if(this.angle%360 === -180){
	
			this.body.loadPolygon("physicsData", "RebondHautGauche");
		}
		else if(this.angle%360 === -90){
			this.body.loadPolygon("physicsData", "RebondHautDroite");
		}
		else if(this.angle%360 === 0){
			this.body.loadPolygon("physicsData", "RebondBasDroite");
		}
		this.verifTourne = false;
		this.body.setCollisionGroup(plateformeRebondCollisionGroup);
	}, this);
	sonTournePlateforme.play();
	Tween1.start();
	this.verifTourne = true;
	}
}

/*BasGauche = 1
HautGauche = 2
HautDroite = 3
BasDroite = 4*/

/*90 -180 -90 0*/
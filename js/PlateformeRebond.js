function PlateformeRebond(game, x, y, source){
	Phaser.Sprite.call(this, game, x, y, source);
	game.add.existing(this);
	
	game.physics.p2.enable(this);
	
	
	this.body.clearShapes();
	this.anchor.setTo(0.5, 0.5);
	this.body.kinematic = true;
	//this.scale.setTo(0.5);
	
	//this.body.data.gravityScale = 0;
	//this.body.velocity.x = 0;
	//this.body.velocity.y = 0;
	
	//this.body.static = true;
	
	
	//game.debug.body(this);
	//this.body.mass = 0;
}

PlateformeRebond.prototype=Object.create(Phaser.Sprite.prototype);
PlateformeRebond.prototype.constructor=PlateformeRebond;
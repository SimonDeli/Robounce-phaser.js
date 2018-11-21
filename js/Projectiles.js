function Projectile(game, x, y, vx, vy, source, debug){
	Phaser.Sprite.call(this, game, x, y, source);
	game.add.existing(this);
	
	game.physics.p2.enable(this, debug);
	
	
	this.anchor.set(0.5);
	
	//this.restitution = 1;
	this.body.clearShapes();
	this.body.setCircle(29/2);
	this.body.data.gravityScale = 0;
	this.scale.set(0.5);
	//this.body.kinematic = true;
	//this.body.bounce.set(1);
	
	this.body.velocity.x = vx;
	this.body.velocity.y = vy;
	
	
	//this.checkWorldBounds = true;
	//this.body.collideWorldBounds = true;
		
}

Projectile.prototype=Object.create(Phaser.Sprite.prototype);
Projectile.prototype.constructor=Projectile;

Projectile.prototype.disparition = function(){	
			animationDestructionProj(this);
			this.destroy();
			sonPopProj.play();	
			console.log("Projectile detruit");
};

Projectile.prototype.tweenScale = function(){
	var scaleInitX = this.scale.x;
	var scaleInitY = this.scale.y;
	
	var tween1 = game.add.tween(this.scale).to({x:0.3, y:0.3}, 50, Phaser.Easing.Linear.None);
	var tween2 = game.add.tween(this.scale).to({x:0.5, y:0.5}, 100, Phaser.Easing.Linear.None);
	tween1.onComplete.add(function(){
		tween2.start();
	}, this)
	/*tween2.onComplete.add(function(){
		twwen1.start();
	}, this)*/
	
	tween1.start();
}
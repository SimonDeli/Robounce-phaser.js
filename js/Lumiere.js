function Lumiere(game, source){
	
	elmtParent = this.elmtParent;
	
	Phaser.Sprite.call(this, game, 0, 0, source);
	game.add.existing(this);
	this.anchor.setTo(0.5, 0.5);
	this.alpha = 0.8;
}

Lumiere.prototype=Object.create(Phaser.Sprite.prototype);
Lumiere.prototype.constructor=Lumiere;

Lumiere.prototype.parentFonction = function(elmtParent){
	this.x = elmtParent.x;
	this.y = elmtParent.y;
};

Lumiere.prototype.tweenScaleBoucle = function(scaleX, scaleY, time){
	
	var scaleXLueure = this.scale.x;
	var scaleYLueure = this.scale.y;
	
	var Tween1Lueure = game.add.tween(this.scale).to({x:scaleXLueure+scaleX, y:scaleYLueure+scaleY}, time, Phaser.Easing.Linear.None);
	var Tween2Lueure = game.add.tween(this.scale).to({x:scaleXLueure, y:scaleYLueure}, time, Phaser.Easing.Linear.None);

	Tween1Lueure.onComplete.add(function(){ 
		Tween2Lueure.start();
	}, this);
	
	Tween2Lueure.onComplete.add(function(){
		Tween1Lueure.start();
	}, this);
		
	Tween1Lueure.start();
	
};

Lumiere.prototype.tweenAlphaBoucle = function(alpha, time){
	
	var alphaDepart = this.alpha;
	
	var Tween1Alpha = game.add.tween(this).to({alpha: alpha}, time, Phaser.Easing.Linear.None);
	var Tween2Alpha = game.add.tween(this).to({alpha: alphaDepart}, time, Phaser.Easing.Linear.None);

	Tween1Alpha.onComplete.add(function(){
		Tween2Alpha.start();
	}, this);
	Tween2Alpha.onComplete.add(function(){
		Tween1Alpha.start();
	}, this);
	
	Tween1Alpha.start();
};


Lumiere.prototype.tweenAlpha = function(alpha, time){
	var Tween1Alpha = game.add.tween(this).to({alpha: alpha}, time, Phaser.Easing.Linear.None);
	
	Tween1Alpha.start();
};


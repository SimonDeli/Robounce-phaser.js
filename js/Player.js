function Player(game, x, y, source, debug){

	Phaser.Sprite.call(this, game, x, y, source);

	this.textureCourante=source;
	game.add.existing(this);
	/*this.data.source = source;*/
	//game.physics.arcade.enable(this);
	var _this = this;
	game.physics.p2.enable(this, debug);

	this.anchor.setTo(0.5);

	this.body.collideWorldBounds = true;
	this.anchor.setTo(0.5, 0.55);

	this.canJump = true;
	this.isJumping = false;
	this.faceTo = "right";

	this.tirG = false;
	this.tirD = false;

	this.marcheD = false;
	this.marcheG = false;

	this.speed = 10;

	this.body.clearShapes();
	this.body.setRectangle(90, 200);

	this.body.fixedRotation = true;
	this.body.setZeroVelocity();
	this.body.mass = 0.1;

	this.animations.add("reposD", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], 60, true);
	this.animations.add("reposG", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], 60, true);
	this.animations.add("sautD", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], 60, false);
	this.animations.add("sautG", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], 60, false);

	this.animations.add("marcheD", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], 60, true);
	this.animations.add("marcheG", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], 60, true);
	var animTirD = this.animations.add("tirD", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], 60, false);
	var animTirG = this.animations.add("tirG", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], 60, false);

	animTirD.onComplete.add(this.completeAnimTir, this); //voir "FonctionsAutre.js"
	animTirG.onComplete.add(this.completeAnimTir, this);

	this.animations.play("reposD", 35, true);

	game.input.keyboard.onUpCallback = function(e){
		if(e.keyCode === inputDroite || e.keyCode === 39){ //D
			//personnage.animations.stop("marcheD");
			_this.marcheD = false;
			_this.tirD = false;
		}
		if(e.keyCode === inputGauche || e.keyCode === 37){ //Q
			//personnage.animations.stop("marcheG");
			_this.marcheG = false;
			_this.tirG = false;
		}
	}// <<onUpCallback

	this.nbrTir = 0;
	this.perdu = false;
	this.vie = new Array();

	this.rightKey = game.input.keyboard.addKey(inputDroite);
	this.leftKey = game.input.keyboard.addKey(inputGauche);
}

Player.prototype=Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor=Player;

Player.prototype.saut = function(hauteur){
			sonJump.play();
			this.isJumping = true;

			if(this.faceTo === "right"){
				console.log("sautD");
				this.changerTexture("sautD", 0);
				//console.log("right");
			}
			if(this.faceTo === "left"){
				console.log("sautG");
				this.changerTexture("sautG", 0);
				//console.log("left");
			}
			this.tirG = false;
			this.tirD = false;

			this.body.velocity.y = -hauteur;
			this.body.velocity.x = 0;

};

Player.prototype.walk = function(){
	//console.log(this.right);
	if(this.tirG === false && this.tirD === false)
	{
		//if (game.input.keyboard.isDown(Phaser.Keyboard.D) || game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
		if (this.rightKey.isDown || game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
		//console.log(this+" Marche droite");

			if(this.canJump === true && this.isJumping === false)
			{

				this.changerTexture("marcheD", 0);
				this.marcheG = false;
				this.marcheD = true;
				this.faceTo = "right";

			}
			if(this.isJumping === true && this.faceTo === "left"){

				//reprendre la frame de saut, et play animation de saut dans l'autre sens à cette frame là

				this.faceTo = "right";
			}
			this.body.x += this.speed;

		}// <<RIGHT

		//if (game.input.keyboard.isDown(Phaser.Keyboard.Q) || game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
		if (this.leftKey.isDown || game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
			//console.log(this+" Marche gauche");

			if(this.canJump === true && this.isJumping === false)
			{
				this.changerTexture("marcheG", 0);
				this.marcheG = true;
				this.marcheD = false;
				this.faceTo = "left";
			}
			if(this.isJumping === true && this.faceTo === "right"){

				//reprendre la frame de saut, et play animation de saut dans l'autre sens à cette frame là

				this.faceTo = "left";
			}
			this.body.x -= this.speed;
		}// <<LEFT}
	}
};

Player.prototype.repos = function(){
	if(personnage.canJump === true && personnage.isJumping === false)
	{
		//console.log("REPOS BORDEL");
		//console.log(this.marcheD+" "+this.faceTo+" "+this.tirD);
		if(this.faceTo === "right" && this.marcheD === false && this.tirD === false){
			//console.log("RIGHT");
			//this.loadTexture("reposD", 35, false);
			this.changerTexture("reposD", 0);}

		if(this.faceTo === "left" && this.marcheG === false && this.tirG === false)
			this.changerTexture("reposG", 0);
			//this.animations.play("reposG");
	}
};

Player.prototype.tir = function(collisionGroup){
	if(game.input.activePointer.leftButton.isDown){
		if (!(projectileLance)) //s'il n'y a pas de projectiles en cours
		{
			var longueurX = game.input.x - this.x; //voir "variableCommunes.js"
			var longueurY = game.input.y - this.y-50;

			var tangeante = Math.abs(Math.atan(longueurY/longueurX)); //on calcule la tangeante de l'angle en x, grâce à longueurX et longueurY
			console.log(tangeante);

			if(longueurX > 0){
				if(longueurY > 0){
					var velocY = Math.sin(tangeante) * 1400;
				}
				else {
					var velocY = -(Math.sin(tangeante) * 1400);
				}
				var velocX = Math.cos(tangeante) * 1400;
			}
			else{
				if(longueurY > 0){
					var velocY = Math.sin(tangeante) * 1400;
				}
				else {
					var velocY = -(Math.sin(tangeante) * 1400);
				}
				var velocX = -(Math.cos(tangeante) * 1400);
			}



			if(this.tirG === false && personnage.tirD === false){
					console.log("TIRG ET TIRD EGALE FALSE");
				if(velocX > 0){
					this.faceTo = "right";
					this.body.x -= 20; //necessaire car le sprite est mal fait (....)
					this.tirD = true;
					this.tirG = false;
					this.changerTexture("tirD", 0);
				}

				else{
					this.faceTo = "left";
					this.body.x += 20; //necessaire car le sprite est mal fait (....)
					this.tirD = false;
					this.tirG = true;
					this.changerTexture("tirG", 0);
				}

				this.nbrTir = this.nbrTir - 1;
				this.affichageVie();
				if(this.nbrTir < 0){
					this.perdu = true;
				}
				fonctionsService.tirProjectile(velocX, velocY, collisionGroup); //voir "FonctionsAutre.js"
			}
		}
	}
}

Player.prototype.changerTexture=function(t, nbFrames){

	if (this.textureCourante !== t){
		this.loadTexture(t, nbFrames, false);
		this.textureCourante = t;
		this.animations.play(t);
		console.log("changerTexture "+t);
	}
	else if(t === "sautD" || t === "sautG"){
		this.animations.play(t);
	}
};

Player.prototype.completeAnimTir = function(){
		console.log("completeAnimTir");

		this.tirD = false;
		this.tirG = false;
	if(this.faceTo === "right"){
		this.body.x += 20; //necessaire car le sprite est mal fait (....)
	}
	if(this.faceTo === "left"){
		this.body.x -= 20; //necessaire car le sprite est mal fait (....)
	}
}// <<completeAnimTir

Player.prototype.siIlTombeIlReapparait = function(){
	if(this.body.y > game.world.height){
		this.body.y = game.world.height - 500;
		this.body.x = 400;
		this.body.velocity.x = 0;
		this.body.velocity.y = 0;

	}
}
Player.prototype.affichageVie = function(){
	for(var i = 0 ; i<this.vie.length ; i++){
		this.vie[i].destroy();
	}

	var salut = Math.ceil(this.nbrTir/4);
	var tir = 0;
		for(var y = 0 ; y<salut ; y++)
			{
				for(var i = 0 ; i<7 ; i++){
					if(tir<this.nbrTir)
					{
						var vie = game.add.sprite(50*i, 50*y, "projectile");
						this.anchor.set(0.5);
						vie.scale.setTo(0.4);
						this.vie.push(vie);
						tir++;
					}
				}
			}
}
Player.prototype.klaxon = function(){
	if(game.input.keyboard.isDown(Phaser.Keyboard.K)){
		sonKlaxon.play();
	}
}

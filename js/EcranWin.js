MyGame.EcranWin = function (game) {};

MyGame.EcranWin.prototype = {
	init:function(e, nbrEtoiles, needEtoiles){
		
		this.numeroState = e;
		this.nbrEtoiles = nbrEtoiles
		this.needEtoiles = needEtoiles;
	},
				
	preload:function(){		
		
	},// <<PRELOAD

	create:function(){
		//var son1 = game.add.audio("1");
		var son2 = game.add.audio("2");
		etoileSon = game.add.audio("etoile");
		
		background = game.add.sprite(0, 0, "background");
		
		premiere_etoile = game.add.sprite(game.world.width/2 - 400, 250, "etoileVide");
		deuxieme_etoile = game.add.sprite(game.world.width/2, 200, "etoileVide");
		troisieme_etoile = game.add.sprite(game.world.width/2 + 400, 250, "etoileVide");
		
		premiere_etoile.anchor.set(0.5);
		deuxieme_etoile.anchor.set(0.5);
		troisieme_etoile.anchor.set(0.5);
		
		premiere_etoile.scale.set(0.7);
		deuxieme_etoile.scale.set(0.7);
		troisieme_etoile.scale.set(0.7);
		
		if(this.nbrEtoiles == 1){
			this.premiereEtoile();
		}
		else if(this.nbrEtoiles == 2){
			this.premiereEtoile();
			game.time.events.add(Phaser.Timer.SECOND * 0.2, this.deuxiemeEtoile, this);
		}
		else if(this.nbrEtoiles == 3){
			this.premiereEtoile();
			game.time.events.add(Phaser.Timer.SECOND * 0.2, this.deuxiemeEtoile, this);
			game.time.events.add(Phaser.Timer.SECOND * 0.4, this.troisiemeEtoile, this);
		}
		
		
		
		if(this.needEtoiles <= nbrEtoiles)
		{
			this.bouton = new PauseBoutton(game, game.world.width/2 , game.world.height/2 + 320, "buttonMenu", this.win);
		}
		else 
		{
			this.bouton = new PauseBoutton(game, game.world.width/2 , game.world.height/2 + 320, "buttonMenu", this.restart);
		}
		
		
		this.texteP = game.add.text(this.bouton.x, 550, "Niveau reussi !", {font:"120px Luckiest Guy", fill:"#212121"});
		this.texteP.anchor.set(0.5);
		
		if(this.needEtoiles <= nbrEtoiles){
			this.texteS = game.add.text(this.bouton.x, 715, "Tu as assez d'étoiles pour passer au niveau suivant !", {font:"50px Roboto Light", fill:"#212121"});
			this.texteS.anchor.set(0.5);
			
			this.texte = game.add.text(this.bouton.x, this.bouton.y, "Passez au niveau suivant !", {font:"50px Roboto Light", fill:"#000000"});
			this.texte.anchor.set(0.5);
		}
		else {
			this.texteS = game.add.text(this.bouton.x, 715, "Tu n'as pas assez d'étoiles pour passer au niveau suivant !", {font:"50px Roboto Light", fill:"#212121"});
			this.texteS.anchor.set(0.5);
			
			this.texte = game.add.text(this.bouton.x, this.bouton.y, "Recommencer le niveau !", {font:"50px Roboto Light", fill:"#000000"});
			this.texte.anchor.set(0.5);
		}
		
		
		
		var groupAll = game.add.group();
		
		groupAll.add(this.bouton);
		groupAll.add(this.texteP);
		groupAll.add(this.texteS);
		groupAll.add(this.texte);
		
		groupAll.alpha = 0;
		var tweenAlpha = game.add.tween(groupAll).to({alpha:1}, 500, Phaser.Easing.Linear.None);
		tweenAlpha.start();
		
		//this.bouton.onInputOver.add(this.over, this);
		//this.bouton.onInputOut.add(this.out, this);
	},// <<CREATE

	update:function(){

	},// <<UPDATE
	
	win:function(){
		son2.play();
		console.log(this.game.state.states[this.game.state.current].numeroState);
		game.state.start(this.game.state.states[this.game.state.current].numeroState);
	},
	restart:function(){
		son2.play();
		game.state.start(this.game.state.states[this.game.state.current].numeroState-1);
	},
	premiereEtoile:function(){
		premiere_etoile_pleine = game.add.sprite(premiere_etoile.x, premiere_etoile.y, "etoilePleine");
		premiere_etoile_pleine.anchor.set(0.5);
		premiere_etoile_pleine.scale.set(0);

		var tween = game.add.tween(premiere_etoile_pleine.scale).to({x:1.23, y:1.23}, 300, Phaser.Easing.Linear.None);
		tween.onComplete.add(function(){
			etoileSon.play();
		});
		tween.start();
	},
	deuxiemeEtoile:function(){
		deuxieme_etoile_pleine = game.add.sprite(deuxieme_etoile.x, deuxieme_etoile.y, "etoilePleine");
		deuxieme_etoile_pleine.anchor.set(0.5);
		deuxieme_etoile_pleine.scale.set(0);

		var tween = game.add.tween(deuxieme_etoile_pleine.scale).to({x:1.23, y:1.23}, 300, Phaser.Easing.Linear.None);
		tween.onComplete.add(function(){
			etoileSon.play();
		});
		tween.start();
	},
	troisiemeEtoile:function(){
		troisieme_etoile_pleine = game.add.sprite(troisieme_etoile.x, troisieme_etoile.y, "etoilePleine");
		troisieme_etoile_pleine.anchor.set(0.5);
		troisieme_etoile_pleine.scale.set(0);

		var tween = game.add.tween(troisieme_etoile_pleine.scale).to({x:1.23, y:1.23}, 300, Phaser.Easing.Linear.None);
		tween.onComplete.add(function(){
			etoileSon.play();
		});
		tween.start();
	},

};


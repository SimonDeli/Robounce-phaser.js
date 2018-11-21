MyGame.StateMenuCommandes = function (game) {};

MyGame.StateMenuCommandes.prototype = {
		init:function(){
			
		},

		preload:function(){			
			
		},// <<PRELOAD


		create:function(){
			
			
			game.add.plugin(PhaserInput.Plugin);
			
			
			background = game.add.sprite(game.world.width/2, game.world.height/2, "background");
			background.anchor.setTo(0.5);
			personnageFace = game.add.sprite(200, -400, "personnageFace");
			
			background.addChild(personnageFace);
			
			
			
			textePrincipal = game.add.text(game.world.width/2, 100, "Options", {font: "120px Roboto Thin", fill: "#000"});
			textePrincipal.anchor.setTo(0.5);
			
			
			lueurFleche = game.add.sprite(0, 0.5, "lueurFleche");
			lueurFleche.alpha = 0.6;
			lueurFleche.anchor.set(0.5, 0.5);
			
			fleche = game.add.sprite(50, 100, "flecheRetour");
			fleche.anchor.setTo(0, 0.5);
			lueurFleche.position.x = fleche.position.x + fleche.width/2 + 10;
			lueurFleche.position.y = fleche.position.y;

			fleche.inputEnabled = true;
			
			fleche.events.onInputDown.add(function(){
				son1.play();
				game.state.start("menuPrincipal");
			});

			var tweenLueur = game.add.tween(lueurFleche.scale).to({y:2}, 1000, Phaser.Easing.Linear.None);
			var tweenLueurRetour = game.add.tween(lueurFleche.scale).to({y:1}, 1000, Phaser.Easing.Linear.None);
			
			tweenLueur.onComplete.add(function(){
				tweenLueurRetour.start();
			}, this);
			tweenLueurRetour.onComplete.add(function(){
				tweenLueur.start();
			}, this);
			
			tweenLueur.start();
			tweenLueurRetour.start();
			
			
			textCommande = game.add.text(game.world.width/2, 250, "Commandes", {font:"60px Roboto Light", fill:"#000"});
			textDroite = game.add.text(900, 350, "Avancer à droite :", {font:"50px Roboto Thin", fill:"#000"});
			textGauche = game.add.text(900, 450, "Avancer à gauche :", {font:"50px Roboto Thin", fill:"#000"});
			
			textVolume = game.add.text(game.world.width/2, 600, "Volumes", {font:"60px Roboto Light", fill:"#000"});
			textVolumeBruitage = game.add.text(900, 700, "Volume bruitages (entre 0 et 100) :", {font:"50px Roboto Thin", fill:"#000"});
			textVolumeMusique = game.add.text(900, 800, "Volume musiques (entre 0 et 100) :", {font:"50px Roboto Thin", fill:"#000"});
			
			textCommande.anchor.set(0.5, 0);
			textVolume.anchor.set(0.5, 0);
			
			textDroite.anchor.set(1, 0);
			textGauche.anchor.set(1, 0);
			textVolumeBruitage.anchor.set(1, 0);
			textVolumeMusique.anchor.set(1, 0);
			
			
			
			this.inputDroite = game.add.inputField(textDroite.x + 200, textDroite.y, {
				width:150,
				height:80,
				font:"80px Roboto Light",
				fill:"#000"
			});
			//this.inputDroite.width = 200;
			//this.inputDroite.height = 80;
			this.inputDroite.setText(String.fromCharCode(inputDroite));
			this.inputDroite.focusOut.add(function(){
				console.log(this.inputDroite.value);
				var salut = this.inputDroite.value.toUpperCase().charCodeAt(0);
				console.log("salut "+salut);
				inputDroite = salut;
				console.log(inputDroite+" input droite");
			}, this);
			
			
			this.inputGauche = game.add.inputField(textGauche.x + 200, textGauche.y, {
				width:150,
				height:80,
				font:"80px Roboto Light",
				fill:"#000"
			});
			//this.inputGauche.width = 200;
			//this.inputGauche.height = 80;
			this.inputGauche.setText(String.fromCharCode(inputGauche));
			this.inputGauche.focusOut.add(function(){
				console.log(this.inputGauche.value);
				var salut = this.inputGauche.value.toUpperCase().charCodeAt(0);
				console.log("salut "+salut);
				inputGauche = salut;
				console.log(inputGauche+" input gauche");
			}, this);
			
			
			this.inputVolumeBruitage = game.add.inputField(textVolumeBruitage.x + 200, textVolumeBruitage.y, {
				width:150,
				height:80,
				font:"80px Roboto Light",
				fill:"#000"
			});
			//this.inputVolumeBruitage.width = 200;
			//this.inputVolumeBruitage.height = 80;
			//this.inputVolumeBruitage.setText(String.fromCharCode(inputGauche));
			this.inputVolumeBruitage.focusOut.add(function(){
				console.log(this.inputVolumeBruitage.value);
				var salut = parseInt(this.inputVolumeBruitage.value)/100;
				console.log("salut "+salut);
				
				for(var i = 0 ; i<bruitageGrp.length ; i++){
					bruitageGrp[i].volume = salut
				}
				//bruitageGrp.volume = salut;
				
			}, this);
			
			this.inputVolumeMusique = game.add.inputField(textVolumeMusique.x + 200, textVolumeMusique.y, {
				width:150,
				height:80,
				font:"80px Roboto Light",
				fill:"#000"
			});
			//this.inputVolumeMusique.width = 200;
			//this.inputVolumeMusique.height = 80;
			//this.inputVolumeBruitage.setText(String.fromCharCode(inputGauche));
			this.inputVolumeMusique.focusOut.add(function(){
				console.log(this.inputVolumeMusique.value);
				var salut = parseInt(this.inputVolumeMusique.value)/100;
				console.log("salut "+salut);
				
				for(var i = 0 ; i<musiqueGrp.length ; i++){
					musiqueGrp[i].volume = salut
				}
				
			}, this);
			//console.log(this.input);
			
			
			
			
			
			
			var scaleBg1 = game.add.tween(background.scale).to({x:1.1, y:1.1}, 10000, Phaser.Easing.Linear.None);
			var scaleBg2 = game.add.tween(background.scale).to({x:1, y:1}, 10000, Phaser.Easing.Linear.None);
			
			scaleBg1.onComplete.add(function(){
				scaleBg2.start();
			});
			scaleBg2.onComplete.add(function(){
				scaleBg1.start();
			});
			
			scaleBg1.start();
			
			var scalePerso1 = game.add.tween(personnageFace.scale).to({x:1.3, y:1.3}, 10000, Phaser.Easing.Linear.None);
			var scalePerso2 = game.add.tween(personnageFace.scale).to({x:1, y:1}, 10000, Phaser.Easing.Linear.None);
		
			scalePerso1.onComplete.add(function(){
				scalePerso2.start();
			});
			scalePerso2.onComplete.add(function(){
				scalePerso1.start();
			});
			
			scalePerso1.start();
			
			if(musiqueMenu.isPlaying == false){
				musiqueMenu.play();
			}
			if(musiqueNiveau.isPlaying){
				musiqueNiveau.stop();
			}
			
		},// <<CREATE

		update:function(){
			
			//console.log(this.input.value);
		},// <<UPDATE
		
};

// JavaScript Document// JavaScript Document
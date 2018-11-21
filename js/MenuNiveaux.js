MyGame.StateMenuNiveaux = function (game) {};

MyGame.StateMenuNiveaux.prototype = {
		init:function(){
			
		},

		preload:function(){			
			
		},// <<PRELOAD


		create:function(){
			
			//musiqueMenu = game.add.audio("musiqueMenu", 1, true);
			
			background = game.add.sprite(game.world.width/2, game.world.height/2, "background");
			background.anchor.setTo(0.5);
			personnageFace = game.add.sprite(200, -400, "personnageFace");
			
			background.addChild(personnageFace);
			
			
			
			textePrincipal = game.add.text(game.world.width/2, 100, "Choisissez un niveau", {font: "120px Roboto Thin", fill: "#000"});
			textePrincipal.anchor.setTo(0.5);
			
			etoiles = game.add.sprite(game.world.width - 100, textePrincipal.y, "etoiles_Niveau");
			etoiles.anchor.set(0.5);
			etoiles.scale.set(0.8);
			
			texteEtoile = game.add.text(etoiles.x - 80, textePrincipal.y, nbrEtoiles, {font: "60px Roboto Light", fill: "#000"})
			texteEtoile.anchor.set(0.5);
			
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
			
			var objMenu = {
				width:224,
				height:224,
				nombreNiveau:6,
				colonnes:5,
				marge:250,
				//espace:(game.world.width - this.marge*2)/(this.colonnes-1),
				
				margeTop: 250
			};
			
			objMenu.ligne = 3;
			objMenu.espace = (game.world.width - objMenu.marge*2)/(objMenu.colonnes - 1);
			objMenu.espaceY = (game.world.height - objMenu.margeTop)/(objMenu.ligne);
			
			console.log(objMenu.espace);
			var tableau = new Array();
			this.tableauOmbre = new Array();
			var compteur = 0;
			for(var y = 0 ; y<objMenu.ligne; y++){
				console.log("Marge Top : "+objMenu.margeTop);
				console.log("Espace : "+objMenu.espaceY);
				console.log(objMenu.margeTop + objMenu.espaceY*y);
				for(var i = 0 ; i<objMenu.colonnes ; i++){
					//var test = Math.trunc(i/objMenu.colonnes);
					//console.log(test);
					var ombre = game.add.sprite(objMenu.marge + objMenu.espace*i + 3, objMenu.margeTop + objMenu.espaceY*y - 30, "ombreBouton_Niveau");
					ombre.alpha = 0.5;
					this.tableauOmbre.push(ombre);
					//var bouton = game.add.button(objMenu.marge+objMenu.espace*i, objMenu.margeTop + objMenu.espaceY*y , "boutonMenu");
					var bouton;
					if(objMenu.colonnes*y+(i+1) <= objMenu.nombreNiveau)
						{
							bouton = new PauseBoutton(game, objMenu.marge+objMenu.espace*i, objMenu.margeTop + objMenu.espaceY*y, "boutonMenu_Niveau"+(objMenu.colonnes*y+(i+1)), null);
							
						}
					else 
						{
							bouton = new PauseBoutton(game, objMenu.marge+objMenu.espace*i, objMenu.margeTop + objMenu.espaceY*y, "boutonMenu_Niveau", null);
							
						}
					bouton.anchor.setTo(0.5, 0);
					ombre.anchor.setTo(0.5, 0);
					bouton.id = compteur;
					tableau.push(bouton);
					compteur++;
				}
			}
			
			
			
			
			tableauText = new Array();
			
			for(var i = 0 ; i < objMenu.nombreNiveau ; i++){
				var numeroNiveau = game.add.text(tableau[i].x, tableau[i].y + tableau[i].height/2, i+1, {font: "50px Calibri Light", fill: "#fff"});
				
				tableauText.push(numeroNiveau.text);
				numeroNiveau.anchor.setTo(0.5);
				
			}
			//console.log(tableauText);
			
			tableau[0].etoiles = 0;
			tableau[1].etoiles = 2;
			tableau[2].etoiles = 5;
			tableau[3].etoiles = 7;
			tableau[4].etoiles = 11;
			tableau[5].etoiles = 13;
			
			for(var i = 0 ; i<tableau.length ; i++){
					
				if(tableau[i].etoiles > nbrEtoiles){

					var cadenas = game.add.sprite(tableau[i].x, tableau[i].y + 20, "cadenas_Niveau");
					cadenas.anchor.set(0.5, 0);
				}				
			}
			for(var i = 0 ; i<tableau.length ; i++){
					
				if(tableau[i].etoiles > nbrEtoiles){

					var etoileRestante = game.add.text(tableau[i].x, tableau[i].y + 95	, tableau[i].etoiles, {font: "50px Calibri", fill:"#000"});
					etoileRestante.anchor.set(0.5, 0);
				}				
			}
			
			for(var i = 0 ; i<liste_niveau.length ; i++){
				if(liste_niveau[i] == 0){
					var etoilesNiveau = game.add.sprite(tableau[i].x, tableau[i].y+190, "zero_etoile");
					etoilesNiveau.anchor.set(0.5);
				}
				else if(liste_niveau[i] == 1){
					var etoilesNiveau = game.add.sprite(tableau[i].x, tableau[i].y+190, "une_etoile");
					etoilesNiveau.anchor.set(0.5);
				}
				else if(liste_niveau[i] == 2){
					var etoilesNiveau = game.add.sprite(tableau[i].x, tableau[i].y+190, "deux_etoiles");
					etoilesNiveau.anchor.set(0.5);
				}
				else if(liste_niveau[i] == 3){
					var etoilesNiveau = game.add.sprite(tableau[i].x, tableau[i].y+190, "trois_etoiles");
					etoilesNiveau.anchor.set(0.5);
				}
			}
			
			for(var i = 0 ; i < tableau.length ; i++){
				if(nbrEtoiles >= tableau[i].etoiles)
				{
					tableau[i].onInputUp.add(
						function(evt, p1, p2, idx){
							/*musiqueMenu.stop();
							musiqueMenuPlay = false;*/
							game.state.start(idx);
							son2.play();
							
								
						},
					this, 0, i+2);
				
				}
				else {
					tableau[i].onInputUp.add(
						function(evt, p1, p2, idx){
							error.play();
								
						},
					this, 0, i+2);
				}
					tableau[i].onInputOver.add(this.boutonScaleOver, this);
					tableau[i].onInputOut.add(this.boutonScaleOut, this);
				}		
			
			
			
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
			//console.log(musiqueMenu.isPlaying);
		},// <<UPDATE
		boutonScaleOver:function(bouton){
			var tween = game.add.tween(bouton.scale).to({x:1.05, y:1.05}, 200, Phaser.Easing.Circular.Out);
			var tweenOmbre = game.add.tween(this.tableauOmbre[bouton.id].scale).to({x:1.05, y:1.05}, 200, Phaser.Easing.Circular.Out);

			tween.start();
			tweenOmbre.start();
			
		},
		boutonScaleOut:function(bouton){
			var tween = game.add.tween(bouton.scale).to({x:1, y:1}, 200, Phaser.Easing.Circular.Out);
			var tweenOmbre = game.add.tween(this.tableauOmbre[bouton.id].scale).to({x:1, y:1}, 200, Phaser.Easing.Circular.Out);

			tween.start();
			tweenOmbre.start();
			
		},
		
};

// JavaScript Document
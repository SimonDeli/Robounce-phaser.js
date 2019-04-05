/*var game = new Phaser.Game(1920, 1080, Phaser.AUTO, null, {
      		preload: preload, create: create, update: update
    		});*/

MyGame.StateTuto = function (game) {};

MyGame.StateTuto.prototype = {
	init:function(){


	},


		preload:function(){
			game.load.image("plateforme1", "assets/tuto/plateformes/plateforme2.png");
			game.load.image("plateforme2", "assets/tuto/plateformes/plateforme3.png");
			game.load.image("plateforme3", "assets/tuto/plateformes/plateforme4.png");

			game.load.image("explicationPerso", "assets/explications/personnage.png");
			game.load.image("explicationPlateformeN", "assets/explications/plateformeNormale.png");
			game.load.image("explicationPlateformeR", "assets/explications/plateformeRebond.png");
			game.load.image("explicationBumper", "assets/explications/bumper.png");
			game.load.image("explicationBouton", "assets/explications/interrupteurPorte.png");
			game.load.image("explicationCommencer", "assets/explications/commencer.png");
			game.load.image("explicationTirs", "assets/explications/nombreTirs.png");



		},// <<PRELOAD


		create:function(){


			var current =game.state.current;
			var _this = this;



			console.log("current : "+current);
			//PHYSICS
			game.physics.startSystem(Phaser.Physics.P2JS);
			game.physics.p2.gravity.y = 5000;
			game.physics.p2.setImpactEvents(true);

			//ADD SPRITE
			background = game.add.sprite(0, 0, "background");

				//BORD
			fonctionsService.creationBordure(); // voir "FonctionsAutre.js"

				//PLATEFORME
			plateforme1 = new Plateforme(game, 1500, 250, "plateforme1", debug);
				plateforme1.body.x = game.world.width - plateforme1.width/2;
			plateforme2 = new Plateforme(game, 0, 500, "plateforme2", debug);
				plateforme2.body.x = game.world.width-plateforme2.width/2;
				plateforme2.body.y = plateforme1.body.y+plateforme1.height/2+plateforme2.height/2;
			plateforme3 = new Plateforme(game, 0, 0, "plateforme3", debug);
				plateforme3.body.x = 0 + plateforme3.width/2;
				plateforme3.body.y = plateforme3.height/2;
			plateforme_sol1 = new Plateforme(game, game.world.width/2,  game.world.height-50, "plateforme1", debug);
				plateforme_sol1.scale.set(0.7, 1.3);
				plateforme_sol1.body.x = plateforme_sol1.width/2;
			plateforme_sol2 = new Plateforme(game, 0, 0, "plateforme1", debug);
				 plateforme_sol2.scale.x =  plateforme_sol1.scale.x;
				 plateforme_sol2.scale.y =  plateforme_sol1.scale.y;
				 plateforme_sol2.body.x = game.world.width -  plateforme_sol2.width/2;
				 plateforme_sol2.body.y =  plateforme_sol1.body.y;
			plateforme_sol3 = new Plateforme(game, 0, 0, "plateforme1", debug);
				plateforme_sol3.scale.x =  plateforme_sol1.scale.x+0.1;
				plateforme_sol3.scale.y =  plateforme_sol1.scale.y;
				plateforme_sol3.body.x = game.world.width/2;
				plateforme_sol3.body.y =  plateforme_sol1.body.y - 180;
			plateformeRebond1 = new Plateforme(game, 800, 65, "plateformeRebond", debug);
				plateformeRebond1.body.x = plateforme3.width + plateformeRebond1.width/2;
				plateformeRebond1.body.y = plateformeRebond1.height/2;

				//BUMPER
			bumper1 = new Bumper(game, 500, game.world.height-190, "bumper", debug);
				bumper1.body.y = plateforme_sol1.body.y-10;
			bumper2 = new Bumper(game, 1400, game.world.height-190, "bumper", debug);
				bumper2.body.y = plateforme_sol1.body.y-10;

			levelComplete = new Bumper(game, game.world.width-20, game.world.height-190, "bumper", debug);
				levelComplete.body.y = plateforme_sol1.body.y-10;
			levelComplete.anchor.setTo(0.5);
			levelComplete.scale.set(0.8, 1);
			levelComplete.alpha = 0;



				//PORTES
			lumierePorteV = new Lumiere(game, "lumierePorteViolet");
			lueurePorteV = new Lumiere(game, "lueurePorteViolet");
			porteV = new Porte(game, 1700, game.world.height-320, lumierePorteV, lueurePorteV, null, "vertical", "laserViolet", debug);
				porteV.deplacement = porteV.height - 15;
				porteV.body.y = plateforme2.body.y+plateforme2.height/2+porteV.height/2;
			/*porteV.addChild(lumierePorteV);
			porteV.addChild(lueurePorteV);*/

			lueurePorteV.tweenScaleBoucle(0.5, 0, 800);
			lumierePorteV.tweenScaleBoucle(0.3, 0.3, 800);

				//BOUTONS
			boutonV = new Bouton(game, 1860, 100, "porte", porteV, null, 0, "vertical", "boutonViolet", debug);
				boutonV.body.x = game.world.width - boutonV.width/2;
				boutonV.deplacement = +boutonV.width/2;



				//CREATION GROUPES
			fonctionsService.creationGrp(); //voir "FonctionsAutre.js"

				//ADD GROUPES
					//BOUTONS
			boutonGrp.add(boutonV);

					//PORTES
			porteGrp.add(porteV);

					//BUMPER
			bumperGrp.add(bumper1);
			bumperGrp.add(bumper2);

					//BORDS
			plateformeGrp.add(bordHorizontalB);
			plateformeGrp.add(bordHorizontalH);
			plateformeGrp.add(bordVerticalG);
			plateformeGrp.add(bordVerticalD);

					//PLATEFORMES
			plateformeGrp.add(plateforme_sol1);
			plateformeGrp.add(plateforme_sol2);
			plateformeGrp.add(plateforme_sol3);
			plateformeGrp.add(plateforme1);
			plateformeGrp.add(plateforme2);
			plateformeGrp.add(plateforme3);

			rebondGrp.add(plateformeRebond1);

				//PERSONNAGE
			personnage = new Player(game, 80, 800, "reposD", debug);
			personnage.nbrTir = 2;
			personnage.affichageVie();

				//CREATION COLLISION GROUPE
			fonctionsService.creationCollisionGrp(); //voir "FonctionsAutre.js"

				//SET SHAPES (les bumpers et bouton sont directement fait dans leur classe)
			plateforme_sol1.body.setRectangleFromSprite(plateforme_sol1);
			plateforme_sol2.body.setRectangleFromSprite(plateforme_sol2);
			plateforme_sol3.body.setRectangleFromSprite(plateforme_sol3);

			plateforme1.body.setRectangleFromSprite(plateforme1);
			plateforme2.body.loadPolygon("physicsDataTuto", "plateforme3");
			plateforme3.body.loadPolygon("physicsDataTuto", "plateforme4");

			plateformeRebond1.body.loadPolygon("physicsDataTuto", "plateformeRebond");

				//SET COLLISIONS_GROUPES
					//bumper
			for(var i = 0 ; i < bumperGrp.length ; i++){
				bumperGrp.children[i].body.setCollisionGroup(bumperCollisionGroup);
			}
					//plateforme
			for(var i = 0 ; i < plateformeGrp.length ; i++){
				plateformeGrp.children[i].body.setCollisionGroup(plateformeCollisionGroup);
			}
					//plateforme_rebond
			for(var i = 0 ; i < rebondGrp.length ; i++){
				rebondGrp.children[i].body.setCollisionGroup(plateformeRebondCollisionGroup);
			}
					//boutons
			for(var i = 0 ; i < boutonGrp.length ; i++){
				boutonGrp.children[i].body.setCollisionGroup(boutonCollisionGroup);
			}

					//portes
			for(var i = 0 ; i < porteGrp.length ; i++){
				porteGrp.children[i].body.setCollisionGroup(porteCollisionGroup);
			}
						//personnage
			personnage.body.setCollisionGroup(personnageCollisionGroup);
					//sortie
			levelComplete.body.setCollisionGroup(sortieCollisionGroup);

				//COLLIDES (certains sont dans la fonction "tirProjectiles --> "FonctionsAutre.js")
					//Plateforme -> Personnage

			personnage.body.collides(plateformeCollisionGroup, collisionsService.impactPersoPlateforme, this);
			for(var i = 0 ; i < plateformeGrp.length ; i++){
				plateformeGrp.children[i].body.collides(personnageCollisionGroup);
			}
					//Personnage -> Bumper
			personnage.body.collides(bumperCollisionGroup, collisionsService.impactPersoBumper, this);
			for(var i = 0 ; i < bumperGrp.length ; i++){
				bumperGrp.children[i].body.collides(personnageCollisionGroup);
			}
					//Personnage -> Porte
			personnage.body.collides(porteCollisionGroup);
			for(var i = 0 ; i < porteGrp.length ; i++){
				porteGrp.children[i].body.collides(personnageCollisionGroup);
			}

					//Personnage -> Sortie
			levelComplete.body.collides(personnageCollisionGroup);
			personnage.body.collides(sortieCollisionGroup, collisionsService.impactPersoSortie, this);

				//CIBLE (curseur)
			cible = game.add.sprite(-10, -10, "cible");
			cible.anchor.set(0.5);
			cible.scale.set(0.5);

				//MOUSE CAPTURE (permet la capture du clique de la souris)
			game.input.mouse.capture = true;

			pauseBoutton = game.input.keyboard.addKey(Phaser.Keyboard.ESC);
			pauseBoutton.onDown.add(fonctionsService.pauseFunction, this);

			this.informations = game.add.sprite(0, 0, "ecranInformations");
			this.informations.alpha = 0;


			this.explicationGrp = game.add.group();

			this.explicationPerso = game.add.sprite(70, 700, "explicationPerso");
			this.explicationPlateformeN = game.add.sprite(950, 500, "explicationPlateformeN");
			this.explicationPlateformeR = game.add.sprite(850, 200, "explicationPlateformeR");
			this.explicationBumper = game.add.sprite(300, 750, "explicationBumper");
			this.explicationBouton = game.add.sprite(1350, 50, "explicationBouton");
			this.explicationTirs = game.add.sprite(20, 50, "explicationTirs");


			this.explicationPerso.anchor.set(0, 1);
			this.explicationPlateformeN.anchor.set(0, 0);

			this.explicationCommencer = game.add.button(0, 0, "explicationCommencer", this.sortirPauseExplication, this);
			this.explicationCommencer.anchor.set(0.5);
			this.explicationCommencer.x = game.world.width - this.explicationCommencer.width+50;
			this.explicationCommencer.y = game.world.height - this.explicationCommencer.height - 500;

			this.tweenInfos1 = game.add.tween(this.explicationGrp).to({alpha:1}, 100, Phaser.Easing.Linear.None);
			this.tweenInfos2 = game.add.tween(this.explicationGrp).to({alpha:0}, 100, Phaser.Easing.Linear.None);

			this.explicationGrp.add(this.explicationPlateformeN);
			this.explicationGrp.add(this.explicationPlateformeR);
			this.explicationGrp.add(this.explicationBumper);
			this.explicationGrp.add(this.explicationBouton);
			this.explicationGrp.add(this.explicationTirs);


			this.pauseDebut = true;

			this.key1 = game.input.keyboard.addKey(Phaser.Keyboard.I);
			this.key1.onDown.add(fonctionsService.afficherExplication, this);

			this.key2 = game.input.keyboard.addKey(Phaser.Keyboard.I);
			this.key2.onUp.add(fonctionsService.afficherExplication, this);

		},// <<CREATE

		update:function(){

			//suivi du sprite "cible" du pointeur de la souris (par défaut à -10, -10)
			cible.x = game.input.x || -10;
			cible.y = game.input.y || -10;

			personnage.walk();
			personnage.repos();
			personnage.tir();
			if(this.pauseDebut){
				game.paused = true;
			}
			fonctionsService.gamePerdu();
			personnage.klaxon();

			if(personnage.right.isDown)
				console.log(personnage.right);

			fonctionsService.verifMusiqueEnCours();
			//console.log(musiqueMenu.isPlaying);


		},// <<UPDATE

		sortirPauseExplication:function(){
			if(this.pauseDebut === true){
				this.explicationGrp.alpha = 0;
				this.explicationPerso.destroy();
				this.explicationCommencer.destroy();
				game.paused = false;
				this.pauseDebut = false;
				this.infosAfficher = false;
				/*musiqueMenu.play();
				musiqueMenu.stop();*/

			}

		},





};

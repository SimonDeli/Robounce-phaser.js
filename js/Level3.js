MyGame.StateLevel3 = function (game) {};

MyGame.StateLevel3.prototype = {

	init:function(){
		/*var plateforme_sol1;

		var plateforme1;
		var plateforme2;
		var plateforme3;
		var plateforme4;

		var plateformeRebond1;
		var plateformeRebond2;
		var plateformeRebond3;

		var boutonO;
		var plateformeRebondOr;

		var boutonV;
		var porteV;
		var porteV2;
		var lueurePorteV;
		var lueurePorteV2;
		var lumierePorteV;
		var lumierePorteV2;

		var boutonVe;
		var porteVe;
		var porteVe2;
		var lueurePorteVe;
		var lueurePorteVe2;
		var lumierePorteVe;
		var lumierePorteVe2;



		var _this = this;*/


			//VARIABLES COMMUNES
		//voir "VariableCommunes.js"

	},
		preload:function(){

			game.load.image("plateforme1", "assets/level_3/plateformes/plateforme1.png");
			game.load.image("plateforme2", "assets/level_3/plateformes/plateforme2.png");
			game.load.image("plateforme3", "assets/level_3/plateformes/plateforme3.png");
			game.load.image("plateforme4", "assets/level_3/plateformes/plateforme4.png");

			game.load.image("plateforme_sol1", "assets/level_3/plateformes/plateformeSol1.png");

			game.load.image("explicationPlateforme", "assets/explications/plateformeTournante.png");
			game.load.image("explicationInterrupteur", "assets/explications/interrupteurPlateforme.png");
			game.load.image("explicationCommencer", "assets/explications/commencer.png");

		},// <<PRELOAD


		create:function(){

			checkSortie = true;
			//PHYSICS
			game.physics.startSystem(Phaser.Physics.P2JS);
			game.physics.p2.gravity.y = 5000;
			game.physics.p2.setImpactEvents(true);

			//ADD SPRITE
			background = game.add.sprite(0, 0, "background");

				//BORD
			fonctionsService.creationBordure(); // voir "FonctionsAutre.js"

				//PLATEFORME
			plateforme1 = new Plateforme(game, 0, 0, "plateforme1", debug);
				plateforme1.body.x = 0 + plateforme1.width/2;
				plateforme1.body.y = 0 + plateforme1.height/2;
				//plateforme1.alpha = 0;

			plateforme2 = new Plateforme(game, 0, 0, "plateforme2", debug);
				plateforme2.body.x = plateforme1.width + 200 + plateforme2.width/2;
				plateforme2.body.y = 0 + plateforme2.height/2;

			plateforme3 = new Plateforme(game, 0, 0, "plateforme3", debug);
				plateforme3.body.x = plateforme2.body.x + plateforme2.width+200;
				plateforme3.body.y = 0 + plateforme3.height/2;

			plateformeRebondOr = new Plateforme(game, 0,0, "plateformeRebondOrange", debug);
				plateformeRebondOr.body.x = 0 + plateformeRebondOr.width/2;
				plateformeRebondOr.body.y = game.world.height - 200;

			plateforme_sol1 = new Plateforme(game, 0, 0, "plateforme_sol1", debug);
				//plateforme_sol1.body.x = plateformeRebondOr.width + plateforme_sol1.width/2;
				plateforme_sol1.body.x = game.world.width - plateforme_sol1.width/2;
				plateforme_sol1.body.y = plateformeRebondOr.body.y + plateforme_sol1.height/2 + plateformeRebondOr.height/2;;

			plateforme4 = new Plateforme(game, 0, 0, "plateforme4", debug);
				plateforme4.body.x = game.world.width - plateforme4.width/2;
				plateforme4.body.y = plateforme_sol1.body.y - plateforme_sol1.height/2 - plateforme4.height/2 - 245;
				//plateforme4.scale.y = 1.1;

			plateformeRebond1 = new Plateforme(game, 0, 0, "plateformeRebond", debug);
				plateformeRebond1.body.x = 0 + plateformeRebond1.width/2;
				plateformeRebond1.body.y = plateforme1.height + plateformeRebond1.height/2;

			plateformeRebond2 = new Plateforme(game, 0, 0, "plateformeRebond45_2", debug);
				plateformeRebond2.body.x = plateforme3.body.x;
				plateformeRebond2.body.y = plateforme3.height - plateformeRebond2.height/2 + 15;

			plateformeRebond3 = new Plateforme(game, 0, 0, "plateformeRebond", debug);
				plateformeRebond3.body.x = game.world.width - plateformeRebond3.width/2 - plateforme4.width;
				plateformeRebond3.body.y = plateforme4.body.y;
				plateformeRebond3.angle = 180;

			levelComplete = new Bumper(game, game.world.width-20, game.world.height-190, "bumper", debug);
				levelComplete.body.y = plateforme_sol1.body.y-80;
			levelComplete.anchor.setTo(0.5);
			levelComplete.scale.set(0.8, 1);
			levelComplete.alpha = 0;



				//PORTES
			lumierePorteV = new Lumiere(game, "lumierePorteViolet");
			lueurePorteV = new Lumiere(game, "lueurePorteViolet");
			porteV = new Porte(game, 0, 0,  lumierePorteV, lueurePorteV,null, "horizontal", "laserViolet_90", debug);
				porteV.body.x = plateforme1.width + porteV.width/2;
				porteV.body.y = 100;
				porteV.deplacement = -porteV.width + 15;
				lueurePorteV.angle = 90;

			lueurePorteV.tweenScaleBoucle(0.5, 0, 800);
			lumierePorteV.tweenScaleBoucle(0.3, 0.3, 800);


			lumierePorteV2 = new Lumiere(game, "lumierePorteViolet");
			lueurePorteV2 = new Lumiere(game, "lueurePorteViolet");
			porteV2 = new Porte(game, 0, 0, lumierePorteV2, lueurePorteV2, null, "horizontal", "laserViolet_90", debug);
				porteV2.body.x = plateforme2.body.x + plateforme2.width/2*0.8 + porteV2.width/2 + porteV2.width - 15;
				porteV2.body.y = porteV.body.y;
				porteV2.porteOuverte = true;
				porteV2.deplacement = -porteV2.width + 15;
				lueurePorteV2.angle = 90;

			lueurePorteV2.tweenScaleBoucle(0.5, 0, 800);
			lumierePorteV2.tweenScaleBoucle(0.3, 0.3, 800);
			lumierePorteV2.alpha = 0;

			lumierePorteVe = new Lumiere(game, "lumierePorteVert");
			lueurePorteVe = new Lumiere(game, "lueurePorteVert");
			porteVe = new Porte(game, 0, 0,  lumierePorteVe, lueurePorteVe,null, "vertical","laserVert",  debug);
				porteVe.body.x = 1350;
				porteVe.body.y = plateforme_sol1.body.y - plateforme_sol1.height/2 - porteVe.height/2;

				porteVe.deplacement = porteVe.height - 18;

			lueurePorteVe.tweenScaleBoucle(0.5, 0, 800);
			lumierePorteVe.tweenScaleBoucle(0.3, 0.3, 800);

			lumierePorteVe2 = new Lumiere(game, "lumierePorteVert");
			lueurePorteVe2 = new Lumiere(game, "lueurePorteVert");
			porteVe2 = new Porte(game, 0, 0,  lumierePorteVe2, lueurePorteVe2, null, "vertical", "laserVert",  debug);
				porteVe2.body.x = porteVe.body.x + 300;
				porteVe2.body.y = porteVe.body.y + porteVe2.height - 15;
				porteVe2.deplacement = -(porteVe2.height - 15);
				porteVe2.porteOuverte = true;

			lueurePorteVe2.tweenScaleBoucle(0.5, 0, 800);
			lumierePorteVe2.tweenScaleBoucle(0.3, 0.3, 800);
			lumierePorteVe2.alpha = 0;

				//BOUTONS
			boutonV = new Bouton(game, 1860, 200, "doublePorte", porteV, porteV2, 0, "vertical", "boutonViolet", debug);

				boutonV.deplacement = boutonV.width/2 - 5;
				boutonV.body.x = game.world.width - boutonV.width/2;
				boutonV.body.y = plateforme4.body.y - 30;

			boutonVe = new Bouton(game, 0, 0, "doublePorte", porteVe, porteVe2, 0, "horizontal", "boutonVert_90", debug);
				boutonVe.body.x = plateforme2.body.x + plateforme2.width/2 + boutonVe.width/2 + 40;
				boutonVe.body.y = boutonVe.height/2;
				boutonVe.deplacement = -boutonVe.height/2 + 5;

			boutonO = new Bouton(game, 0, 0, "plateformeRebond", plateformeRebondOr, null, 90, "vertical", "boutonRondOrange");
				boutonO.body.x = plateforme1.width + boutonO.width/2 + 100;
				boutonO.body.y = boutonO.height/2;


				//CREATION GROUPES
			fonctionsService.creationGrp(); //voir "FonctionsAutre.js"

				//ADD GROUPES
					//BOUTONS
			boutonGrp.add(boutonV);
			boutonGrp.add(boutonVe);
			boutonGrp.add(boutonO);

					//PORTES
			porteGrp.add(porteV);
			porteGrp.add(porteVe);
			porteGrp.add(porteV2);
			porteGrp.add(porteVe2);

					//BORDS
			plateformeGrp.add(bordHorizontalB);
			plateformeGrp.add(bordHorizontalH);
			plateformeGrp.add(bordVerticalG);
			plateformeGrp.add(bordVerticalD);

					//PLATEFORMES
			plateformeGrp.add(plateforme_sol1);


			plateformeGrp.add(plateforme1);
			plateformeGrp.add(plateforme2);
			plateformeGrp.add(plateforme3);
			plateformeGrp.add(plateforme4);

			rebondGrp.add(plateformeRebond1);
			rebondGrp.add(plateformeRebond2);
			rebondGrp.add(plateformeRebond3);
			rebondGrp.add(plateformeRebondOr);

			//plateformeGrp.alpha = 0.5;

				//PERSONNAGE
			personnage = new Player(game, 280, 500, "reposD", debug);
			personnage.nbrTir = 8;
			personnage.affichageVie();

			levelComplete.etoiles_3 = personnage.nbrTir - 5;
			levelComplete.etoiles_2 = personnage.nbrTir - 7;
			levelComplete.etoiles_1 = personnage.nbrTir - 8;
			levelComplete.needEtoiles = 7;
			levelComplete.numeroNiveau = 3;

				//CREATION COLLISION GROUPE
			fonctionsService.creationCollisionGrp(); //voir "FonctionsAutre.js"

				//SET SHAPES (les bumpers et bouton sont directement fait dans leur classe)
			plateforme_sol1.body.setRectangleFromSprite(plateforme_sol1);



			//plateforme1.body.loadPolygon("physicsData", "plateforme1");
			plateforme1.body.loadPolygon("physicsData3", "plateforme1");
			plateforme2.scale.x = 0.8;
			plateforme2.body.loadPolygon("physicsData3", "plateforme2");
			plateforme3.body.loadPolygon("physicsData3", "plateforme3");
			plateforme4.body.loadPolygon("physicsData3", "plateforme4");


			plateformeRebond1.body.loadPolygon("physicsData3", "RebondHautGauche");
			plateformeRebond2.body.loadPolygon("physicsData3", "plateformeRebond45Bas");
			plateformeRebond3.body.loadPolygon("physicsData3", "RebondBasDroite");
			plateformeRebondOr.body.loadPolygon("physicsData3", "RebondBasDroite");

			//plateformeRebond.body.loadPolygon("physicsData", "plateformeRebond");

				//SET COLLISIONS_GROUPES
					//bumper
			/*for(var i = 0 ; i < bumperGrp.length ; i++){
				bumperGrp.children[i].body.setCollisionGroup(bumperCollisionGroup);
			}*/
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
			/*personnage.body.collides(bumperCollisionGroup, collisionsService.impactPersoBumper, this);
			for(var i = 0 ; i < bumperGrp.length ; i++){
				bumperGrp.children[i].body.collides(personnageCollisionGroup);
			}*/
					//Personnage -> Porte
			personnage.body.collides(porteCollisionGroup);
			for(var i = 0 ; i < porteGrp.length ; i++){
				porteGrp.children[i].body.collides(personnageCollisionGroup);
			}
					//Personnage -> Rebond
			personnage.body.collides(plateformeRebondCollisionGroup);
			for(var i = 0 ; i < porteGrp.length ; i++){
				rebondGrp.children[i].body.collides(personnageCollisionGroup);
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

			this.explicationGrp = game.add.group();



			this.explicationPlateformeT = game.add.sprite(250, 800, "explicationPlateforme");
			this.explicationBouton = game.add.sprite(520, 70, "explicationInterrupteur");


			this.explicationCommencer = game.add.button(0, 0, "explicationCommencer", this.sortirPauseExplication, this);
			this.explicationCommencer.x = game.world.width - this.explicationCommencer.width - 50;
			this.explicationCommencer.y = game.world.height - this.explicationCommencer.height - 100;

			this.tweenInfos1 = game.add.tween(this.explicationGrp).to({alpha:1}, 100, Phaser.Easing.Linear.None);
			this.tweenInfos2 = game.add.tween(this.explicationGrp).to({alpha:0}, 100, Phaser.Easing.Linear.None);

			this.explicationGrp.add(this.explicationPlateformeT);
			this.explicationGrp.add(this.explicationBouton);


			this.pauseDebut = true;



			fonctionsService.affichageEtoile();
			fonctionsService.iconeInformation();

			this.informations = game.add.sprite(0, 0, "ecranInformations");
			this.informations.alpha = 0;

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
			personnage.siIlTombeIlReapparait();
			if(this.pauseDebut){
				game.paused = true;
			}
			fonctionsService.gamePerdu();
			personnage.klaxon();

			fonctionsService.verifMusiqueEnCours();

		},// <<UPDATE
		sortirPauseExplication:function(){
			if(this.pauseDebut === true){
				this.explicationGrp.alpha = 0;
				this.explicationCommencer.destroy();
				game.paused = false;
				this.pauseDebut = false;
				this.infosAfficher = false;
			}
		},

		afficherExplication:function(){
			if(this.pauseDebut === false)
			{
				if(this.infosAfficher === false){
					//this.explicationGrp.alpha = 1;
					this.tweenInfos1.start();
					this.infosAfficher = true;
				}
				else{
					//this.explicationGrp.alpha = 0;
					this.tweenInfos2.start();
					this.infosAfficher = false;
				}
			}

		},
}

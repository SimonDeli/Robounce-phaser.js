MyGame.StateLevel6 = function (game) {};

MyGame.StateLevel6.prototype = {

	init:function(){

	},
		preload:function(){

			game.load.image("plateforme1", "assets/level_6/plateformes/plateforme1.png");
			game.load.image("plateforme2", "assets/level_6/plateformes/plateforme2.png");
			game.load.image("plateforme3", "assets/level_6/plateformes/plateforme3.png");
			game.load.image("plateforme4", "assets/level_6/plateformes/plateforme4.png");
			game.load.image("plateforme5", "assets/level_6/plateformes/plateforme5.png");
			game.load.image("plateforme6", "assets/level_6/plateformes/plateforme6.png");
			game.load.image("plateforme7", "assets/level_6/plateformes/plateforme7.png");

			game.load.image("plateforme_sol1", "assets/level_6/plateformes/plateforme_sol1.png");

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
				plateforme1.body.x = game.world.width/2 + 300;
				plateforme1.body.y = 0 + plateforme1.height/2;
				//plateforme1.alpha = 0;

			plateforme_sol1 = new Plateforme(game, 0, 0, "plateforme_sol1", debug);
				//plateforme_sol1.body.x = plateformeRebondOr.width + plateforme_sol1.width/2;
				plateforme_sol1.body.x = game.world.width/2;
				plateforme_sol1.body.y = 1021;

			plateforme7 = new Plateforme(game, 0, 0, "plateforme7", debug);
				plateforme7.body.x = 600;
				plateforme7.body.y = plateforme_sol1.body.y - plateforme_sol1.height/2 - plateforme7.height/2;

			plateforme6 = new Plateforme(game, 0, 0, "plateforme6", debug);
				plateforme6.body.x = plateforme7.body.x - plateforme6.width/2 + plateforme7.width/2;
				plateforme6.body.y = plateforme7.body.y - plateforme7.height/2 - plateforme6.height/2;

			plateforme5 = new Plateforme(game, 0, 0, "plateforme5", debug);
				plateforme5.body.x = plateforme6.body.x - plateforme6.width/2 + plateforme5.width/2;
				plateforme5.body.y = plateforme6.body.y - plateforme6.height/2 - plateforme5.height/2;

			plateforme4 = new Plateforme(game, 0, 0, "plateforme4", debug);
				plateforme4.body.x = plateforme6.body.x;
				plateforme4.body.y = plateforme5.body.y - plateforme5.height/2 - plateforme4.height/2;

			plateforme3 = new Plateforme(game, 0, 0, "plateforme3", debug);
				plateforme3.body.x = plateforme5.body.x - plateforme5.width/2 + plateforme3.width/2;
				plateforme3.body.y = plateforme4.body.y - plateforme4.height/2 - plateforme3.height/2;

			plateforme2 = new Plateforme(game, 0, 0, "plateforme2", debug);
				plateforme2.body.x = plateforme3.body.x + plateforme2.width/2 - plateforme3.width/2;
				plateforme2.body.y = plateforme3.body.y - plateforme3.height/2 - plateforme2.height/2;





			plateformeRebond1 = new Plateforme(game, 0, 0, "plateformeRebond", debug);
				plateformeRebond1.body.x = 0 + plateformeRebond1.width/2;
				plateformeRebond1.body.y = 0 + plateformeRebond1.height/2;

			plateformeRebond2 = new Plateforme(game, 0, 0, "plateformeRebond", debug);
				plateformeRebond2.body.x = plateforme1.body.x - plateforme1.width/2 - plateformeRebond2.width/2;
				plateformeRebond2.body.y = 0 + plateformeRebond2.height/2;
				plateformeRebond2.angle = 90;

			plateformeRebond3 = new Plateforme(game, 0, 0, "plateformeRebond", debug);
				plateformeRebond3.body.x = plateforme1.body.x + plateforme1.width/2 + plateformeRebond3.width/2;
				plateformeRebond3.body.y = 0 + plateformeRebond3.height/2;

			plateformeRebond4 = new Plateforme(game, 0, 0, "plateformeRebond", debug);
				plateformeRebond4.body.x = game.world.width - plateformeRebond4.width/2;
				plateformeRebond4.body.y = 0 + plateformeRebond4.height/2;
				plateformeRebond4.angle = 180;

			plateformeRebond5 = new Plateforme(game, 0, 0, "plateformeRebond", debug);
				plateformeRebond5.body.x = plateformeRebond4.body.x;
				plateformeRebond5.body.y = plateformeRebond4.body.y + plateformeRebond4.height;
				plateformeRebond5.angle = 90;

			plateformeRebond6 = new Plateforme(game, 0, 0, "plateformeRebond", debug);
				plateformeRebond6.body.x = plateforme7.body.x + plateforme7.width/2 + plateformeRebond6.width/2;
				plateformeRebond6.body.y = plateforme_sol1.body.y - plateforme_sol1.height/2 - plateformeRebond6.height/2;
				plateformeRebond6.angle = -90;

			plateformeRebond7 = new Plateforme(game, 0, 0, "plateformeRebond", debug);
				plateformeRebond7.body.x = plateformeRebond2.body.x;
				plateformeRebond7.body.y = plateforme_sol1.body.y - plateforme_sol1.height/2 - plateformeRebond7.height/2;
				plateformeRebond7.angle = 180;

			plateformeRebond8 = new Plateforme(game, 0, 0, "plateformeRebond", debug);
				plateformeRebond8.body.x = plateformeRebond7.body.x + plateformeRebond7.width;
				plateformeRebond8.body.y = plateforme_sol1.body.y - plateforme_sol1.height/2 - plateformeRebond8.height/2;
				plateformeRebond8.angle = -90;

			plateformeRebond9 = new Plateforme(game, 0, 0, "plateformeRebond", debug);
				plateformeRebond9.body.x = plateformeRebond4.body.x;
				plateformeRebond9.body.y = plateforme_sol1.body.y - plateforme_sol1.height/2 - plateformeRebond8.height/2;
				plateformeRebond9.angle = 180;

			plateformeRebondV = new Plateforme(game, 0, 0, "plateformeRebondViolet", debug);
				plateformeRebondV.body.x = plateformeRebond6.body.x;
				plateformeRebondV.body.y = plateformeRebond5.body.y;
				plateformeRebondV.angle = 90;



			plateformeRebondR = new Plateforme(game, 0, 0, "plateformeRebondRouge", debug);
				plateformeRebondR.body.x = plateformeRebond8.body.x;
				plateformeRebondR.body.y = plateformeRebond8.body.y - plateformeRebond8.height;
				plateformeRebondR.angle = 90;

			plateformeRebondVe = new Plateforme(game, 0, 0, "plateformeRebondVert", debug);
				plateformeRebondVe.body.x = plateformeRebond3.body.x;
				plateformeRebondVe.body.y = plateformeRebondR.body.y;
				plateformeRebondVe.angle = -90;

			levelComplete = new Bumper(game, 535, game.world.height-190, "bumper", debug);
				levelComplete.body.y = plateforme_sol1.body.y-10;
			levelComplete.anchor.setTo(0.5);
			levelComplete.scale.set(0.8, 1);
			levelComplete.alpha = 0;



				//PORTES
			lumierePorteV = new Lumiere(game, "lumierePorteViolet");
			lueurePorteV = new Lumiere(game, "lueurePorteViolet");
			porteV = new Porte(game, 0, 0,  lumierePorteV, lueurePorteV, null, "vertical", "laserViolet", debug);
				porteV.body.x = 370;
				porteV.body.y = plateforme_sol1.body.y - plateforme_sol1.height/2 - porteV.height/2 ;
				porteV.deplacement = -porteV.height + 15;

			lueurePorteV.tweenScaleBoucle(0.5, 0, 800);
			lumierePorteV.tweenScaleBoucle(0.3, 0.3, 800);

			lumierePorteO = new Lumiere(game, "lumierePorteOrange");
			lueurePorteO = new Lumiere(game, "lueurePorteOrange");
			porteO = new Porte(game, 0, 0,  lumierePorteO, lueurePorteO, null, "vertical","laserOrange",  debug);
				porteO.body.x = porteV.body.x + 50;
				porteO.body.y = porteV.body.y;
				porteO.deplacement = -porteO.height + 15;

			lueurePorteO.tweenScaleBoucle(0.5, 0, 800);
			lumierePorteO.tweenScaleBoucle(0.3, 0.3, 800);

			lumierePorteVe = new Lumiere(game, "lumierePorteVert");
			lueurePorteVe = new Lumiere(game, "lueurePorteVert");
			porteVe = new Porte(game, 0, 0,  lumierePorteVe, lueurePorteVe, null, "vertical", "laserVert",  debug);
				porteVe.body.x = porteO.body.x + 50;
				porteVe.body.y =  porteO.body.y;
				porteVe.deplacement = -porteVe.height + 15;

			lueurePorteVe.tweenScaleBoucle(0.5, 0, 800);
			lumierePorteVe.tweenScaleBoucle(0.3, 0.3, 800);



				//BOUTONS


			boutonR = new Bouton(game, 0, 0, "plateformeRebond", plateformeRebondR, null, 90, "horizontal", "boutonRondRouge", debug);
				boutonR.body.x = 320;
				boutonR.body.y = plateforme6.body.y + plateforme6.height/2 + boutonR.height/2;
				boutonR.deplacement = boutonR.body.y;

			boutonV = new Bouton(game, 1860, 200, "plateformeRebond", plateformeRebondV, null, 0, "horizontal", "boutonRondViolet", debug);
				boutonV.body.x = boutonR.body.x - boutonR.width - 10;
				boutonV.body.y = boutonR.body.y;
				boutonV.deplacement = -boutonV.height/2;


			boutonVe = new Bouton(game, 0, 0, "plateformeRebond", plateformeRebondVe, null, 0, "horizontal", "boutonRondVert", debug);
				boutonVe.body.x = boutonV.body.x - boutonV.width - 10;
				boutonVe.body.y = boutonV.body.y;
				boutonVe.deplacement = -boutonVe.height/2;


			boutonO = new Bouton(game, 0, 0, "porte", porteO, null, 0, "horizontal", "boutonOrange_90", debug);
				boutonO.body.x = plateformeRebond4.body.x - 50;
				boutonO.body.y = 0 + boutonO.height/2;
				boutonO.deplacement = -boutonO.height/2;

			boutonVe2 = new Bouton(game, 0, 0, "porte", porteVe, null, 0, "vertical", "boutonVert", debug);
				boutonVe2.body.x = plateforme3.body.x + plateforme3.width/2 + boutonVe2.width/2;
				boutonVe2.body.y = plateforme3.body.y;
				boutonVe2.deplacement = -boutonVe2.width/2;
				boutonVe2.angle = 180;

			boutonV2 = new Bouton(game, 1860, 200, "porte", porteV, null, 0, "vertical", "boutonViolet", debug);
				boutonV2.body.x = plateforme5.body.x + plateforme5.width/2 + boutonV2.width/2;
				boutonV2.body.y = plateforme5.body.y;
				boutonV2.deplacement = -boutonV2.width/2;
				boutonV2.angle = 180;
				//CREATION GROUPES
			fonctionsService.creationGrp(); //voir "FonctionsAutre.js"

				//ADD GROUPES
					//BUMPER

					//BOUTONS
			boutonGrp.add(boutonV);
			boutonGrp.add(boutonV2);
			boutonGrp.add(boutonVe);
			boutonGrp.add(boutonVe2);
			boutonGrp.add(boutonO);
			boutonGrp.add(boutonR);

					//PORTES
			porteGrp.add(porteV);
			porteGrp.add(porteO);
			porteGrp.add(porteVe);


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
			plateformeGrp.add(plateforme5);
			plateformeGrp.add(plateforme6);
			plateformeGrp.add(plateforme7);


			rebondGrp.add(plateformeRebond1);
			rebondGrp.add(plateformeRebond2);
			rebondGrp.add(plateformeRebond3);
			rebondGrp.add(plateformeRebond4);
			rebondGrp.add(plateformeRebond5);
			rebondGrp.add(plateformeRebond6);
			rebondGrp.add(plateformeRebond7);
			rebondGrp.add(plateformeRebond8);
			rebondGrp.add(plateformeRebond9);

			rebondGrp.add(plateformeRebondV);
			rebondGrp.add(plateformeRebondVe);
			rebondGrp.add(plateformeRebondR);

			//plateformeGrp.alpha = 0.2;

				//PERSONNAGE
			personnage = new Player(game, 150, 500, "reposD", debug);
			personnage.nbrTir = 15;
			personnage.affichageVie();

			levelComplete.etoiles_3 = personnage.nbrTir - 7;
			levelComplete.etoiles_2 = personnage.nbrTir - 9;
			levelComplete.etoiles_1 = personnage.nbrTir - 11;
			levelComplete.needEtoiles = 13;
			levelComplete.numeroNiveau = 6;

				//CREATION COLLISION GROUPE
			fonctionsService.creationCollisionGrp(); //voir "FonctionsAutre.js"




























				//SET SHAPES (les bumpers et bouton sont directement fait dans leur classe)
			plateforme_sol1.body.setRectangleFromSprite(plateforme_sol1);




			plateforme1.body.setRectangleFromSprite(plateforme1);
			plateforme2.body.setRectangleFromSprite(plateforme2);
			plateforme3.body.setRectangleFromSprite(plateforme3);
			plateforme4.body.setRectangleFromSprite(plateforme4);
			plateforme5.body.setRectangleFromSprite(plateforme5);
			plateforme6.body.setRectangleFromSprite(plateforme6);
			plateforme7.body.setRectangleFromSprite(plateforme7);

			//plateforme3.body.loadPolygon("physicsData", "plateforme3");



			plateformeRebond1.body.loadPolygon("physicsData6", "RebondHautGauche");
			plateformeRebond2.body.loadPolygon("physicsData6", "RebondHautDroite");
			plateformeRebond3.body.loadPolygon("physicsData6", "RebondHautGauche");
			plateformeRebond4.body.loadPolygon("physicsData6", "RebondBasDroite");
			plateformeRebond5.body.loadPolygon("physicsData6", "RebondHautDroite");
			plateformeRebond6.body.loadPolygon("physicsData6", "RebondBasGauche");
			plateformeRebond7.body.loadPolygon("physicsData6", "RebondBasDroite");
			plateformeRebond8.body.loadPolygon("physicsData6", "RebondBasGauche");
			plateformeRebond9.body.loadPolygon("physicsData6", "RebondBasDroite");

			plateformeRebondV.body.loadPolygon("physicsData6", "RebondBasGauche");
			plateformeRebondR.body.loadPolygon("physicsData6", "RebondBasGauche");
			plateformeRebondVe.body.loadPolygon("physicsData6", "RebondHautDroite");

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
					//Personnage -> Rebond
			personnage.body.collides(plateformeRebondCollisionGroup);
			for(var i = 0 ; i < rebondGrp.length ; i++){
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
			fonctionsService.gamePerdu();
			personnage.klaxon();

			fonctionsService.verifMusiqueEnCours();
		}// <<UPDATE
}

MyGame.StateLevel5 = function (game) {};

MyGame.StateLevel5.prototype = {

	init:function(){


	},
		preload:function(){


			game.load.image("plateforme1", "assets/level_5/plateformes/plateforme1.png");
			game.load.image("plateforme2", "assets/level_5/plateformes/plateforme2.png");
			game.load.image("plateforme3", "assets/level_5/plateformes/plateforme3.png");
			game.load.image("plateforme4", "assets/level_5/plateformes/plateforme4.png");
			game.load.image("plateforme5", "assets/level_5/plateformes/plateforme5.png");
			game.load.image("plateforme6", "assets/level_5/plateformes/plateforme6.png");
			game.load.image("plateforme7", "assets/level_5/plateformes/plateforme7.png");
			game.load.image("plateforme8", "assets/level_5/plateformes/plateforme8.png");

			game.load.image("plateformeVert", "assets/level_5/plateformes/plateformeVe.png");

			game.load.image("plateforme_sol1", "assets/level_5/plateformes/plateforme_sol1.png");

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
				plateforme1.body.y = 340;
				//plateforme1.alpha = 0;

			plateforme2 = new Plateforme(game, 0, 0, "plateforme2", debug);
				plateforme2.body.x = 0 + plateforme2.width/2 + plateforme1.width - 50;
				plateforme2.body.y = plateforme1.body.y - plateforme1.height/2 - plateforme2.height/2;

			plateforme3 = new Plateforme(game, 0, 0, "plateforme3", debug);
				plateforme3.body.x = game.world.width/2 - 10;
				plateforme3.body.y = 0 + plateforme3.height/2;

			plateforme4 = new Plateforme(game, 0, 0, "plateforme4", debug);
				plateforme4.body.x = 1505;
				plateforme4.body.y = 0 + plateforme4.height/2;

			plateforme5 = new Plateforme(game, 0, 0, "plateforme5", debug);
				plateforme5.body.x = plateforme4.body.x - plateforme4.width/2 - plateforme5.width/2 + 20;
				plateforme5.body.y = 0 + plateforme4.height + plateforme5.height/2;

			plateforme6 = new Plateforme(game, 0, 0, "plateforme6", debug);
				plateforme6.body.x = 0 + plateforme6.width/2;
				plateforme6.body.y = 700;

			plateforme7 = new Plateforme(game, 0, 0, "plateforme7", debug);
				plateforme7.body.x = plateforme5.body.x - plateforme5.width/2 + plateforme7.width/2;
				plateforme7.body.y = plateforme6.body.y;

			plateforme8 = new Plateforme(game, 0, 0, "plateforme8", debug);
				plateforme8.body.x = game.world.width - plateforme8.width/2 + 100;
				plateforme8.body.y = plateforme7.body.y;

			plateformeVe = new Plateforme(game, 0, 0, "plateformeVert", debug);
				plateformeVe.body.x = -170;
				plateformeVe.body.y = plateforme6.body.y;

				plateformeVe.deplacement = 180;
				plateformeVe.ouverte = false;


			plateforme_sol1 = new Plateforme(game, 0, 0, "plateforme_sol1", debug);
				//plateforme_sol1.body.x = plateformeRebondOr.width + plateforme_sol1.width/2;
				plateforme_sol1.body.x = game.world.width/2;
				plateforme_sol1.body.y = 1000;



				//plateforme4.scale.y = 1.1;

			plateformeRebond1 = new Plateforme(game, 0, 0, "plateformeRebond", debug);
				plateformeRebond1.body.x = 0 + plateformeRebond1.width/2;
				plateformeRebond1.body.y = 0 + plateformeRebond1.height/2;

			plateformeRebond2 = new Plateforme(game, 0, 0, "plateformeRebond", debug);
				plateformeRebond2.body.x = plateforme3.body.x - plateforme3.width/2 - plateformeRebond2.width/2;
				plateformeRebond2.body.y = 0 + plateformeRebond2.height/2;
				plateformeRebond2.angle = 90;

			plateformeRebond3 = new Plateforme(game, 0, 0, "plateformeRebond", debug);
				plateformeRebond3.body.x = plateforme4.body.x - plateforme4.width/2 - plateformeRebond3.width/2;
				plateformeRebond3.body.y = plateforme5.body.y - plateforme5.height/2 - plateformeRebond3.height/2;
				plateformeRebond3.angle = 180;

			plateformeRebond4 = new Plateforme(game, 0, 0, "plateformeRebond", debug);
				plateformeRebond4.body.x = game.world.width - plateformeRebond4.width/2;
				plateformeRebond4.body.y = plateforme8.body.y - plateforme8.height/2 - plateformeRebond4.height/2;
				plateformeRebond4.angle = 180;


			levelComplete = new Bumper(game, 1850, game.world.height-190, "bumper", debug);
				levelComplete.body.y = plateforme_sol1.body.y-10;
			levelComplete.anchor.setTo(0.5);
			levelComplete.scale.set(0.8, 1);
			levelComplete.alpha = 0;



				//PORTES
			lumierePorteV1 = new Lumiere(game, "lumierePorteViolet");
			lueurePorteV1 = new Lumiere(game, "lueurePorteViolet");
			porteV1 = new Porte(game, 0, 0,  lumierePorteV1, lueurePorteV1, null, "vertical", "laserViolet", debug);
				porteV1.body.x = game.world.width/2 - 230;
				porteV1.body.y = plateforme_sol1.body.y - plateforme_sol1.height/2 - porteV1.height/2 ;
				porteV1.deplacement = -porteV1.height + 15;


			lueurePorteV1.tweenScaleBoucle(0.5, 0, 800);
			lumierePorteV1.tweenScaleBoucle(0.3, 0.3, 800);

			lumierePorteV2 = new Lumiere(game, "lumierePorteViolet");
			lueurePorteV2 = new Lumiere(game, "lueurePorteViolet");
			porteV2 = new Porte(game, 0, 0,  lumierePorteV2, lueurePorteV2, null, "vertical", "laserViolet", debug);
				porteV2.body.x = plateforme8.body.x - 150;
				porteV2.body.y = plateforme_sol1.body.y - plateforme_sol1.height/2 - porteV1.height/2 + porteV1.height - 15;
				porteV2.deplacement = - porteV2.height + 15;
				porteV2.porteOuverte = true;


			lueurePorteV2.tweenScaleBoucle(0.5, 0, 800);
			lumierePorteV2.tweenScaleBoucle(0.3, 0.3, 800);
			lumierePorteV2.alpha = 0;

			lumierePorteO1 = new Lumiere(game, "lumierePorteOrange");
			lueurePorteO1 = new Lumiere(game, "lueurePorteOrange");
			porteO1 = new Porte(game, 0, 0,  lumierePorteO1, lueurePorteO1, null, "horizontal","laserOrange_90",  debug);
				porteO1.body.x = plateforme2.body.x + plateforme2.width/2 + porteO1.width/2;
				porteO1.body.y = plateforme2.body.y;
				porteO1.deplacement = -porteO1.width + 15;

			lueurePorteO1.tweenScaleBoucle(0.5, 0, 800);
			lumierePorteO1.tweenScaleBoucle(0.3, 0.3, 800);

			lumierePorteO2 = new Lumiere(game, "lumierePorteOrange");
			lueurePorteO2 = new Lumiere(game, "lueurePorteOrange");
			porteO2 = new Porte(game, 0, 0,  lumierePorteO2, lueurePorteO2, null, "horizontal","laserOrange_90",  debug);
				porteO2.body.x = plateforme3.body.x + plateforme3.width/2 + porteO2.width/2 - (porteO2.width -15);
				porteO2.body.y = plateforme3.body.y - 50;
				porteO2.deplacement = porteO2.width - 15;
				porteO2.porteOuverte = true;

			lueurePorteO2.tweenScaleBoucle(0.5, 0, 800);
			lumierePorteO2.tweenScaleBoucle(0.3, 0.3, 800);
			lumierePorteO2.alpha = 0;

			lumierePorteO1.angle = 90;
			lumierePorteO2.angle = 90;
			lueurePorteO1.angle = 90;
			lueurePorteO2.angle = 90;



			lumierePorteR = new Lumiere(game, "lumierePorteRouge");
			lueurePorteR = new Lumiere(game, "lueurePorteRouge");
			porteR = new Porte(game, 0, 0,  lumierePorteR, lueurePorteR, null, "vertical", "laserRouge",  debug);
				porteR.body.x = plateforme8.body.x - 50;
				porteR.body.y = plateforme_sol1.body.y - plateforme_sol1.height/2 - porteR.height/2;
				porteR.deplacement = -porteR.height + 15;

			lueurePorteR.tweenScaleBoucle(0.5, 0, 800);
			lumierePorteR.tweenScaleBoucle(0.3, 0.3, 800);



				//BOUTONS
			boutonV = new Bouton(game, 1860, 200, "doublePorte", porteV1, porteV2, 0, "horizontal", "boutonViolet_90", debug);
				boutonV.body.x = plateforme4.body.x - 170;
				boutonV.body.y = 0 + boutonV.height/2;
				boutonV.deplacement = -boutonV.height/2;

			boutonVe = new Bouton(game, 0, 0, "plateforme", plateformeVe, null, 0, "horizontal", "boutonVert_90", debug);
				boutonVe.body.x = game.world.width - boutonVe.width/2 - 200;
				boutonVe.body.y = boutonVe.height/2;
				boutonVe.deplacement = -boutonVe.height/2;

			boutonO = new Bouton(game, 0, 0, "doublePorte", porteO1, porteO2, 0, "horizontal", "boutonOrange_90", debug);
				boutonO.body.x = plateforme4.body.x + 20;
				boutonO.body.y = plateforme4.height + boutonO.height/2;
				boutonO.deplacement = -boutonO.height/2;

			boutonR = new Bouton(game, 0, 0, "porte", porteR, null, 90, "horizontal", "boutonRouge", debug);
				boutonR.body.x = plateforme1.body.x;
				boutonR.body.y = plateforme1.body.y - plateforme1.height/2 - boutonR.height/2;
				boutonR.deplacement = boutonR.height/2;

			bumper1 = new Bumper(game, 0, 0, "bumper", debug);
				bumper1.body.x = 200;
				bumper1.body.y = plateformeVe.body.y - 10;

			bumper2 = new Bumper(game, 0, 0, "bumper", debug);
				bumper2.body.x = 500;
				bumper2.body.y = plateforme_sol1.body.y - 10;


				//CREATION GROUPES
			fonctionsService.creationGrp(); //voir "FonctionsAutre.js"

				//ADD GROUPES
					//BUMPER
			bumperGrp.add(bumper1);
			bumperGrp.add(bumper2);

					//BOUTONS
			boutonGrp.add(boutonV);
			boutonGrp.add(boutonVe);
			boutonGrp.add(boutonO);
			boutonGrp.add(boutonR);

					//PORTES
			porteGrp.add(porteV1);
			porteGrp.add(porteV2);
			porteGrp.add(porteO1);
			porteGrp.add(porteO2);
			porteGrp.add(porteR);


					//BORDS
			plateformeGrp.add(bordHorizontalB);
			plateformeGrp.add(bordHorizontalH);
			plateformeGrp.add(bordVerticalG);
			plateformeGrp.add(bordVerticalD);

					//PLATEFORMES
			plateformeGrp.add(plateforme_sol1);

			plateformeGrp.add(plateformeVe);
			plateformeGrp.add(plateforme1);
			plateformeGrp.add(plateforme2);
			plateformeGrp.add(plateforme3);
			plateformeGrp.add(plateforme4);
			plateformeGrp.add(plateforme5);
			plateformeGrp.add(plateforme6);
			plateformeGrp.add(plateforme7);
			plateformeGrp.add(plateforme8);


			rebondGrp.add(plateformeRebond1);
			rebondGrp.add(plateformeRebond2);
			rebondGrp.add(plateformeRebond3);
			rebondGrp.add(plateformeRebond4);

			//plateformeGrp.alpha = 0.2;

				//PERSONNAGE
			personnage = new Player(game, 150, 500, "reposD", debug);
			personnage.nbrTir = 10;
			personnage.affichageVie();

			levelComplete.etoiles_3 = personnage.nbrTir - 6;
			levelComplete.etoiles_2 = personnage.nbrTir - 8;
			levelComplete.etoiles_1 = personnage.nbrTir - 9;
			levelComplete.needEtoiles = 13;
			levelComplete.numeroNiveau = 5;
				//CREATION COLLISION GROUPE
			fonctionsService.creationCollisionGrp(); //voir "FonctionsAutre.js"



				//SET SHAPES (les bumpers et bouton sont directement fait dans leur classe)
			plateforme_sol1.body.setRectangleFromSprite(plateforme_sol1);




			plateforme1.body.setRectangleFromSprite(plateforme1);
			plateforme2.body.setRectangleFromSprite(plateforme2);
			plateforme3.body.loadPolygon("physicsData5", "plateforme3");
			plateforme4.body.setRectangleFromSprite(plateforme4);
			plateforme5.body.setRectangleFromSprite(plateforme5);
			plateforme6.body.setRectangleFromSprite(plateforme6);
			plateforme7.body.setRectangleFromSprite(plateforme7);
			plateforme8.body.setRectangleFromSprite(plateforme8);
			plateformeVe.body.setRectangleFromSprite(plateformeVe);

			//plateforme3.body.loadPolygon("physicsData", "plateforme3");



			plateformeRebond1.body.loadPolygon("physicsData5", "RebondHautGauche");
			plateformeRebond2.body.loadPolygon("physicsData5", "RebondHautDroite");
			plateformeRebond3.body.loadPolygon("physicsData5", "RebondBasDroite");
			plateformeRebond4.body.loadPolygon("physicsData5", "RebondBasDroite");

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

			personnage.body.collides(plateformeCollisionGroup, impactPersoPlateforme, this);
			for(var i = 0 ; i < plateformeGrp.length ; i++){
				plateformeGrp.children[i].body.collides(personnageCollisionGroup);
			}
					//Personnage -> Bumper
			personnage.body.collides(bumperCollisionGroup, impactPersoBumper, this);
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
			personnage.body.collides(sortieCollisionGroup, impactPersoSortie, this);

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
			if(plateformeVe.ouverte == true)
				bumper1.body.x = plateformeVe.body.x + 180;
			else{
				bumper1.body.x = -100;
			}
			fonctionsService.gamePerdu();
			personnage.klaxon();

			fonctionsService.verifMusiqueEnCours();
		}// <<UPDATE
}

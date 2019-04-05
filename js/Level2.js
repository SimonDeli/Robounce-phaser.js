MyGame.StateLevel2 = function (game) {};

MyGame.StateLevel2.prototype = {

	init:function(){


	},
		preload:function(){


			game.load.image("plateforme1", "assets/level_2/plateformes/plateforme1.png");
			game.load.image("plateforme2", "assets/level_2/plateformes/plateforme2.png");
			game.load.image("plateforme3", "assets/level_2/plateformes/plateforme3.png");
			game.load.image("plateforme4", "assets/level_2/plateformes/plateforme4.png");

			game.load.image("plateforme_sol1", "assets/level_2/plateformes/plateformeSol1.png");
			game.load.image("plateforme_sol2", "assets/level_2/plateformes/plateformeSol2.png");
		},// <<PRELOAD


		create:function(){

			//PHYSICS
			checkSortie = true;

			console.log("ETOILES "+nbrEtoiles);
			game.physics.startSystem(Phaser.Physics.P2JS);
			game.physics.p2.gravity.y = 5000;
			game.physics.p2.setImpactEvents(true);

			//ADD SPRITE
			background = game.add.sprite(0, 0, "background");

				//BORD
			fonctionsService.creationBordure(); // voir "FonctionsAutre.js"

				//PLATEFORME
			plateforme1 = new Plateforme(game, 0, 0, "plateforme1", debug);
				plateforme1.body.x = 0 + plateforme1.width/2 - 20;
				plateforme1.body.y = 0 + plateforme1.height/2;
				//plateforme1.alpha = 0;

			plateforme2 = new Plateforme(game, 0, 0, "plateforme2", debug);
				plateforme2.body.x = plateforme1.width*2 + plateforme2.width/2 + 55;
				plateforme2.body.y = 0 + plateforme2.height/2;

			plateforme3 = new Plateforme(game, 0, 0, "plateforme3", debug);
				plateforme3.body.x = game.world.width - plateforme3.width/2;
				plateforme3.body.y = 450;

			plateforme_sol1 = new Plateforme(game, 0, 880, "plateforme_sol1", debug);
				plateforme_sol1.body.x = 0 + plateforme_sol1.width/2;

			plateforme4 = new Plateforme(game, 0, 0, "plateforme4", debug);
				plateforme4.body.x = plateforme2.body.x + plateforme2.width/2 + plateforme4.width/2 + 245;
				plateforme4.scale.y = 1.1;
				plateforme4.body.y = plateforme_sol1.body.y - plateforme_sol1.height/2 - plateforme4.height/2;


			plateforme_sol2 = new Plateforme(game, plateforme2.body.x + plateforme2.width/4, 0, "plateforme_sol2", debug);
				plateforme_sol2.body.y =game.world.height - plateforme_sol2.height/2;

			plateforme_sol3 = new Plateforme(game, 0, 0, "plateforme_sol2", debug);
				plateforme_sol3.body.x = game.world.width - plateforme_sol3.width/2 - 100;
				plateforme_sol3.body.y = game.world.height - plateforme_sol3.height/2;

			plateformeRebond1 = new Plateforme(game, 0,0, "plateformeRebond45", debug);
				plateformeRebond1.body.x = 0 + plateforme1.body.x + 30;
				plateformeRebond1.body.y = plateformeRebond1.height/2 + 50;


				//BUMPER
			bumper1 = new Bumper(game, 1050, 0, "bumper", debug);
				bumper1.body.y = plateforme_sol1.body.y - 10;
			bumper2 = new Bumper(game, 1400, 0, "bumper", debug);
				bumper2.body.y = plateforme_sol1.body.y - 10;


			levelComplete = new Bumper(game, game.world.width-20, game.world.height-190, "bumper", debug);
				levelComplete.body.y = plateforme_sol1.body.y-10;
			levelComplete.anchor.setTo(0.5);
			levelComplete.scale.set(0.8, 1);
			levelComplete.alpha = 0;



				//PORTES
			lumierePorteV = new Lumiere(game, "lumierePorteViolet");
			lueurePorteV = new Lumiere(game, "lueurePorteViolet");
			porteV = new Porte(game, plateforme2.body.x + 50, 0,  lumierePorteV, lueurePorteV,null, "vertical", "laserViolet", debug);
				porteV.body.y = plateforme_sol1.body.y-plateforme_sol1.height/2-porteV.height/2 + porteV.height - 15;
				porteV.porteOuverte = true;
				porteV.deplacement = -porteV.height + 15;

			lueurePorteV.tweenScaleBoucle(0.5, 0, 800);
			lumierePorteV.tweenScaleBoucle(0.3, 0.3, 800);
			lumierePorteV.alpha = 0;

			lumierePorteV2 = new Lumiere(game, "lumierePorteViolet");
			lueurePorteV2 = new Lumiere(game, "lueurePorteViolet");
			porteV2 = new Porte(game, 1700, 0, lumierePorteV2, lueurePorteV2, null, "vertical", "laserViolet", debug);
				porteV2.body.y = plateforme_sol1.body.y-plateforme_sol1.height/2-porteV2.height/2;
				porteV2.deplacement = -porteV2.height + 15;

			lueurePorteV2.tweenScaleBoucle(0.5, 0, 800);
			lumierePorteV2.tweenScaleBoucle(0.3, 0.3, 800);

			lumierePorteVe = new Lumiere(game, "lumierePorteVert");
			lueurePorteVe = new Lumiere(game, "lueurePorteVert");
			porteVe = new Porte(game, 0, 0,  lumierePorteVe, lueurePorteVe,null, "horizontal","laserVert_90",  debug);
				porteVe.body.x = plateforme1.width*1.5 + 30;
				porteVe.body.y = porteVe.height/2 + 80;
				lueurePorteVe.angle = 90;
				porteVe.deplacement = porteVe.width - 18;

			lueurePorteVe.tweenScaleBoucle(0.5, 0, 800);
			lumierePorteVe.tweenScaleBoucle(0.3, 0.3, 800);

			lumierePorteVe2 = new Lumiere(game, "lumierePorteVert");
			lueurePorteVe2 = new Lumiere(game, "lueurePorteVert");
			porteVe2 = new Porte(game, 0, 0,  lumierePorteVe2, lueurePorteVe2, null, "horizontal", "laserVert_90",  debug);
				porteVe2.body.x = plateforme2.body.x + plateforme2.width/2 + porteVe2.width/2 - porteVe2.width + 15;
				porteVe2.body.y = plateforme2.height - 50;
				lueurePorteVe2.angle = 90;
				porteVe2.porteOuverte = true;
				porteVe2.deplacement = porteVe2.width - 15;

			lueurePorteVe2.tweenScaleBoucle(0.5, 0, 800);
			lumierePorteVe2.tweenScaleBoucle(0.3, 0.3, 800);
			lumierePorteVe2.alpha = 0;

				//BOUTONS
			boutonV = new Bouton(game, 1860, 200, "doublePorte", porteV, porteV2, 0, "horizontal", "boutonViolet_90", debug);

				boutonV.deplacement = -boutonV.height/2;
				boutonV.body.x = porteVe.body.x;
				boutonV.body.y = 0 + boutonV.height/2;

			boutonVe = new Bouton(game, 0, 0, "doublePorte", porteVe, porteVe2, 0, "vertical", "boutonVert", debug);
				boutonVe.body.x = plateforme4.body.x - plateforme4.width/2 - boutonVe.width/2;
				boutonVe.body.y = plateforme4.body.y;
				boutonVe.deplacement = +boutonVe.width/2-5;


				//CREATION GROUPES
			fonctionsService.creationGrp(); //voir "FonctionsAutre.js"

				//ADD GROUPES
					//BOUTONS
			boutonGrp.add(boutonV);
			boutonGrp.add(boutonVe);



					//PORTES
			porteGrp.add(porteV);
			porteGrp.add(porteVe);
			porteGrp.add(porteV2);
			porteGrp.add(porteVe2);

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
			plateformeGrp.add(plateforme4);

			rebondGrp.add(plateformeRebond1);

				//PERSONNAGE
			personnage = new Player(game, 80, 500, "reposD", debug);
			personnage.nbrTir = 6;
			personnage.affichageVie();


			levelComplete.etoiles_3 = personnage.nbrTir - 3;
			levelComplete.etoiles_2 = personnage.nbrTir - 4;
			levelComplete.etoiles_1 = personnage.nbrTir - 6;
			//levelComplete.isCheck = false;
			levelComplete.needEtoiles = 5;
			levelComplete.numeroNiveau = 2;
				//CREATION COLLISION GROUPE
			fonctionsService.creationCollisionGrp(); //voir "FonctionsAutre.js"

				//SET SHAPES (les bumpers et bouton sont directement fait dans leur classe)
			plateforme_sol1.body.setRectangleFromSprite(plateforme_sol1);



			//plateforme1.body.loadPolygon("physicsData", "plateforme1");
			plateforme1.body.loadPolygon("physicsData2", "plateforme1");
			plateforme2.body.loadPolygon("physicsData2", "plateforme4");
			plateforme3.body.loadPolygon("physicsData2", "plateforme3");
			plateforme4.body.setRectangleFromSprite(plateforme4);



			plateformeRebond1.body.loadPolygon("physicsData2", "plateformeRebond45");



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

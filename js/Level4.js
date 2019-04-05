MyGame.StateLevel4 = function (game) {};

MyGame.StateLevel4.prototype = {

	init:function(){


	},
		preload:function(){

			//SETTING GAME
			game.load.image("plateforme1", "assets/level_4/plateformes/plateforme1.png");
			game.load.image("plateforme2", "assets/level_4/plateformes/plateforme2.png");
			game.load.image("plateforme3", "assets/level_4/plateformes/plateforme3.png");
			game.load.image("plateforme4", "assets/level_4/plateformes/plateforme4.png");
			game.load.image("plateforme5", "assets/level_4/plateformes/plateforme5.png");
			game.load.image("plateforme6", "assets/level_4/plateformes/plateforme6.png");
			game.load.image("plateforme7", "assets/level_4/plateformes/plateforme7.png");
			game.load.image("PlateformeMouvante1", "assets/level_4/plateformes/plateformeMouvante1.png");
			game.load.image("PlateformeMouvante2", "assets/level_4/plateformes/plateformeMouvante2.png");

			game.load.image("plateforme_sol1", "assets/level_4/plateformes/plateformeSol1.png");
			game.load.image("plateforme_sol2", "assets/level_4/plateformes/plateformeSol2.png");

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
			var bordures = fonctionsService.creationBordure(); // voir "FonctionsAutre.js"

				//PLATEFORME
			plateforme1 = new Plateforme(game, 0, 0, "plateforme1", debug);
				plateforme1.body.x = game.world.width/2 - plateforme1.width/2;
				plateforme1.body.y = 0 + plateforme1.height/2 ;
				//plateforme1.alpha = 0;

			plateforme2 = new Plateforme(game, 0, 0, "plateforme2", debug);
				plateforme2.body.x = plateforme1.body.x + 200 + plateforme2.width/2;
				plateforme2.body.y = 0 + plateforme2.height/2;

			plateforme3 = new Plateforme(game, 0, 0, "plateforme3", debug);
				plateforme3.body.x = game.world.width - plateforme3.width/2;
				plateforme3.body.y = 0 + plateforme3.height/2;

			plateforme4 = new Plateforme(game, 0, 0, "plateforme4", debug);
				plateforme4.body.x = plateforme1.body.x - plateforme1.width/2 + plateforme4.width/2;
				plateforme4.body.y = plateforme1.body.y + plateforme1.height/2 + 125;

			plateforme5 = new Plateforme(game, 0, 0, "plateforme5", debug);
				plateforme5.body.x = plateforme4.body.x - 100;
				plateforme5.body.y = plateforme4.body.y + plateforme4.height/2 + plateforme5.height/2;

			plateforme_sol1 = new Plateforme(game, 0, 0, "plateforme_sol1", debug);
				//plateforme_sol1.body.x = plateformeRebondOr.width + plateforme_sol1.width/2;
				plateforme_sol1.body.x = game.world.width - plateforme_sol1.width/2;
				plateforme_sol1.body.y = 1000;

			plateforme_sol2 = new Plateforme(game, 0, 0, "plateforme_sol2", debug);
				plateforme_sol2.body.x = 500;
				plateforme_sol2.body.y = plateforme_sol1.body.y + plateforme_sol1.height/2 + plateforme_sol2.height/2;

			plateforme6 = new Plateforme(game, 0, 0, "plateforme6", debug);
				plateforme6.body.x = plateforme1.body.x + plateforme1.width/2;
				plateforme6.body.y = plateforme_sol1.body.y - plateforme_sol1.height/2 - plateforme6.height/2;

			plateforme7 = new Plateforme(game, 0, 0, "plateforme7", debug);
				plateforme7.body.x = plateforme6.body.x + plateforme6.width/2 + plateforme7.width/2 + 200;
				plateforme7.body.y = plateforme_sol1.body.y - plateforme_sol1.height/2 - plateforme7.height/2;





				//plateforme4.scale.y = 1.1;

			plateformeRebondR = new Plateforme(game, 0, 0, "plateformeRebondRouge", debug);
				plateformeRebondR.body.x = game.world.width/2 + 50;
				plateformeRebondR.body.y = game.world.height/2 - 60;

			PlateformeMouvante1 = new Plateforme(game, 0, 0, "PlateformeMouvante1", debug);
				PlateformeMouvante1.body.x = plateformeRebondR.body.x;
				PlateformeMouvante1.body.y = plateformeRebondR.body.y - 150;
			PlateformeMouvante2 = new Plateforme(game, 0, 0, "PlateformeMouvante2", debug);
				PlateformeMouvante2.body.x = plateformeRebondR.body.x + 100;
				PlateformeMouvante2.body.y = plateformeRebondR.body.y + 150;

				var positionInitialPR = plateformeRebondR.body.x;
				var tweenMouvementDroitePR = game.add.tween(plateformeRebondR.body).to({x:positionInitialPR+500}, 1000, Phaser.Easing.Linear.None);
				var tweenMouvementGauchePR = game.add.tween(plateformeRebondR.body).to({x:positionInitialPR}, 1000, Phaser.Easing.Linear.None);
				tweenMouvementDroitePR.onComplete.add(function(){
					tweenMouvementGauchePR.start();
				})
				tweenMouvementGauchePR.onComplete.add(function(){
					tweenMouvementDroitePR.start();
				})

				var positionInitialPM1 = PlateformeMouvante1.body.x;
				var tweenMouvementDroitePM1 = game.add.tween(PlateformeMouvante1.body).to({x:positionInitialPM1+500}, 1800, Phaser.Easing.Linear.None);
				var tweenMouvementGauchePM1 = game.add.tween(PlateformeMouvante1.body).to({x:positionInitialPM1}, 1800, Phaser.Easing.Linear.None);
				tweenMouvementDroitePM1.onComplete.add(function(){
					tweenMouvementGauchePM1.start();
				})
				tweenMouvementGauchePM1.onComplete.add(function(){
					tweenMouvementDroitePM1.start();
				})

				var positionInitialPM2 = PlateformeMouvante2.body.x;
				var tweenMouvementDroitePM2 = game.add.tween(PlateformeMouvante2.body).to({x:positionInitialPM2+550}, 1400, Phaser.Easing.Linear.None);
				var tweenMouvementGauchePM2 = game.add.tween(PlateformeMouvante2.body).to({x:positionInitialPM2}, 1400, Phaser.Easing.Linear.None);
				tweenMouvementDroitePM2.onComplete.add(function(){
					tweenMouvementGauchePM2.start();
				})
				tweenMouvementGauchePM2.onComplete.add(function(){
					tweenMouvementDroitePM2.start();
				})

				tweenMouvementDroitePM1.start();
				tweenMouvementDroitePM2.start();
				tweenMouvementDroitePR.start();

			levelComplete = new Bumper(game, 700, game.world.height-190, "bumper", debug);
				levelComplete.body.y = plateforme_sol1.body.y-10;
			levelComplete.anchor.setTo(0.5);
			levelComplete.scale.set(0.8, 1);
			levelComplete.alpha = 0;



				//PORTES
			lumierePorteV = new Lumiere(game, "lumierePorteViolet");
			lueurePorteV = new Lumiere(game, "lueurePorteViolet");
			porteV = new Porte(game, 0, 0,  lumierePorteV, lueurePorteV, null, "vertical", "laserViolet", debug);
				porteV.body.x = 400;
				porteV.body.y = plateforme_sol1.body.y - plateforme_sol1.height/2 - porteV.height/2;
				porteV.deplacement = -porteV.height + 15;

			lueurePorteV.tweenScaleBoucle(0.5, 0, 800);
			lumierePorteV.tweenScaleBoucle(0.3, 0.3, 800);


			lumierePorteVe = new Lumiere(game, "lumierePorteVert");
			lueurePorteVe = new Lumiere(game, "lueurePorteVert");
			porteVe = new Porte(game, 0, 0,  lumierePorteVe, lueurePorteVe, null, "vertical","laserVert",  debug);
				porteVe.body.x = porteV.body.x + 75;
				porteVe.body.y = porteV.body.y;
				porteVe.deplacement = -porteVe.height + 15;

			lueurePorteVe.tweenScaleBoucle(0.5, 0, 800);
			lumierePorteVe.tweenScaleBoucle(0.3, 0.3, 800);

			lumierePorteO = new Lumiere(game, "lumierePorteOrange");
			lueurePorteO = new Lumiere(game, "lueurePorteOrange");
			porteO = new Porte(game, 0, 0,  lumierePorteO, lueurePorteO, null, "vertical","laserOrange",  debug);
				porteO.body.x = porteVe.body.x + 75;
				porteO.body.y = porteV.body.y;
				porteO.deplacement = -porteO.height + 15;

			lueurePorteO.tweenScaleBoucle(0.5, 0, 800);
			lumierePorteO.tweenScaleBoucle(0.3, 0.3, 800);

				//BOUTONS
			boutonV = new Bouton(game, 1860, 200, "porte", porteV, null, 0, "horizontal", "boutonViolet_90", debug);
				boutonV.body.x = plateforme2.body.x + 30;
				boutonV.body.y = plateforme_sol1.body.y - plateforme_sol1.height/2 - boutonV.height/2;
				boutonV.deplacement = boutonV.height/2;
				boutonV.angle = 180;

			boutonVe = new Bouton(game, 0, 0, "porte", porteVe, null, 0, "horizontal", "boutonVert_90", debug);
				boutonVe.body.x = plateforme2.body.x + plateforme2.width/2 + boutonVe.width/2 + 60;
				boutonVe.body.y = boutonVe.height/2;
				boutonVe.deplacement = -boutonVe.height/2;

			boutonO = new Bouton(game, 0, 0, "porte", porteO, null, 0, "horizontal", "boutonOrange_90", debug);
				boutonO.body.x = plateforme1.body.x + plateforme1.width/2 + boutonO.width/2 + 30;
				boutonO.body.y = boutonO.height/2;
				boutonO.deplacement = -boutonO.height/2;

			boutonR = new Bouton(game, 0, 0, "plateformeRebond", plateformeRebondR, null, 90, "horizontal", "boutonRondRouge", debug);
				boutonR.body.x = 700;
				boutonR.body.y = 0 + boutonR.height/2;

			bumper = new Bumper(game, 0, 0, "bumper", debug);
				bumper.body.x = 200;
				bumper.body.y = plateforme_sol1.body.y - 10;

				//CREATION GROUPES
			fonctionsService.creationGrp(); //voir "FonctionsAutre.js"

				//ADD GROUPES
					//BUMPER
			bumperGrp.add(bumper);

					//BOUTONS
			boutonGrp.add(boutonV);
			boutonGrp.add(boutonVe);
			boutonGrp.add(boutonO);
			boutonGrp.add(boutonR);

					//PORTES
			porteGrp.add(porteV);
			porteGrp.add(porteVe);
			porteGrp.add(porteO);


					//BORDS
					for(var i = 0 ; i<bordures.length ; i++){
						plateformeGrp.add(bordures[i]);
					}

					//PLATEFORMES
			plateformeGrp.add(plateforme_sol1);
			plateformeGrp.add(plateforme_sol2);


			plateformeGrp.add(plateforme1);
			plateformeGrp.add(plateforme2);
			plateformeGrp.add(plateforme3);
			plateformeGrp.add(plateforme4);
			plateformeGrp.add(plateforme5);
			plateformeGrp.add(plateforme6);
			plateformeGrp.add(plateforme7);
			plateformeGrp.add(PlateformeMouvante1);
			plateformeGrp.add(PlateformeMouvante2);

			rebondGrp.add(plateformeRebondR);

			//plateformeGrp.alpha = 0.2;

				//PERSONNAGE
			personnage = new Player(game, 100, 500, "reposD", debug);
			personnage.nbrTir = 12;
			personnage.affichageVie();

			levelComplete.etoiles_3 = personnage.nbrTir - 7;
			levelComplete.etoiles_2 = personnage.nbrTir - 8;
			levelComplete.etoiles_1 = personnage.nbrTir - 10;
			levelComplete.needEtoiles = 11;
			levelComplete.numeroNiveau = 4;

				//CREATION COLLISION GROUPE
			fonctionsService.creationCollisionGrp(); //voir "FonctionsAutre.js"

				//SET SHAPES (les bumpers et bouton sont directement fait dans leur classe)
			plateforme_sol1.body.setRectangleFromSprite(plateforme_sol1);
			plateforme_sol2.body.setRectangleFromSprite(plateforme_sol2);



			//plateforme1.body.loadPolygon("physicsData", "plateforme1");
			plateforme1.body.loadPolygon("physicsData4", "plateforme1");
			plateforme2.body.setRectangleFromSprite(plateforme2);
			plateforme3.body.loadPolygon("physicsData4", "plateforme3");
			plateforme4.body.setRectangleFromSprite(plateforme4);
			plateforme5.body.setRectangleFromSprite(plateforme5);
			plateforme6.body.setRectangleFromSprite(plateforme6);
			plateforme7.body.loadPolygon("physicsData4", "plateforme7");
			PlateformeMouvante1.body.setRectangleFromSprite(PlateformeMouvante1);
			PlateformeMouvante2.body.setRectangleFromSprite(PlateformeMouvante2);


			plateformeRebondR.body.loadPolygon("physicsData4", "RebondBasDroite");

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
			pauseBoutton.onDown.add(fonctionsService.pauseFunction, fonctionsService);

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

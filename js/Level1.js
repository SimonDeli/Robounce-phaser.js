MyGame.StateLevel1 = function (game) {};

MyGame.StateLevel1.prototype = {

	init:function(){
		this.positionPerso = {
			x:80,
			y:500
		};

	},
		preload:function(){

			game.load.image("plateforme1", "assets/level_1/plateformes/plateforme1.png");
			game.load.image("plateforme2", "assets/level_1/plateformes/plateforme2.png");
			game.load.image("plateforme3", "assets/level_1/plateformes/plateforme3.png");
			game.load.image("plateforme4", "assets/level_1/plateformes/plateforme4.png");

			game.load.image("plateforme_sol1", "assets/level_1/plateformes/plateformeSol1.png");
			game.load.image("plateforme_sol2", "assets/level_1/plateformes/plateformeSol2.png");



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
				plateforme1.body.x = 0 + plateforme1.width/2;
				plateforme1.body.y = 0 + plateforme1.height/2;

			plateforme2 = new Plateforme(game, game.world.width/2, 0, "plateforme2", debug);
				plateforme2.body.y = 0 + plateforme2.height/2 -150;

			plateforme3 = new Plateforme(game, 0, game.world.height/2 +35, "plateforme3", debug);
				plateforme3.body.x = game.world.width - plateforme3.width/2 + 50;

			plateforme4 = new Plateforme(game, 0, 0, "plateforme4", debug);
				plateforme4.body.x = plateforme2.body.x + plateforme4.width/2 - 10;
				plateforme4.body.y = plateforme2.body.y + 370;

			plateforme_sol1 = new Plateforme(game, 0, 900, "plateforme_sol1", debug);
				plateforme_sol1.body.x = 0 + plateforme_sol1.width/2;

			plateforme_sol2 = new Plateforme(game, 0, 1000, "plateforme_sol2", debug);
				plateforme_sol2.body.x = plateforme_sol1.width + plateforme_sol2.width/2;

			plateformeRebond1 = new Plateforme(game, 0,0, "plateformeRebond", debug);
				plateformeRebond1.body.x = 0 + plateformeRebond1.width/2;
				plateformeRebond1.body.y = plateforme1.height + plateformeRebond1.height/2;

			plateformeRebond2 = new Plateforme(game, 0,0, "plateformeRebond", debug);
				plateformeRebond2.body.x = game.world.width - plateforme3.width - plateformeRebond2.width/2 + 50;
				plateformeRebond2.body.y = plateforme3.body.y - plateforme3.height/2;
				plateformeRebond2.angle = 90;

				//BUMPER
			bumper1 = new Bumper(game, 700, 0, "bumper", debug);
				bumper1.body.y = plateforme_sol2.body.y-10;


			levelComplete = new Bumper(game, game.world.width-20, game.world.height-190, "bumper", debug);
				levelComplete.body.y = plateforme_sol2.body.y-10;
			levelComplete.anchor.setTo(0.5);
			levelComplete.scale.set(0.8, 1);
			levelComplete.alpha = 0;




				//PORTES
			lumierePorteV = new Lumiere(game, "lumierePorteViolet");
			lueurePorteV = new Lumiere(game, "lueurePorteViolet");
			porteV = new Porte(game, 1800, 0, lumierePorteV, lueurePorteV, null, "vertical", "laserViolet", debug);
				porteV.deplacement = porteV.height - 15;
				porteV.body.y = plateforme_sol2.body.y-plateforme_sol2.height/2-porteV.height/2;

			lueurePorteV.tweenScaleBoucle(0.5, 0, 800);
			lumierePorteV.tweenScaleBoucle(0.3, 0.3, 800);

			lumierePorteVe = new Lumiere(game, "lumierePorteVert");
			lueurePorteVe = new Lumiere(game, "lueurePorteVert");
			porteVe = new Porte(game, 0, 0, lumierePorteVe, lueurePorteVe, null, "vertical", "laserVert",  debug);
				porteVe.deplacement = porteVe.height - 15;
				porteVe.body.x = plateforme2.body.x + 5;
				porteVe.body.y = plateforme2.height + porteVe.height/2 - 150;

			lueurePorteVe.tweenScaleBoucle(0.5, 0, 800);
			lumierePorteVe.tweenScaleBoucle(0.3, 0.3, 800);

				//BOUTONS
			boutonV = new Bouton(game, 1860, 200, "porte", porteV, null, 0, "vertical", "boutonViolet", debug);
				boutonV.body.x = game.world.width - boutonV.width/2;
				boutonV.deplacement = +boutonV.width/2;
			boutonVe = new Bouton(game, 0, 0, "porte", porteVe, null, 0, "vertical","boutonVert", debug);
				boutonVe.angle = 180;
				boutonVe.deplacement = -boutonVe.width/2;
				boutonVe.body.x = plateforme4.body.x - plateforme4.width/2 + boutonVe.width/2 + 30;
				boutonVe.body.y = plateforme4.body.y - 20;


				//CREATION GROUPES
			fonctionsService.creationGrp(); //voir "FonctionsAutre.js"

				//ADD GROUPES
					//BOUTONS
			boutonGrp.add(boutonV);
			boutonGrp.add(boutonVe);

					//PORTES
			porteGrp.add(porteV);
			porteGrp.add(porteVe);

					//BUMPER
			bumperGrp.add(bumper1);


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

			rebondGrp.add(plateformeRebond1);
			rebondGrp.add(plateformeRebond2);

				//PERSONNAGE
			personnage = new Player(game, this.positionPerso.x, this.positionPerso.y, "reposD", debug);
			personnage.nbrTir = 5;
			personnage.affichageVie();

			levelComplete.etoiles_3 = personnage.nbrTir - 2;
			levelComplete.etoiles_2 = personnage.nbrTir - 3;
			levelComplete.etoiles_1 = personnage.nbrTir - 4;
			levelComplete.needEtoiles = 2;
			levelComplete.numeroNiveau = 1;


				//CREATION COLLISION GROUPE
			fonctionsService.creationCollisionGrp(); //voir "FonctionsAutre.js"

				//SET SHAPES (les bumpers et bouton sont directement fait dans leur classe)
			plateforme_sol1.body.setRectangleFromSprite(plateforme_sol1);
			plateforme_sol2.body.setRectangleFromSprite(plateforme_sol2);


			plateforme1.body.loadPolygon("physicsData1", "plateforme1");
			plateforme2.body.loadPolygon("physicsData1", "plateforme2");
			plateforme3.body.loadPolygon("physicsData1", "plateforme3");
			plateforme4.body.loadPolygon("physicsData1", "plateforme4");

			plateformeRebond1.body.loadPolygon("physicsData1", "plateformeRebond");
			plateformeRebond2.body.loadPolygon("physicsData1", "plateformeRebond2");

			//plateformeRebond.body.loadPolygon("physicsData", "plateformeRebond");

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

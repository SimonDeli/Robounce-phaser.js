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
			var levelService = new LevelService(game);

			checkSortie = true;
				//BORD


				//PLATEFORME
			this.plateforme1 = levelService.createPlateforme(0, 0, "plateforme1", debug);
			this.plateforme1.body.x = 0 + this.plateforme1.width/2;
			this.plateforme1.body.y = 0 + this.plateforme1.height/2;

			this.plateforme2 = levelService.createPlateforme(game.world.width/2, 0, "plateforme2", debug);
				this.plateforme2.body.y = 0 + this.plateforme2.height/2 -150;

			this.plateforme3 = levelService.createPlateforme(0, game.world.height/2 +35, "plateforme3", debug);
				this.plateforme3.body.x = game.world.width - this.plateforme3.width/2 + 50;

			this.plateforme4 = levelService.createPlateforme(0, 0, "plateforme4", debug);
				this.plateforme4.body.x = this.plateforme2.body.x + this.plateforme4.width/2 - 10;
				this.plateforme4.body.y = this.plateforme2.body.y + 370;

			this.plateforme_sol1 = levelService.createPlateforme(0, 900, "plateforme_sol1", debug);
				this.plateforme_sol1.body.x = 0 + this.plateforme_sol1.width/2;

			this.plateforme_sol2 = levelService.createPlateforme(0, 1000, "plateforme_sol2", debug);
				this.plateforme_sol2.body.x = this.plateforme_sol1.width + this.plateforme_sol2.width/2;

			this.plateformeRebond1 = levelService.createPlateformeRebond(0, 0, "plateformeRebond", debug);
				this.plateformeRebond1.body.x = 0 + this.plateformeRebond1.width/2;
				this.plateformeRebond1.body.y = this.plateforme1.height + this.plateformeRebond1.height/2;

			this.plateformeRebond2 = levelService.createPlateformeRebond(0, 0, "plateformeRebond", debug);
				this.plateformeRebond2.body.x = game.world.width - this.plateforme3.width - this.plateformeRebond2.width/2 + 50;
				this.plateformeRebond2.body.y = this.plateforme3.body.y - this.plateforme3.height/2;
				this.plateformeRebond2.angle = 90;

				//BUMPER
			bumper1 = new Bumper(game, 700, 0, "bumper", debug);
				bumper1.body.y = this.plateforme_sol2.body.y-10;


			levelComplete = new Bumper(game, game.world.width-20, game.world.height-190, "bumper", debug);
			levelComplete.body.y = this.plateforme_sol2.body.y-10;
			levelComplete.anchor.setTo(0.5);
			levelComplete.scale.set(0.8, 1);
			levelComplete.alpha = 0;




				//PORTES
			lumierePorteV = new Lumiere(game, "lumierePorteViolet");
			lueurePorteV = new Lumiere(game, "lueurePorteViolet");
			porteV = new Porte(game, 1800, 0, lumierePorteV, lueurePorteV, null, "vertical", "laserViolet", debug);
			porteV.deplacement = porteV.height - 15;
			porteV.body.y = this.plateforme_sol2.body.y-this.plateforme_sol2.height/2-porteV.height/2;

			lueurePorteV.tweenScaleBoucle(0.5, 0, 800);
			lumierePorteV.tweenScaleBoucle(0.3, 0.3, 800);

			lumierePorteVe = new Lumiere(game, "lumierePorteVert");
			lueurePorteVe = new Lumiere(game, "lueurePorteVert");
			porteVe = new Porte(game, 0, 0, lumierePorteVe, lueurePorteVe, null, "vertical", "laserVert",  debug);
			porteVe.deplacement = porteVe.height - 15;
			porteVe.body.x = this.plateforme2.body.x + 5;
			porteVe.body.y = this.plateforme2.height + porteVe.height/2 - 150;

			lueurePorteVe.tweenScaleBoucle(0.5, 0, 800);
			lumierePorteVe.tweenScaleBoucle(0.3, 0.3, 800);

				//BOUTONS
			boutonV = new Bouton(game, 1860, 200, "porte", porteV, null, 0, "vertical", "boutonViolet", debug);
			boutonV.body.x = game.world.width - boutonV.width/2;
			boutonV.deplacement = +boutonV.width/2;
			boutonVe = new Bouton(game, 0, 0, "porte", porteVe, null, 0, "vertical","boutonVert", debug);
			boutonVe.angle = 180;
			boutonVe.deplacement = -boutonVe.width/2;
			boutonVe.body.x = this.plateforme4.body.x - this.plateforme4.width/2 + boutonVe.width/2 + 30;
			boutonVe.body.y = this.plateforme4.body.y - 20;


				//CREATION GROUPES
			initialisationService.creationGrp(); //voir "FonctionsAutre.js"

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
			for(var i = 0 ; i<levelService.bordures.length ; i++){
				plateformeGrp.add(levelService.bordures[i]);
			}

					//PLATEFORMES
			levelService.createPlateformeGroup(plateformeGrp, false);
			levelService.createPlateformeGroup(rebondGrp, true)

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
			this.collisionGroup = initialisationService.creationCollisionGrp(); //voir "FonctionsAutre.js"

				//SET SHAPES (les bumpers et bouton sont directement fait dans leur classe)
			this.plateforme_sol1.body.setRectangleFromSprite(this.plateforme_sol1);
			this.plateforme_sol2.body.setRectangleFromSprite(this.plateforme_sol2);


			this.plateforme1.body.loadPolygon("physicsData1", "plateforme1");
			this.plateforme2.body.loadPolygon("physicsData1", "plateforme2");
			this.plateforme3.body.loadPolygon("physicsData1", "plateforme3");
			this.plateforme4.body.loadPolygon("physicsData1", "plateforme4");

			this.plateformeRebond1.body.loadPolygon("physicsData1", "plateformeRebond");
			this.plateformeRebond2.body.loadPolygon("physicsData1", "plateformeRebond2");

			//plateformeRebond.body.loadPolygon("physicsData", "plateformeRebond");

				//SET COLLISIONS_GROUPES
					//bumper
			levelService.setCollisionGroup(plateformeGrp, rebondGrp, bumperGrp, boutonGrp, porteGrp, personnage, levelComplete, this.collisionGroup);

			personnage.body.collides(this.collisionGroup.plateformeCollisionGroup, collisionsService.impactPersoPlateforme, this);
			for(var i = 0 ; i < plateformeGrp.length ; i++){
				plateformeGrp.children[i].body.collides(this.collisionGroup.personnageCollisionGroup);
			}
					//Personnage -> Bumper
			personnage.body.collides(this.collisionGroup.bumperCollisionGroup, collisionsService.impactPersoBumper, this);
			for(var i = 0 ; i < bumperGrp.length ; i++){
				bumperGrp.children[i].body.collides(this.collisionGroup.personnageCollisionGroup);
			}
					//Personnage -> Porte
			personnage.body.collides(this.collisionGroup.porteCollisionGroup);
			for(var i = 0 ; i < porteGrp.length ; i++){
				porteGrp.children[i].body.collides(this.collisionGroup.personnageCollisionGroup);
			}

					//Personnage -> Sortie
			levelComplete.body.collides(this.collisionGroup.personnageCollisionGroup);
			personnage.body.collides(this.collisionGroup.sortieCollisionGroup, collisionsService.impactPersoSortie, this);

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
			personnage.tir(this.collisionGroup);
			fonctionsService.gamePerdu();
			personnage.klaxon();

			fonctionsService.verifMusiqueEnCours();



		}// <<UPDATE
}

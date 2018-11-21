function allPreload(){

if(checkPreload == false)
			{
			var nbrNiveau = 6;
			
			game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
			game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL; 
				//SHOW_ALL -> prend toute la largeur et hauteur possible, tout en gardant le ratio
				//EXACT_FIT -> prend toute la largeur et la hauteur de l'écran
    		game.scale.pageAlignHorizontally = true; //alignementHorizontal
    		game.scale.pageAlignVertically = true; //alignementVertical
			game.stage.backgroundColor = '#eee'; //couleur du fond
			//LOAD_SPRITE
			
			game.load.image("background", "assets/background/backgroundBlanc.png");
			game.load.image("bordV", "assets/communs/bordVertical.png");
			game.load.image("bordH", "assets/communs/bordHorizontal.png");

			//game.load.spritesheet("personnage", "assets/animations/animationsTest.png", 60, 105);
			game.load.spritesheet("reposD", "assets/animations/repos_droite.png", 120, 210, 35);
			game.load.spritesheet("reposG", "assets/animations/repos_gauche.png", 120, 210, 35);
			game.load.spritesheet("marcheD", "assets/animations/marche_droite.png", 120, 210, 25);
			game.load.spritesheet("marcheG", "assets/animations/marche_gauche.png", 120, 210, 25);
			game.load.spritesheet("sautD", "assets/animations/saut_droite.png", 120, 210, 25);
			game.load.spritesheet("sautG", "assets/animations/saut_gauche.png", 120, 210, 25);
			game.load.spritesheet("tirD", "assets/animations/tir_droite.png", 120, 210, 25);
			game.load.spritesheet("tirG", "assets/animations/tir_gauche.png", 120, 210, 25);
	
			/*game.load.image("pauseMenu", "assets/communs/menu/pauseMenu.png");*/
			game.load.spritesheet("buttonMenu", "assets/communs/menu/spriteSheetButton", 817, 127);
			game.load.image("filtreMenu", "assets/communs/menu/filtreNoir.png");
	
			game.load.image("projDetruit", "assets/communs/projectileDetruit.png");
	
			game.load.image("boutonPerdu", "assets/communs/boutonPerdu.png");

			game.load.spritesheet("boutonMenu_Principal", "assets/communs/menu/spriteSheetButton", 813, 127);
			game.load.image("ombreBouton_Principal", "assets/communs/menu/ombreBoutton.png");
			game.load.image("personnageFace", "assets/communs/personnageFaceFlou.png");
			game.load.image("rondBleu", "assets/communs/projectile.png");
			game.load.image("etoiles_Niveau", "assets/communs/menu/niveaux/etoiles.png");
			game.load.image("zero_etoile", "assets/communs/menu/niveaux/zero_etoile.png");
			game.load.image("une_etoile", "assets/communs/menu/niveaux/une_etoile.png");
			game.load.image("deux_etoiles", "assets/communs/menu/niveaux/deux_etoiles.png");
			game.load.image("trois_etoiles", "assets/communs/menu/niveaux/trois_etoiles.png");
			game.load.image("ecranInformations", "assets/explications/ecranInformations.png");
			game.load.image("iconeInformation", "assets/communs/iconeInformation.png");
				game.load.image("rectangleNoir", "assets/communs/rectangleNoir.png");
				
			game.load.image("cadenas_Niveau", "assets/communs/menu/niveaux/cadenas.png");
				
			game.load.image("ecranPerdu", "assets/communs/perdu.png");
				
			game.load.image("etoilePleine", "assets/communs/etoilePleine.png");
			game.load.image("etoileVide", "assets/communs/etoileVide.png");
			
			//Page Niveau 
			
			for(var i = 0 ; i < nbrNiveau ; i++){
				game.load.spritesheet("boutonMenu_Niveau"+(i+1), "assets/communs/menu/niveaux/boutonNiveau_"+(i+1)+".png", 813, 127);
			}
			game.load.spritesheet("boutonMenu_Niveau", "assets/communs/menu/niveaux/boutonNiveau.png", 813, 127);
			
			
			game.load.image("ombreBouton_Niveau", "assets/communs/menu/niveaux/ombreBoutonNiveau.png");
			game.load.image("flecheRetour", "assets/communs/menu/niveaux/fleche_retour.png");
			game.load.image("lueurFleche", "assets/communs/menu/niveaux/lueurFleche.png");
			
			
			checkPreload = true;
				
			//Niveaux
				//Communs
			game.load.image("cible", "assets/communs/cible.png");
			game.load.image("bumper", "assets/communs/bumper.png");
				
			game.load.image("plateformeRebond", "assets/communs/niveaux/plateformes/plateformeRebond.png");
			game.load.image("plateformeRebond45", "assets/communs/niveaux/plateformes/plateformeRebond_45.png");
			game.load.image("plateformeRebond45_2", "assets/communs/niveaux/plateformes/plateformeRebond45.png");
			game.load.image("plateformeRebondOrange", "assets/communs/niveaux/plateformes/plateformeRebondOrange.png");
			game.load.image("plateformeRebondRouge", "assets/communs/niveaux/plateformes/plateformeRebondRouge.png");
			game.load.image("plateformeRebondViolet", "assets/communs/niveaux/plateformes/plateformeRebondViolet.png");
			game.load.image("plateformeRebondVert", "assets/communs/niveaux/plateformes/plateformeRebondVert.png");
				
			game.load.image("projectile", "assets/communs/projectile.png");
			
			game.load.image("boutonRondViolet", "assets/communs/niveaux/boutons/boutonRondViolet.png");
			game.load.image("boutonViolet", "assets/communs/niveaux/boutons/boutonViolet.png");
			game.load.image("boutonViolet_90", "assets/communs/niveaux/boutons/boutonViolet_90.png");
			game.load.image("laserViolet", "assets/communs/niveaux/portes/porteV.png");
			game.load.image("laserViolet_90", "assets/communs/niveaux/portes/porteV_90.png");
			game.load.image("lueurePorteViolet", "assets/communs/niveaux/portes/lueurV.png");
			game.load.image("lumierePorteViolet", "assets/communs/niveaux/portes/lumiereV.png");
			
			game.load.image("boutonRondVert", "assets/communs/niveaux/boutons/boutonRondVert.png");
			game.load.image("boutonVert", "assets/communs/niveaux/boutons/boutonVert.png");
			game.load.image("boutonVert_90", "assets/communs/niveaux/boutons/boutonVert_90.png");
			game.load.image("laserVert", "assets/communs/niveaux/portes/porteVe.png");
			game.load.image("laserVert_90", "assets/communs/niveaux/portes/porteVe_90.png");
			game.load.image("lueurePorteVert", "assets/communs/niveaux/portes/lueurVe.png");
			game.load.image("lumierePorteVert", "assets/communs/niveaux/portes/lumiereVe.png");
				
			game.load.image("boutonRondOrange", "assets/communs/niveaux/boutons/boutonRondOrange.png");
			game.load.image("boutonOrange_90", "assets/communs/niveaux/boutons/boutonOrange_90.png");
			game.load.image("laserOrange", "assets/communs/niveaux/portes/porteO.png");
			game.load.image("laserOrange_90", "assets/communs/niveaux/portes/porteO_90.png");
			game.load.image("lueurePorteOrange", "assets/communs/niveaux/portes/lueurO.png");
			game.load.image("lumierePorteOrange", "assets/communs/niveaux/portes/lumiereO.png");
				
			game.load.image("boutonRondRouge", "assets/communs/niveaux/boutons/boutonRondRouge.png");
			game.load.image("boutonRouge", "assets/communs/niveaux/boutons/boutonRouge.png");
			game.load.image("laserRouge", "assets/communs/niveaux/portes/porteR.png");
			game.load.image("lueurePorteRouge", "assets/communs/niveaux/portes/lueurR.png");
			game.load.image("lumierePorteRouge", "assets/communs/niveaux/portes/lumiereR.png");

			game.load.physics("physicsDataTuto", "json/plateformeTuto.json");
			game.load.physics("physicsData1", "json/plateformeLevel_1.json");
			game.load.physics("physicsData2", "json/plateformeLevel_2.json");
			game.load.physics("physicsData3", "json/plateformeLevel_3.json");
			game.load.physics("physicsData4", "json/plateformeLevel_4.json");
			game.load.physics("physicsData5", "json/plateformeLevel_5.json");
			game.load.physics("physicsData6", "json/plateformeLevel_6.json");
			game.load.physics("physicsData", "json/plateformeRebond.json");
			
			var loadingText = game.add.text(200, 270, 'loading... 0%', { fill: '#f00' });
			var progressDisplay = 0;
			var test = game.add.sprite(0, 0, "chargement");
			var timerEvt = game.time.events.loop(100, function (){
				if(progressDisplay < 100){
					if(progressDisplay < game.load.progress){
						loadingText.text = 'Chargement... '+(++progressDisplay)+'%';
					}
				}
				else{
					loadingText.text = 'Ready, Go!';
					game.time.events.remove(timerEvt);
				}
			}, this);
				
				
			//SONS
			
			game.load.audio("tir", "assets/sounds/niveau/tir4.mp3");
			game.load.audio("impact_plateforme", "assets/sounds/niveau/impact_plateforme_normale1.mp3");
			game.load.audio("impact_plateforme_rebond", "assets/sounds/niveau/impact_plateforme_rebond.mp3");
			game.load.audio("impact_laser", "assets/sounds/niveau/impact_laser.mp3");
			game.load.audio("ouverture_porte", "assets/sounds/niveau/ouverture_porte.mp3");
			game.load.audio("fermeture_porte", "assets/sounds/niveau/fermeture_porte1.mp3");
			game.load.audio("tourne_plateforme", "assets/sounds/niveau/tourne_plateforme.mp3");
	
			game.load.audio("jump", "assets/sounds/niveau/jump4.mp3");
	
			game.load.audio("klaxon", "assets/sounds/niveau/beep.mp3");
			game.load.audio("pop_proj", "assets/sounds/niveau/proj_pop.mp3");
				
			game.load.audio("win", "assets/sounds/niveau/win.mp3");
			game.load.audio("lose", "assets/sounds/niveau/lose2.mp3");
			game.load.audio("etoile", "assets/sounds/niveau/etoile.mp3");
			
			game.load.audio("1", "assets/sounds/menu/1.mp3");
			game.load.audio("2", "assets/sounds/menu/2.mp3");
			game.load.audio("error", "assets/sounds/menu/error.mp3");
				
			game.load.audio("musiqueMenu", "assets/sounds/musiques/musiquePhaser_menu.mp3");
			game.load.audio("musiqueNiveau", "assets/sounds/musiques/musiquePhaser_niveau.mp3");
				
			}// JavaScript Document
	
			
	}
var CollisionsService = function(){}

CollisionsService.prototype.impactPersoPlateforme = function(personnage, plateforme){
	personnage.sprite.canJump = true;
	personnage.sprite.isJumping = false;
}// <<impactPersoPlateforme

CollisionsService.prototype.impactPersoBumper = function(personnage, bumper){
	personnage.sprite.saut(2000);
	bumper.sprite.bumperSaut();
}// <<impactPersoBumper1

CollisionsService.prototype.impactProjPlateforme = function(projectile, plateforme){

	sonImpactPlateforme.play();

	projectile.sprite.disparition();
	projectileLance = false;

}// <<impactProjPlateforme

CollisionsService.prototype.impactProjBouton = function(projectile, bouton){
	projectile.sprite.disparition();
	projectileLance = false;

	if(bouton.sprite.type === "porte"){

		fonctionsService.ouverturePorte(bouton.sprite.declenche1, bouton.sprite, bouton.sprite.declenche1.lumiere, bouton.sprite.deplacement); //voir "FonctionsAutres.js"
	}
	if(bouton.sprite.type === "doublePorte"){
		fonctionsService.ouverturePorte(bouton.sprite.declenche1, bouton.sprite, bouton.sprite.declenche1.lumiere, null);
		fonctionsService.ouverturePorte(bouton.sprite.declenche2, bouton.sprite, bouton.sprite.declenche2.lumiere, bouton.sprite.deplacement);
	}
	if(bouton.sprite.type === "plateformeRebond"){
		fonctionsService.rotationPlateformeRebond(bouton.sprite.declenche1);
	}
	if(bouton.sprite.type === "plateforme"){
		fonctionsService.deplacementPlateforme(bouton.sprite.declenche1, bouton.sprite);
	}
}
// <<impactProjBouton
CollisionsService.prototype.impactProjPorte = function(projectile, porte){
	sonImpactLaser.play();
	projectile.sprite.disparition();
		projectileLance = false;
}
// <<impactProjPorte
CollisionsService.prototype.impactPersoSortie = function(personnage, sortie){
	if(checkSortie){
		son2.play();
		var current = parseInt(game.state.current);
		var state = (current+1).toString();


		if(personnage.sprite.nbrTir >= sortie.sprite.etoiles_3 && checkEtoileNiveau[sortie.sprite.numeroNiveau - 1].trois_etoiles == false){
			if(checkEtoileNiveau[sortie.sprite.numeroNiveau - 1].deux_etoiles == true)
				nbrEtoiles += 1;
			else if(checkEtoileNiveau[sortie.sprite.numeroNiveau - 1].une_etoile == true)
				nbrEtoiles += 2;
			else
				nbrEtoiles += 3;
			liste_niveau[sortie.sprite.numeroNiveau-1] = 3;
			checkEtoileNiveau[sortie.sprite.numeroNiveau - 1].trois_etoiles = true;
			etoileGagne = 3;
		}

		else if(personnage.sprite.nbrTir < sortie.sprite.etoiles_3 && personnage.sprite.nbrTir > sortie.sprite.etoiles_1 && checkEtoileNiveau[sortie.sprite.numeroNiveau - 1].deux_etoiles == false)
		{
			if(checkEtoileNiveau[sortie.sprite.numeroNiveau - 1].trois_etoiles == true)
				nbrEtoiles += 0;
			else if(checkEtoileNiveau[sortie.sprite.numeroNiveau - 1].une_etoile == true)
				nbrEtoiles += 1;
			else
				nbrEtoiles += 2;
			if(liste_niveau[sortie.sprite.numeroNiveau-1] <= 2) //si Il a deja gagné 2 étoiles ou moins
				liste_niveau[sortie.sprite.numeroNiveau-1] = 2;

			checkEtoileNiveau[sortie.sprite.numeroNiveau - 1].deux_etoiles = true;
			etoileGagne = 2;
		}
		else  if(personnage.sprite.nbrTir <= sortie.sprite.etoiles_1 && checkEtoileNiveau[sortie.sprite.numeroNiveau - 1].une_etoile == false){
			if(checkEtoileNiveau[sortie.sprite.numeroNiveau - 1].trois_etoiles == true)
					nbrEtoiles += 0;
			else if(checkEtoileNiveau[sortie.sprite.numeroNiveau - 1].deux_etoiles == true)
					nbrEtoiles += 0;
			else
				nbrEtoiles += 1;
			if(liste_niveau[sortie.sprite.numeroNiveau-1] <= 1)// si il a déjà gagné 1 etoile ou moins
				liste_niveau[sortie.sprite.numeroNiveau-1] = 1;

			checkEtoileNiveau[sortie.sprite.numeroNiveau - 1].une_etoile = true;
			etoileGagne = 1;
		}

		if(sortie.sprite.needEtoiles != null) {//si on est pas au tuto
				var win = game.add.audio("win");
				game.state.start("EcranWin", true, false, state, etoileGagne, sortie.sprite.needEtoiles);
				win.play();
		}
		else
			game.state.start(state);

		checkSortie = false;
	}
}// <<impactPersoSortie

CollisionsService.prototype.impactRebond = function(body1, body2){
	sonImpactPlateformeRebond.play();
	body1.sprite.tweenScale();

}

var collisionsService = new CollisionsService();

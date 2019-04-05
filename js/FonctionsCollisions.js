function impactPersoPlateforme(personnage, plateforme){
	//console.log("Perso_Plateforme");
	personnage.sprite.canJump = true;
	personnage.sprite.isJumping = false;
}// <<impactPersoPlateforme

function impactPersoBumper(personnage, bumper){
	//console.log("Perso_Bumper");
	personnage.sprite.saut(2000);
	bumper.sprite.bumperSaut();
}// <<impactPersoBumper1

function impactProjPlateforme(projectile, plateforme){
	console.log("<b>impactProjPlateforme</b>");

	sonImpactPlateforme.play();

	projectile.sprite.disparition();
	projectileLance = false;

}// <<impactProjPlateforme

function impactProjBouton(projectile, bouton){
	console.log("<b>impactProjBouton</b>");
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
function impactProjPorte(projectile, porte){
	sonImpactLaser.play();
	projectile.sprite.disparition();
		projectileLance = false;
	if(porte.sprite.porteOuverte === false)
	{
		console.log("porteOuverte");

	}
}
// <<impactProjPorte
function impactPersoSortie(personnage, sortie){
	if(checkSortie)
		{
		console.log("gagne");
		son2.play();
		var current = parseInt(game.state.current);
		var state = (current+1).toString();


		if(personnage.sprite.nbrTir >= sortie.sprite.etoiles_3 && checkEtoileNiveau[sortie.sprite.numeroNiveau - 1].trois_etoiles == false)
		{
			if(checkEtoileNiveau[sortie.sprite.numeroNiveau - 1].deux_etoiles == true)
			{
				nbrEtoiles += 1;
			}
			else if(checkEtoileNiveau[sortie.sprite.numeroNiveau - 1].une_etoile == true)
			{
				nbrEtoiles += 2;
			}
			else
			{
				/*console.log(checkEtoileNiveau[sortie.sprite.numeroNiveau - 1].une_etoile+" UNE ETOILE CHECK");
				console.log(checkEtoileNiveau[sortie.sprite.numeroNiveau - 1].deux_etoiles+" DEUX ETOILE CHECK");*/
				nbrEtoiles += 3;
			}
			console.log("3 ETOILES");
			liste_niveau[sortie.sprite.numeroNiveau-1] = 3;
			checkEtoileNiveau[sortie.sprite.numeroNiveau - 1].trois_etoiles = true;
			etoileGagne = 3;
		}

		else if(personnage.sprite.nbrTir < sortie.sprite.etoiles_3 && personnage.sprite.nbrTir > sortie.sprite.etoiles_1 && checkEtoileNiveau[sortie.sprite.numeroNiveau - 1].deux_etoiles == false)
		{
			if(checkEtoileNiveau[sortie.sprite.numeroNiveau - 1].trois_etoiles == true)
			{
				nbrEtoiles += 0;
			}

			else if(checkEtoileNiveau[sortie.sprite.numeroNiveau - 1].une_etoile == true)
			{
				nbrEtoiles += 1;
			}
			else
			{
				nbrEtoiles += 2;
			}


			console.log("2 ETOILES");
			if(liste_niveau[sortie.sprite.numeroNiveau-1] <= 2) //si Il a deja gagné 2 étoiles ou moins
				liste_niveau[sortie.sprite.numeroNiveau-1] = 2;

			checkEtoileNiveau[sortie.sprite.numeroNiveau - 1].deux_etoiles = true;
			etoileGagne = 2;
		}
		else  if(personnage.sprite.nbrTir <= sortie.sprite.etoiles_1 && checkEtoileNiveau[sortie.sprite.numeroNiveau - 1].une_etoile == false){
			if(checkEtoileNiveau[sortie.sprite.numeroNiveau - 1].trois_etoiles == true)
				{
					nbrEtoiles += 0;
				}

			else if(checkEtoileNiveau[sortie.sprite.numeroNiveau - 1].deux_etoiles == true)
				{
					nbrEtoiles += 0;
				}
			else
				{
				nbrEtoiles += 1;
				}


			console.log("1 ETOILE");
			if(liste_niveau[sortie.sprite.numeroNiveau-1] <= 1)// si il a déjà gagné 1 etoile ou moins
				liste_niveau[sortie.sprite.numeroNiveau-1] = 1;

			checkEtoileNiveau[sortie.sprite.numeroNiveau - 1].une_etoile = true;
			etoileGagne = 1;
		}



		if(sortie.sprite.needEtoiles != null) //si on est pas au tuto
		{
			/*if(sortie.sprite.needEtoiles <= nbrEtoiles)
			{*/
				var win = game.add.audio("win");
				game.state.start("EcranWin", true, false, state, etoileGagne, sortie.sprite.needEtoiles);
				win.play();
			/*}
			else
			{
				game.state.restart();
			}*/
		}
		else{
			game.state.start(state);
		}
		checkSortie = false;
	}
}// <<impactPersoSortie

function impactRebond(body1, body2){
	sonImpactPlateformeRebond.play();
	body1.sprite.tweenScale();

}

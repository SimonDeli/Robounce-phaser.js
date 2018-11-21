function creationBordure(){
	bordHorizontalB = new Plateforme(game, game.world.width/2, game.world.height, "bordH", debug);
		bordHorizontalB.body.y = game.world.height + bordHorizontalB.height/2;
	bordHorizontalH = new Plateforme(game, game.world.width/2, 0, "bordH", debug);
		bordHorizontalH.body.y = 0 - bordHorizontalH.height/2;
	bordVerticalD = new Plateforme(game, game.world.width, game.world.height/2, "bordV", debug);
		bordVerticalD.body.x = game.world.width + bordVerticalD.width/2;
	bordVerticalG = new Plateforme(game, 0, game.world.height/2, "bordV", debug);
		bordVerticalG.body.x = 0 - bordVerticalG.width/2;
	
	bordHorizontalB.body.sprite.alpha = 0;
	bordHorizontalH.body.sprite.alpha = 0;
	bordVerticalD.body.sprite.alpha = 0;
	bordVerticalG.body.sprite.alpha = 0;
	
	bordHorizontalB.body.setRectangleFromSprite(bordHorizontalB);
	bordHorizontalH.body.setRectangleFromSprite(bordHorizontalH);
	bordVerticalG.body.setRectangleFromSprite(bordVerticalG);
	bordVerticalD.body.setRectangleFromSprite(bordVerticalD);
}

function styleSheet(frameDebut, frameFin, objet, nom){ //facilite la creation et l'affectation des animations
	var tableau = new Array();
	for(var i = frameDebut ; i <= frameFin ; i++){
		tableau.push(i);
	}
	var anim = objet.animations.add(nom, tableau);
	return anim;
}// <<styleSheet

function creationCollisionGrp(){
	plateformeCollisionGroup = game.physics.p2.createCollisionGroup();
	plateformeRebondCollisionGroup = game.physics.p2.createCollisionGroup();
	personnageCollisionGroup = game.physics.p2.createCollisionGroup();
	bumperCollisionGroup = game.physics.p2.createCollisionGroup();
	boutonCollisionGroup = game.physics.p2.createCollisionGroup();
	porteCollisionGroup = game.physics.p2.createCollisionGroup();
	sortieCollisionGroup = game.physics.p2.createCollisionGroup();
	projectileCollisionGroup = game.physics.p2.createCollisionGroup();
}

function creationGrp(){
	porteGrp = game.add.group();
	boutonGrp = game.add.group();
	bumperGrp = game.add.group();
	plateformeGrp = game.add.group();
	rebondGrp = game.add.group();
}
function creationSons(){
	bruitageGrp = new Array();
	musiqueGrp = new Array();
	
	sonTir = game.add.audio("tir", 1, false);
	sonImpactPlateforme = game.add.audio("impact_plateforme", 1, false);
	sonImpactPlateformeRebond = game.add.audio("impact_plateforme_rebond", 1, false);
	sonOuverturePorte = game.add.audio("ouverture_porte", 1, false);
	sonFermeturePorte = game.add.audio("fermeture_porte", 1, false);
	sonTournePlateforme = game.add.audio("tourne_plateforme", 1, false);
	sonImpactLaser = game.add.audio("impact_laser", 1, false);
	
	sonKlaxon = game.add.audio("klaxon", 1, false);
	sonJump = game.add.audio("jump", 1, false);
	sonPopProj = game.add.audio("pop_proj", 1, false);
	
	son1 = game.add.audio("1", 1, false);
	son2 = game.add.audio("2", 1, false);
	
	lose = game.add.audio("lose", 1, false);
	
	error = game.add.audio("error", 1, false);
	
	musiqueMenu = game.add.audio("musiqueMenu", 1, true);
	musiqueNiveau = game.add.audio("musiqueNiveau", 1, true);
	
	bruitageGrp.push(sonTir);
	bruitageGrp.push(sonImpactPlateforme);
	bruitageGrp.push(sonImpactPlateformeRebond);
	bruitageGrp.push(sonOuverturePorte);
	bruitageGrp.push(sonFermeturePorte);
	bruitageGrp.push(sonTournePlateforme);
	bruitageGrp.push(sonImpactLaser);
	bruitageGrp.push(sonKlaxon);
	bruitageGrp.push(sonJump);
	bruitageGrp.push(sonPopProj);
	
	bruitageGrp.push(son1);
	bruitageGrp.push(son2);
	
	bruitageGrp.push(lose);
	bruitageGrp.push(error);
	
	
	
	musiqueGrp.push(musiqueMenu);
	musiqueGrp.push(musiqueNiveau);
	
}

function ouverturePorte(porte, bouton, lumiere, distance){
	if(porte.porteOuverte === false){
		console.log(porte.porteOuverte);
		bouton.btnAppuye(distance);
		porte.ouverture(280);
		lumiere.tweenAlpha(0, 500);
		sonOuverturePorte.play();
	}
	else {
		console.log(porte.porteOuverte);
		bouton.btnAppuye(distance);
		porte.ouverture(-200);
		lumiere.tweenAlpha(1, 500);
		sonFermeturePorte.play();
		
	}
}

function rotationPlateformeRebond(plateforme){
	plateforme.rotationFunction();
	
}

function tirProjectile(velocX, velocY){
	//if (!(projectileLance)){ //s'il n'y a pas de projectiles en cours
		sonTir.play();
		projectileLance = true; //un projectile est en cours
		projectile = new Projectile(game, personnage.x, personnage.y+50, velocX, velocY, "projectile", debug); //creation du proj

			//SET COLLISION GROUP PROJ
		projectile.body.setCollisionGroup(projectileCollisionGroup);

			//COLLIDES
		projectile.body.collides(plateformeRebondCollisionGroup, impactRebond, this);
		projectile.body.collides(plateformeCollisionGroup, impactProjPlateforme, this);
		projectile.body.collides(boutonCollisionGroup, impactProjBouton, this);
		projectile.body.collides(porteCollisionGroup, impactProjPorte, this);
		
		for(var i = 0 ; i < plateformeGrp.length ; i++){
			plateformeGrp.children[i].body.collides(projectileCollisionGroup);
		}
		for(var i = 0 ; i < rebondGrp.length ; i++){
			rebondGrp.children[i].body.collides(projectileCollisionGroup);
		}
		for(var i = 0 ; i < boutonGrp.length ; i++){
			boutonGrp.children[i].body.collides(projectileCollisionGroup);
		}
			
		for(var i = 0 ; i < porteGrp.length ; i++){
			porteGrp.children[i].body.collides(projectileCollisionGroup);
		}
			//MATERIAL CREATION
		var tableauMat = new Array();
		var tableauContMat = new Array();
		for(var i = 0 ; i<rebondGrp.length ; i++){
			var plateformeRebondMaterial = game.physics.p2.createMaterial("platRebMat1", rebondGrp.children[i].body);
			tableauMat.push(plateformeRebondMaterial);
		}
		projMaterial = game.physics.p2.createMaterial("projectileMat", projectile.body);
				//contact material
		for(var i = 0 ; i<tableauMat.length ; i++){
			var contactMaterial = game.physics.p2.createContactMaterial(projMaterial, tableauMat[i]);
			tableauContMat.push(contactMaterial);
		}		
				//affectation des propriété du contact
		for(var i = 0 ; i<tableauContMat.length ; i++){
			tableauContMat[i].restitution = 1.05;
			tableauContMat[i].friction = 0;
			//tableauContMat[i].stiffness = 1000;
			tableauContMat[i].frictionRelaxation = 0;
			tableauContMat[i].relaxation = 10000;
			
		}
		console.log(tableauContMat[0]);
}
function pauseFunction(){
	if(isPaused === false)
	{
		filtreMenu = game.add.sprite(0, 0, "filtreMenu");

		/*pauseButton1 = game.add.button(game.world.width/2, 0, "buttonMenu", bouttonMenuFunction1, this, 1, 0, 2);*/
		pauseButton1 = new PauseBoutton(game, game.world.width/2, 0, "buttonMenu", bouttonMenuFonctionMenuP);
		pauseButton2 = new PauseBoutton(game, game.world.width/2, 0, "buttonMenu", bouttonMenuFonctionMenuNiveau);
		pauseButton3 = new PauseBoutton(game, game.world.width/2, 0, "buttonMenu", bouttonMenuFonctionReprendre);
		pauseButton4 = new PauseBoutton(game, game.world.width/2, 0, "buttonMenu", bouttonMenuFonctionRecommencer);
	

		textButton1 = game.add.text(game.world.width/2, 0,  'Menu principal', { font: '50px Calibri', fill: '#000' });
		textButton2 = game.add.text(game.world.width/2, 0, 'Choix niveau', { font: '50px Calibri', fill: '#000' });
		textButton3 = game.add.text(game.world.width/2, 0, 'Reprendre', { font: '50px Calibri', fill: '#000' });
		textButton4 = game.add.text(game.world.width/2, 0, 'Recommencer', { font: '50px Calibri', fill: '#000' });
		

		bouttonPauseGrp = game.add.group();
		textPauseGrp = game.add.group();

		bouttonPauseGrp.add(pauseButton1);
		bouttonPauseGrp.add(pauseButton2);
		bouttonPauseGrp.add(pauseButton3);
		bouttonPauseGrp.add(pauseButton4);
	

		textPauseGrp.add(textButton1);
		textPauseGrp.add(textButton2);
		textPauseGrp.add(textButton3);
		textPauseGrp.add(textButton4);
		

		var espacement = 150;
		var nombreBoutton = 0;
		
		for (var i = 0 ; i<bouttonPauseGrp.length ; i++){
			nombreBoutton++;
		}
		
		var hauteurMenu = (nombreBoutton*pauseButton1.height) + ((espacement-pauseButton1.height)*(nombreBoutton-1));
	
		for(var i = 0 ; i<bouttonPauseGrp.length ; i ++){
			
			textPauseGrp.children[i].anchor.set(0.5);
			bouttonPauseGrp.children[i].y = (game.world.height/2 - hauteurMenu/2 + pauseButton1.height/2) + espacement*i;
			textPauseGrp.children[i].y = bouttonPauseGrp.children[i].y;
			//espacement += 150;	
		}
		
		//console.log("pause");
		game.paused = true;
		
		isPaused = true;

	}
		}
function animationDestructionProj(projectile){
	var projDetruit = game.add.sprite(projectile.x, projectile.y, "projDetruit");
	projDetruit.anchor.setTo(0.5);
	projDetruit.scale.set(0.5);
	var tweenDetruitScale = game.add.tween(projDetruit.scale).to({x:1, y:1}, 100, Phaser.Easing.Linear.None);
	var tweenDetruitAlpha = game.add.tween(projDetruit).to({alpha:0}, 100, Phaser.Easing.Linear.None);
	tweenDetruitAlpha.start();
	tweenDetruitScale.start();
}
function reset(){
	game.paused = false;
	isPaused = false;
	projectileLance = false;
	personnage.destroy();
}

function bouttonMenuFonctionMenuP(){
	reset();
	
	son2.play();
	game.state.start("menuPrincipal");
	console.log("salut 1")
}
function bouttonMenuFonctionMenuNiveau(){
	reset();
	son2.play();
	game.state.start("menuNiveaux");
	console.log("salut 2")
}
function bouttonMenuFonctionReprendre(){
	for(var i = 0 ; i<bouttonPauseGrp.length ; i ++){
			bouttonPauseGrp.children[i].kill();
			textPauseGrp.children[i].kill();
		}
		son1.play();
		filtreMenu.destroy();
		game.paused = false;
		isPaused = false;
}
function bouttonMenuFonctionRecommencer(){
	reset();
	son2.play();
	game.state.restart();
}
function deplacementPlateforme(plateforme, bouton){
	if(plateforme.ouverte === false)
		{
			
			var tween = game.add.tween(plateforme.body).to({x:plateforme.deplacement}, 500, Phaser.Easing.Linear.None);
			tween.start();
			plateforme.ouverte = true;
			bouton.btnAppuye(bouton.deplacement);
		}
	else {
		var tween = game.add.tween(plateforme.body).to({x:-(plateforme.deplacement)}, 500, Phaser.Easing.Linear.None);
			tween.start();
			plateforme.ouverte = false;
			bouton.btnAppuye(bouton.deplacement);
	}
}
function gamePerdu(){
	if(personnage.perdu){
		lose.play();
		var perdu = game.add.sprite(game.world.width/2, game.world.height/2, "ecranPerdu");
		perdu.anchor.set(0.5);
		perdu.alpha = 0;
		
		//var bouton = game.add.button(game.world.width/2, game.world.height/2 + 150, "boutonPerdu", bouttonMenuFonctionRecommencer, this);
		var bouton = new PauseBoutton(game, game.world.width/2, game.world.height/2, "buttonMenu", bouttonMenuFonctionRecommencer);
		bouton.anchor.set(0.5);
		bouton.alpha = 0;
		
		var bouton2 = new PauseBoutton(game, game.world.width/2, game.world.height/2 + 200, "buttonMenu", bouttonMenuFonctionMenuNiveau);
		bouton2.anchor.set(0.5);
		bouton2.alpha = 0;
		
		var texteBouton = game.add.text(bouton.x, bouton.y, "Recommencer ?", {font: "50px Roboto Light", fill: "#000000"});
		texteBouton.anchor.set(0.5);
		texteBouton.alpha = 0;
		
		var texteBouton2 = game.add.text(bouton2.x, bouton2.y, "Menu niveau", {font: "50px Roboto Light", fill: "#000000"});
		texteBouton2.anchor.set(0.5);
		texteBouton2.alpha = 0;
		
		
		
		var tweenPerdu = game.add.tween(perdu).to({alpha:0.6}, 200, Phaser.Easing.Linear.None);
		tweenPerdu.onComplete.add(function(){
			game.paused = true;
		});
		var tweenBouton = game.add.tween(bouton).to({alpha:1}, 200, Phaser.Easing.Linear.None);
		var tweenBouton2 = game.add.tween(bouton2).to({alpha:1}, 200, Phaser.Easing.Linear.None);
		var tweenTexte = game.add.tween(texteBouton).to({alpha:1}, 200, Phaser.Easing.Linear.None);
		var tweenTexte2 = game.add.tween(texteBouton2).to({alpha:1}, 200, Phaser.Easing.Linear.None);
		
		tweenPerdu.start();
		tweenBouton.start();
		tweenBouton2.start();
		tweenTexte.start();
		tweenTexte2.start();
		
		
		//game.paused = true;	
		
	}
}
function affichageEtoile(){
	etoiles = game.add.sprite(game.world.width - 50, 30, "etoiles_Niveau");
	etoiles.anchor.set(0.5);
	etoiles.scale.set(0.5);

	texteEtoile = game.add.text(etoiles.x - 50, etoiles.y, nbrEtoiles, {font: "40px Roboto Light", fill: "#000"});
	texteEtoile.anchor.set(0.5);
}

function iconeInformation(){
	icone = game.add.sprite(50, game.world.height - 50, "iconeInformation");
	icone.scale.set(0.5);
	icone.anchor.set(0.5);
	icone.alpha = 0.5;
	
	rectangle = game.add.sprite(icone.x + icone.width/2 + 10, icone.y, "rectangleNoir");
	rectangle.scale.set(0.8, 0.6);
	rectangle.alpha = 0;
	rectangle.anchor.set(0, 0.5);
	
	texteInfo = game.add.text(icone.x + icone.width/2 + 30, icone.y, "Appuyez sur I pour afficher les informations", { font: "25px Roboto Light", fill: "#fff"});
	texteInfo.alpha = 0;
	texteInfo.anchor.set(0, 0.5);
	
	icone.inputEnabled = true;
	
	icone.events.onInputOver.add(function(){
		console.log("saluttween");
		var tweenIcone = game.add.tween(icone).to({alpha:1}, 100, Phaser.Easing.Linear.None);
		var tweenTexte = game.add.tween(texteInfo).to({alpha:1}, 100, Phaser.Easing.Linear.None);
		var tweenRectangle = game.add.tween(rectangle).to({alpha:0.7}, 100, Phaser.Easing.Linear.None);
		
		tweenIcone.start();
		tweenTexte.start();
		tweenRectangle.start();
	}, this);
	
	icone.events.onInputOut.add(function(){
		var tweenIcone = game.add.tween(icone).to({alpha:0.5}, 100, Phaser.Easing.Linear.None);
		var tweenTexte = game.add.tween(texteInfo).to({alpha:0}, 100, Phaser.Easing.Linear.None);
		var tweenRectangle = game.add.tween(rectangle).to({alpha:0}, 100, Phaser.Easing.Linear.None);
		
		tweenIcone.start();
		tweenTexte.start();
		tweenRectangle.start();
	}, this);
}

function afficherExplication(){
	if(this.pauseDebut != null){
		if(this.pauseDebut === false)
		{
			if(infosAfficher === false){

				var tween = game.add.tween(this.informations).to({alpha:1}, 200, Phaser.Easing.Linear.None);
				tween.start();
				infosAfficher = true;
			}
			else{					
				var tween = game.add.tween(this.informations).to({alpha:0}, 200, Phaser.Easing.Linear.None);
				tween.start();
				infosAfficher = false;
			}
		}
	}
	else {
		if(infosAfficher === false){

				var tween = game.add.tween(this.informations).to({alpha:1}, 200, Phaser.Easing.Linear.None);
				tween.start();
				infosAfficher = true;
			}
			else{					
				var tween = game.add.tween(this.informations).to({alpha:0}, 200, Phaser.Easing.Linear.None);
				tween.start();
				infosAfficher = false;
			}
	}

}

function verifMusiqueEnCours(){
	if(musiqueMenu.isPlaying)
	{
		musiqueMenu.stop();
	}
	if(musiqueNiveau.isPlaying == false){
		musiqueNiveau.play();
	}
}



var InitialisationService = function(){}

InitialisationService.prototype.creationBordure = function(){
	var bordures = new Array();
	this.bordHorizontalB = new Plateforme(game, game.world.width/2, game.world.height, "bordH", debug);
		this.bordHorizontalB.body.y = game.world.height + this.bordHorizontalB.height/2;

	this.bordHorizontalH = new Plateforme(game, game.world.width/2, 0, "bordH", debug);
		this.bordHorizontalH.body.y = 0 - this.bordHorizontalH.height/2;

	this.bordVerticalD = new Plateforme(game, game.world.width, game.world.height/2, "bordV", debug);
		this.bordVerticalD.body.x = game.world.width + this.bordVerticalD.width/2;

	this.bordVerticalG = new Plateforme(game, 0, game.world.height/2, "bordV", debug);
		this.bordVerticalG.body.x = 0 - this.bordVerticalG.width/2;

	bordures.push(this.bordHorizontalH, this.bordVerticalD, this.bordHorizontalB, this.bordVerticalG);

	for(var i = 0 ; i<bordures.length;i++){
		bordures[i].body.sprite.alpha = 0;
		bordures[i].body.setRectangleFromSprite(bordures[i]);
	}
	return bordures;
},
InitialisationService.prototype.creationCollisionGrp = function(){
  var collisionGroup = new CollisionGroup();
	collisionGroup.plateformeCollisionGroup = game.physics.p2.createCollisionGroup();
	collisionGroup.plateformeRebondCollisionGroup = game.physics.p2.createCollisionGroup();
	collisionGroup.personnageCollisionGroup = game.physics.p2.createCollisionGroup();
	collisionGroup.bumperCollisionGroup = game.physics.p2.createCollisionGroup();
	collisionGroup.boutonCollisionGroup = game.physics.p2.createCollisionGroup();
	collisionGroup.porteCollisionGroup = game.physics.p2.createCollisionGroup();
	collisionGroup.sortieCollisionGroup = game.physics.p2.createCollisionGroup();
	collisionGroup.projectileCollisionGroup = game.physics.p2.createCollisionGroup()
  return collisionGroup;
},
InitialisationService.prototype.creationGrp = function(){
	porteGrp = game.add.group();
	boutonGrp = game.add.group();
	bumperGrp = game.add.group();
	plateformeGrp = game.add.group();
	rebondGrp = game.add.group();
},
InitialisationService.prototype.creationSons = function (){
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

var initialisationService = new InitialisationService();

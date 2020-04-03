var LevelService = function(game){
  this.game = game;
  this.bordures = null;
  this.plateformes = [];
  this.plateformesRebond = [];
  this.bumper = [];
  this.initialisation();
}

LevelService.prototype.initialisation = function(){
  this.game.physics.startSystem(Phaser.Physics.P2JS);
  this.game.physics.p2.gravity.y = 5000;
  this.game.physics.p2.setImpactEvents(true);

  background = this.game.add.sprite(0, 0, "background");

  this.bordures = initialisationService.creationBordure(); // voir "FonctionsAutre.js"
}
LevelService.prorotype.createBordureGroup = function(group){
  for(var i = 0 ; i<this.bordures.length ; i++){
    group.add(this.bordures[i]);
  }
}
LevelService.prototype.createPlateforme = function(x, y, name, debug){
  var plateforme = new Plateforme(this.game, x, y, name, debug);
  this.plateformes.push(plateforme);
  return plateforme;
}
LevelService.prototype.createPlateformeRebond = function(x, y, name, debug){
  var plateforme = new Plateforme(this.game, x, y, name, debug);
  this.plateformesRebond.push(plateforme);
  return plateforme;
}
LevelService.prototype.createBumper = function(x, y, name, debug){
  var bumper = new Bumper(this.game, x, y, name, debug);
  this.bumper.push(bumper);
  return bumper;
}
LevelService.prototype.createPlateformeGroup = function(group, rebond){
  var length = (rebond) ?  this.plateformesRebond.length : this.plateformes.length;
  for(var i = 0 ; i < length ; i++){
    (rebond) ? group.add(this.plateformesRebond[i]) : group.add(this.plateformes[i]);
  }
}
LevelService.prototype.createBumperGroup = function(group){
  for(var i = 0 ; i<this.bumper.length;i++){
    group.add(this.bumper[i]);
  }
}
LevelService.prototype.setCollisionGroup = function(plateforme, rebond, bumper, bouton, porte, personnage, levelComplete, collisionGroup){
  if(plateforme != null)
      for(var i = 0 ; i < plateforme.length ; i++){
      plateforme.children[i].body.setCollisionGroup(collisionGroup.plateformeCollisionGroup);
    }

  if(bumper != null)
  for(var i = 0 ; i < bumperGrp.length ; i++){
    bumperGrp.children[i].body.setCollisionGroup(collisionGroup.bumperCollisionGroup);
  }
      //plateforme_rebond
  if(rebond != null)
  for(var i = 0 ; i < rebondGrp.length ; i++){
    rebondGrp.children[i].body.setCollisionGroup(collisionGroup.plateformeRebondCollisionGroup);
  }
      //boutons
  if(bouton != null)
  for(var i = 0 ; i < boutonGrp.length ; i++){
    boutonGrp.children[i].body.setCollisionGroup(collisionGroup.boutonCollisionGroup);
  }
      //portes
  if(porte != null)
  for(var i = 0 ; i < porteGrp.length ; i++){
    porteGrp.children[i].body.setCollisionGroup(collisionGroup.porteCollisionGroup);
  }
        //personnage
  if(personnage != null)
  personnage.body.setCollisionGroup(collisionGroup.personnageCollisionGroup);
      //sortie
  if(levelComplete != null)
  levelComplete.body.setCollisionGroup(collisionGroup.sortieCollisionGroup);
}

var CollisionGroup = function(){
  this.plateformeCollisionGroup = null;
  this.plateformeRebondCollisionGroup = null;
	this.personnageCollisionGroup = null;
	this.bumperCollisionGroup = null;
	this.boutonCollisionGroup = null;
	this.porteCollisionGroup = null;
	this.sortieCollisionGroup = null;
	this.projectileCollisionGroup = null;
}

CollisionGroup.prototype=Object.create(Phaser.Physics.P2.CollisionGroup.prototype);

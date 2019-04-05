var projectileLance = false;
var debug = false;
var pauseBoutton;
var isPaused = false;
var nbrEtoiles = 0;
var etoileGagne;
var nbr_niveau = 6;

var checkPreload = false;
var apparitionMenuPrincipal = false;
var checkSortie = true;
var infosAfficher = false;

var liste_niveau = new Array();
var checkEtoileNiveau = new Array();
for(var i = 0 ; i<nbr_niveau ; i++){
  liste_niveau[i] = 0;
  checkEtoileNiveau.push({une_etoile:false, deux_etoiles:false, trois_etoiles:false});
}

var musiqueMenuPlay = false;
var sonCree = false;

var inputDroite = 68;
var inputGauche = 81;
//console.log(Phaser.Keyboard);

//isCheck level

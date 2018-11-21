var projectileLance = false;
var debug = false;
var pauseBoutton;
var isPaused = false;
var nbrEtoiles = 0;
var etoileGagne;

var checkPreload = false;
var apparitionMenuPrincipal = false;
var checkSortie = true;
var infosAfficher = false;

var liste_niveau = new Array();

var musiqueMenuPlay = false;
var sonCree = false;

liste_niveau[0] = 0;
liste_niveau[1] = 0;
liste_niveau[2] = 0;
liste_niveau[3] = 0;
liste_niveau[4] = 0;
liste_niveau[5] = 0;

var checkEtoileNiveau = new Array();
checkEtoileNiveau.push({une_etoile:false, deux_etoiles:false, trois_etoiles:false});
checkEtoileNiveau.push({une_etoile:false, deux_etoiles:false, trois_etoiles:false});
checkEtoileNiveau.push({une_etoile:false, deux_etoiles:false, trois_etoiles:false});
checkEtoileNiveau.push({une_etoile:false, deux_etoiles:false, trois_etoiles:false});
checkEtoileNiveau.push({une_etoile:false, deux_etoiles:false, trois_etoiles:false});
checkEtoileNiveau.push({une_etoile:false, deux_etoiles:false, trois_etoiles:false});

var inputDroite = 68;
var inputGauche = 81;
//console.log(Phaser.Keyboard);

//isCheck level


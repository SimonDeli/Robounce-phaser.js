WebFontConfig = {
    google: {
      families: ['Roboto Light', 'Roboto Thin', 'Bangers', 'Prosto One', 'Luckiest Guy', 'Knewave']
    }

};
var MyGame = {};

MyGame.EcranChargement = function (game) {};

MyGame.EcranChargement.prototype = {
		init:function(){
		
		},				

		preload:function(){
			game.load.image("chargement", "assets/background/chargement.png");
			console.log("salut");
		},// <<PRELOAD


		create:function(){
			game.state.start("menuPrincipal");
			
		},// <<CREATE

		update:function(){
			
		}// <<UPDATE
		
		
};

// JavaScript Document
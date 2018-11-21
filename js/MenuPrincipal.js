MyGame.StateMenuP = function (game) {};

MyGame.StateMenuP.prototype = {
		init:function(){
		
		},				

		preload:function(){
			allPreload();	
		},// <<PRELOAD


		create:function(){
			
					
			
			
			son1 = game.add.audio("1");
			if(!sonCree)
				{creationSons();
				sonCree = true}
			
			backgroundGrp = game.add.group();
			otherGrp = game.add.group();
			
			background = game.add.sprite(game.world.width/2, game.world.height/2, "background");
			background.anchor.setTo(0.5);
			personnageFace = game.add.sprite(200, -400, "personnageFace");
			
			background.addChild(personnageFace);
			
			backgroundGrp.add(background);
			//backgroundGrp.add(personnageFace);
			
			ombreBouton1 = game.add.sprite(0, 0, "ombreBouton_Principal");
			ombreBouton2 = game.add.sprite(0, 0, "ombreBouton_Principal");
			ombreBouton3 = game.add.sprite(0, 0, "ombreBouton_Principal");
			//ombreBouton3 = game.add.sprite(0, 0, "ombreBouton");
			ombreBouton1.anchor.setTo(0.5);
			ombreBouton2.anchor.setTo(0.5);
			ombreBouton3.anchor.setTo(0.5);
			//ombreBouton3.anchor.setTo(0.5);
			ombreBouton1.alpha = 0.5;
			ombreBouton2.alpha = 0.5;
			ombreBouton3.alpha = 0.5;
			//ombreBouton3.alpha = 0.5;
			
			bouton1 = game.add.button(game.world.width/2, 0, "boutonMenu_Principal", this.fonctionBouton1, 0, 1, 2);
			bouton1.y = game.world.height/2 - bouton1.height/2 - 50;
			bouton1.anchor.setTo(0.5);
			
			bouton2 = game.add.button(game.world.width/2, 0, "boutonMenu_Principal", this.fonctionBouton2, 0, 1, 2);
			bouton2.y = game.world.height/2 + bouton2.height/2;
			bouton2.anchor.setTo(0.5);
			
			bouton3 = game.add.button(game.world.width/2, 0, "boutonMenu_Principal", this.fonctionBouton3, 0, 1, 2);
			bouton3.y = game.world.height/2 + bouton3.height/2 + 180;
			bouton3.anchor.setTo(0.5);
			
			bouton1.onInputOver.add(this.button1Over, this);
			bouton1.onInputOut.add(this.button1Out, this);
			
			bouton2.onInputOver.add(this.button2Over, this);
			bouton2.onInputOut.add(this.button2Out, this);
			
			bouton3.onInputOver.add(this.button3Over, this);
			bouton3.onInputOut.add(this.button3Out, this);
			
			ombreBouton1.x = bouton1.x + 3;
			ombreBouton1.y = bouton1.y + 3;
			
			ombreBouton2.x = bouton2.x + 3;
			ombreBouton2.y = bouton2.y + 3;
			
			ombreBouton3.x = bouton3.x + 3;
			ombreBouton3.y = bouton3.y + 3;
			
			texte1 = game.add.text(bouton1.x, bouton1.y,  'Commencer l\'aventure', { font: '50px Roboto Light', fill: '#000' });
			texte1.anchor.setTo(0.5);
			
			texte2 = game.add.text(bouton2.x, bouton2.y,  'Niveaux', { font: '50px Roboto Light', fill: '#000' });
			texte2.anchor.setTo(0.5);
			
			texte3 = game.add.text(bouton3.x, bouton3.y,  'Options', { font: '50px Roboto Light', fill: '#000' });
			texte3.anchor.setTo(0.5);

			rondBleu = game.add.sprite(683, 105, "rondBleu");
			
			textePrincipal = game.add.text(game.world.width/2, 150, "RoBounce", {font: "150px Luckiest Guy", fill: "#212121"});
			textePrincipal.anchor.setTo(0.5);
			
			
			otherGrp.add(ombreBouton1);
			otherGrp.add(ombreBouton2);
			otherGrp.add(ombreBouton3);
			otherGrp.add(bouton1);
			otherGrp.add(bouton2);
			otherGrp.add(bouton3);
			otherGrp.add(texte1);
			otherGrp.add(texte2);
			otherGrp.add(texte3);
			otherGrp.add(rondBleu);
			otherGrp.add(textePrincipal);

//			textePrincipal.font = ;
			
			var scaleBg1 = game.add.tween(background.scale).to({x:1.1, y:1.1}, 10000, Phaser.Easing.Linear.None);
			var scaleBg2 = game.add.tween(background.scale).to({x:1, y:1}, 10000, Phaser.Easing.Linear.None);
			
			scaleBg1.onComplete.add(function(){
				scaleBg2.start();
			});
			scaleBg2.onComplete.add(function(){
				scaleBg1.start();
			});
			
			scaleBg1.start();
			
			var scalePerso1 = game.add.tween(personnageFace.scale).to({x:1.3, y:1.3}, 10000, Phaser.Easing.Linear.None);
			var scalePerso2 = game.add.tween(personnageFace.scale).to({x:1, y:1}, 10000, Phaser.Easing.Linear.None);
		
			scalePerso1.onComplete.add(function(){
				scalePerso2.start();
			});
			scalePerso2.onComplete.add(function(){
				scalePerso1.start();
			});
			
			scalePerso1.start();
			
			if(apparitionMenuPrincipal == false)
				{
					backgroundGrp.alpha = 0;
					personnageFace.alpha = 0;
					otherGrp.alpha = 0;
				
			
			var apparitionBGTween = game.add.tween(backgroundGrp).to({alpha:1}, 1000, Phaser.Easing.Linear.None);
			var apparitionPersonnageTween = game.add.tween(personnageFace).to({alpha:1}, 1000, Phaser.Easing.Linear.None);
			var apparitionOTHERTween = game.add.tween(otherGrp).to({alpha:1}, 1000, Phaser.Easing.Linear.None);
			
			apparitionBGTween.onComplete.add(function(){
				apparitionOTHERTween.start();
				apparitionPersonnageTween.start();
			});
			apparitionBGTween.start();
			apparitionMenuPrincipal = true;
				}
			game.time.advencedTiming = true;
			console.log(game.time);
			if(musiqueMenu.isPlaying == false)
			{
				musiqueMenu.play();
			}
			if(musiqueNiveau.isPlaying){
				musiqueNiveau.stop();
			}
			
			
		},// <<CREATE
		
		update:function(){
			//console.log(musiqueMenu.isPlaying);
		},// <<UPDATE
		
		fonctionBouton1:function(){
			//musiqueMenu.stop();
			son2.play();
			//musiqueMenuPlay = false;
			game.state.start("1");
			
		},
		fonctionBouton2:function(){
		
			son1.play();
			game.state.start("menuNiveaux");
		},
		fonctionBouton3:function(){
		
			son1.play();
			game.state.start("menuCommandes");
		},
		button1Over:function(){
			var tweenBoutonScale = game.add.tween(bouton1.scale).to({x:1.03, y:1.03}, 150, Phaser.Easing.Circular.Out);
			var tweenOmbreScale = game.add.tween(ombreBouton1.scale).to({x:1.03, y:1.03}, 150, Phaser.Easing.Circular.Out);
			var tweenTexteScale = game.add.tween(texte1.scale).to({x:1.03, y:1.03}, 150, Phaser.Easing.Circular.Out);
			
			tweenBoutonScale.start();
			tweenOmbreScale.start();
			tweenTexteScale.start();

		},
		button1Out:function(){
			var tweenBoutonScale = game.add.tween(bouton1.scale).to({x:1, y:1}, 150, Phaser.Easing.Circular.Out);
			var tweenOmbreScale = game.add.tween(ombreBouton1.scale).to({x:1, y:1}, 150, Phaser.Easing.Circular.Out);
			var tweenTexteScale = game.add.tween(texte1.scale).to({x:1, y:1}, 150, Phaser.Easing.Circular.Out);
			
			tweenBoutonScale.start();
			tweenOmbreScale.start();
			tweenTexteScale.start();
		},
		button2Over:function(){
			var tweenBoutonScale = game.add.tween(bouton2.scale).to({x:1.03, y:1.03}, 150, Phaser.Easing.Circular.Out);
			var tweenOmbreScale = game.add.tween(ombreBouton2.scale).to({x:1.03, y:1.03}, 150, Phaser.Easing.Circular.Out);
			var tweenTexteScale = game.add.tween(texte2.scale).to({x:1.03, y:1.03}, 150, Phaser.Easing.Circular.Out);
			
			tweenBoutonScale.start();
			tweenOmbreScale.start();
			tweenTexteScale.start();
		},
		
		button2Out:function(){
			var tweenBoutonScale = game.add.tween(bouton2.scale).to({x:1, y:1}, 150, Phaser.Easing.Circular.Out);
			var tweenOmbreScale = game.add.tween(ombreBouton2.scale).to({x:1, y:1}, 150, Phaser.Easing.Circular.Out);
			var tweenTexteScale = game.add.tween(texte2.scale).to({x:1, y:1}, 150, Phaser.Easing.Circular.Out);
			
			tweenBoutonScale.start();
			tweenOmbreScale.start();
			tweenTexteScale.start();
		},
	
		button3Over:function(){
			var tweenBoutonScale = game.add.tween(bouton3.scale).to({x:1.03, y:1.03}, 150, Phaser.Easing.Circular.Out);
			var tweenOmbreScale = game.add.tween(ombreBouton3.scale).to({x:1.03, y:1.03}, 150, Phaser.Easing.Circular.Out);
			var tweenTexteScale = game.add.tween(texte3.scale).to({x:1.03, y:1.03}, 150, Phaser.Easing.Circular.Out);
			
			tweenBoutonScale.start();
			tweenOmbreScale.start();
			tweenTexteScale.start();
		},
		
		button3Out:function(){
			var tweenBoutonScale = game.add.tween(bouton3.scale).to({x:1, y:1}, 150, Phaser.Easing.Circular.Out);
			var tweenOmbreScale = game.add.tween(ombreBouton3.scale).to({x:1, y:1}, 150, Phaser.Easing.Circular.Out);
			var tweenTexteScale = game.add.tween(texte3.scale).to({x:1, y:1}, 150, Phaser.Easing.Circular.Out);
			
			tweenBoutonScale.start();
			tweenOmbreScale.start();
			tweenTexteScale.start();
		},
		render:function(){
		//	game.debug.text(game.time, 32, 32);
		}
};


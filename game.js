var canvas = document.getElementById("game"),
	mainMenu = new MainMenu(),
	otherMenu = new OtherMenu(),
	blankScene = new BlankScene(),
	convergame = new Convergame(canvas);
	
convergame.init();

convergame.scene.changeScene(blankScene);
convergame.startMainGameLoop();

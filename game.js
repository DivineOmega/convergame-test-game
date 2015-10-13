var canvas = document.getElementById("game"),
	mainMenu = new MainMenu(),
	otherMenu = new OtherMenu(),
	blankScene = new BlankScene(),
	convergame = new Convergame(canvas);
	
convergame.init();

var mouseControl = new MouseControl();
mouseControl.setDebug(true);
convergame.scene.addPersistentScene(mouseControl);

convergame.scene.changeScene(blankScene);
convergame.startMainGameLoop();

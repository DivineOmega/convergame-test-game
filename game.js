var canvas = document.getElementById("game"),
	mainMenu = new MainMenu(),
	otherMenu = new OtherMenu(),
	blankScene = new BlankScene(),
	storageTestScene = new StorageTestScene(),
	convergame = new Convergame(canvas);
	
convergame.init();

convergame.scene.changeScene(storageTestScene);
convergame.startMainGameLoop();

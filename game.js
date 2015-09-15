var canvas = document.getElementById("game"),
	mainMenu = new MainMenu(),
	otherMenu = new OtherMenu(),
	convergame = new Convergame(canvas);
	
convergame.init();

var timeHUD = new TimeHUD();
convergame.addPersistentScene(timeHUD);

convergame.changeScene(mainMenu);
convergame.startMainGameLoop();

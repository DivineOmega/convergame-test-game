var canvas = document.getElementById("game"),
	mainMenu = new MainMenu(),
	otherMenu = new OtherMenu(),
	controllerTest = new ControllerTest(),
	convergame = new Convergame(canvas);
	
convergame.init();

var basicGameControllers = new BasicGameControllers();
basicGameControllers.setDebug(true);
convergame.addPersistentScene(basicGameControllers);

convergame.changeScene(mainMenu);
convergame.startMainGameLoop();

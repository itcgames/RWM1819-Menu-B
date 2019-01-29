function main() {
  // Creating a canvas
  let canvas = document.createElement('canvas');
  canvas.style.position = "absolute";
  canvas.id = "testcanv";
  console.log(document);
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  //Create your menuHandler
  let menuHandler = new MenuHandler();

  let mainDiv = document.createElement('div');
  mainDiv.style.position = "relative";
  mainDiv.style.width = canvas.width + "px";
  mainDiv.style.height = canvas.height + "px";
  mainDiv.id = "main-div";
  mainDiv.appendChild(canvas);
  document.body.appendChild(mainDiv);

  // Scenes extending from the default scene class for more explicit examples
  let mainMenuScene = new MainMenuScene(menuHandler, this);
  menuHandler.addScene("Main Menu", mainMenuScene);

  let leaderboardScene = new LeaderboardScene(menuHandler);
  menuHandler.addScene("Leaderboard", leaderboardScene);

  let gameScene = new GameScene(menuHandler);
  menuHandler.addScene("Game", gameScene);

  // Set the theme of the menus overall, Sets the color for scenes, menus, widgets
  // Primary is the main color of the scenes, secondary is color of the menus
  // Tertiary is colour of buttons
  menuHandler._theme.setPrimary(0, 0, 0, 0);
  menuHandler._theme.setSecondary(49, 49, 49, 0.5);
  menuHandler._theme.setTertiary(255, 190, 61, 0);
  menuHandler.applyTheme();
  gameScene.colour = "rgba(0,0,0,0)";
  menuHandler.showOnlyCurrentScene();
}
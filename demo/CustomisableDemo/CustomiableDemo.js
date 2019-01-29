function main() {
  let canvas = document.createElement('canvas');
  canvas.style.position = "absolute";
  canvas.id = "testcanv";
  console.log(document);
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  let menuHandler = new MenuHandler();
  let mainDiv = document.createElement('div');
  mainDiv.style.position = "relative";
  mainDiv.style.width = canvas.width + "px";
  mainDiv.style.height = canvas.height + "px";
  mainDiv.id = "main-div";
  mainDiv.appendChild(canvas);
  document.body.appendChild(mainDiv);

  let mainMenuScene = new MainMenuScene(menuHandler, this);
  menuHandler.addScene("Main Menu", mainMenuScene);

  let leaderboardScene = new LeaderboardScene(menuHandler);
  menuHandler.addScene("Leaderboard", leaderboardScene);

  let gameScene = new GameScene(menuHandler);
  menuHandler.addScene("Game", gameScene);
  menuHandler._theme.setPrimary(0, 0, 0, 0);
  menuHandler._theme.setSecondary(49, 49, 49, 0.5);
  menuHandler._theme.setTertiary(255, 190, 61, 0);
  menuHandler.applyTheme();
  gameScene.colour = "rgba(0,0,0,0)";
  menuHandler.showOnlyCurrentScene();
}
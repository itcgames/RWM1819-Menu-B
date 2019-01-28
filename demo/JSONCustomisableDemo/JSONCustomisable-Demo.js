function main() {
  let canvas = document.createElement('canvas');
  canvas.style.position = "absolute";
  canvas.id = "testcanv";
  console.log(document);
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);

  let menuHandler = new MenuHandler();
  menuHandler.attachToBody(canvas);
  let callback = function() {
    menuHandler._theme.setPrimary(0,0,255,255);
    menuHandler._theme.setSecondary(0,255,0,255);
    menuHandler._theme.setTertiary(255,0,0,255);
    menuHandler.applyTheme();
    menuHandler.showOnlyCurrentScene();
  };
  menuHandler.loadFromJSON("assets/menuhandler.json", callback);
}
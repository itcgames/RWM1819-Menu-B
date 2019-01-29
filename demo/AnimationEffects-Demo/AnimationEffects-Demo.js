let quit = false;

function main() {
  let canvas = document.createElement('canvas');
  canvas.style.position = "absolute";
  canvas.id = "testcanv";
  console.log(document);
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  //canvas.style.position = "relative";

  // canvas must be wrapped in a div for overlay effects
  let div =  document.createElement('div');
  div.style.position = "relative";
  //div.style.display = "inline-block";

  div.style.width = canvas.width + "px";
  div.style.height = canvas.height + "px";
  div.appendChild(canvas);
  document.body.appendChild(div);
  let ctx = canvas.getContext("2d");

  let menuHandler = new MenuHandler();
  menuHandler._theme.setPrimary(0,255,0,1);
  menuHandler._theme.setSecondary(255,0,0,0.2);
  menuHandler._theme.setTertiary(0,0,128, 1);

  // Create scenes
  let s = new Scene("Test", div, {'x': 0, 'y': 0, 'width': 100, 'height': 100});

  // Create MEnus to be appended to parent scenes
  let m1 = new Menu("Test Menu", {'x': 0, 'y': 0, 'width': 50, 'height': 50});

  // Create Buttons
  let b1 = new Button("Test button", menuHandler.goToScene.bind(menuHandler, "Test 2"), {'x': 20, 'y': 20, 'width': 60, 'height': 10}, "%");
  m1.addButton("Test Menu", b1);

  // Append menus to the scenes
  s.addMenu(m1);
  let io = {'interpolation': 0,
  'transSpeed': 0.2};
  s.animateIn(io);
  // Add the scenes to the menu handler
  menuHandler.addScene("Test", s);
  menuHandler.showOnlyCurrentScene();
  menuHandler.applyTheme();
  menuHandler.render(ctx);
}
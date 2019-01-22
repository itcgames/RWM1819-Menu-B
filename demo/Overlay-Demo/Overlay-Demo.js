let quit = false;

function main() {
    window.addEventListener("keydown", function(e)
    {
        // Space and arrow keys
        if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1)
        {
            e.preventDefault();
        }
    }, false);

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
    let canv = document.getElementById("testcanv");
    let ctx = canv.getContext("2d");

    let menuHandler = new MenuHandler();
    menuHandler._theme.setPrimary(0,255,0,1);
    menuHandler._theme.setSecondary(255,0,0,0.2);
    menuHandler._theme.setTertiary(0,0,128, 1);

    // Create scenes
    let s = new Scene("Test", div, {'x': 0, 'y': 0, 'width': 100, 'height': 100});
    let s2 = new Scene("Test 2", div, {'x': 0, 'y': 0, 'width': 100, 'height': 100});

    // Create MEnus to be appended to parent scenes
    let m1 = new Menu("Test Menu", {'x': 0, 'y': 0, 'width': 50, 'height': 50});
    let m2 = new Menu("Test Menu 2", {'x': 0, 'y': 0, 'width': 20, 'height': 70});

    // Create Buttons
    let b1 = new Button("Test button", menuHandler.goToScene.bind(menuHandler, "Test 2"), {'x': 20, 'y': 20, 'width': 60, 'height': 10}, "%");
    b1.makeImageButton("http://static.oschina.net/uploads/img/201304/23112449_qhmk.png");
    b1.addHoverImage("https://upload.wikimedia.org/wikipedia/commons/1/1b/Square_200x200.png");
    let b2 = new Button("Test button long Test button long", menuHandler.goToScene.bind(menuHandler, "Test"), {'x': 20, 'y': 20, 'width': 60, 'height': 10}, "%");

    m1.addButton("Test Menu", b1);
    m2.addButton("Test Button long Test button long", b2);

    // Append menus to the scenes
    s.addMenu(m1);
    s2.addMenu(m2);

    // Add the scenes to the menu handler
    menuHandler.addScene("Test", s);
    menuHandler.addScene("Test 2", s2);
    menuHandler.showOnlyCurrentScene();
    document.addEventListener("keydown", keyDownHandler.bind(null, menuHandler));
    menuHandler.applyTheme();
    menuHandler.render(ctx);
}

/**
 *
 * @param sceneManager {MenuHandler}
 * @param event {KeyboardEvent}
 */
function keyDownHandler(sceneManager, event) {
    var canv = document.getElementById("testcanv");
    var ctx = canv.getContext("2d");
    switch (event.keyCode) {
        case 37:
            sceneManager.goToScene("Test");
            ctx.clearRect(0, 0, canv.width, canv.height);
            sceneManager.render(ctx);
            break;
        case 39:
            sceneManager.goToScene("Test 2");
            ctx.clearRect(0, 0, canv.width, canv.height);
            sceneManager.render(ctx);
            break;
        case 27:
            quit = true;
            break;
        default:
            break;
    }
}
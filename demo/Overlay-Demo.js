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

    // Create scenes
    let s = new Scene("Test", div, {'x': 0, 'y': 0, 'width': 100, 'height': 100});
    let s2 = new Scene("Test 2", div, {'x': 0, 'y': 0, 'width': 100, 'height': 100});

    // Set scene background colour as 6digit hex string
    s.colour = "#7cff81";
    s2.colour = "#FF0000";

    // Set alpha as 2 digit hex string
    s.alpha = "22";
    s2.alpha = "22";

    // Create MEnus to be appended to parent scenes
    let m1 = new Menu("Test Menu", {'x': 0, 'y': 0, 'width': 50, 'height': 50});
    let m2 = new Menu("Test Menu 2", {'x': 0, 'y': 0, 'width': 20, 'height': 70});

    // Set colours for demonstration of alpha values
    m1.colour = "#00FF00";
    m2.colour = "#ff2dd3";

    // Set alpha values for viewing of text on canvas below menus
    m1.alpha = "22";
    m2.alpha = "22";

    // Append menus to the scenes
    s.addMenu(m1);
    s2.addMenu(m2);

    // Add the scenes to the menu handler
    menuHandler.addScene("Test", s);
    menuHandler.addScene("Test 2", s2);
    menuHandler.showOnlyCurrentScene();
    document.addEventListener("keydown", keyDownHandler.bind(null, menuHandler));
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

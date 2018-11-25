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
    let s = new Scene("Test", div, {'x': 0, 'y': 0, 'width': 100, 'height': 100});
    s.addMenu(new Menu("Test Menu", {'x': 0, 'y': 0, 'width': 50, 'height': 50}));
    menuHandler.addScene("Test", s);
    menuHandler.addScene("Test 2", new Scene("Test 2", div, {'x': 0, 'y': 0, 'width': 100, 'height': 100}));
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

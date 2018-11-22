/**
 * @typedef {Object} Bounds
 * @property {number} x The X Coordinate
 * @property {number} y The Y Coordinate
 * @property {number} width The Width of the bounds
 * @property {number} height The Height of the bounds
 */

class Scene {
    /**
     * Default constructor for a scene object
     * @param title {string} the title of the current menu scene
     * @param div
     * @param bounds {Bounds} the bounds of the scene container
     */
    constructor(title, div, bounds) {
        this._title = title || "";
        this._container = document.createElement('div');
        this._container.setAttribute("id", `Scene-${this._title}`);
        if (div)
            div.appendChild(this._container);
        else
            document.body.appendChild(this._container);
        console.log(div);
        this._container.style.position = "absolute";
        this._bounds = bounds || {'x': 0, 'y': 0, 'width': 100, 'height': 100};
        this._container.style.left = this._bounds.x;
        this._container.style.top = this._bounds.y;
        this._container.style.width = this._bounds.width + "%";
        this._container.style.height = this._bounds.height + "%";
        this._container.style.backgroundColor = "#FF00FF";

        if (div)
            div.appendChild(this._container);
        else
            document.body.appendChild(this._container);
        this._active = false;
        this._stopped = false;
        this._transitionTime = 2;
        this._menus = new Map();
    }

    addMenu(_menu) {
        if (_menu) {
            this._menus.set(_menu.title, _menu);
            this._container.appendChild(_menu._container);
        }
    }

    /**
     * Start the current scene
     */
    start() {
        this._active = true;
    }

    /**
     * Stop the current scene
     */
    stop() {
        this._stopped = true;
    }

    /**
     * Transition the current scene in
     */
    transitionIn() {
        this._active = false;
        this._stopped = false;
    }

    /**
     * Transition the current scene out
     */
    transitionOut() {
        // Placeholder code for actual menu transitions
        this._stopped = true;
        this._active = false;
    }


    /**
     * Render the current scenes title to the screen.
     * @param ctx {CanvasRenderingContext2D} the context object to render to
     */
    render(ctx) {
        this._menus.forEach((value) => {
            console.log(value);
            ctx.fillText(value.title, value.bounds.x, value.bounds.y + 30);
        });
    }
}
/**
 * @typedef {Object} Bounds
 * @property {number} x The X Coordinate
 * @property {number} y The Y Coordinate
 * @property {number} width The Width of the bounds
 * @property {number} height The Height of the bounds
 */

class Scene extends Container {
    /**
     * Default constructor for a scene object
     * @param title {string} the title of the current menu scene
     * @param div {HTMLElement} - The parent div to attach the scene to if none are present then body is defaulted
     * @param bounds {Bounds} the bounds of the scene container
     * @param _colour {string}
     * @param _units {string}
     */
    constructor(title, div, bounds, _colour, _units) {
        let col = _colour;
        let units = _units || "%";
        super(`Scene-${title || ""}`,
            bounds.x || 0, bounds.y || 0,
            bounds.width || 100, bounds.height || 100,
            "absolute", col, units);
        if (div)
            div.appendChild(this._containerDiv);
        else
            document.body.appendChild(this._containerDiv);

        this._active = false;
        this._stopped = false;
        this._transitionTime = 2;
        this._menus = new Map();
    }

    addMenu(_menu) {
        if (_menu) {
            this._menus.set(_menu.title, _menu);
            this._containerDiv.appendChild(_menu._containerDiv);
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
        this.show();
        this._menus.forEach((value) => {
            value.showAll();
        });
    }

    /**
     * Transition the current scene out
     */
    transitionOut() {
        // Placeholder code for actual menu transitions
        this._stopped = true;
        this._active = false;
        this.hide();
        this._menus.forEach((value) => {
            value.hideAll();
        });
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

    get menus() {
        return this._menus;
    }
}
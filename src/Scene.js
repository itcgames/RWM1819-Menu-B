class Scene {
    /**
     * Default constructor for a scene object
     * @param title {string} the title of the current menu scene
     */
    constructor(title) {
        this._title = title || "";
        this._container = document.createElement('div');
        this._container.setAttribute("id", `Container-${this._title}`);
        document.body.appendChild(this._container);
        this._active = false;
        this._stopped = false;
        this._transitionTime = 2;
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
     * @param ctx {context} the context object to render to
     */
    render(ctx) {
        ctx.font = "30px Arial";
        ctx.fillText(this._title, ctx.canvas.clientWidth / 2, ctx.canvas.clientHeight / 2);
    }
}
class Scene {
    constructor(title) {
        this._title = title || "";
        this._active = false;
        this._stopped = false;
    }

    start() {
        this._active = true;
    }

    stop() {
        this._stopped = true;
    }

    render(ctx) {
        ctx.font = "30px Arial";
        ctx.fillText(this._title, ctx.canvas.clientWidth / 2, ctx.canvas.clientHeight / 2);
    }
}
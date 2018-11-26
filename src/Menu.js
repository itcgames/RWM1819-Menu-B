/**
 * @typedef {Object} Bounds
 * @property {number} x The X Coordinate
 * @property {number} y The Y Coordinate
 * @property {number} width The Width of the bounds
 * @property {number} height The Height of the bounds
 */

class Menu extends Container {
    /**
     *
     * @param title {string} [title=""]
     * @param bounds {Bounds} the bounds of the menu object
     */
    constructor(title, bounds) {
        super(`Menu-${title || ""}`, bounds.x, bounds.y, bounds.width, bounds.height, "relative", "#295cff", false);
        this._title = title || "";
        // this._bounds = bounds || {'x': 0, 'y':0, 'width': 50, 'height': 50};
        // this._container = document.createElement("div");
        // if (this._title)
        //     this._container.setAttribute("id", `Menu-${this._title}`);
        // this._container.style.position = "relative";
        // this._container.style.left = this._bounds.x;
        // this._container.style.top = this._bounds.y;
        // this._container.style.width = this._bounds.width + "%";
        // this._container.style.height = this._bounds.height + "%";
        // this._container.style.backgroundColor = "#295cff"
    }

    // Getters and Setter

    /**
     * Get the title of the menu
     * @returns {string} title - the title of the menu
     */
    get title() {
        return this._title;
    }

    /**
     * Set the title of the menu
     * @param value {string} - the title of the menu
     */
    set title(value) {
        this._title = value;
    }


    /**
     * Hide all menu items
     * //TODO Add button element hiding
     */
    hideAll() {
        this.hide();
    }

    /**
     * Show all menu items
     * //TODO Add button element showing
     */
    showAll() {
        this.show();
    }
}
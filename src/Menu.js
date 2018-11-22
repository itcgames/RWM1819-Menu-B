/**
 * @typedef {Object} Bounds
 * @property {number} x The X Coordinate
 * @property {number} y The Y Coordinate
 * @property {number} width The Width of the bounds
 * @property {number} height The Height of the bounds
 */

class Menu {
    /**
     *
     * @param title {string}
     * @param bounds {bounds}
     */
    constructor(title, bounds) {
        this._title = title || "";
        this._bounds = bounds || {'x': 0, 'y':0, 'width': 0, 'height': 0};
        this._container = document.createElement("div");
        if (this._title)
            this._container.setAttribute("id", `Menu-${this._title}`);
        this._container.style.position = "relative";
        this._container.style.left = this._bounds.x;
        this._container.style.top = this._bounds.y;
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
     * Get the bounds of the menu
     * @returns {bounds}
     */
    get bounds() {
        return this._bounds;
    }

    /**
     * Set the bounds of the menu
     * @param value {bounds} - the bounds of the corresponding object
     */
    set bounds(value) {
        this._bounds = value;
    }
}
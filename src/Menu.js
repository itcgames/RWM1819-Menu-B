/**
 * @typedef {Object} Bounds
 * @property {number} x The X Coordinate
 * @property {number} y The Y Coordinate
 * @property {number} width The Width of the bounds
 * @property {number} height The Height of the bounds
 */

class Menu extends Container {
    get buttons() {
        return this._buttons;
    }
    /**
     *
     * @param title {string} [title=""]
     * @param bounds {Bounds} the bounds of the menu object
     * @param _units {string} The unit type of the container
     */
    constructor(title, bounds, _units) {
        let units = _units || "%";
        super(`Menu-${title || ""}`,
            bounds.x, bounds.y, bounds.width, bounds.height,
            "relative", "#295cff", units);
        this._title = title || "";
        this._containerDiv.style.display = "inline-block";
        this._buttons = new Map();
    }

    addButton(name, button) {
        if (button) {
            this.buttons.set(name, button);
            this._containerDiv.appendChild(button._element);
        }
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
        this.buttons.forEach((value, key) => {
            value._element.style.visibility = "hidden";
        })
    }

    /**
     * Show all menu items
     * //TODO Add button element showing
     */
    showAll() {
        this.show();
        this.buttons.forEach((value, key) => {
            value._element.style.visibility = "visible";
        })
    }
}
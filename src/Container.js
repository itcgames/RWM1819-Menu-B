'use strict';

/**
 * @typedef {Object} Bounds
 * @property {number} x The X Coordinate
 * @property {number} y The Y Coordinate
 * @property {number} width The Width of the bounds
 * @property {number} height The Height of the bounds
 */

class Container {
    /**
     * Default constructor for a container div
     * @param _name The name/id of the container
     * @param _x {number} The x coordinate of the container the left element of div style
     * @param _y {number} The y coordinate of the container the top element of div style
     * @param _w {number} The width value of the container the left element of div style
     * @param _h {number} The height value of the container the left element of div style
     * @param _positionType {string} Divs position type
     * @param _colour {string} The divs background colour currently hex string
     * @param _units {string} The units used (%, px, etc...) as a string
     */
    constructor(_name,_x, _y, _w, _h, _positionType, _colour, _units) {
        this._containerDiv = document.createElement('div');
        this._id = _name || "Container";
        this._containerDiv.setAttribute("id", this._id);
        this._bounds = {"x": _x || 0,
            "y": _y || 0,
            "width": _w || 0,
            "height": _h || 0};
        this._units = _units || "%";
        this._containerDiv.style.left = this._bounds.x + this._units;
        this._containerDiv.style.top = this._bounds.y + this._units;
        this._containerDiv.style.width = this._bounds.width + this._units;
        this._containerDiv.style.height = this._bounds.height + this._units;
        this._containerDiv.style.minWidth = this._bounds.width;
        this._containerDiv.style.minHeight = this._bounds.height;
        this._containerDiv.style.maxWidth = this._bounds.width;
        this._containerDiv.style.maxHeight = this._bounds.height;
        this._containerDiv.style.position = _positionType || "absolute";
        this._alpha = "FF";
        this._colour = `${_colour}${this._alpha}` || `#00FFAC${this._alpha}`;
        this._containerDiv.style.backgroundColor = this._colour;
        this._containerDiv.style.visibility = "visible";
        this._containerDiv.style.overflow = "auto";
    }

    hide() {
        if (this._containerDiv.style.visibility === 'visible') {
            this._containerDiv.style.visibility = 'hidden';
        }
    }

    show() {
        if (this._containerDiv.style.visibility === 'hidden') {
            this._containerDiv.style.visibility = 'visible';
        }
    }

    get colour() {
        return this._colour;
    }

    set colour(value) {
        this._colour = value;
        this._containerDiv.style.backgroundColor = this._colour;
    }

    /**
     * Get the bounds of the container ab=nd subsequently the container div
     * @returns {Bounds}
     */
    get bounds() {
        return this._bounds;
    }

    /**
     * Set the bounds of the container and subsequently the container div
     * @param value {Bounds} - the bounds of the container object
     */
    set bounds(value) {
        this._bounds = value;
        this._updateDivBounds();
    }

    _updateDivBounds() {
        this._containerDiv.style.left = this._bounds.x + this._units;
        this._containerDiv.style.top = this._bounds.y + this._units;
        this._containerDiv.style.minWidth = this._bounds.width + this._units;
        this._containerDiv.style.minHeight = this._bounds.height + this._units;
    }

    /**
     * Get the div corresponding to the container
     * @returns {HTMLElement | *}
     */
    get containerDiv() {
        return this._containerDiv;
    }

    get units() {
        return this._units;
    }

    set units(value) {
        this._units = value;
        this._containerDiv.style.left = this._bounds.x + this._units;
        this._containerDiv.style.top = this._bounds.y + this._units;
        this._containerDiv.style.width = this._bounds.width + this._units;
        this._containerDiv.style.height = this._bounds.height + this._units;
    }
}
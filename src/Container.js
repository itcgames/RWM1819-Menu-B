'use strict';

/**
 * @typedef {Object} Bounds
 * @property {number} x The X Coordinate
 * @property {number} y The Y Coordinate
 * @property {number} width The Width of the bounds
 * @property {number} height The Height of the bounds
 */

class Container {
    constructor(_name,_x, _y, _w, _h, _positionType, _colour, _pixels) {
        this._containerDiv = document.createElement('div');
        this._id = _name || "Container";
        this._containerDiv.setAttribute("id", this._id);
        this._bounds = {"x": _x || 0,
                        "y": _y || 0,
                        "width": _w || 0,
                        "height": _h || 0};
        this._units = _pixels ? "px" : "%";
        this._containerDiv.style.left = this._bounds.x + this._units;
        this._containerDiv.style.top = this._bounds.y + this._units;
        this._containerDiv.style.width = this._bounds.width + this._units;
        this._containerDiv.style.height = this._bounds.height + this._units;
        this._containerDiv.style.position = _positionType || "absolute";
        this._containerDiv.style.backgroundColor = _colour || "#000000";
        this._containerDiv.style.visibility = "visible";
        this._colour = _colour;
    }

    get colour() {
        return this._colour;
    }

    set colour(value) {
        this._colour = value;
    }

    get pixels() {
        return this._pixels;
    }

    set pixels(value) {
        this._pixels = value;
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
        this._containerDiv.style.width = this._bounds.width + this._units;
        this._containerDiv.style.height = this._bounds.height + this._units;
    }

    /**
     * Get the div corresponding to the container
     * @returns {HTMLElement | *}
     */
    get containerDiv() {
        return this._containerDiv;
    }

    hide() {
        if (this._containerDiv.style.visibility === 'visible') {
            this._containerDiv.style.visibility = 'hidden';
            console.log(this._containerDiv);
        }
    }

    show() {
        if (this._containerDiv.style.visibility === 'hidden') {
            this._containerDiv.style.visibility = 'visible';
        }
    }

}
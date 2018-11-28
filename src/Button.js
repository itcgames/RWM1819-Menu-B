'use strict';

class Button {
    constructor(name, parent, callback, bounds, units) {
        this._name = name || "";
        this._callback = callback || function(event) {console.log(event);};
        this._element = document.createElement('button');
        this._element.addEventListener("click", this._callback);
        this._units = units || "%";
        this._element.style.left = (bounds.x || 0)  + this._units;
        this._element.style.top = (bounds.y || 0) + this._units;
        this._element.style.minWidth = (bounds.width || 0) + this._units;
        this._element.style.minHeight = (bounds.height || 0) + this._units;
        this._element.style.position = "absolute";
        this._element.style.backgroundColor = "#ffc543";
        this._element.style.overflow = "normal";
        this._element.innerText = this._name;
        if (parent) {
            parent.appendChild(this._element);
        }
    }
}
'use strict';

class Button {
    constructor(name, callback, bounds, units) {
        this._name = name || "";
        this._callback = callback || function(event) {console.log(event);};
        this._element = document.createElement('button');
        this._element.addEventListener("click", this._callback);
        this._units = units || "%";
        this._element.style.left = (bounds.x || 0)  + this._units;
        this._element.style.top = (bounds.y || 0) + this._units;
        this._element.style.minWidth = (bounds.width || 0)  + this._units;
        this._element.style.minHeight = (bounds.height || 0)  + this._units;
        this._element.style.position = "absolute";
        this._element.style.backgroundColor = "#ffc543";
        this._element.style.overflow = "normal";
        this._element.style.display = "block";
    }

    makeImageButton(src) {
        this._element.style.visibility = "hidden";
        this._img = new Image();
        this._img.src = src;
        this._img.style.display = "block";
        this._img.onload = function() {
            this._element.appendChild(this._img);
            this._element.style.padding = "0";
            this._element.style.visibility = "visible";
        }.bind(this);
    }
}
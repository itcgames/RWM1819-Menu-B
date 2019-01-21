'use strict';

class Button {
    constructor(name, callback, bounds, units) {
        this._name = name || "";
        this._callback = callback || function(event) {console.log(event);};
        this._element = document.createElement('button');
        this._element.addEventListener("click", this._callback);
        this._units = units || "%";
        this._element.style.left = (0 || 0)  + "px";
        this._element.style.top = (0 || 0) + "px";
        this._element.style.minWidth = (500 || 0)  + "px";
        this._element.style.minHeight = (100 || 0)  + "px";
        this._element.style.position = "absolute";
        this._element.style.backgroundColor = "#ffc543";
        this._element.style.overflow = "normal";
        this._element.style.display = "block";
        //this._element.innerText = this._name;
        this._img = new Image();
        this._img.src = "http://static.oschina.net/uploads/img/201304/23112449_qhmk.png";
        this._img.style.display = "block";
        this._img.onload = function() {
            this._element.appendChild(this._img);
            this._element.style.padding = "0";
        }.bind(this);
    }
}
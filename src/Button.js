'use strict';

class Button {
    /**
     *
     * @param {string} name - name of the button
     * @param {function} callback - callback function for on click
     * @param {Object} bounds - bounds of the button
     * @param {string} units - units for the button bounds
     */
    constructor(name, callback, bounds, units) {
        this._name = name || "";
        this._callback = callback || function(event) {console.log(event);};
        this._element = document.createElement('button');
        this._element.addEventListener("click", this._callback);
        this._units = units || "%";
        this._element.style.left = (bounds.x || 0)  + this._units;
        this._element.style.top = (bounds.y || 0) + this._units;
        this._element.style.width = (bounds.width || 0)  + this._units;
        this._element.style.height = (bounds.height || 0)  + this._units;
        this._element.style.maxWidth = (bounds.width || 0)  + this._units;
        this._element.style.maxHeight = (bounds.height || 0)  + this._units;
        this._element.style.position = "absolute";
        this._element.style.backgroundColor = "#ffc543";
        this._element.style.overflow = "normal";
        this._element.style.display = "block";
    }

    /**
     * Make the image to be a button
     * @param {string} src - filepath for the image
     */
    makeImageButton(src) {
        //this._element.style.visibility = "hidden";
        if (this._element.contains(this._img)) {
            this._element.removeChild(this._img);
        }
        this._img = new Image();
        this._img.src = src;
        this._img.style.display = "block";
        this._img.onload = function() {
            this._element.appendChild(this._img);
            this._element.style.padding = "0";
            this._img.style.width = 100 + "%";
            this._img.style.height = 100 + "%";
            this._element.style.border = "none";
        }.bind(this);
    }

    /**
     * Set a hover image for the button
     * @param {string} src - filepath for the image
     */
    addHoverImage(src) {
        if (this._element.contains(this._hoverImage)) {
            this._element.removeChild(this._hoverImage);
        }
        this._hoverImage = new Image();
        this._hoverImage.style.display = "block";
        this._hoverImage.src = src;
        this._hoverImage.style.display = "none";
        this._hoverImage.onload = function() {
            this._element.appendChild(this._hoverImage);
            this._element.style.padding = "0";
            this._hoverImage.style.width = 100 + "%";
            this._hoverImage.style.height = 100 + "%";
            this._element.style.border = "none";
        }.bind(this);
        this._element.onmouseover = () => {
            this._img.style.display = "none";
            this._hoverImage.style.display = "block";
            this._hoverImage.style.width = 100 + "%";
            this._hoverImage.style.height = 100 + "%";
        };
        this._element.onmouseleave = () => {
            this._img.style.display = "block";
            this._hoverImage.style.display = "none";
            this._hoverImage.style.width = 100 + "%";
            this._hoverImage.style.height = 100 + "%";
        }
    }
}
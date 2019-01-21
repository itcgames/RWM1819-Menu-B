'use strict';

class Theme {
  get secondary() {
    return this._secondary;
  }
  get primary() {
    return this._primary;
  }
  constructor() {
    this._primary = "rgb(0,0,0,0)";
    this._secondary = "rgb(0,0,0,0)";
  }

  setPrimary(r,g,b,a) {
    this._primary = `rgb(${r},${g},${b}, ${a})`;
  }

  setSecondary(r,g,b,a) {
    this._secondary = `rgb(${r},${g},${b}, ${a})`;
  }
}
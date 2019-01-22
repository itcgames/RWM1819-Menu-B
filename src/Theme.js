'use strict';

class Theme {
  get tertiary() {
    return this._tertiary;
  }
  get secondary() {
    return this._secondary;
  }
  get primary() {
    return this._primary;
  }
  constructor() {
    this._primary = "rgba(0,0,0,0)";
    this._secondary = "rgba(0,0,0,0)";
    this._tertiary = 'rgba(0,0,0,0)';
  }

  setPrimary(r,g,b,a) {
    this._primary = `rgba(${r},${g},${b}, ${a})`;
  }

  setSecondary(r,g,b,a) {
    this._secondary = `rgba(${r},${g},${b}, ${a})`;
  }

  setTertiary(r,g,b,a) {
    this._tertiary = `rgba(${r},${g},${b}, ${a})`;
  }
}
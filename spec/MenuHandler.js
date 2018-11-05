/* global MenuHandler, describe, it, expect, should */

describe('MenuHandler()', function () {
  'use strict';

  it('exists', function () {
    expect(MenuHandler).to.be.a('function');
    let m = new MenuHandler();
    console.log(m.scenes);
  });

  it('does something', function () {
    expect(true).to.equal(false);
  });

  it('does something else', function () {
    expect(true).to.equal(false);
  });

  // Add more assertions here
});

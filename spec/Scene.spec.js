/* global Scene, describe, it, expect, should */

describe('Scene Test', () => {
  let scene;

  beforeEach(() => {
    let div = document.getElementById("main-div");
    scene = new Scene("Test", div, {'x': 0, 'y': 0, 'width': 100, 'height': 100}, "","%");
    scene._containerDiv.hidden = true;
  });

  it('exists', () => {
    expect(scene).to.be.a('Object');
  });

  it('can add menu', () => {
    let m = new Menu("Test Menu", {'x': 0, 'y': 0, 'width': 50, 'height': 50}, "%");
    m._containerDiv.hidden = true;
    expect(scene.addMenu).to.be.a('Function');
  });

  it('can transition in', () => {
    expect(scene.transitionIn).to.be.a('Function');
  });

  it('can transition out', () => {
    expect(scene.transitionOut).to.be.a('Function');
  });

  it('can render', () => {
    expect(scene.render).to.be.a('Function');
  });
  // Add more assertions here
});
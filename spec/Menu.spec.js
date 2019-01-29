/* global Menu, describe, it, expect, should */

describe('Menu Test', () => {
  let menu;

  beforeEach(() => {
    let div = document.getElementById("main-div");
    menu = new Menu("Test",
        {'x': 20, 'y': 20, 'width': 60, 'height': 60},
        "%"
    );
    menu._containerDiv.hidden = true;
  });

  it('exists', () => {
    expect(menu).to.be.a('Object');
  });

  it('can add Button', () => {
    let b = new Button("Test",
        () => {},
        {'x': 35, 'y': 80, 'width': 30, 'height': 10},
        "%"
    );
    b._element.hidden = true;
    expect(menu.addButton).to.be.a('Function');
  });

  it('can hide all', () => {
    expect(menu.hideAll).to.be.a('Function');
  });

  it('can show all', () => {
    expect(menu.showAll).to.be.a('Function');
  });
});
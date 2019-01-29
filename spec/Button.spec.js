/* global Button, describe, it, expect, should */

describe('Button', () => {
  let button;

  beforeEach(() => {
    button = new Button("Test", () => {},
        {'x': 35, 'y': 80, 'width': 30, 'height': 10},
        "%"
    );
    button._element.hidden = true;
  });

  it('exists', () => {
    expect(button).to.be.a('Object');
  });

  it('make Image button', () => {
    expect(button.makeImageButton).to.be.a('Function');
  });

  it('make Hover Image button', () => {
    expect(button.addHoverImage).to.be.a('Function');
  });
});
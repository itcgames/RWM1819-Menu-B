/* global Theme, describe, it, expect, should */

describe('Theme', () => {
  let theme;

  beforeEach(() => {
    theme = new Theme();
  });

  it('exists', () => {
    expect(theme).to.be.a('Object');
  });

  it('setPrimary exists', () => {
    expect(theme.setPrimary).to.be.a('Function');
  });

  it('setSecondary exists', () => {
    expect(theme.setSecondary).to.be.a('Function');
  });

  it('setTertiary exists', () => {
    expect(theme.setTertiary).to.be.a('Function');
  });
});
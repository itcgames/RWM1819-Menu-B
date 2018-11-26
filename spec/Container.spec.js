/* global Container, describe, it, expect, should */

describe('Container', () => {
    let container;

    beforeEach(() => {
        container = new Container("Test", 0, 0, 100, 100, "absolute", "#0000FF", false);
    });

    it('exists', () => {
        expect(container).to.be.a('Object');
    });

    it('can create a new div', () => {
        let divID = "Test";
        expect(container._containerDiv).to.be.a('Object');
        expect(container.containerDiv).to.be.a('Object');
        document.body.appendChild(container._containerDiv);
        expect(document.getElementById(divID)).to.be.a('Object');
        container._containerDiv.parentNode.removeChild(container._containerDiv);
    });

    it('can alter element visibility', () => {
        expect(container._containerDiv.style.visibility).to.equal('visible');
        container.hide();
        expect(container._containerDiv.style.visibility).to.equal('hidden');
        container.show();
        expect(container._containerDiv.style.visibility).to.equal('visible');
    });

    it('can alter element unit type', () => {
        expect(container._units).to.equal('%');
        expect(container.units).to.equal('%');
        let pattern = new RegExp('%');
        expect(pattern.test(container._containerDiv.style.left)).to.equal(true);
        expect(pattern.test(container._containerDiv.style.top)).to.equal(true);
        expect(pattern.test(container._containerDiv.style.width)).to.equal(true);
        expect(pattern.test(container._containerDiv.style.height)).to.equal(true);

        container.units = "px";
        let pattern2 = new RegExp("px");
        expect(pattern2.test(container._containerDiv.style.left)).to.equal(true);
        expect(pattern2.test(container._containerDiv.style.top)).to.equal(true);
        expect(pattern2.test(container._containerDiv.style.width)).to.equal(true);
        expect(pattern2.test(container._containerDiv.style.height)).to.equal(true);
    });

    it('can alter bounds', () => {
        let bounds = container.bounds;
        expect(bounds.x).to.equal(0);
        expect(bounds.y).to.equal(0);
        expect(bounds.width).to.equal(100);
        expect(bounds.height).to.equal(100);

        container.bounds = {'x': 10, 'y': 20, 'width': 30, 'height': 40};
        expect(container.bounds.x).to.not.equal(bounds.x);
        expect(container.bounds.y).to.not.equal(bounds.y);
        expect(container.bounds.width).to.not.equal(bounds.width);
        expect(container.bounds.height).to.not.equal(bounds.height);
    });

    it('can alter bounds', () => {
        let bounds = container.bounds;
        expect(bounds.x).to.equal(0);
        expect(bounds.y).to.equal(0);
        expect(bounds.width).to.equal(100);
        expect(bounds.height).to.equal(100);

        container.bounds = {'x': 10, 'y': 20, 'width': 30, 'height': 40};
        expect(container.bounds.x).to.not.equal(bounds.x);
        expect(container.bounds.y).to.not.equal(bounds.y);
        expect(container.bounds.width).to.not.equal(bounds.width);
        expect(container.bounds.height).to.not.equal(bounds.height);
    });

    it('can alter colour and alpha', () => {
        expect(container.colour).to.be.a("string");
        container.colour = "FFFFFF";
        expect(container.colour).to.equal("FFFFFF");

        expect(container.alpha).to.be.a("string");
        container.alpha = "00";
        expect(container.alpha).to.equal("00");

        let pattern = new RegExp("rgb");
        expect(pattern.test(container._containerDiv.style.backgroundColor)).to.equal(true);
    });
    // Add more assertions here
});

const Circle = require('../lib/circle');

describe('Circle', () => {
  describe('Render Method', () => {
    it('should render circle', () => {
      const circle = new Circle({
        logoName: 'Ade',
        textColour: 'pink',
        shape: 'circle',
        shapeColour: 'orange',
      });
      expect(circle.render()).toBe(
        `<circle cx="50" cy="50" r="50" fill="red" />`
      );
    });
  });
});
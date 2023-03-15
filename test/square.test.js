const Square = require('../lib/square');

describe('Square', () => {
  describe('Render Method', () => {
    it('should render square', () => {
      const square = new Square({
        name: 'Ade',
        textColour: 'blue',
        shape: 'square',
        shapeColour: 'white',
      });
      expect(square.render()).toBe(
        `<rect width="100" height="100" rx="15" fill="orange" />`
      );
    });
  });
});
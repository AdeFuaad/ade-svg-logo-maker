const Circle = require('./circle');
const Square = require('./square');
const Triangle = require('./triangle');

const createShape = (data) => {
  const { logoShape } = data;
  switch (logoShape) {
    case 'circle':
      const makeCircle = new Circle(data);
      return makeCircle;
      break;

    case 'triangle':
      const makeTriangle = new Triangle(data);
      return makeTriangle;
      break;

    case 'square':
      console.log(data);
      const createShape = new Square(data);
      return createShape;
      break;

    default:
      return `Something is not right!`;
      break;
  }
};

module.exports = { createShape };

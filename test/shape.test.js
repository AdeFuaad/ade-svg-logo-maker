const Shape = require('../lib/shape');
var testCases = [
  {
    desc: 'should throw an error if input is empty',
    input: {},
    expectedErr: new Error('Input cannot be empty'),
  },
  {
    desc: 'should throw error if logo text is longer than 3y',
    input: { logoName: 'fuaad' },
    expectedErr: new Error('Logo text cannot be more than 3 characters'),
  },
  {
    desc: 'should throw error if input is not a vaild css colour',
    input: { logoName: 'Ade', textColour: 'NotColour' },
    expectedErr: new Error(
      'Please enter a vaild css color keyword or hex code'
    ),
  },
  {
    desc: 'should throw an error if render() is called',
    input: { logoName: 'Ade', textColour: 'green', bgColour: 'orange' },
    expectedErr: new Error('Child shapes must implement a render() method'),
    shouldRender: true,
  },
  {
    desc: 'should add background colour if it is a valid color',
    input: { logoName: 'Ade', textColour: 'green', bgColour: 'orange' },
    expectedKey: 'bgColour',
    expectedValue: 'purple',
  },
  {
    desc: 'should add text colour if it is a valid color',
    input: { logoName: 'Ade', textColour: 'red', bgColour: 'orange' },
    expectedKey: 'textColour',
    expectedValue: 'red',
  },
];
describe('Shape test suite', () => {
  for (let tc of testCases) {
    it(tc.desc, () => {
      if (tc.shouldRender) {
        const shape = new Shape(tc.input);
        expect(shape.render).toThrow(tc.expectedErr);
      } else if (tc.expectedErr) {
        const shape = () => new Shape(tc.input);
        expect(shape).toThrow(tc.expectedErr);
      } else {
        const shape = new Shape(tc.input);
        expect(shape[tc.expectedKey]).toBe(tc.expectedValue);
      }
    });
  }
});
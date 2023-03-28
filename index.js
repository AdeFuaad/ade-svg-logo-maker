const inquirer = require('inquirer');
const fs = require('fs');
const { generateSvg } = require('./lib/generateSvg');
const { createShape } = require('./lib/createShape');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'logoName',
      message: 'Input text that must not be more than 3 letters',
    },
    {
      type: 'input',
      name: 'textColour',
      message: `Input text colour keyword or a hexadecimal number for the logo's color`,
    },
    {
      type: 'input',
      name: 'logoColour',
      message: `Input a colour keyword or a hexadecimal number for the logo's background colour`,
    },
    {
      type: 'list',
      name: 'logoShape',
      message: `Select a logo shape`,
      choices: ['triangle', 'circle', 'square'],
    },
  ])
  .then((data) => {
    const svgPath = './dist/logo.svg';
    const finalLogo = createShape(data);

    //Generate the svg logo here.
    fs.writeFile(svgPath, generateSvg(finalLogo), (err) =>
      err ? console.error(err) : console.log('Generated logo.svg')
    );
  })
  .catch((err) => console.error(err));

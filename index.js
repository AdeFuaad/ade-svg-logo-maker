const inquirer = require('inquirer');
const fs = require('fs');
const { generateSvg } = require('./libs/generateSvg');
const { createShape } = require('./libs/createShape');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'logoName',
      message: 'Input text not greater than 3 characters',
    },
    {
      type: 'input',
      name: 'textColour',
      message: `Input the colour name or hex value of the text`,
    },
    {
      type: 'list',
      name: 'logoShape',
      message: `Select the shape of choice`,
      choices: ['triangle', 'circle', 'square'],
    },
    {
      type: 'input',
      name: 'logoColour',
      message: `Input the colour name or hex value of the shape`,
    },
  ])
  .then((data) => {
    const svgPath = './dist/logo.svg';
    const finalLogo = generateSVG(data);

    //Generate the svg logo here.
    fs.writeFile(svgPath, finalLogo, (err) =>
      err ? console.error(err) : console.log('Generated logo.svg')
    );
  })
  .catch((err) => console.error(err));




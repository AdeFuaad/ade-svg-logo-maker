const inquirer = require('inquirer');
const generateSVG = require('./utils/generateSVG')
const fs = require('fs')

//questions array. For the first question I limit the number of characters
//the user can enter to 3
const questions = [
    {
        type: 'input',
        message: 'Input text not greater than 3 characters',
        name: 'name',
        validate: function(value) {
            if(value.length > 3){
                return "Please input characters less than 3"
            }
            else{
                return true;
            }
        }
    },
    {
        type: 'input',
        message: 'Please Input the colour name or hex value of the text',
        name: 'textColour',
    },
    {
        type: 'list',
        message: 'Please select the shape you want your logo to be',
        choices: 
        [
            'Triangle', 
            'Square', 
            'Circle'
        ],
        name: 'shape',
    },
    {
        type: 'input',
        message: 'Please Input the colour name or hex value of the shape',
        name: 'shapeColour'
    }
]

inquirer
    .prompt(questions).then((data) => {
        fs.writeFile('./examples/logo.svg',generateSVG(data), (err) => {
            if(err){
                console.log(err);
            }
            else{
                console.log('logo.svg generated')

            }
           })
    })
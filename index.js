// GIVEN a command-line application that accepts user input
// WHEN I am prompted for text
// THEN I can enter up to three characters

// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)

// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square

// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)

// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`

// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered

const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require('./lib/shapes');

inquirer.prompt([
    {
        type: 'input',
        name: 'characters',
        message: 'Please enter up to 3 letters/characters.',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Please enter the color you would like your characters to be.',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Please select a shape for you logo.',
        choices: ['circle', 'square', 'triangle',]
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Please enter the color you would like your shape to be.',
    },
])


.then((data) => {
    const {characters, textColor, shape, shapeColor} = data;
    
    

    
    fs.writeFileSync("./examples/logo.svg", newShape.getHTML())
    });


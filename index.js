// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown.js")
const fs = require("fs")
// add a package that would import generate file
// export from "badmath"
// to import we will use require key word ex const badmath = require('./badmath.js')
// > use your own word to name the variable (not matching the 'badmath')
// graders will go to terminal
// node index.js will be excuted
// TODO: Create an array of questions for user input
const questions = [
    {
    type: "input",
    name: "title",
    message: "Please provide the Title of your project",
    },
    {
    type: "input",
    name: "description",
    message: "Please provide a description of your project"    
    },
    {
    type: "input",
    name: "installation",
    message: "What are some Installations used in the project?"
    },
    {
    type: "input",
    name: "usage",
    message: "What are some usages used during the project?"
    },
    {
    type: "input",
    name: "contributions",
    message: "Who/What contributed to this project?"
    },
    {
    type: "input",
    name: "tests",
    message: "What are some tests that were implemented in the project?"    
    },
    {
    type: "list",
    name: "license",
    message: "Choice the following licenses",
    choices: ["MIT", "IBM", "Apache", "None"]
    },
    {
    type: "input",
    name: "username", 
    message: "Please provide Github Username"
    },
    {
    type: "input",
    name: "email",
    message: "Please Provide email for additonal contact"
    },
];

function init() {

inquirer
  .prompt(questions)
  .then((answers) => {
   writeReadme(generateMarkdown(answers))
  }).catch((error) => {
    console.log(error);
  });
}
// ask the user questions - array 
// store answers as {}
// create a contant for the readme(function) generate markdown 
// calling > calling generate markdown function 
// > insert object of answers
// invoke the writeToFile (which crated the readme)


// TODO: Create a function to write README file

function writeReadme(data) {
    fs.writeFile('newREADME.md', data, (err) =>
    err ? console.error(err) : console.log('Gz!')
    )
}

// TODO: Create a function to initialize app


// Function call to initialize app
init();

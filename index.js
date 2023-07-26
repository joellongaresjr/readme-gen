const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown.js")
const fs = require("fs")

// array of question objects that are prompted for the user
// each question object specificing the question 'type:', 'name:(used to store user input)', 'message:(question messagefor the users)'
// utilized 'choicec: [...]' 
const questions = [
    {
    type: "input",
    name: "title",
    message: "Please provide the Title of your project:",
    },
    {
    type: "input",
    name: "description",
    message: "Please provide a description of your project:"    
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

// function init() is called to initate the inquirer prompt
function init() {
// inquirer method allows us to prompt from the 'questions' array 
inquirer
  .prompt(questions)
  .then((answers) => {
// .then method -> callback function receiving the 'answers' object from the users response 
// thus allowing our 'generateMarkdown' funciton with 'answers' object as an argument 
// to generate the Markdown contet for the readme file (defined in the next function)
   writeReadme(generateMarkdown(answers))
  }).catch((error) => {
    console.log(error);
// applying '.catch' method to handle any errors that might have occured
  });
};

// overall purpose of this function is to write the provided data(generated Markdown) to a new readme file (newREADME.md)
function writeReadme(data) {
// we use 'fs' (file system) method to write data to either create or overwrite a 'newREADME.md' in the current directory 
    fs.writeFile('newREADME.md', data, (err) => 
// creating an anonoymous function that will allow us to check if any errors occured 
// If error did occur = True, 
// otherwise we execute console.log 'Your newReadme is generated' indicating that a file has been successfully generated with provided data. 
    err ? console.error(err) : console.log('Your newReadME.md is now generated!') 
    )
};

init();

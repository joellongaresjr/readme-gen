const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown.js")
const fs = require("fs")

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

function init() {

inquirer
  .prompt(questions)
  .then((answers) => {
   writeReadme(generateMarkdown(answers))
  }).catch((error) => {
    console.log(error);
  });
};

function writeReadme(data) {
    fs.writeFile('newREADME.md', data, (err) =>
    err ? console.error(err) : console.log('Gz!')
    )
};

init();

// TODO: Include packages needed for this application
const questions = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
 questions
 .prompt([
     {
         type:'input',
         message:'What is your username on Github?',
         name: 'username',

     },
    {
      type: "input",
      message: "What is the name of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "Describe the purpose of your project",
      name: 'description'
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
  ])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

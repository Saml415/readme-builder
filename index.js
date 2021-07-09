// TODO: Include packages needed for this application
const questions = require("inquirer");
const fs = require("fs");
const markdown = require("./generateMarkdown");
// TODO: Create an array of questions for user input
questions
  .prompt([
    {
      type: "input",
      message: "What is the name of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "Describe the purpose of your project.",
      name: "description",
    },
    {
      type: "input",
      message: "Explain the installation process.",
      name: "install",
    },
    {
      type: "input",
      message: "Explain how to navigate the repository.",
      name: "usage",
    },
    {
      type: "input",
      message: "Add those who contributed to the repo.",
      name: "contribute",
    },
    {
      type: "input",
      message: "Are there any tests you would like to feature?",
      name: "tests",
    },
    {
      type: "input",
      message: "What is your username on Github?",
      name: "username",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
    {
      type: "list",
      message: "Pick a Badge",
      name: "license",
      choices: [
        "MIT",
        "MPL",
        "AL",
        {
          name: "No License",
          value: "",
        },
      ],
    },
  ])
  .then((answers) => {
    fs.appendFile("README.md", markdown(answers), (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Read Me Generated");
      }
    });
  });
// console.log(`${answers.email}`)

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

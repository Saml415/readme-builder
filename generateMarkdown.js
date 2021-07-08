// TODO: Create a function that returns a license badge based on which license is passed in

const { title } = require("process");


// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} \n 
## Table of Contents \n
* Descritpion 
* Installation
* Usage
* Contributing
* Tests
* Questions
* License
## Description
${data.description} 
## Installation Guide
${data.install}
## Usage
${data.usage}
## Contributing
Created by ${data.contribute}
## Tests
${data.tests}
## Questions
If you have any questions you can contact with though my GitHub profile ${data.username} or by email ${data.email} 
## License
  
  `;
  
}

module.exports = generateMarkdown;

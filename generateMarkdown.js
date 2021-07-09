

const { title } = require("process");

function renderLicenseBadge(data) {
  switch (data) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";

    case "MPL 2.0":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";

    case "Apache 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";

    default:
      return "";
  }
}

function generateMarkdown(data) {
  return `# ${data.title} \n 
## Table of Contents 
* [Descritpion](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)
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
${renderLicenseBadge(data.license)}

This project is under the ${data.license} license.
  `;
}

module.exports = generateMarkdown;

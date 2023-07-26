// function take 'licence' as a parameter (MIT,IBM,Apache,None) returns a markdown string representing a badge 
// based on users selection , this function allows a badge to generate based on that response from the user.
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `![MIT-License](https://img.shields.io/badge/MIT-License-red)`;
  } else if (license === "IBM") {
    return `![IBM-License](https://img.shields.io/badge/IBM-License-blue)`;
  } else if (license === "Apache") {
    return `![Apache-License](https://img.shields.io/badge/Apache-License-orange)`;
  } else if (license === "None") {
    return ``;
  }
}

// similar to the function above but instead return a string representing a certain link based on the users selection
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `License -> ![MIT License](https://www.mit.edu/~amini/LICENSE.md)`;
  } else if (license === "IBM") {
    return `License -> ![IBM License](https://www.ibm.com/us-en/privacy?lnk=flg-priv-usen`;
  } else if (license === "Apache") {
    return `License -> ![Apache License](https://www.apache.org/licenses/LICENSE-2.0)`;
  } else if (license === "None") {
    return ``;
  }
}

// 'renderLicenseSection' allows us to generate a markdown string representing in the table of contents of the README file.
function renderLicenseSection(license) {
 // if statement to check the licence parameter is not equal to an empty string 
  if (license !== ``) { // tried this concept of '!==' not equal operator . allows us to detect if the user applied a licence or not (in most cases I don't LOL)
    return `* [License](#license)`;
  } else {
    return ``;
  }
}

// function that generates the complete Markdown content for the README file basesd on the 'data' object
// combining template literals to call certain functions to help include within the README (badge & link)
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description 
${data.description}

## Table of Contents  
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseSection(data.license)}
* [Contribution](#contribution)
* [Tests](#tests)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseLink(data.license)}

## Contributing
${data.contributions}

## Tests
${data.tests}

## Contact Me 
* https://github.com/${data.username}
* ${data.email}`;
}

// exporting generateMarkdown function to other files that import this module (index.js)
module.exports = generateMarkdown;

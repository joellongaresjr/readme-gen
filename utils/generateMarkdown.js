// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `![MIT-License](https://img.shields.io/badge/MIT-License-red)`    
} else if (license === "IBM") {
  return `![IBM-License](https://img.shields.io/badge/IBM-License-blue)`
} else if (license === "Apache") {
  return `![Apache-License](https://img.shields.io/badge/Apache-License-orange)`
} else if (license === "None") {
  return ``
}
  
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `License -> ![MIT License](./LICENSE)`    
} else if (license === "IBM") {
  return `License -> ![IBM License](./LICENSE)`
} else if (license === "Apache") {
  return `License -> ![Apache License](./LICENSE)`
} else if (license === "None") {
  return `This application has no license used`
}
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
  ## Description 
${data.description}

## Table of Contents  
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution](#contribution)
* [Tests](#tests)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.contributions}

## Tests
${data.tests}

`;
};

module.exports = generateMarkdown;

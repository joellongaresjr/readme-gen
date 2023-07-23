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

function renderLicenseLink(license) {
  if (license === "MIT") {
    return `License -> ![MIT License](./LICENSE)`    
  } else if (license === "IBM") {
    return `License -> ![IBM License](./LICENSE)`
  } else if (license === "Apache") {
    return `License -> ![Apache License](./LICENSE)`
  } else if (license === "None") {
    return ``
  }
};

function renderLicenseSection(license) {
  if (license !== ``) {
    return `* [License](#license)`
  } else {
    return ``
  }
};

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
${data.license}

## Contributing
${data.contributions}

## Tests
${data.tests}

## Contact Me :) 
* https://github.com/${data.username}
* ${data.email}

`;
};

module.exports = generateMarkdown;

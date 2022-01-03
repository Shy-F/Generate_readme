// TODO: Create a function that returns a license badge based on which license is passed in
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
  return `# ${data.title}

  ## Description

  ${data.description}

  ![badge](https://img.shields.io/badge/license-${license}-blue.svg)

  ##Table of Contents
  *[Installation](#installation)
  *[Usage](#usage)
  *[License](#license)
  *[Contributing](#contributing)
  *[Test](#tests)
  *[Questions](#questions)

  ## Installation
  ${data.install}

  ##Usage
  ${data.usage}

  ## License
  This project is license under ${data.license}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.test}

  ## Questions
  If you have any questions about this project, please contact me directly at ${data.email}. View more of my projects at https://github.com/${data.github}.
`;
}
module.exports = generateMarkdown;

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {
 // let licenseType = `${data.license}`;
  //let yourLicense = ''
  //if(licenseType === 'MIT') {
  //  yourLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
 // } else if (licenseType === 'GNU') {
 //   yourLicense = `![License: GNU](https://img.shields.io/badge/License-GNU-blue.svg)`
 // } else {
  //  yourLicense = ' '
//  }
 // return yourLicense;
//};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![Github licence](http://img.shields.io/badge/license-${data.license}-yellow.svg)


  ## Description

  ${data.description}

  

  ##Table of Contents
  *[Installation](#installation)
  *[Usage](#usage)
  *[License](#license)
  *[Contributing](#contributing)
  *[Test](#tests)
  *[Questions](#questions)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## License
  This project is license under ${data.license}

  ## Contributing
  ${data.contributors}

  ## Tests
  ${data.test}

  ## Questions
  Please contact me directly at ${data.email} if you have any questions or feedback. View more of my projects at https://github.com/${data.username}.
`;
}
module.exports = generateMarkdown;

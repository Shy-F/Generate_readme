// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
    {
    type: 'input',
    name: 'title',
    message: 'What is the name of your repository?',
    validate: nameInput => {
        if (nameInput) {
            return true;
        }else {
            console.log('Enter your repository name.');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'description',
    message: 'Describe your repository.',
    validate: nameInput => {
        if (nameInput){
            return true;
        }else {
            console.log('Must include description');
            return false;
        }
    }
},
{
    type: 'checkbox',
    name: 'license',
    message: 'What kind of license does your project have?',
    choices: ['MIT', 'GNU'],
    default: ['MIT'],
    validate: nameInput => {
        if (nameInput){
            return true;
        }else {
            console.log('Please choose a license');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'install',
    message: 'What is the installation process?',
    validate: nameInput => {
        if (nameInput){
            return true;
        }else {
            console.log('Include installation process');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'Usage',
    message: 'How is this app used?',
    validate: nameInput => {
        if (nameInput){
            return true;
        }else {
            console.log('Must include usage');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'Contributing',
    message: 'How can other developers contribute?',
    validate: nameInput => {
        if (nameInput){
            return true;
        }else {
            console.log('please include contribution information');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'Test',
    message: 'How can app be tested?',
    validate: nameInput => {
        if (nameInput){
            return true;
        }else {
            console.log('Must include');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'Username',
    message: 'What is your GitHub username?',
    validate: nameInput => {
        if (nameInput){
            return true;
        }else {
            console.log('Enter your GitHub username.');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
    validate: nameInput => {
        if (nameInput){
            return true;
        }else {
            console.log('Must include email.');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'questions',
    message: 'What is your contact information?',
    validate: nameInput => {
        if (nameInput){
            return true;
        }else {
            console.log('Must include contact information.');
            return false;
        }
    }

},
])
}; //end of questions

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {
  //  fs.writeFile(fileName, generateMarkdown(data), err => err ? console.log(err) : console.log('Success!'))
//};
const writeFile = data => {
    fs.writeFile('README.md', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('Success!')
        }
    })
};

// TODO: Create a function to initialize app
function init() {
    //get questions
    questions()
    //get answers
    .then(answers => {
        return generateMarkdown(answers);
    })
    //display data on page
    .then(data => {
        return writeFile(data);
    })
    //catch errors
    .catch(err => {
        console.log(err)
    })
};

// Function call to initialize app
init();

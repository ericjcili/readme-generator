const inquirer = require('inquirer');
const fs = require('fs');
const generateReadme = require('./src/generateReadme');

const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the name of your project? (Required)',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter your project name!');
            return false;
        }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of the project (Required)',
    validate: descriptionInput => {
        if (descriptionInput) {
            return true;
        } else {
            console.log('Please enter your project description!');
            return false;
        }
    }
  },
  {
    type: 'input',
    name: 'install',
    message: 'How do you install your project? (Required)',
    validate: installInput => {
        if (installInput) {
            return true;
        } else {
            console.log('You need explain how to install your project!');
            return false;
        }
    }
    },
  {
    type: 'input',
    name: 'usage',
    message: 'How do you use this project? (Required)',
    validate: usageInput => {
        if (usageInput) {
            return true;
        } else {
            console.log('You need explain how to use project!');
            return false;
        }
    }
   },
   {
    type: 'checkbox',
    name: 'license',
    message: 'Choose a license for your project (Required)',
    choices: ['Apache', 'Boost', 'BSD', 'EPL', 'IPL', 'None'],
    validate: licenseInput => {
        if (licenseInput) {
            return true;
        } else {
            console.log('You must pick your license for the project!');
            return false;
        }
    }
    },
   {
    type: 'input',
    name: 'contributes',
    message: 'Who has contributed to this project? (Required)',
    validate: contributesInput => {
        if (contributesInput) {
            return true;
        } else {
            console.log('You need to list the project contributers!');
            return false;
        }
    }
   },
   {
    type: 'input',
    name: 'testing',
    message: 'How do you test this project? (Required)',
    validate: testingInput => {
        if (testingInput) {
            return true;
        } else {
            console.log('You need to describe how to test this project!');
            return false;
        }
    }
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'Enter your GitHub username: (Required)',
        validate: githubUsernameInput => {
            if (githubUsernameInput) {
                return true;
            } else {
                console.log('You must provide your GitHub username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your e-mail address: (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('You must provide your email!');
                return false;
            }
        }
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log('Your README file has been generated!')
    });
};

function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateReadme(userInput));
    });
};

init();
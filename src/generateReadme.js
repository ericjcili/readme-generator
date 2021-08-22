function generateReadme(data) {
    return `# ${data.name}
## Licensing: 
[${data.license}]
[!License](https://img.shields.io/badge/License-${data.license}%202.0-blue.svg)]
## Table of Contents 
[Description](#description)

[Installation](#installation)

[Usage](#usage)

[Contributors](#contributors)

[Testing](#testing)

[Questions](#questions)

## Description:
    ${data.description}
## Installation:
    ${data.install}
## Usage:
    ${data.usage}
## Contributors:
    ${data.contributes}
## Testing:
    ${data.testing}
## Questions:
    - GitHub Username: [${data.githubUsername}]
    - GitHub link: https://github.com/${data.githubUsername}
    - Email: ${data.email} `;
  }
  
  module.exports = generateReadme;
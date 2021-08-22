function generateReadme(data) {
    return `# ${data.name}
## Table of Contents 
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Licensing](#licensing)
    - [Contribution](#contribution)
    - [Testing](#testing)
    - [Questions](#questions)
## Description:
    ${data.description}
## Installation:
    ${data.install}
## Usage:
    ${data.usage}
## License:
    ${data.license}
## Contribution:
    ${data.contributes}
## Testing:
    ${data.testing}
## Questions:
    - GitHub Username: [${data.githubUsername}]
    - GitHub link: https://github.com/${data.githubUsername}
    - Email: ${data.email} `;
  }
  
  module.exports = generateReadme;
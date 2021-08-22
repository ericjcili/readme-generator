function generateMarkdown(data) {
    return `# ${data.name}
## Table of Contents 
    <li><a href="#description">[Description]</a></li>
    <li><a href="#installation">[Installation]</a></li>
    <li><a href="#usage">[Usage]</a></li>
    <li><a href="#license">[Licensing]</a></li>
    <li><a href="#contribution">Contribution]</a></li>
    <li><a href="#testing">[Testing]</a></li>
    <li><a href="#questions">[Questions]</a></li>
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
    - Github: [${data.githubUsername}](https://github.com/${data.github})
    - Email: ${data.email} `;
  }
  
  module.exports = generateMarkdown;
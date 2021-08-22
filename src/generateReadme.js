function generateMarkdown(data) {
    return `# ${data.name}
    ## Licensing:
    [![license](https://img.shields.io/badge/license-${data.license}-blue)](https://shields.io)
    ## Table of Contents 
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contribution](#contribution)
    - [Testing](#testing)
    - [Additional Info](#additional-info)
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
    ## Additional Info:
    - Github: [${data.githubUsername}](https://github.com/${data.github})
    - Email: ${data.email} `;
  }
  
  module.exports = generateMarkdown;
const replaceInReadme = require('./replace-in-readme.js');

const repoData = require('./data/index.json');

const links = `
- [Homework Boards](https://github.com/${repoData.userName}/${repoData.repoName}/projects)
- [All Issues](https://github.com/${repoData.userName}/${repoData.repoName}/issues)
- [\`help-wanted\` label](https://github.com/${repoData.userName}/${repoData.repoName}/issues?q=label%3Ahelp-wanted)
- [\`review\` label](https://github.com/${repoData.userName}/${repoData.repoName}/issues?q=label%3Areview)
- [\`roll-call\` label](https://github.com/${repoData.userName}/${repoData.repoName}/issues?q=label%3Aroll-call)
- [Shared Notes](./shared-notes)
`;

replaceInReadme(links, 'LINKS');

const replaceInReadme = require('./replace-in-readme.js');

const repoData = require('./data/index.json');

const links = `
- [Homework Boards](https://github.com/${repoData.userName}/${repoData.repoName}/projects)
- [\`help-wanted\`](https://github.com/${repoData.userName}/${repoData.repoName}/issues?q=label%3Ahelp-wanted)
- [\`review\`](https://github.com/${repoData.userName}/${repoData.repoName}/issues?q=label%3Areview)
- [\`roll-call\`](https://github.com/${repoData.userName}/${repoData.repoName}/issues?q=label%3Aroll-call)
- [All Issues](https://github.com/${repoData.userName}/${repoData.repoName}/issues)
- [Shared Notes](./shared-notes)
`;

replaceInReadme(links, 'LINKS');

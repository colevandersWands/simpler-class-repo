module.exports = (module, mainData) => (
  `<h3><a href="${mainData.domain}/${module.name}">${module.name}</a></h3>\n` +
  `<ul>\n` +
  `  <li><a href="https://github.com/${mainData.userName}/${mainData.repoName}/projects/${module.project}">project board</a></li>\n` +
  `  <li><a href="https://github.com/${mainData.userName}/${mainData.repoName}/issues?q=milestone%3A${module.milestone}+label%3Aindividual">individual issues</a></li>\n` +
  `  <li><a href="https://github.com/${mainData.userName}/${mainData.repoName}/issues?q=milestone%3A${module.milestone}">all issues</a></li>\n` +
  `</ul>`
);

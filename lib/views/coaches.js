module.exports = (coach, mainData) => (
  `<table><tr>\n` +
  `  <td><img src='./lib/avatars/coaches/${coach.userName}-avatar.jpeg' alt='${coach.name}' /></td>\n` +
  `  <td> <h3 display="inline">\n` +
  (typeof coach.homePage === 'string'
    ? `      <a href="${coach.homePage}">${coach.name}</a>`
    : coach.name) +
  `    </h3>\n` +
  `    <ul>\n` +
  `        <li><code><a href="https://github.com/${coach.userName}">${coach.userName}</a></code></li>\n` +
  `        <li><a href="https://github.com/${mainData.userName}/${mainData.repoName}/issues?q=author%3A${coach.userName}">author</a></li>\n` +
  `        <li><a href="https://github.com/${mainData.userName}/${mainData.repoName}/issues?q=assignee%3A${coach.userName}">assignee</a></li>\n` +
  `    </ul>\n` +
  `  </td>\n` +
  `</tr></table>`
);

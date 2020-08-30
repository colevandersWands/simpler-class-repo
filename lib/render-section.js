const replaceInReadme = require('./replace-in-readme.js');

const repoData = require('./data/index.json');

const whichOnes = process.argv[2];

const renderItem = require(`./views/${whichOnes}.js`);

const sectionData = require(`./data/${whichOnes}.json`);




const section = sectionData
  .map((item) => renderItem(item, repoData))
  .reduce((list, item) => `${list}\n  ${item}`, `<details><summary><h2 style="display:inline;">${whichOnes.replace(/^\w/, c => c.toUpperCase())}</h2></summary>\n`)
  + '\n</details>';

replaceInReadme(section, whichOnes.toUpperCase());

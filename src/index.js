
let solcjs = require('./solc');
const solcVersion = require('solc-version');

module.exports = solcjs;

solcjs.versions = solcVersion.versions;
solcjs.versionsSkipVersion5 = solcVersion.versionsSkipVersion5;
solcjs.version2url = solcVersion.version2url;
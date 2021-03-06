const solcImport = require('solc-import');
const solcResolver = require('solc-resolver');
const solcjsCore = require('solcjs-core');

module.exports = getCompile;

function getCompile(oldSolc) {
  let compile;
  Object.keys(oldSolc).forEach(key => {
    if (key != 'compile') return;

    compile = async function (sourcecode = '', getImportContent) {
      if (solcImport.isExistImport(sourcecode)) {
        if (getImportContent == undefined) {
          getImportContent = getContent();
        } else if (typeof getImportContent !== 'function') {
          throw Error('getContent should be a funcion.');
        }
      }

      let readCallback = await solcjsCore.getReadCallback(
        sourcecode,
        getImportContent
      );
      return solcjsCore.wrapperCompile(oldSolc, sourcecode, readCallback);
    };
  });
  return compile;
}

function getContent() {
  const ResolverEngine = require('solc-resolver').resolverEngine;
  let resolverEngine = new ResolverEngine();

  let resolveGithub = require('resolve-github');
  resolverEngine.addResolver(resolveGithub);

  let resolveHttp = require('resolve-http');
  resolverEngine.addResolver(resolveHttp);

  let resolveIPFS = require('resolve-ipfs');
  resolverEngine.addResolver(resolveIPFS);

  let resolveSwarm = require('resolve-swarm');
  resolverEngine.addResolver(resolveSwarm);

  const getImportContent = async function (path) {
    return await resolverEngine.require(path);
  };

  return getImportContent;
}

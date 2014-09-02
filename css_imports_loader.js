var loaderUtils = require('loader-utils');

module.exports = function(source) {
  this.cacheable && this.cacheable();

  var query = loaderUtils.parseQuery(this.query);
  var path = query.path || 'imports.styl';
  var method = query.method || "@import('{path}')\n";

  return method.replace('{path}', path) + source;
};


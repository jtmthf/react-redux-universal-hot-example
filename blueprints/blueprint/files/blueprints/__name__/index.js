const path = require('path');

module.exports = {
  locals: () => ({
    // Return custom template variables here.
  }),

  fileMapTokens: () => ({
    // Return custom tokens to be replaced in your files
    __token__: () => (
      // logic to determine value goes here
      'value'
    )
  }),

  // Should probably never need to be overriden

  filesPath: () => (
    path.join(this.path, 'files')
  ),

  beforeInstall: () => {},
  afterInstall: () => {}
};

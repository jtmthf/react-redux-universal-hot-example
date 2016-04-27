const path = require('path');

module.exports = {
  locals: () => {
    // Return custom template variables here.
    return {};
  },

  fileMapTokens: () => {
    // Return custom tokens to be replaced in your files
    return {
      __token__: () => {
        // logic to determine value goes here
        return 'value';
      }
    };
  },

  // Should probably never need to be overriden

  filesPath: () => {
    return path.join(this.path, 'files');
  },

  beforeInstall: () => {},
  afterInstall: () => {}
};

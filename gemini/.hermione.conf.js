module.exports = {
  sets: {
      desktop: {
          files: 'tests/desktop'
      }
  },

  browsers: {
      chrome: {
          desiredCapabilities: {
              browserName: 'chrome' // this browser should be installed on your OS
          }
      }
  }
};
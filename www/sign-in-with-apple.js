var exec = require('cordova/exec');

module.exports = {
  Scope: {
    FullName: 0,
    Email: 1
  },
  request: function(options) {
    return new Promise(function(resolve, reject) {
      cordova.exec(
          resolve,
          reject,
          'SignInWithApple',
          'request',
          [options]
      );
    });
  }

};

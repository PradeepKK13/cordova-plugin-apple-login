var exec = require('cordova/exec');

module.exports = {
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

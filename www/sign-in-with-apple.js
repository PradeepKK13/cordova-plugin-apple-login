var exec = require('cordova/exec');

module.exports = {
 
exports.signin = function(arg0, success, error) {
  exec(success, error, "SignInWithApple", "signin", [arg0]);
};
};

var validator = require('validator');

module.exports = {
  isEmptyOrNull: function (string) {
    if (string === undefined || string === null) {
      return true;
    } else {
      return false;
    }
  }
};

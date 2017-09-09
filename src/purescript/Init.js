exports.getElementById = function (id) {
  return function () {
    return document.getElementById(id);
  };
};

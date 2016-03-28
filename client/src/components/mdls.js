/* global componentHandler */

exports.materialize = (el, initialized) => {
  if (!initialized) {
    componentHandler.upgradeDom();
  }
};

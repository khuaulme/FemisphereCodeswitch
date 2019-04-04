
exports = function(payload) {

  var queryArg = payload.query.arg || '';
  return context.functions.execute("getRestaurantsByName", queryArg);

};

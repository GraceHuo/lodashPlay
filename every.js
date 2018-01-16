/* Checks if predicate returns truthy for all elements of collection.
 */
(function() {
  // lodash
  var l1 = _.every([true, 1, null, 'yes'], Boolean);
  console.log("l1", l1); // => false

  // native
  var n1 = [true, 1, null, 'yes'].every(Boolean)
  console.log("n1", n1); // => false

})();
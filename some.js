/* Checks if predicate returns truthy for any element of collection.
 */
(function() {
  // lodash
  var l1 = _.some([null, 0, 'yes', false], Boolean);
  console.log("l1", l1); // => true

  // native
  var n1 = [null, 0, 'yes', false].some(Boolean);
  console.log("n1", n1); // => true
})();
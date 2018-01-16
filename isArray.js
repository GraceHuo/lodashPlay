/* Returns true if value is an array, else false.
 */
(function() {
  // lodash
  var l1 = _.isArray([1, 2, 3]);
  console.log("l1", l1); // => true

  var l2 = _.isArray("123");
  console.log("l2", l2); // => false

  // native
  var n1 = Array.isArray([1, 2, 3]);
  console.log("n1", n1); // => true

  var n2 = Array.isArray("123");
  console.log("n2", n2); // => false

})();
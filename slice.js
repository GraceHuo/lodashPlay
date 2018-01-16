/* Creates a slice of array from start up to, but not including, end.
 */
(function() {
  // lodash
  var l1 = _.slice([1, 2, 3, 4], 1, 3);
  console.log("l1", l1); // => [2, 3]

  // native
  var n1 = [1, 2, 3, 4].slice(1, 3);
  console.log("n1", n1); // => [2, 3]

})();
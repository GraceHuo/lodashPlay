/* Gets the last element of array.
 */
(function() {
  // lodash
  var l1 = _.last([1, 2, 3]);
  console.log("l1", l1); // => 3

  // native
  var n1 = [1, 2, 3].splice(-1)[0];
  console.log("n1", n1); // => 3
})();
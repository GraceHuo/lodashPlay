/* Reverses array so that the first element becomes the last, the second element becomes the second to last, and so on.
 */
(function() {
  // lodash
  var l1 = _.reverse([1, 2, 3]);
  console.log("l1", l1); // => [3, 2, 1]

  // native
  var n1 = [1, 2, 3].reverse();
  console.log("n1", n1); // => [3, 2, 1]

})();
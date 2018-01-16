/* _.indexOf(array, value, [fromIndex=0])
 * Gets the index at which the first occurrence of value is found in array using SameValueZero for equality comparisons.
 * If fromIndex is negative, it's used as the offset from the end of array.
 */
(function() {
  // lodash
  var l1 = _.indexOf([1, 2, 1, 2], 2);
  console.log("l1", l1); // => 1

  var l2 = _.indexOf([1, 2, 1, 2], 2, 2);
  console.log("l2", l2); // => 3

  // native
  var n1 = [1, 2, 1, 2].indexOf(2);
  console.log("n1", n1); // => 1

  var n2 = [1, 2, 1, 2].indexOf(2, 2);
  console.log("n2", n2); // => 1
})();
/* _.lastIndexOf(array, value, [fromIndex=array.length-1])
 * This method is like _.indexOf except that it iterates over elements of array from right to left.
 */
(function() {
  // lodash
  var l1 = _.lastIndexOf([1, 2, 1, 2], 2);
  console.log("l1", l1); // => 3

  var l2 = _.lastIndexOf([1, 2, 1, 2], 2, 2);
  console.log("l2", l2); // => 1

  // native
  var n1 = [1, 2, 1, 2].lastIndexOf(2);
  console.log("n1", n1); // => 3

  var n2 = [1, 2, 1, 2].lastIndexOf(2, 2);
  console.log("n2", n2); // => 1
})();
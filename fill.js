/* _.fill(array, value, [start=0], [end=array.length])
 * Fills elements of array with value from start up to, but not including, end.
 * Note: This method mutates array.
 */
(function() {
  // lodash
  var l1 = _.fill( [0, 1, 2, 3], "*" );
  console.log("l1", l1); // => ["*", "*", "*", "*"]

  var l2 = _.fill([0, 1, 2, 3], "*", 1, 3 );
  console.log("l2", l2); // => [0, "*", "*", 3]

  // native
  var n1 = [0, 1, 2, 3].fill("*");
  console.log("n1", n1); // => ["*", "*", "*", "*"]

  var n2 = [0, 1, 2, 3].fill("*", 1, 3);
  console.log("n2", n2); // => [0, "*", "*", 3]
})();


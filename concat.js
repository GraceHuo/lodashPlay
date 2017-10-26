/* _.concat(array, [values])
 * Creates a new array concatenating array with any additional arrays and/or values.
 */
(function() {
  var arr = [1];

  // lodash
  var l1 = _.concat(arr, 2, [3], [[4]]);
  console.log("l1", l1); // => [1, 2, 3, [4]]

  // native
  var n1 = arr.concat( 2, [3], [[4]] );
  console.log( "n1", n1 ); // => [1, 2, 3, [4]]

})();


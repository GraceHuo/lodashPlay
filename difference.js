/* _.difference(array, [values])
 * Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.
 * Note: Unlike _.pullAll, this method returns a new array.
 */
(function() {
  var arrA = [2, 1];
  var arrB = [2, 3];

  // lodash
  var l1 = _.difference( arrA, arrB );
  console.log( "l1", l1 ); // => [1]

  // native
  function difference( arr1, arr2 ) {
    return arr1.filter(v => !arr2.includes(v));
  }

  var n1 = difference( arrA, arrB );
  console.log( "n1", n1 ); // => [1]

})();


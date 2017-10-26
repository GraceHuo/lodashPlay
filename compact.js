/* _.compact(array)
 * Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
 */
(function() {
  var arr = [0, 1, false, 2, '', 3];

  // lodash
  var l1 = _.compact( arr );
  console.log( "l1", l1 ); // => [1, 2, 3]

  // native
  var n1 = arr.filter(v => !!v); // => [1, 2, 3]
  console.log( "n1", n1 );


})();


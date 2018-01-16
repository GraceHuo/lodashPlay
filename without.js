/* Creates an array excluding all given values using SameValueZero for equality comparisons.
 */
(function() {
  // lodash
  var l1 = _.without([2, 1, 2, 3], 1, 2);
  console.log("l1", l1); // => [3]

  // native
  var n1 = [2, 1, 2, 3].filter(x => x!==1 && x!==2);
  console.log("n1", n1); // => [3]

})();
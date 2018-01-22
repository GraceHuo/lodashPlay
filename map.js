/* Creates an array of values by running each element in collection thru iteratee.
 */
(function() {

  function square(n) {
    return n * n;
  }

  // lodash
  var l1 = _.map([4, 8], square);
  console.log("l1", l1); // => [16, 64]

  // native
  var n1 = [4, 8].map(square);
  console.log("n1", n1); // => [16, 64]

})();
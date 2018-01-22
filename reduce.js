/* Reduces collection to a value which is the accumulated result of running each element in collection thru iteratee
 */
(function() {

  // lodash
  var l1 = _.reduce([1, 2], function(sum, n) {
    return sum + n;
  }, 0);
  console.log("l1", l1); // => 3

  // native
  var n1 = [1, 2].reduce(function(sum, n) {
    return sum + n;
  }, 0);
  console.log("n1", n1); // => 3

})();
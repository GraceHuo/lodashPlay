/* Checks if value is NaN
 */
(function() {
  // lodash
  var l1 = _.isNaN(NaN);
  console.log("l1", l1); // => true

  // native
  var n1 = Number.isNaN(NaN);
  console.log("n1", n1); // => true
})();
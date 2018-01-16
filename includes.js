/* Checks if value is in collection.
 */
(function() {
  // lodash
  var l1 = _.includes([1, 2, 3], 1);
  console.log("l1", l1); // => true

  // native
  var n1 = [1, 2, 3].includes(1);
  console.log("n1", n1); // => true

  var n2 = [1, 2, 3].indexOf(1) !== -1;
  console.log("n2", n2); // => true

})();
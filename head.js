/* Gets the first element of array.
 */
(function() {
  // lodash
  var l1 = _.head([1, 2, 3]);
  console.log("l1", l1); // => 1

  // native
  const [head, ...tail] = [1, 2, 3];
  console.log("n1", head); // => 1
})();
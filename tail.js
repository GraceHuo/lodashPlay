/* Gets all but the first element of array.
 */
(function() {
  // lodash
  var l1 = _.tail([1, 2, 3]);
  console.log("l1", l1); // => [2,3]

  // native
  const [head, ...tail] = [1, 2, 3];
  console.log("n1", tail); // => [2,3]
})();
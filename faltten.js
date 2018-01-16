/* Flattens array a single level deep.
 */
(function() {
  // lodash
  var l1 = _.flatten([1, [2, [3, [4]], 5]]);
  console.log("l1", l1); // => [1, 2, [3, [4]], 5]

  // native
  var n1 = [1, [2, [3, [4]], 5]].reduce((a,b) => a.concat(b), []);
  console.log("n1", n1); // => [1, 2, [3, [4]], 5]
})();
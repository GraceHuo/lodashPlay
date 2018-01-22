/* Flattens array a single level deep.
 */
(function() {
  // lodash
  var l1 = _.flattenDeep([1, [2, [3, [4]], 5]]);
  console.log("l1", l1); // => [1, 2, 3, 4, 5]

  // native
  function flattenDeep ( input ) {
    if (Array.isArray(input)) {
      return input.reduce((a, b) => flattenDeep(a).concat(flattenDeep(b)), []);
    }
    else {
      return [input];
    }
  }
  var n1 = flattenDeep([1, [2, [3, [4]], 5]]);
  console.log("n1", n1); // => [1, 2, 3, 4, 5]


  const flattenDeep2 = (arr) => Array.isArray(arr)
    ? arr.reduce( (a, b) => [...flattenDeep(a), ...flattenDeep(b)] , []) : [arr]

  var n2 = flattenDeep2([1, [2, [3, [4]], 5]]);
  console.log("n2", n2); // => [1, 2, 3, 4, 5]
})();
/* Gets the size of collection by returning its length for array-like values or the number of own enumerable string keyed properties for objects.
 */
(function() {
  // lodash
  var l1 = _.size({ 'a': 1, 'b': 2 });
  console.log("l1", l1); // => 2

  // native
  var n1 = Object.keys({ 'a': 1, 'b': 2 }).length
  console.log("n1", n1); // => 2
})();
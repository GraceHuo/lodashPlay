/* Creates a duplicate-free version of an array, using SameValueZero for equality comparisons, in which only the first occurrence of each element is kept.
 */
(function() {
  // lodash
  var l1 = _.uniq(['a', 1, 'a', 2, '1']);
  console.log("l1", l1); // => ['a', 1, 2, '1']

  // native
  var n1 = ['a', 1, 'a', 2, '1'].filter((v, i, a) => a.indexOf(v) === i);
  console.log("n1", n1); // => ['a', 1, 2, '1']

  var n2 = [...new Set(['a', 1, 'a', 2, '1'])]
  console.log("n2", n2); // => ['a', 1, 2, '1']
})();
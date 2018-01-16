/* This method is like _.min except that it accepts iteratee which is invoked for each element in array to generate the criterion by which the value is ranked.
 */
(function() {
  // lodash
  var l1 = _.minBy([{ 'n': 1 }, { 'n': 2 }], function(o) { return o.n; });
  console.log("l1", l1); // => { 'n': 1 }

  // native
  var n1 = [{ 'n': 1 }, { 'n': 2 }].reduce(function(a, b) { return a.n < b.n ? a : b }, {});
  console.log("n1", n1); // => { 'n': 1 }

  var n2 = [{ 'n': 1 }, { 'n': 2 }].reduce((a, b) => a.n < b.n ? a : b, {});
  console.log("n2", n2); // => { 'n': 1 }

})();
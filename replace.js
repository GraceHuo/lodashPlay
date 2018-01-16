/* Replaces matches for pattern in string with replacement.
 */
(function() {
  // lodash
  var l1 = _.replace('Hi Fred', 'Fred', 'Barney');
  console.log("l1", l1); // => 'Hi Barney'

  // native
  var n1 = 'Hi Fred'.replace('Fred', 'Barney');
  console.log("n1", n1); // => 'Hi Barney'
})();
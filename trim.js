/* Removes leading and trailing whitespace or specified characters from string.
 */
(function() {
  // lodash
  var l1 = _.trim('  abc  ');
  console.log("l1", l1); // => 'abc'

  // native
  var n1 = '  abc  '.trim()
  console.log("n1", n1); // => 'abc'
})();
/* Converts all elements in array into a string separated by separator.
 */
(function() {
  // lodash
  var l1 = _.join(['a', 'b', 'c'], '~');
  console.log("l1", l1); // => 'a~b~c'

  // native
  var n1 = ['a', 'b', 'c'].join('~');
  console.log("n1", n1); // => 'a~b~c'
})();
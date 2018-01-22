/* Converts string, as a whole, to upper case just like String#toUpperCase
 */
(function() {

  // lodash
  var l1 = _.toUpper('--Foo-Bar--');
  console.log("l1", l1); // => '--FOO-BAR--'

  // native
  var n1 = '--Foo-Bar--'.toUpperCase();
  console.log("n1", n1); // => '--FOO-BAR--'
})();
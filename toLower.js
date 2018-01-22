/* Converts string, as a whole, to lower case just like String#toLowerCase.
 */
(function() {

  // lodash
  var l1 = _.toLower('--Foo-Bar--');
  console.log("l1", l1); // => '--foo-bar--'

  // native
  var n1 = '--Foo-Bar--'.toLowerCase();
  console.log("n1", n1); // => '--foo-bar--'
})();
/* Repeats the given string n times.
 */
(function() {

  // lodash
  var l1 = _.repeat('*', 3);
  console.log("l1", l1); // => '***'

  // native
  var n1 = '*'.repeat(3);
  console.log("n1", n1); // => '***'
})();
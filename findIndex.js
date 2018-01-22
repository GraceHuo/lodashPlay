/* This method is like _.find except that it returns the index of the first element predicate returns truthy for instead of the element itself.
 */
(function() {
  // lodash
  var users = [
    { 'user': 'barney',  'age': 36, 'active': true },
    { 'user': 'fred',    'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1,  'active': true }
  ];

  var l1 = _.findIndex(users, function (o) { return o.age >= 40; });
  console.log("l1", l1); // => 1

  // native
  var n1 = users.findIndex(function(o) { return o.age >= 40; });
  console.log("n1", n1); // => 1

})();
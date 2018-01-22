/* Iterates over elements of collection, returning an array of all elements predicate returns truthy for.
 */
(function() {
  var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred',   'age': 40, 'active': false }
  ];

  // lodash
  var l1 = _.filter(users, function(o) { return !o.active; });
  console.log("l1", l1); // => [{ 'user': 'fred',   'age': 40, 'active': false }]

  // native
  var n1 = users.filter(function(o) { return !o.active; });
  console.log("n1", n1); // => [{ 'user': 'fred',   'age': 40, 'active': false }]

})();
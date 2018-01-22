/* Iterates over elements of collection, returning the first element predicate returns truthy for.
 */
(function() {
  // lodash
  var users = [
    { 'user': 'barney',  'age': 36, 'active': true },
    { 'user': 'fred',    'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1,  'active': true }
  ];

  var l1 = _.find(users, function(o) { return o.age < 40; });
  console.log("l1", l1); // => {user: "barney", age: 36, active: true}

  // native
  var n1 = users.find(function(o) { return o.age < 40; });
  console.log("n1", n1); // => {user: "barney", age: 36, active: true}

})();
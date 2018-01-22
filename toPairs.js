/* Creates an array of own enumerable string keyed-value pairs for object which can be consumed by _.fromPairs.
 */
(function() {

  function Foo() {
    this.a = 1;
    this.b = 2;
  }

  Foo.prototype.c = 3;

  // lodash
  var l1 = _.toPairs(new Foo);
  console.log("l1", l1); // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)

  // native
  var n1 = Object.entries(new Foo);
  console.log("n1", n1); // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
})();
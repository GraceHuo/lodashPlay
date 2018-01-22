/* Retrieves all the given object's own enumerable property values.
 */
(function() {

  function Foo() {
    this.a = 1;
    this.b = 2;
  }

  Foo.prototype.c = 3;

  // lodash
  var l1 = _.values(new Foo);
  console.log("l1", l1); // => [1, 2] (iteration order is not guaranteed)

  // native
  var n1 = Object.values(new Foo);
  console.log("n1", n1); // => [1, 2] (iteration order is not guaranteed)
})();
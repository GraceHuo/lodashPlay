/* Creates an array of the own enumerable property names of object.
 */
(function() {

  function Foo() {
    this.a = 1;
    this.b = 2;
  }

  Foo.prototype.c = 3;

  // lodash
  var l1 = _.keys(new Foo);
  console.log("l1", l1); // => ['a', 'b'] (iteration order is not guaranteed)

  // native
  var n1 = Object.keys(new Foo);
  console.log("n1", n1); // => ['a', 'b'] (iteration order is not guaranteed)
})();
/* Assigns own enumerable string keyed properties of source objects to the destination object.
 */
(function() {

  function Foo() {
    this.a = 1;
  }

  function Bar() {
    this.c = 3;
  }

  Foo.prototype.b = 2;
  Bar.prototype.d = 4;

  // lodash
  var l1 = _.assign({ 'a': 0 }, new Foo, new Bar);
  console.log("l1", l1); // => { 'a': 1, 'c': 3 }

  // native
  var n1 = Object.assign({ 'a': 0 }, new Foo, new Bar);
  console.log("n1", n1); // => { 'a': 1, 'c': 3 }
})();
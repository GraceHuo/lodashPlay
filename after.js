/* The opposite of _.before; this method creates a function that invokes func once it's called n or more times.
 */
(function() {

  var arr = ['one', 'two'];

  // lodash
  var done = _.after(arr.length, function() {
    console.log('lodash done!');
  });

  _.forEach(arr, function(item) {
    console.log( 'item', item );
    done();
  });

  // native
  arr.forEach(function(item, index) {
    console.log( 'item', item );
    if (index === arr.length - 1) {
      console.log('naive done!');
    }
  })
})();
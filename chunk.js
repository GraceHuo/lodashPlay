/* _.chunk(array, [size=1])
 * Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
 */
(function() {
  var arr = ['a', 'b', 'c', 'd'];

  // lodash
  var l1 = _.chunk( arr, 3 );
  console.log( "l1", l1 ); // => [['a', 'b', 'c'], ['d']]

  // native
  function chunk( arr, size ) {
    var res = [];
    var len = arr === null ? 0 : arr.length;
    if ( size <= 0 || !len ) {
      return res;
    }

    size    = size || 1;
    var index = 0;
    while ( index < len ) {
      var subArr = arr.slice( index, index + size );
      res.push( subArr );
      index += size;
    }
    return res;
  }

  var n1 = chunk( arr, 3 );
  console.log( "n1", n1 ); // => [['a', 'b', 'c'], ['d']]

  // a smarter way
  function chunk1(arr, size) {
    return arr.slice(0, (arr.length + size - 1)/size | 0)
      .map((c, i) => arr.slice(size * i, size * i + size));
  }

})();


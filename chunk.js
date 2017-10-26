/* _.chunk(array, [size=1])
 * Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
 */
(function() {
  var arr = ['a', 'b', 'c', 'd'];

  // lodash
  var lodashAns1 = _.chunk( arr, 2 );
  console.log( "lodashAns1", lodashAns1 ); // => [['a', 'b'], ['c', 'd']]

  var lodashAns2 = _.chunk( arr, 3 );
  console.log( "lodashAns2", lodashAns2 ); // => [['a', 'b', 'c'], ['d']]

  var lodashAns3 = _.chunk( arr, 5 );
  console.log( "lodashAns3", lodashAns3 ); // => [['a', 'b', 'c', 'd']]

  var lodashAns4 = _.chunk( arr, 0 );
  console.log( "lodashAns4", lodashAns4 ); // => []

  var lodashAns5 = _.chunk( arr, 0 );
  console.log( "lodashAns5", lodashAns5 ); // => []

  var lodashAns6 = _.chunk( null, 5 );
  console.log( "lodashAns6", lodashAns6 ); // => []

  var lodashAns7 = _.chunk( arr );
  console.log( "lodashAns7", lodashAns7 ); // => [['a'], ['b'], ['c'], ['d']]

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

  var nativeAns1 = chunk( arr, 2 );
  console.log( "nativeAns1", nativeAns1 );

  var nativeAns2 = chunk( arr, 3 );
  console.log( "nativeAns2", nativeAns2 );

  var nativeAns3 = chunk( arr, 5 );
  console.log( "nativeAns3", nativeAns3 );

  var nativeAns4 = chunk( arr, 0 );
  console.log( "nativeAns4", nativeAns4 );

  var nativeAns5 = chunk( arr, -1 );
  console.log( "nativeAns5", nativeAns5 );

  var nativeAns6 = chunk( null, 5 );
  console.log( "nativeAns6", nativeAns6 );

  var nativeAns7 = chunk( arr );
  console.log( "nativeAns7", nativeAns7 );

  // lodash implementation
  // function chunk( array, size ) {
  //   size         = Math.max( size, 0 )
  //   const length = array == null ? 0 : array.length
  //   if ( !length || size < 1 ) {
  //     return []
  //   }
  //   let index    = 0
  //   let resIndex = 0
  //   const result = new Array( Math.ceil( length / size ) )
  //
  //   while ( index < length ) {
  //     result[resIndex++] = slice( array, index, (index += size) )
  //   }
  //   return result
  // }

})();


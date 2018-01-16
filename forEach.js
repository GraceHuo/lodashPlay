/* Iterates over elements of collection and invokes iteratee for each element.
 */
(function() {
  // lodash
  _.forEach( [1, 2], function( value ) {
    console.log( value ); // => Logs `1` then `2`
  } );

  _.forEach( { 'a': 1, 'b': 2 }, function( value, key ) {
    console.log( key ); // => Logs 'a' then 'b' (iteration order is not guaranteed)
    console.log( value ); // => Logs 1 then 2 (iteration order is not guaranteed)
  } );

  // native
  [1, 2].forEach( function( value ) {
    console.log( value ); // => Logs `1` then `2`
  } );

  var obj = { 'a': 1, 'b': 2 };
  for ( var key in obj ) {
    if ( obj.hasOwnProperty( key ) ) {
      console.log( key );
      console.log( obj[key] );
    }
  }

})();
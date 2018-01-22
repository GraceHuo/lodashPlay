/* Creates a compiled template function that can interpolate data properties in "interpolate" delimiters, HTML-escape interpolated data properties in "escape" delimiters, and execute JavaScript in "evaluate" delimiters.
 */
(function() {

  // lodash
  var compiled = _.template( 'hello <%= user %>!' );
  var l1       = compiled( { 'user': 'fred' } );
  console.log( "l1", l1 ); // => 'hello fred!'

  // native
  // Note: this is an alternative implementation. Native template literals not escape html.
  function templateLiterals( input ) {
    return `hello ${input.user}!`;
  }

  var n1 = templateLiterals( { 'user': 'fred' } )
  console.log( "n1", n1 ); // => 'hello fred!'
})();
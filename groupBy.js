/* Creates an object composed of keys generated from the results of running each element of collection thru iteratee.
 */
(function() {

  // lodash
  var l1 = _.groupBy([6.1, 4.2, 6.3], Math.floor);
  console.log("l1", l1); // => { '4': [4.2], '6': [6.1, 6.3] }

  // native
  var groupBy = function( arr, f ) {
    return arr.reduce(function(res, item) {
      (res[f(item)] = res[f(item)] || []).push(item);
      return res;
    },{});
  };
  var n1 = groupBy([6.1, 4.2, 6.3], Math.floor);
  console.log("n1", n1); // => { '4': [4.2], '6': [6.1, 6.3] }

})();
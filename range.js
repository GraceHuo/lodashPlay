/* Creates an array of numbers (positive and/or negative) progressing from start up to, but not including, end. A step of -1 is used if a negative start is specified without an end or step.
 */
(function() {
  // lodash
  var l1 = _.range(4);
  console.log("l1", l1); // => [0,1,2,3]

  var l2 = _.range(-4);
  console.log("l2", l2); // => [0,-1,-2,-3]

  var l3 = _.range(1,5);
  console.log("l3", l3); // => [1,2,3,4]

  var l4 = _.range(0,20,5);
  console.log("l4", l4); // => [0,5,10,15]

  // native
  var n1 = Array.from({length:4}, (x,i) => i);
  console.log("n1", n1);

  var n2 = Array.from({length:4}, (x,i) => -i);
  console.log("n2", n2);

  var n3 = Array.from({length:4}, (x,i) => i+1);
  console.log("n3", n3);

  var n4 = Array.from({length:4}, (x,i) => i*5);
  console.log("n4", n4);

})();
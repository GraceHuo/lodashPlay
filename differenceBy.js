/* _.differenceBy(array, [values], [iteratee=_.identity])
 * This method is like _.difference except that it accepts iteratee which is invoked for each element of array and values to generate the criterion by which they're compared. The order and references of result values are determined by the first array. * Note: Unlike _.pullAll, this method returns a new array.
 * Note: Unlike _.pullAllBy, this method returns a new array.
 */
(function() {
  var arrA = [2.1, 1.2];
  var arrB = [2.3, 3.4];
  var arrC = [{ 'x': 2 }, { 'x': 1 }];
  var arrD = [{ 'x': 1 }];

  // lodash
  var l1 = _.differenceBy( arrA, arrB, Math.floor );
  console.log("l1", l1); // => [1.2]
  var l2 = _.differenceBy(arrC, arrD, 'x');
  console.log("l2", l2); // => [{ 'x': 2 }]

  // native
  var n1 = arrA.filter(a => !arrB.map(Math.floor).includes(Math.floor(a)));
  console.log("n1", n1); // => [1.2]

  var n2 = arrC.filter(c => !arrD.map(d => d.x).includes(c.x));
  console.log("n2", n2); // => [{ 'x': 2 }]
})();


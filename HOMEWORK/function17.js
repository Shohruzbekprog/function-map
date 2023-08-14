function getTruthyFalsy(array) {
  var truthyArray = [];
  var falsyArray = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      truthyArray.push(array[i]);
    } else {
      falsyArray.push(array[i]);
    }
  }

  return {
    truthy: truthyArray,
    falsy: falsyArray
  };
}
var mixedArray = [false, 1, 10, "", null, "abdulaziz", 1.13, 0];

var result = getTruthyFalsy(mixedArray);
console.log(result.truthy);
console.log(result.falsy);

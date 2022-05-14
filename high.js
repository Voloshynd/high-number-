function findMaxNumber(a, b, c, d) {
  if (
    typeof a !== "number" ||
    typeof b !== "number" ||
    typeof c !== "number" ||
    typeof d !== "number"
  ) {
    console.log("Nie wszystkie dane sa liczbami");
    return 0;
  }
  let arr = Array.of(a, b, c, d);
  let maxNum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (maxNum <= arr[i]) {
      maxNum = arr[i];
    }
  }
  console.log(maxNum);
}

findMaxNumber(4, 5, 11, 32);


// function findMaxNumber(a, b ,c, d) {
 
//     if (typeof(a) !== 'number' ||
//         typeof(b) !== 'number' ||
//         typeof(c) !== 'number' ||
//         typeof(d) !== 'number') {
//         return 0;
//     } else {
//         return Math.max(a, b ,c, d);
//     }
// }

// findMaxNumber(1, 5, 6.6, 10.5);
// findMaxNumber(1, 5, '6', '10');
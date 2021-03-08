var arr = [-1, 2, 3, 4, 5, 6, 8, 9, 9, 9, 9, 9, 9, -9];
// 1. chunk

var chunkk = function (arr, range, length) {
  if (arr === null) return "cannot operate on null";
  let len = parseInt(length / range);
  if (length % range > 0) len++;
  let arr1 = new Array(len);
  let j = 0;
  let k = 0;
  let arr2 = null;
  for (let i = 0; i < length; i++) {
    if (i === 0 || j === range) {
      if (length - i < range) range = length - i;
      arr2 = new Array(range);
      j = 0;
    }
    arr2[j++] = arr[i];
    if (j === range || i === length - 1) {
      arr1[k++] = arr2;
    }
  }
  return arr1;
};

var arr1 = chunkk(arr, 3, 14);
console.log("1. CHUNK: Split into Sub-Arrays of 3 ");
console.log(arr);
console.log(arr1);

// 2. reduce

var reduce = function (arr, length, func) {
  if (arr === null) return "cannot operate on null";
  let sum = 0;
  let min;
  for (let i = 0; i < length; i++) {
    if (i === 0) min = func(arr[i], arr[i]);
    else min = func(min, arr[i]);
  }
  return min;
};

var arr2 = reduce(arr, 14, (a, b) => {
  if (a < b) return a;
  return b;
});
console.log("\n\n2. REDUCE: return the SMALLEST Element");
console.log(arr);
console.log(arr2);

// 3. filter

var filter = function (arr, length, func) {
  if (arr === null) return "cannot operate on null";
  let dummy = new Array(length);
  let count = 0;
  let j = 0;
  for (let i = 0; i < length; i++) {
    if (func(arr[i])) {
      dummy[j++] = arr[i];
      count++;
    }
  }
  return chunkk(dummy, count, length);
};
var arr3 = filter(arr, 14, (a) => {
  if (a % 3 === 0) return true;
  return false;
});
arr3 = arr3[0];
console.log("\n\n3. FILTER: Return Sub-Array of MULTIPLES OF 3");
console.log(arr);
console.log(arr3);

// 4. find

var find = function (arr, length, func) {
  if (arr === null) return "cannot operate on null";
  for (let i = 0; i < length; i++) {
    if (func(arr[i])) {
      return arr[i];
    }
  }
};
var arr4 = find(arr, 14, (a) => {
  if (a === -9) return true;
  return false;
});
console.log("\n\n4. FIND: To find -9");
console.log(arr);
console.log(arr4);

// 5. sum

var sum = function (arr, length) {
  if (arr === null) return "cannot operate on null";
  let sum = 0;
  for (let i = 0; i < length; i++) {
    sum = sum + arr[i];
  }
  return sum;
};
var arr5 = sum(arr, 14);
console.log("\n\n5. SUM: Total Sum");
console.log(arr);
console.log(arr5);

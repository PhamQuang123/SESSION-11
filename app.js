// Ex-1

/*
let arr1 = [2, 4, 6, 5, 8, 0];
let sum = arr1[0];
for (let i = 1; i < arr1.length; i++) {
  sum += arr1[i];
}
console.log(`Tổng các phần tử trong mảng là: ${sum}`);

// Ex-2
let arr2 = [2, 4, 6, 5, 8, 0];
let max = arr2[0];
for (let j = 1; j < arr2.length; j++) {
  if (max < arr2[j]) {
    max = arr2[j];
  }
}
console.log(`Số lớn nhất là: ${max}`);

// Ex-3
let arr3 = [2, 4, 6, 5, 8, 0, 4, -1, 9, -5];
let min = arr3[0];
for (let x = 1; x < arr3.length; x++) {
  if (min > arr3[x]) {
    min = arr3[x];
  }
}
console.log(`Số nhỏ nhất là: ${min}`);

// Ex-4
let arr4 = [2, 4, 6, 5, 8, 0, 4, -1, 9, -5];

// cách-1
let check = false;
let number1 = +prompt("Nhập số cần check:");
for (let y = 0; y < arr4.length; y++) {
  if (number1 == arr4[y]) {
    check = true;
    break;
  }
}
if (check) {
  console.log("true");
} else {
  console.log("false");
}
// cách-2
let number2 = arr4.includes(+prompt("Nhập số cần check:"));
if (number2) {
  console.log("true");
} else {
  console.log("false");
}

// Ex-5
let arr5 = [1, 2, 3, 4, 5];
let revArr5 = arr5.reverse();
console.log(revArr5);

*/
// Ex-6

let arr6 = [2, 4, 6, 5, 8, 0, 4, 6, 9, 12, 2];
let itemArr = [];
for (let i = 0; i < arr6.length; i++) {
  if (arr6[i] % 2 == 0) {
    if (itemArr.includes(arr6[i])) {
      continue;
    } else {
      itemArr.push(arr6[i]);
    }
  }
}
console.log(itemArr);
/*
//  Ex-7
let arr7 = [1, 6, 8, 3, 9, 11, 5, 1, 9, 3, 2, 9, 5, 5];
let number7 = +prompt("nhập số:");
let times = 0;
for (let j = 0; j < arr7.length; j++) {
  if (number7 == arr7[j]) {
    times += 1;
  }
}
console.log(times);
*/
//debugger;
// Ex-8
let arr8 = [4, 2, 9, 5, 1];
let childArr1 = arr8;
let childArr2 = [];
let min = arr8[0];
let times8 = 0;
console.log(arr8);

for (let i = 0; i <= childArr1.length; i++) {
  for (let x = 0; x < arr8.length; x++) {
    if (min > arr8[x]) {
      min = arr8[x];
      times8 = x;
    }
  }
  childArr2.push(min);
  arr8.splice(times8, 1);
  childArr1 = arr8;
  min = arr8[0];
  times8 = 0;
  i = 0;
}

console.log(childArr2);

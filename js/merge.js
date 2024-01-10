let arr = [3, 5, 6, 1, 2, 4];
let si = 0;
let ei = arr.length - 1;

function divide(arr, si, ei) {
  if (arr.length < 2) {
    return;
  }

  let mid = parseInt((si + ei) / 2);

  //left array
  let leftArr = [];
  for (let i = 0; i <= mid; i++) {
    leftArr.push(arr[i]);
  }
  let lsi = 0;
  let lei = leftArr.length - 1;
  console.log(leftArr, "left");

  //right array
  let rightArr = [];

  for (let j = mid + 1; j <= ei; j++) {
    rightArr.push(arr[j]);
  }
  let rsi = 0;
  let rei = rightArr.length - 1;
  console.log(rightArr, "right");

  divide(leftArr, lsi, lei);
  divide(rightArr, rsi, rei);
  merge(leftArr, rightArr);
}

function merge(left, right) {
  let i = 0;
  let j = 0;
  let newArr = [];
  while (i <= left.length - 1 && j <= right.length - 1) {
    if (left[i] < right[j]) {
      newArr.push(left[i]);
      i++;
    } else {
      newArr.push(right[j]);
      j++;
    }
  }

  console.log(newArr);
}

divide(arr, si, ei);

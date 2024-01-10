let arr = [64, 25, 1, 22, 3];
let min;

for (let i = 0; i < arr.length; i++) {
  min = i;

  for (let j = i + 1; j < arr.length; j++) {
    if (arr[min] < arr[j]) {
    }
    console.log(arr[j],"jjj");
  }
}

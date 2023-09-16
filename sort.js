var unsortedNumbers = [ 42, 17, 24, -3, 55, 11, 2 ];
		     // [ 17, 24, -3, 42, 11, 2, 55 ]
		     // [ 17, -3, 24, 11, 2, 42, 55 ]
		     // [ -3, 17, 11, 2, 24, 42, 55 ]
		     // [ -3, 11, 2, 17, 24, 42, 55 ]
		     // [ -3, 2, 11, 17, 24, 42, 55 ]

function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 1; j < array.length - i; j++) {
      if (array[j - 1] > array[j]) {
	let tmp = array[j - 1];
	array[j - 1] = array[j];
	array[j] = tmp;
      }
    }
  }
}

// O(1)
// O(n) (linear search)
// O(log2N) (binary search)
// O(n²) (bubble sort)

console.log("before bubbleSort()", unsortedNumbers);
bubbleSort(unsortedNumbers);
console.log("after bubbleSort()", unsortedNumbers);

function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let minJ = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minJ]) {
        minJ = j;
      } 
    } 
    if (minJ != i) {
      let tmp = array[i];
      array[i] = array[minJ];
      array[minJ] = tmp;
    }
  }
}

var unsortedNumbers = [ 42, 17, 24, -3, 55, 11, 2 ];

console.log("before selectionSort()", unsortedNumbers);
selectionSort(unsortedNumbers);
console.log("after selectionSort()", unsortedNumbers);

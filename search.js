var names = ["Roman", "Artyom", "Veronica", "Elena", "Oleg", "John"];

function linearSearch(array, value) {
  counter = 0;
  for (let i = 0; i < array.length; i++) {
    counter++;
    if (array[i] == value) {
      return true;
    }
  }
  return false;
}

// console.log(linearSearch(names, "Roman")); // O(1)
// console.log(linearSearch(names, "Oleg"));
console.log(linearSearch(names, "John"));  // O(n)

// console.log(linearSearch(names, "Katya"));

//                  start               middlestart                   end
// var sortedNames = ["Artyom", "Elena", "John", "Oleg", "Roman", "Veronica"];
var sortedNumbers = Array.from({ length: 100_000 }, (_, i) => i + 1);

var counter = 0;

function binarySearch(array, value) {
  counter = 0;
  var start = 0;
  var end = array.length - 1;

  while (start <= end) {
    counter++;
    var middle = Math.floor((end + start) / 2)

    if (array[middle] == value) {
      return true;
    } else if (array[middle] < value) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return false;
}

// console.log(binarySearch(sortedNames, "Roman"));
// console.log(binarySearch(sortedNames, "Elena"));
// console.log(binarySearch(sortedNames, "Artyom"));

console.log(binarySearch(sortedNumbers, 77000));
console.log(counter);
console.log(linearSearch(sortedNumbers, 77000)); // O(log(n))
console.log(counter);

function longestCommonPrefix(strings: string[]): string {
  let firstWord = strings[0];
  let commonPrefix = "";

  for (let i = 0; i < firstWord.length; i++) {
    for (let j = 1; j < strings.length; j++) {
      let otherWord = strings[j];

      if (firstWord[i] != otherWord[i]) {
        return commonPrefix;
      }
    }
    commonPrefix += firstWord[i];
  }

  return commonPrefix;
}

function longestCommonPrefix2(strs) {
  if (strs.length === 0) {
    return ""; // If the array is empty, there's no common prefix
  }

  // Sort the array to ensure that the shortest and longest strings are at the ends
  strs.sort();

  const firstStr = strs[0];
  const lastStr = strs[strs.length - 1];

  let commonPrefix = "";
  for (let i = 0; i < firstStr.length; i++) {
    if (firstStr[i] === lastStr[i]) {
      commonPrefix += firstStr[i];
    } else {
      break; // Stop when a character mismatch is found
    }
  }

  return commonPrefix;
}

console.log(longestCommonPrefix2(["flower", "flow", "flight"]));
console.log(longestCommonPrefix2(["dog", "racecar", "car"]));

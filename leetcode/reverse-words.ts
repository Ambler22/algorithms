function reverseWords(s: string): string {
  const words = s.split(" ");
  let reversedWords = [];

  for (let word of words) {
    let reversedWord = word.split("").reverse().join("");
    reversedWords.push(reversedWord);
  }

  return reversedWords.join(" ");
}

console.log(reverseWords("Let's take LeetCode contest"));
console.log(reverseWords("God Ding"));

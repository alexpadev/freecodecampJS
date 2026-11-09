function findLongestWordLength(str) {
  const wordSplit = str.split(" ");
  const arr = [];
  for (let word of wordSplit) {      
    const wordLength = word.length;
    arr.push(wordLength);      
  }
  return Math.max(...arr);
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
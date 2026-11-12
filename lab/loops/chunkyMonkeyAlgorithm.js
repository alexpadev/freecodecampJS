function chunkArrayInGroups(arr,  num) {
  const newArray = [];
  for (let i = 0; i < arr.length; i += num) {
    const chunk = arr.slice(i, i + num);
    newArray.push(chunk);
  }
  return newArray;
}

const functionCall = chunkArrayInGroups(["a", "b", "c", "d"], 2);
console.log(functionCall);
function mutation(arr) {
  const splitSecond = arr[1].toLowerCase().split("");
  let count = 0;
  for (let char of splitSecond) {
    if (arr[0].toLowerCase().includes(char)) {
      count++;
    }
  }
  if (count === splitSecond.length) {
    return true;
  } else {
    return false;
  }
}

const functionCall = mutation(["Mary", "Aarmy"]);
console.log(functionCall);   
const anonymous = (arr) => {
  const output = []
  for (let i = 0; i < arr.length; i++) {
    let dup = false
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        dup = true
      }
    }
    if (dup) {
      continue
    } else {
      output.push(arr[i])
    }
  }
  return output;
}

const findHighestMudWall = (positions, heights) => {
  let maxHeight = 0;

  for (let i = 0; i < positions.length - 1; i++) {
    let crrPos = positions[i]
    let nextPos = positions[i + 1]
    let gapLength = (nextPos - crrPos) - 1

    let crrHeight = heights[i]
    let nextHeight = heights[i + 1]
    let minHeight = Math.min(crrHeight, nextHeight)
    let heightsDiff = Math.abs(crrHeight - nextHeight)

    let gapMaxHeight;
    if (gapLength <= heightsDiff) {
      gapMaxHeight = minHeight + gapLength
    } else {
      gapMaxHeight = crrHeight + Math.ceil(gapLength / 2)
    }

    if (gapMaxHeight > maxHeight) {
      maxHeight = gapMaxHeight
    }
  }

  return maxHeight
}

console.log(findHighestMudWall([1, 2, 4, 7], [4, 6, 8, 11]))
console.log(findHighestMudWall([1, 3, 7], [4, 3, 3]))

console.log(findHighestMudWall([1, 4, 7], [6, 5, 9]))
console.log(findHighestMudWall([1, 4, 7, 10], [6, 5, 9, 2]))

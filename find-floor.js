function findFloor(arr, val) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let floor = -1;
  
    while (leftIdx <= rightIdx) {
      let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
      let middleVal = arr[middleIdx];
  
      if (middleVal === val) {
        // If the middle value is equal to the target value, it is the floor.
        return middleVal;
      } else if (middleVal < val) {
        // If the middle value is less than the target value, update the floor and search right for potentially larger floors.
        floor = middleVal;
        leftIdx = middleIdx + 1;
      } else {
        // If the middle value is greater than the target value, search left for a smaller floor.
        rightIdx = middleIdx - 1;
      }
    }
  
    return floor;
  }
console.log(findFloor([1,2,8,10,10,12,19], 9)) // 8)
module.exports = findFloor
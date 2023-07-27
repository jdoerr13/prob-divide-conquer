function findRotatedIndex(arr,val) {
    let right = 0;
    let left = arr.length - 1;
  
    while (right <= left) { //REMEMBER WHILE LOOPS KEEP GOING WITHOUT CONDITION- this condition just means there is an array left to search, else return val or -1
      // find the middle value
      let middleIdx = Math.floor((right + left) / 2); //splitting array in half
    //   console.log(middleIdx)
      let middleVal = arr[middleIdx];  //necessary to retreive the value at the middle index of the array!
  
      if (middleVal < val) {
        // middleVal is too small, look at the right half
        right = middleIdx + 1; //then update the leftInx used in finding the next middleInx
      } else if (middleVal > val) {
        // middleVal is too large, look at the left half
        left = middleIdx - 1;
      } else {
        // we found our value!
        return middleIdx;
      }
    }
    
    // left and right pointers crossed, val isn't in arr
    return -1;
  }
// console.log(findRotatedIndex([3,4,1,2],4)) // 1
// console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)) // 2

module.exports = findRotatedIndex
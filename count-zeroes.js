function countZeroes(arr) {
    let left = 0;
    let right = arr.length - 1;
  
    // Perform binary search to find the first occurrence of 0
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] === 1) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    // The number of zeroes will be equal to the number of elements from the first 0 index to the end
    return arr.length - left;
  }
  // console.log(countZeroes([0, 0, 0, 0, 0, 0, 0, 0])); 
module.exports = countZeroes
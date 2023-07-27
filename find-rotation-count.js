function findRotationCount(arr) {
    let left = 0; // Left pointer initialized to the start of the array.
    let right = arr.length - 1; // Right pointer initialized to the end of the array.
  
    while (left <= right) { // While there are elements in the search space.
      if (arr[left] <= arr[right]) {
        // The array is already sorted in increasing order, so it is not rotated.
        return left; // Return the left index as the rotation count (which is 0 in this case).
      }
  
      let mid = Math.floor((left + right) / 2); // Calculate the middle index of the current search space.
      let prev = (mid + arr.length - 1) % arr.length; // Calculate the previous index of 'mid' in a circular manner.
      let next = (mid + 1) % arr.length; // Calculate the next index of 'mid' in a circular manner.
  
      if (arr[mid] <= arr[prev] && arr[mid] <= arr[next]) {
        // Found the minimum element (pivot) in the rotated array.
        return mid; // Return 'mid' as the rotation count, representing the index of the pivot.
      } else if (arr[mid] <= arr[right]) {
        // The minimum element is in the left half of the array.
        right = mid - 1; // Update 'right' to search the left half.
      } else if (arr[mid] >= arr[left]) {
        // The minimum element is in the right half of the array.
        left = mid + 1; // Update 'left' to search the right half.
      }
    }
  
    // If we reach here, the array is not rotated.
    return 0; // Return 0 as the rotation count since the array is not rotated.
  }
// console.log(findRotationCount([7, 9, 11, 12, 5])) // 4
module.exports = findRotationCount
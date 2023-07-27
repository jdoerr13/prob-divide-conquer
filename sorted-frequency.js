function sortedFrequency(arr, num) {
    function findFirstOccurrence(arr, num) {
      let left = 0;
      let right = arr.length - 1;
      let result = -1;
  
      while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === num) {
          result = mid;
          right = mid - 1;
        } else if (arr[mid] < num) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
  
      return result;
    }
  
    function findLastOccurrence(arr, num) {
      let left = 0;
      let right = arr.length - 1;
      let result = -1;
  
      while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === num) {
          result = mid;
          left = mid + 1;
        } else if (arr[mid] < num) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
  
      return result;
    }
  
    const firstIndex = findFirstOccurrence(arr, num);
    const lastIndex = findLastOccurrence(arr, num);
  
    if (firstIndex === -1 || lastIndex === -1) {
      return -1; // The number is not present in the array
    }
  
    return lastIndex - firstIndex + 1; // Calculate the frequency
  }
// console.log(sortedFrequency([1,1,2,2,2,2,3],2)) // 4
// console.log(sortedFrequency([1,1,2,2,2,2,3],4)) // -1
module.exports = sortedFrequency
//Binary Search is more efficient than Linear table as doesnt have to search from the start of the array but split array into two halfs and check if the number is above or bellow, rememeber binary search doesnt work if the data is not sorted first
//1. Binary Search utilises 3 variables, min, med, max
//2. Binary Search utilises while loop to constinosuly search
//3. Binary search has if else statement if the conditon becomes true and exit the code and return a value

class BinarySearch {
    static search(arrays, searchValue) {
        let low = 0; // lowest index
        let high = arrays.length - 1;
        
        while (low <= high) { // fix the condition for the while loop
            let mid = Math.floor((low + high) / 2); // correct the mid calculation
            if (arrays[mid] === searchValue) {
                return mid;
            } else if (arrays[mid] < searchValue) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return -1; // return -1 if the value is not found
    }
}

var scores = [30, 39, 40, 50, 80]; // sorted array
var searchValue = 40;

var position = BinarySearch.search(scores, searchValue);
console.log(searchValue + " position: " + position); // output correct position

searchValue = 90;
position = BinarySearch.search(scores, searchValue);
console.log(searchValue + " position: " + position); // output -1 if not found

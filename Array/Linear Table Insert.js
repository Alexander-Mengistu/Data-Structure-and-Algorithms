//Linear Table Insert
//This algorithm algorithm builds on top of Linear Table Append but isntead of adding element in the end of the array, in this case will be choosing where to insert the element utilising index of the array
//Table Insert sort utilizes almost of all the codes of linear table only difference is will be using if and else statement to insert the element to the array

//1. Create a function
//2. Create a new array named temp array 
//3. create the array with length bigger then the origional array by + 1
//4. copy the original array to temp start of insert sort and then the remaining element to tempary
//5. insert 43 to index 2 to the array
//6. finally assign the tempArray pointer to the origional array

function insert(array, score, insertIndex) {
    var tempArray = new Array(array.length + 1); // Create a new array with space for one extra element
    for (var i = 0; i < array.length; i++) { 
        if (i < insertIndex) {
            tempArray[i] = array[i]; // Copy elements before the insert index
        } else {
            tempArray[i + 1] = array[i]; // Shift elements after the insert index
        }
    }
    tempArray[insertIndex] = score; // Insert the new element at the specified index
    return tempArray;
}

var scores = [38, 78, 33, 43, 99]; // Original array
scores = insert(scores, 43, 2); // Insert 43 at index 2
console.log(scores); // Output: [38, 78, 43, 33, 43, 99]



//Search Linear table, this algorithm will search through array and return the index, or return nothing if not found
function search(array, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] == value) {
            return i; // Return the index of the found value
        }
    }
    return -1; // Return -1 if the value is not found
}

// Declare array and value
var array = new Array(90, 30, 40, 29, 54, 70);
var value = 70;

// Call the search function
var index = search(array, value);

// Check if the value is found and log the appropriate message
if (index >= 0) {
    console.log("Found value " + value + " at index: " + index);
} else {
    console.log("The value " + value + " was not found.");
}

//Bubble sort is not recommendate to be used in opperating algorith but sole purpose is to be used as eductional purpose
//Bubble sort is time consiming algorithm when ran because utilise extreme repativitve iteration by running the algirhtm from left to right utlising if statement for the two selected consecutive items than implementing if statement such as if greater swap if not dont swap, the select the next consecutive items ect till the sorting algorthm has sort all data


class SelectSort {
    static sort(arrays) {
        var len = arrays.length;
        
        // Outer loop: iterate through each element
        for (var i = 0; i < len - 1; i++) {
            var minIndex = i;
            var minValue = arrays[i];
            
            // Inner loop: find the smallest element in the unsorted portion
            for (var j = i + 1; j < len; j++) {
                if (arrays[j] < minValue) {
                    minValue = arrays[j];
                    minIndex = j;
                }
            }
            
            // Swap if a smaller element is found
            if (i !== minIndex) {
                var temp = arrays[i];
                arrays[i] = arrays[minIndex];
                arrays[minIndex] = temp;
            }
        }
    }
}

var arrays = [39, 43, 89, 33, 23];

// Sorting the array
SelectSort.sort(arrays);

// Output the sorted array
for (var i = 0; i < arrays.length; i++) {
    console.log(arrays[i]);
}

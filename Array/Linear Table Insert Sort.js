//Insert sort takes element from the unsorted part of the lsit and inserting it into its corect position
//steps are listed below
/* 
1. Start with the seocnd element as the firsted elemented sorted
2. Compare it to the element before it to the left 
3. Shift any larger element to the right to make space
4. Insert the current element in its correct Position
5. Repeat for all elements until the entire list is sorted
Insertsort opperates same as playing cards in your hands, one hand and card at a time*/

class InsertSort {
    static sort(arrays) {
        for (let i = 1; i < arrays.length; i++) {
            let insertElement = arrays[i];
            let insertPosition = i;

            // Shift elements that are greater than the insertElement
            while (insertPosition > 0 && arrays[insertPosition - 1] > insertElement) {
                arrays[insertPosition] = arrays[insertPosition - 1];
                insertPosition--;
            }
            // Place the element at the correct position
            arrays[insertPosition] = insertElement;
        }
    }
}

let arrays = [30, 89, 32, 99, 53];

InsertSort.sort(arrays);

// Log the sorted array
console.log(arrays.join(", "));

///Linear Table Delete 
//Delete a value of the array value by utlising the index, so far we covered Append & Insert, Delete utlisies many of the same features only difference is instead of adding will be deleing meaning will need to reduce the array length by - 1, negative one

//1. Create a function
//2. Create a new array named temp array 
//3. create the array with length Smaller then the origional array by - 1
//4. will be copying the data before the index and after the index to Temparay once we choose the index value we decide to insert
//5. delete value 44, which is index 3
//6. finally assign the tempArray pointer to the origional array

function remove(array, index) {
    var tempArray = new Array(array.length - 1);

    for(var i = 0; i < array.length; i ++) {
        if(i < index)
            tempArray[i] = array[i];
        if(i > index)
            tempArray[i - 1] = array [i];
    }
    return tempArray;
} 

var scores = new Array(30,83,22,44,22,87);
scores = remove(scores, 3)
console.log(scores)

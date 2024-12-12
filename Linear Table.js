//This alogirhm code create a custom function, append, basically lets you add new elements to the end array without using build-in function of javascript such as push array methods

//1. Create a function
//2. Create a new array named temp array 
//3. create the array with length bigger then the origional array by + 1
//4. copy the original array with the tempary array
//5. insert 75 to the array
//6. finally assign the tempArray pointer to the origional array

//function parameters are array length, and array value
function append(array,value) { //array is the origional array, value is the element to be added to the end of the array
    var tempArray = new Array(array.length + 1); //array length with with one extra place holder
    for(var i = 0; i < array.length; i++) { //for loops is used to itterate over the the origional array
        tempArray[i] = array[i];  // replace the origional array with temp array
    }
    tempArray[array.length] = value //store the value created
    return tempArray; //stops the exectuion of a function and returns new array
    }

    var scores = new Array(90,40,38,43, 33);  //origional function
    
    //createing a pointer, this is assignment to the funciton built in code 11
    scores = append(scores, 75) //Original array is replaced by the new array, when scores is called, this function runs replacing the old array
    
    // for(var i = 0; i < scores.length; i++) {
    //     console.log(scores[i] + ",");
    // }

    console.log(scores)
    //
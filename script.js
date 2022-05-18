const people = [];

while (people.length < 10) {

    let tempName = prompt("Enter a name", "Type name here");
    people.push(tempName);
    alert(people);
}

//////////////////////  Array function ////////////////////////////////

// Creating arrays ////////////////////////

// var arrayName = ["First Element", "Second Element"];

// Declare the array first and add elements later
// var arrayName = [];
// arrayName[0] = "arrayElement";

// Functions used with arrays ////////////

// push() adds elements to the end of an array:
//      arrayName.push("ElementOne", "ElementTwo);
// unshift() adds elements to the beginning of an array:
//      arrayName.unshift("ElementOne", "ElementTwo");
// pop() removes the last element of an array:
//      arrayName.pop()
//      assigns the removed element to a variable:
//      var lastElement = arrayName.pop();
// shift() removes the first element
//      arrayName.shift();
// splice() adds and removes exising elements:
//      splice(1,2,"mary") would add Mary after index 1 and remove 2 elements after
//      the inserted element
//      the second argument can be set to 0 if you do not want to remove anything
//      splice(2,0, "Todd);
//      You can also remove elements without adding any
//      splice(2,2); would remove two elements after index 2
// slice will copy elements at a selected index into a new array
//      const newArray  = oldArray.slice(2,4); will take elements at
//      index 2 and 3 and copy them into a new array called newArray

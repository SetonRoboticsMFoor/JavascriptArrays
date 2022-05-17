var people = [];

while (true) {

    var tempName = prompt("Enter a name", "Type name here");

    // pop() will remove an array element, push() will add one
    people.push(tempName);
    alert(people);

    // shift() removes the first element
    // unshift() adds elements to the beginning
    // splice() adds elements and then removes
    // splice(1,2,"mary") would add Mary after index 1 and remove 2 elements after it
    // the second argument can be set to 0 if you do not want to remove anything
}
// Write a JavaScript function that accepts two numbers to generate an array between them. 
// For example, if the two numbers are 4 and 7, the output should be [4, 5, 6, 7] and 
// -4 and 7 should return [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7].


function listDown(lowEnd,highEnd){
    const list = [];
    //iterates through numbers starting from lowend upto highend
    for (let i = lowEnd; i <= highEnd; i++) {
    //it pushes each number into the list array
    list.push(i);
}
    //logs the array
    console.log(list)
}
//call the function here
listDown(4,7)

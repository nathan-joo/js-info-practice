//https://javascript.info/array#tasks

//task1 Is array copied?
alert( fruits.length ); // 4, shoppingCart and fruits point to the same array, so modifying one also modifies the other.

//task 2 Array operations.

let arr = ["Jazz", "Blues"];
arr.push("Rock-n-Roll");
arr[Math.floor(arr.length/2)] = "Classics"
alert(arr.shift())
arr.unshift("Rap", "Reggae")


//task 3 Calling in an array context

arr[2](); // Displays: a, b, function() {alert( this )}, because arr[2] is called right before the parentheses. Alert(this) refers to alert(arr) 
// and it joins all the elements including the function itself with commas.

//task 4 Sum input numbers
importance: 4
Write the function sumInput() that:

Asks the user for values using prompt and stores the values in the array.
Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
Calculates and returns the sum of array items.
P.S. A zero 0 is a valid number, please don’t stop the input on zero.

function sumInput(){
    let sum = 0;
    while(true){   
    let a = prompt("number? ")
    if(!isFinite(a)||a === ""|| a === null) break;
    sum+= +a;
    }
    return sum;
 }
 sumInput()
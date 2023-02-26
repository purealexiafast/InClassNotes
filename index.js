//CLASS NOTES

console.log("Hello World"); //outputs a message to the web console

//A variable is a container for a value

const classNotes = "The class notes are extensive."; //use this variable "const" if the value is not going to change

let notesChange = "The class notes are helpful."; //use this variable "let" if the variable is going to change

//You can store all kinds of data within a variable

const number = 3;
const string = "Hello World";
const boolean = true;

const array = ["Chris", "Bob", "Alan"];
//to access each value within the array you can use the variable name plus []
//ex: 
array[0]; //Will return "Chris"

const object = {
    name: "Alexia",
    gender: "Female",
    height: "5 feet 9 inches"
};
//To retrieve information stored inthe object you can use the variable name plus "." and the key
//ex:
object.name //Will return "Alexia"

//Primitive Data Types:
//string, number, boolean, underfined, symbol, null

//Comparison Operators
//Operators that compare values and return true or false
//ex: >, <, >=, <=, ==, ===, !==

//Logical Operators 
//Operators that combine multiple boolean expressions or values and provide a single boolean output, ex: &&, ||, !

//If Else Statement, to specify a new condition if the first condition is false

if (hour < 18) {
    greeting = "Good day.";
} else if (hour > 18) {
    greeting = "Good afternoon.";
} else {
    greeting = "Good evening.";
}


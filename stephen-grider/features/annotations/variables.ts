let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;

//=========Type Inference====================================================
let firstName  = "John";
//firstName = 30"; // Error: Type 'number' is not assignable to type 'string'.
//=============================================================================

//speed = 10;
//apples = "five";
//hasname = "true";

let nothingMuch: null = null;
//nothingMuch = undefined;
//nothingMuch = 10;

let nothing: undefined = undefined;
//nothing = null;
//nothing = "string";

//==================================================================

// Built-in Objects

let now: Date = new Date();
//now=null;
//now=undefined;

//===================Array====================================================
const colors: string[] = ["red", "green", "blue"];
//colors.push(true); // Error: Argument of type 'boolean' is not assignable to parameter of type 'string'.");
const myNumbers: number[] = [1, 2, 3];
const truths: boolean[] = [true, true, false];

//===================Classes====================================================
class Car {}
let car: Car = new Car();

//===================Object Literals====================================================
let point: { x: number; y: number } = {
  x: 10,
  //z:10
  // x:"abc", // Error: Type 'string' is not assignable to type 'number'.
  y: 20,
  // a: "123 Main St", // Error: Object literal may only specify known properties, and 'a' does not exist in type '{ x: number; y: number; }'.
};

//===================Functions====================================================
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};


//===================When to use Type Inference====================================================
let firstName1 ;
// firstName1 = "John";
//firstName1 = 30; // No error, type inference is not applied here because the variable was not initialized with a value.
//=============================================================================


//===================When to use Annotations====================================================
//1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
//const coordinates = JSON.parse(json);
//coordinates.abc(); // No error, because the type of coordinates is any, and any type allows any property to be accessed on it.

// Error: Type 'any' is not assignable to type '{ x: number; y: number; }'.
// To fix this error, we can add a type annotation to the coordinates variable to specify that it should be of type { x: number; y: number; }.
const coordinates: { x: number; y: number } = JSON.parse(json);

let lastName;// any value can be assigned to this variable, but it is not recommended to use any type in TypeScript. It is better to use a specific type or an interface to define the shape of the object.
//===================================================================================

//2) When we declare a variable on one line and initialize it later
let words: string[];
words = ["red", "green", "blue"];
let foundWord: boolean;
//let foundWord1: boolean = false;// better approach to initialize the variable with a default value to avoid undefined behavior.

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}
//===================================================================================
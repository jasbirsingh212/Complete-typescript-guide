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
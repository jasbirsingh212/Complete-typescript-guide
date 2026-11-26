
//==============Annotations around functions ==================
const add = (a: number, b: number) : number => {
    return a + b;
}


//==============Inference around functions ==================
const subtract = (a: number, b: number) => {
    return a - b;
}

const subtract2 = (a: number, b: number) => {
    a-b; // TypeScript infers the return type as void since there is no return statement
    //thats why it is recommended to always use type annotations for functions to avoid confusion and ensure clarity in the code.
}

//==============Annotations around anonymous functions ==================

function divide(a: number, b: number): number {
    return a / b;
}

const multiply = function(a: number, b: number): number {
    return a * b;
}
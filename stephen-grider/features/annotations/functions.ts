//==============Annotations around functions ==================
const add = (a: number, b: number): number => {
  return a + b;
};

//==============Inference around functions ==================
const subtract = (a: number, b: number) => {
  return a - b;
};

const subtract2 = (a: number, b: number) => {
  a - b; // TypeScript infers the return type as void since there is no return statement
  //thats why it is recommended to always use type annotations for functions to avoid confusion and ensure clarity in the code.
};

//==============Annotations around anonymous functions ==================

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

//===================void and nerver types in functions===========================

function logMessage(message: string): void {
  console.log(message);

  // The function does not return any value, so its return type is void.
  // This is useful for functions that perform side effects, such as logging or updating the UI.
  // This function can return null or undefined, but it cannot return any other value.
  // with void function finishing execution, it will return undefined by default.
}

function throwError(message: string): never {
  throw new Error(message);
  // The function never returns a value, so its return type is never.
  // This is useful for functions that always throw an error or terminate the program.
  // This function cannot return any value, not even null or undefined.
  // with never function finishing execution, it will not return anything and will terminate the program.
}

//=================== Destructuring  with Annotations===========================

const todayWeather = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todayWeather);

const user = {
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
};

const logUser = ({
  id,
  name,
  email,
}: {
  id: number;
  name: string;
  email: string;
}): void => {
  console.log(id);
  console.log(name);
  console.log(email);
};

logUser(user);

//============================ Annotation with Objects===========================

const profile = {
  fullName: "John Doe",
  age: 30,
  email: "john.doe@example.com",
  coordinates: {
    lat: 40.7128,
    lng: -74.006,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age, fullName } = profile; // Destructuring with type inference
let {
  coordinates: { lat, lng },
} = profile; // Destructuring with type inference

//lat = "40.7128"; // TypeScript infers the type of lat as number

//const { age, fullName} : {age: number, fullName: string} = profile; // Destructuring with type annotations
//const { coordinates: { lat, lng } }: { coordinates: { lat: number, lng: number } } = profile; // Destructuring with type

/**
 * 1- Create an interface User with properties name (string)
 * and age (number). and it is required not optional
 * required create an object with only the name property.
 */

interface User {
  name: string;
  age: number;
}

const newUser: Pick<User, "name"> = {
  name: "Nour",
};

const userPartial: Partial<User> = {
  name: "Ahmed",
};

// ---------------------------------------------

/**
 * 2- Create an interface Profile with optional properties
 * username (string) and email (string).
 * required create an object with both properties.
 */

interface Profile {
  username?: string;
  email?: string;
}

const newProfile: Required<Profile> = {
  username: "Nour",
  email: "nour@example.com",
};

// ---------------------------------------------

/**
 * Use Record to create an object where keys are "red",
 * "green", and "blue", and values are their corresponding
 * hex color codes (strings). Test by accessing the red key.
 */

const hexColors: Record<"red" | "green" | "blue", string> = {
  red: "#FF0000",
  green: "#00FF00",
  blue: "#0000FF",
};

console.log(hexColors.red); // Output: #FF0000

// ---------------------------------------------

/**
 * 4- Create an interface Person with properties name (string),
 * age (number), and email (string). create a new type with only
 * the name and email properties. Test by creating an object with
 * these properties.
 */

interface Person {
  name: string;
  age: number;
  email: string;
}

type person2 = Pick<Person, "name" | "email">;

const newPerson: person2 = {
  name: "Nour",
  email: "nour@examle.com",
};

// ---------------------------------------------

/**
 * 5- Use the same Person interface from the previous question.
  create a new type without the age property.
  Test by creating an object with only name and email.
 */

type PersonWithoutAge = Omit<Person, "age">;

const person2: PersonWithoutAge = {
  name: "Ali",
  email: "ali@test.com",
};

/**
 * 6- Create a union type Colors = "red" | "green" | "blue" | "yellow".
  create a new type without "yellow".
  Test by assigning a value of the new type.
 */

type colors = "red" | "green" | "blue" | "yellow";

type execldudeYelllow = Exclude<colors, "yellow">;

const myColor: execldudeYelllow = "red";
// const myColor2: execldudeYelllow = "yellow";

// ---------------------------------------------

/**
 * 7- Use the same Colors union type from the previous question.
  create a new type with only "red" and "blue".
  Test by assigning a value of the new type.
 */

type extractColors = Extract<colors, "red" | "blue">;

const myColor3: extractColors = "red";
// const myColor4: extractColors = "green";

//----------------------------------------------

/**
 * 8- Create a union type MaybeString = string | null | undefined.
  create a new type without null or undefined.
  Test by assigning a value of the new type.
 */

type MaybeString = string | null | undefined;

type NonNullableString = NonNullable<MaybeString>;

const myString: NonNullableString = "Hello";
// const myNull: NonNullableString = null;
// const myUndefined: NonNullableString = undefined;

export {};

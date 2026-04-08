//Basic Types
/**
 * Type Annotations => We put a colon : after the variable name.
 * - This is just a fancy way of telling the computer,
 * "Hey, this variable should only ever hold a specific kind of data."
 */

/**
 * TypeScript looks at the value 3 and says, "Aha! That's a number, so a3 must be a number type".
 * This is called Type Inference.
 * let a = 3;
 * a = "sss";
 * 
 * if you just write let x; without holding value and type , TS doesn't
 * know what is the type of x and it will be of type any,
 * which means it can hold any type of value.
 * 
 * -- Using any is dangerous because it essentially tells TypeScript
 * to "stop helping". If you turn off the type-checker, you lose that
 * "blueprint" we talked about, and you might end up with undefined
 * values or crashes when your code runs.
 * 
 * -- void type -> We use void for functions that don't return anything.
 * It’s like a person who listens to your message but doesn't say
 * anything back.
 * function logMessage(message: string): void {
 *  console.log(message);
 * }
 * -- any vs. unknown
 * any: The "Wildcard." You can do anything with it, but it’s risky.
 * unknown: The "Safe Mystery." TypeScript says, "I don't know what
 * this is yet so I won't let you use it until you check what’s inside"
 * 
 * note: To use a variable marked as unknown, you must first verify what it is.
 * 
 * 
 * Tuple : sometimes you want a list with a fixed size and specific types in a specific order.
 * Arrays are flexible, but tuples are like a strict guest list for a party.
 * -> If you have a list where every item is the same type (like a shopping list of only strings),
 * you write the type followed by []
 * let numbers: number[] = [1, 2, 3];
 * let person: [string, number] = ["Ahmed", 20];
 * 
 * -- Enums and Literals (The Choice Makers)
 * Enum as a set of friendly names for constant values.
 * enum bgColor {
   red = "red",
   blue = "blue",
   green = "green"
   }
   let back: bgColor = bgColor.blue;

   -- Custom Types & Interfaces (The Object Blueprints)
   - Type Aliases: A type alias is like giving a nickname to a type. It’s a way to create a new name
   for an existing type or a combination of types. This can make your code more readable and easierto manage.
   - Interfaces: An interface is like a blueprint for an object. It defines the structure that an
   object should have, including the properties and their types. Interfaces are particularly
   useful for defining the shape of objects and can be implemented by classes.
   - Type Aliases vs. Interfaces: Both can be used to define the shape of an object,
   but interfaces are generally preferred for defining object shapes and can be extended,
   while type aliases are more flexible and can represent more complex types 
   (like unions or intersections).

   -- Record<K, T>: This creates an object where you define
      a specific set of keys (K) and what type of value (T) they hold.
   -> Record<string, number>

   -- Literal Types: This is when you use a specific value as a type.
   -> let direction: "left" | "right"

   -- Omit<T, K>: This is the opposite of Pick. Instead of choosing what you want,
   you choose what you want to delete.

 */


enum ProductCategory {
   Electronics,
   Clothing,
   Food
}

interface Product {
   id: number;
   name: string;
   price: number;
   category: ProductCategory;
}

interface UserAccount {
   id: Number;
   username: String;
   email: String;
   password: String;
}

type PublicProfile = Omit<UserAccount, "password">;


function logAction<T>(action: T): void {
   console.log("Action logged:", action);
}

const stockCount: Record<"online"| "offline" | "maintenance", number> = {
   online: 100,
   offline: 50,
   maintenance: 10
}


type ServerStatus = "online" | "offline" | "maintenance";

// const searchVar: ServerStatus = "searching"; // Error: Type '"searching"' is not assignable to type 'ServerStatus'.
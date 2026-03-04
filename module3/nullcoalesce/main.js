let user_name = null;
let default_name = "Guest";

// Before nullish coalescing, you might use the OR operator
let name1 = user_name || default_name;
console.log("Using OR (||):", name1); // Output: Guest

// With nullish coalescing, it only falls back for null or undefined
let name2 = user_name ?? default_name;
console.log("Using Nullish Coalescing (??):", name2); // Output: Guest

// Let's see the difference with an empty string
let empty_name = null;
name1 = empty_name || default_name;
console.log("Using OR (||) with empty string:", name1);
// Output: Guest(because "" is falsy)
name2 = empty_name ?? default_name;
console.log("Using Nullish Coalescing (??) with empty string:", name2);
// Output: "" (because "" is not null or undefined)
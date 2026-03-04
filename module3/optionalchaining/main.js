const user = {
    name: "John Doe",
    address: {
        street: "123 Main St",
        city: "Anytown"
    }
};
// Without optional chaining, accessing a nested property that doesn't exist would throw an error
// const country = user.address.country; // This would throw an error if address or country were undefined
// With optional chaining, it safely returns undefined instead of throwing an error
const country = user.address?.country;
console.log("Country:", country); // Output: undefined
// It also works with function calls
const nonExistentFunction = user.nonExistentFunction?.();
console.log("Result of non-existent function call:",
    nonExistentFunction); // Output: undefined
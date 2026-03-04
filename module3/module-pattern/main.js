const MyModule = (function () {
    // Private members
    let privateVariable = "I am private";
    function privateMethod() {
        console.log(privateVariable);
    }
    // Public members
    return {
        publicMethod: function () {
            privateMethod();
        }
    };
})();
MyModule.publicMethod(); // Output: I am private
// console.log(MyModule.privateVariable); // This would throw an error because privateVariable is not accessible from the outside
function compute(){
    // Declare variable to get the values of the input elements
    let firstNum = document.getElementById("firstNumber").value;
    let secondNum = document.getElementById("secondNumber").value;

    // Declare the varaible for displaying the result
    let result = document.getElementById("result");

    var sum = parseFloat(firstNum) + parseFloat(secondNum);

    // Display the result
    result.textContent = sum;
}
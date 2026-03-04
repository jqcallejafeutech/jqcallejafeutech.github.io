document.getElementById("contactForm").addEventListener("submit", function (e) {

    e.preventDefault();

    let name = document.getElementById("name").value;
    let message = document.getElementById("message").value;
    let response = document.getElementById("response");

    if (name === "" || message === "") {
        response.textContent = "Please fill out all fields.";
        response.style.color = "red";
    } else {
        response.textContent = "Thank you for contacting us, " + name + "!";
        response.style.color = "green";
        this.reset();
    }

});
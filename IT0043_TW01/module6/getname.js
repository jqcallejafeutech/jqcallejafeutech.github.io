function displayName() {
    var fullname = document.getElementById("fullname");
    var response = confirm("Continue with submitting your name?");
    if(response){
        let lastname = document.getElementById("lastname").value;
        let firstname = document.getElementById("firstname").value;
        let middlename = document.getElementById("middlename").value;
        let completename = lastname + ", " + firstname + " " + middlename.substring(0, 1) + ".";
        fullname.textContent = completename;
    } else {
        fullname.textContent = "No data....!";
        alert("You did not confirm data submission.");
    }
    
}
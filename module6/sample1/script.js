let users = [];

$(document).ready(function () {

    // AJAX call using jQuery
    $.ajax({
        url: "sample_users.json",
        method: "GET",
        dataType: "json",
        success: function (data) {
            users = data;
            displayUsers(users);
        },
        error: function (error) {
            console.error("Error loading JSON:", error);
        }
    });

    // Search functionality
    $("#searchInput").on("keyup", function () {
        let searchValue = $(this).val().toLowerCase();

        let filteredUsers = users.filter(function (user) {
            return user.firstname.toLowerCase().includes(searchValue) ||
                user.lastname.toLowerCase().includes(searchValue) ||
                user.email.toLowerCase().includes(searchValue) ||
                user.nickname.toLowerCase().includes(searchValue);
        });

        displayUsers(filteredUsers);
    });

});

// Display users
function displayUsers(userArray) {
    $("#userList").empty();

    userArray.forEach(function (user) {
        let li = $("<li>")
            .text(user.firstname + " " + user.lastname)
            .click(function () {
                showUserDetails(user);
            });

        $("#userList").append(li);
    });
}

// Show user details
function showUserDetails(user) {
    $("#userDetails").html(`
        <h3>${user.firstname} ${user.lastname}</h3>
        <p><strong>User ID:</strong> ${user.user_id}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Nickname:</strong> ${user.nickname}</p>
        <p><strong>Verified:</strong> ${user.verified}</p>
    `);
}
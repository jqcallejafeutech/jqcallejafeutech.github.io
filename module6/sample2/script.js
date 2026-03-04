$(document).ready(function () {

    // Show page load time (static)
    $("#loadTime").text(new Date().toLocaleTimeString());

    // Start live clock (updates every second)
    startClock();

    // Button click event for AJAX
    $(".userBtn").click(function () {

        let userId = $(this).data("id");

        $.ajax({
            url: "user_" + userId + ".json",
            method: "GET",
            dataType: "json",

            beforeSend: function () {
                $("#content").html("<p><em>Loading user data...</em></p>");
            },

            success: function (data) {
                displayUser(data);
            },

            error: function () {
                $("#content").html("<p style='color:red;'>Error loading data.</p>");
            }
        });

    });

});

// Live Clock Function
function startClock() {
    setInterval(function () {
        let now = new Date();
        $("#liveClock").text(now.toLocaleTimeString());
    }, 1000);
}

// Display user info
function displayUser(user) {
    $("#content").html(`
        <h3>${user.name}</h3>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Role:</strong> ${user.role}</p>
        <p><strong>Message:</strong> ${user.message}</p>
    `);
}
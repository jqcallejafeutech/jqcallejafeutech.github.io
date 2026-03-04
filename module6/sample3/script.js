$(document).ready(function () {

    let autoRefreshInterval = null;

    // Show page load time
    $("#loadTime").text(new Date().toLocaleTimeString());

    // Manual load
    $("#loadPosts").click(function () {
        loadPosts();
    });

    // Start auto refresh every 5 seconds
    $("#startAuto").click(function () {

        if (autoRefreshInterval === null) {

            loadPosts(); // Load immediately

            autoRefreshInterval = setInterval(function () {
                loadPosts();
            }, 5000);

            alert("Auto refresh started (every 5 seconds)");
        }
    });

    // Stop auto refresh
    $("#stopAuto").click(function () {

        clearInterval(autoRefreshInterval);
        autoRefreshInterval = null;

        alert("Auto refresh stopped");
    });

    // Function that performs AJAX request
    function loadPosts() {

        $.ajax({
            url: "https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json",
            method: "GET",
            dataType: "json",

            beforeSend: function () {
                $("#content").html("<p><em>Loading posts...</em></p>");
            },

            success: function (data) {

                let output = "";

                data.forEach(function (user) {
                    output += `
                        <div class="post">
                            <h4>${user.name}</h4>
                            <p>${user.bio}</p>
                        </div>
                    `;
                });

                $("#content").html(output);

                // Update last refresh time
                $("#lastRefresh").text(new Date().toLocaleTimeString());
            },

            error: function () {
                $("#content").html("<p style='color:red;'>Failed to load data.</p>");
            }
        });

    }

});
function fetchGitHubInformation(event) {
    let username = $("#gh-username").val();
    if (!username) {
        $("#gh-user-data").html(`<h5>Please enter a GitHub username</h5>`);
        return;
    } else {

    }
    $("#gh-user-data").html(
        `<div id="loader">
            <img src="/assets/images/loader.gif" alt="loading..."/>
        </div>`
    );

    $.when(
        $getJSON(`https://api.github.com/users/${username}`)
    ).then(
        function(response) {
            let userData = response;
            $("#gh-user-data").html(userInformationHTML(userData));
        },
        function(errorResponse) {
            if (errorResponse.status === 404) {
                $("#gh-user-data").html(
                    `<h5>No info found for this user</h5>`);
            } else {
                console.log(errorResponse);
                $("#gh-user-data").html(
                    `<h5>ERROR: ${errorResponse.responseJSON.message}</h5>`
                );
            }
        })
}
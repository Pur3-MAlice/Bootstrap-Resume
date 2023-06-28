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

}
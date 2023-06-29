function userInformationHTML(user) {
    return `
        <h5>${user.name}
            <span class="small-name">
                <p>
                    (@<a href="${user.html_url}" target="_blank">${user.login}</a>)
                </p>
            </span>
        </h5>
        <div class="gh-content">
            <div class="gh-avatar">
                <a href="${user.html_url}" target="_blank">
                    <img src="${user.avatar_url}" width="80" height="80" alt="${user.login}" />
                </a>
            </div>
            <p>Followers: ${user.followers} - Following ${user.following} <br> Repos: ${user.public_repos}</p>
        </div>`;
}

function fetchGitHubInformation(event) {

    var username = $("#gh-username").val();
    if (!username) {
        $("#gh-user-data").html(`<h5>Please enter a GitHub username</h5>`);
        return;
    }

    $("#gh-user-data").html(
        `<div id="loader">
            <img src="/assets/images/loader.gif" alt="loading..."/>
        </div>`);

    $.when(
        $.getJSON(`https://api.github.com/users/${username}`),
        $.getJSON(`https://api.github.com/users/${username}/repos`)
    ).then(
        function(firstResponse, secondResponse) {
            var userData = firstResponse[0];
            var  repoData = secondResponse[0];
            $("#gh-user-data").html(userInformationHTML(userData));
            $("#gh-repo-data").html(repoInformationHTML(repoData));
        },
        function(errorResponse) {
            if (errorResponse.status === 404) {
                $("#gh-user-data").html(
                    `<h5>No info found for user ${username}</h5>`);
            } else {
                console.log(errorResponse);
                $("#gh-user-data").html(
                    `<h5>Error: ${errorResponse.responseJSON.message}</h5>`);
            }
        });
}
let loggedInUser = sessionStorage.getItem("loggedInUser");
console.log(loggedInUser);

if (loggedInUser) {
    loggedInUser = JSON.parse(loggedInUser);
    console.log(loggedInUser);
    if (!(loggedInUser.username == "admin")) {
        console.log("Not admin");
        history.back();
        alert("You are not allowed to access this page!");
    }
}

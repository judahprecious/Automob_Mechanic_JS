async function fetchUsers() {
    try {
        const response = await fetch("../js/users.json");
        const users = await response.json();
        return users;
    } catch (error) {
        console.log(error.message);
    }
}


async function isCredentialsValid(username, password) {
    const users = await fetchUsers();
    let isUserPresent = false;
    users?.forEach((user) => {
        console.log(user.username, user.password);
        if (user.username == username && user.password == password) {
            isUserPresent = user;
            return;
        }
    });

    console.log(users);
    return isUserPresent;
}

async function handleLogin(e) {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    console.log("This is login username", e.target.username.value);
    console.log("This is login password", e.target.password.value);
    const loggedInUser = await isCredentialsValid(username, password);
    if (loggedInUser) {
        alert("Logged in successfully");
        sessionStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
        location.assign("../html/home.html");
    } else {
        alert("Invalid credentials");
    }
}

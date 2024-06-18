const exploreMoreBtn = document.getElementById("explore_more_btn");
const userNameElement = document.getElementById("name");
const loginNavElement = document.getElementById("login");
const servicesNavElement = document.getElementById("services");
const bookingNavElement = document.getElementById("booking");
const reportsNavElement = document.getElementById("reports");
const logoutNavElement = document.getElementById("logout");

function navigateToServicePage() {
    location.assign("../html/services.html");
}

exploreMoreBtn.addEventListener("click", navigateToServicePage);

//check if user logged in by checking session storage
if(sessionStorage.getItem("loggedInUser")){
    loggedInUser = sessionStorage.getItem("loggedInUser");
    loggedInUser = JSON.parse(loggedInUser);
    userNameElement.innerText = `Hi ${loggedInUser.name}`;
    
    // if user loggedin and if admin change nav view
    switch(loggedInUser.username){
        case "admin": {
            servicesNavElement.style.display = "none";
            bookingNavElement.style.display = "none";
            loginNavElement.style.display = "none";
            break;
        }
        default: {
            reportsNavElement.style.display = "none";
            loginNavElement.style.display = "none";
            break;
        }
    }
} else{
    logoutNavElement.style.display = "none";
}




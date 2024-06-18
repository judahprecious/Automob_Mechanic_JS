// Add JavaScript Code here
const logoutBtn = document.getElementById("logout");
let loggedInUser = sessionStorage.getItem("loggedInUser");
const reportsBtn = document.getElementById("reports")
if (!loggedInUser && logoutBtn) {
    logoutBtn.style.display = "none";
    reportsBtn.style.display = "none";
}

// if (!loggedInUser)
//     {
//         reportsBtn.style.display = "none"; 
//     }



logoutBtn?.addEventListener("click", () => {
    localStorage.clear();
    sessionStorage.clear();
    location.assign("../html/login.html");
});

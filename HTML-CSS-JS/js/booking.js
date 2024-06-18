const form = document.getElementsByTagName("form")[0];

// if any service is selected at any sub-service pages, make the option selected here in booking.html form
const selectedService = localStorage.getItem("selectedService");

if (selectedService) {
    const selectServiceElement = document.getElementById("selectService");
    selectServiceElement.value = selectedService;
}

if (loggedInUser) {
    loggedInUser = JSON.parse(loggedInUser);
    const nameInputElement = document.getElementById("customerName");
    nameInputElement.value = loggedInUser.name;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const appointmentDate = e.target.appointmentDate.value;
    const today = new Date();
    if (new Date(appointmentDate).getTime() < today.getTime()) {
        const errorMsg = document.getElementById("errorMsg");
        errorMsg.innerText = "Appointment Date Should Not Be a Past Date!";
    } else {
        location.assign("../html/booking-success.html");
    }
});

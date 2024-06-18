const bookService = document.getElementById("book_service_btn");
const goBack = document.getElementById("go_back_btn");

bookService.addEventListener("click", () => {
    localStorage.setItem("selectedService", "preventive maintenance service");
    location.assign("../html/booking.html");
});

goBack.addEventListener("click", () => {
    history.back();
});

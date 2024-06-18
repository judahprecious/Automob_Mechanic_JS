const pmsBtn = document.getElementById("pms_btn");
const brsBtn = document.getElementById("brs_btn");
const ccsBtn = document.getElementById("ccs_btn");
const offerCounter = document.getElementById("counter");

pmsBtn.addEventListener("click", () => {
    location.assign("../html/preventive-maintenance-service.html");
});

brsBtn.addEventListener("click", () => {
    location.assign("../html/body-repair-service.html");
});

ccsBtn.addEventListener("click", () => {
    location.assign("../html/car-care-service.html");
});

// Offer timer - 10mins
let totalSeconds = 10 * 60;
function setTime() {
    totalSeconds--;
    if (totalSeconds == 0) {
        clearInterval(offerTimer);
        offerCounter.innerText = "Offer ended!";
        return;
    }
    let mins = parseInt(totalSeconds / 60);
    let secs = totalSeconds % 60;
    offerCounter.innerText = `${mins}m:${secs}s`;
}
let offerTimer = setInterval(setTime, 1000);

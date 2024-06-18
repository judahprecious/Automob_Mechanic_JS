let feedbackPoints;

function askFeedback() {
    feedbackPoints = prompt(
        "On a scale of 1-10, how likely are you to recommend our website to your friends or family?"
    );
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        askFeedback();
        if (feedbackPoints) {
            alert("Thank you for your feedback");
        }
        //     if (feedbackPoints) {
        //         if (
        //             typeof feedbackPoints == "number" &&
        //             feedbackPoints > 0 &&
        //             feedbackPoints <= 10
        //         ) {
        //             alert("Thank you for your feedback");
        //         } else {
        //             askFeedback();
        //         }
        //     }
    }, 3000);
});

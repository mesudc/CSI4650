document.addEventListener("DOMContentLoaded", function () {
    const surveyBtn = document.getElementById("surveyBtn");
    const surveyContainer = document.getElementById("surveyContainer");

    surveyBtn.addEventListener("click", function () {
        surveyContainer.style.display = "block";
        surveyBtn.style.display = "none";
    });
});


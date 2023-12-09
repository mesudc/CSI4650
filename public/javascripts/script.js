document.addEventListener("DOMContentLoaded", function () {
    const surveyBtn = document.getElementById("surveyBtn");
    const surveyContainer = document.getElementById("surveyContainer");
    const resultBtn = document.getElementById("resultBtn");

    surveyBtn.addEventListener("click", function () {
        surveyContainer.style.display = "block";
        surveyBtn.style.display = "none";
        resultBtn.style.display = "none";
    });
    
});


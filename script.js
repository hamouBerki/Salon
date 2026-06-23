const url = "https://hamouBerki.github.io/Salon/";

let currentStep = 0;
const steps = document.querySelectorAll(".step");

const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const submitBtn = document.getElementById("submit");
const bar = document.getElementById("bar");

document.addEventListener("DOMContentLoaded", () => {

    // QR CODE
    const qr = document.getElementById("qrcode");

    if (qr) {
        qr.src =
            "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=" +
            encodeURIComponent(url);
    }

    showStep(currentStep);
});

function showStep(index) {

    steps.forEach((step, i) => {
        step.classList.toggle("active", i === index);
    });

    prevBtn.style.display = index === 0 ? "none" : "block";

    if (index === steps.length - 1) {
        nextBtn.style.display = "none";
        submitBtn.style.display = "block";
    } else {
        nextBtn.style.display = "block";
        submitBtn.style.display = "none";
    }

    bar.style.width = ((index + 1) / steps.length) * 100 + "%";
}

nextBtn.addEventListener("click", () => {
    if (currentStep < steps.length - 1) {
        currentStep++;
        showStep(currentStep);
    }
});

prevBtn.addEventListener("click", () => {
    if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
    }
});

document.getElementById("formulaire").addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    let result = {};
    for (let [key, value] of data.entries()) {
        if (!result[key]) result[key] = value;
        else result[key] += ", " + value;
    }

    console.log("Réponses :", result);

    document.getElementById("confirmation").innerText =
        "Merci ! Vos réponses ont été enregistrées ✔️";

    e.target.reset();
});
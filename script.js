const url = "https://hamouBerki.github.io/Salon/";

document.addEventListener("DOMContentLoaded", () => {

    // QR CODE
    const qr = document.getElementById("qrcode");

    if (qr) {
        qr.src =
            "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=" +
            encodeURIComponent(url);
    }

    // FORM SUBMIT
    const form = document.getElementById("formulaire");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const data = new FormData(form);

        let result = {};
        for (let [key, value] of data.entries()) {
            if (!result[key]) result[key] = value;
            else result[key] += ", " + value;
        }

        console.log("Réponses :", result);

        document.getElementById("confirmation").innerText =
            "Merci ! Vos réponses ont été enregistrées ✔️";

        form.reset();
    });
});
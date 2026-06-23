const questions = [
    "Comment ça va ?",
    "Où habites-tu ?",
    "Quel âge as-tu ?"
];

let indexQuestion = 0;
let reponses = [];

/* URL pour QR code */
const url = "https://hamouBerki.github.io/Salon/";

function afficherQuestion() {
    document.getElementById("question").innerText = questions[indexQuestion];

    document.getElementById("reponse").value =
        reponses[indexQuestion] || "";
}

/* Passer à la question suivante */
function suivant() {
    const input = document.getElementById("reponse");
    const valeur = input.value.trim();

    if (valeur === "") {
        alert("Veuillez entrer une réponse.");
        return;
    }

    reponses[indexQuestion] = valeur;

    indexQuestion++;

    if (indexQuestion < questions.length) {
        afficherQuestion();
    } else {
        afficherResultat();
    }
}

/* Revenir en arrière */
function retour() {
    if (indexQuestion > 0) {
        const input = document.getElementById("reponse");
        reponses[indexQuestion] = input.value.trim();

        indexQuestion--;

        afficherQuestion();
    }
}

/* Recommencer le questionnaire */
function recommencer() {
    indexQuestion = 0;
    reponses = [];

    document.getElementById("reponse").style.display = "block";
    document.querySelector(".btn-suivant").style.display = "block";

    document.getElementById("resultat").innerHTML = "";

    afficherQuestion();
}

/* Affichage des résultats */
function afficherResultat() {
    document.getElementById("question").innerText =
        "Merci pour vos réponses 👍";

    document.getElementById("reponse").style.display = "none";
    document.querySelector(".btn-suivant").style.display = "none";

    document.getElementById("resultat").innerHTML = `
        <h3>📋 Récapitulatif :</h3>
        <p><strong>Comment ça va ?</strong><br>${reponses[0]}</p>
        <p><strong>Où habites-tu ?</strong><br>${reponses[1]}</p>
        <p><strong>Quel âge as-tu ?</strong><br>${reponses[2]}</p>
    `;
}

/* Génération du QR code */
document.addEventListener("DOMContentLoaded", () => {
    const qr = document.getElementById("qrcode");

    qr.src =
        "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=" +
        encodeURIComponent(url);

    afficherQuestion();
});
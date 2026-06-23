const questions = [
    "Comment ça va ?",
    "Où habites-tu ?",
    "Quel âge as-tu ?"
];

let indexQuestion = 0;
let reponses = [];

function afficherQuestion() {

    document.getElementById("question").innerText =
        questions[indexQuestion];

    document.getElementById("reponse").value =
        reponses[indexQuestion] || "";
}

function suivant() {

    const valeur =
        document.getElementById("reponse").value.trim();

    if (valeur === "") {
        alert("Veuillez répondre à la question.");
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

function retour() {

    if (indexQuestion > 0) {

        reponses[indexQuestion] =
            document.getElementById("reponse").value;

        indexQuestion--;

        afficherQuestion();
    }
}

function recommencer() {

    indexQuestion = 0;
    reponses = [];

    document.getElementById("resultat").innerHTML = "";

    document.getElementById("reponse").style.display = "block";
    document.querySelector(".btn-suivant").style.display = "block";

    afficherQuestion();
}

function afficherResultat() {

    document.getElementById("question").innerText =
        "Merci pour vos réponses !";

    document.getElementById("reponse").style.display = "none";
    document.querySelector(".btn-suivant").style.display = "none";

    document.getElementById("resultat").innerHTML = `
        <h3>Vos réponses :</h3>
        <p><strong>Comment ça va ?</strong><br>${reponses[0]}</p>

        <p><strong>Où habites-tu ?</strong><br>${reponses[1]}</p>

        <p><strong>Quel âge as-tu ?</strong><br>${reponses[2]}</p>
    `;
}

/* QR Code */
const url = "https://berkihamou.github.io/questionnaire/";

document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("qrcode").src =
        "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=" +
        encodeURIComponent(url);

    afficherQuestion();
});
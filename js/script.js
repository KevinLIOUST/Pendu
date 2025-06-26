// Ingrédients

// Les mots disponibles pour jouer au jeu
let tabMots = [
    ["manga", "fairytail", "15"],
    ["jeu vidéo", "horizon zero dawn", "20"],
    ["film", "matrix", "10"],
    ["série", "the walking dead", "15"],
    ["youtuber", "squeezie", "10"]
]

// Interupteurs :
// 0 : Lettre pas encore utilisée.
// 1 : Lettre utilisée.
let tabInterupteursLettres = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// Le nombre aléatoire tiré à chaque début de game
let nbAleatoire = 0;

// Récupérer la catégiorie du mot à trouver
let categorie = "";

// Récupérer le mot à chercher
let motAchercher = "";

// // Mot a rechercher, mais avec des underscores.
// let motAchercherUnderscores = "";

// Récupérer le nombre d'essais pour trouver le mot
let nbEssais = "";

// Nombre d'underscores à afficher pour trouver le mot
let nbUnderscores = 0;

// Fonction pour utiliser une lettre
function utiliserLettre(lettre) {
    for (let i = 0; i < motAchercher.length; i++) {
        if (motAchercher.charAt(i) == lettre) {

        }
    }
    // for (let i = 0; i < motAchercher.length; i++) {
    //     if (motAchercher.charAt(i) == lettre) {
    //         document.getElementById("motAchercher").innerText = "";
    //         for (let j = 0; j < motAchercher.length; j++) {
    //             if (motAchercher.charAt(j) == lettre) {
    //                 document.getElementById("motAchercher").innerText += lettre;
    //             } else {
    //                 if (motAchercher.charAt(j) == " ") {
    //                     let motAreconstituer = document.getElementById("motAchercher").getHTML();
    //                     document.getElementById("motAchercher").innerText = motAreconstituer + "\u00A0";
    //                 }
    //                 let motAreconstituer = document.getElementById("motAchercher").getHTML();
    //                 document.getElementById("motAchercher").innerText = motAreconstituer + "_";
    //             }
    //         }
    //     }
    // }
}

// Fonction pour initialiser une partie
function initialiserPartie() {

    motAchercher = "";

    // Initialisation de la partie
    nbAleatoire = Math.floor(Math.random() * 5);
    // console.log(nbAleatoire);

    categorie = tabMots[nbAleatoire][0];
    // console.log(categorie);

    motAchercher = tabMots[nbAleatoire][1];
    // console.log(motAchercher);

    nbEssais = parseInt(tabMots[nbAleatoire][2]);
    // console.log(nbEssais);

    // Affichage du nombre d'essais
    document.getElementById("nbEssais").innerText = nbEssais;

    // Affichage de la catégorie du mot à trouver
    document.getElementById("categorie").innerText = categorie;

    // Pour afficher le nombre d'underscores pour trouver le mot
    nbUnderscores = motAchercher.length;

    // Pour remettre à 0 les underscores du mot à trouver
    document.getElementById("motAchercher").innerText = "";

    for (let i = 0; i < nbUnderscores; i++) {
        if (motAchercher.charAt(i) == " ") {
            document.getElementById("motAchercher").innerText += "\u00A0";
        } else {
            document.getElementById("motAchercher").innerText += "_";
        }
    }
}
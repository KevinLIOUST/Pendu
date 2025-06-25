// Ingrédients

// Les mots disponibles pour jouer au jeu
let tabMots = [
    ["manga", "fairytail", "15"],
    ["jeu vidéo", "horizon zero dawn", "20"],
    ["film", "matrix", "10"],
    ["serie", "the walking dead", "15"],
    ["youtuber", "squeezie", "10"]
]

// Le nombre aléatoire tiré à chaque début de game
let nbAleatoire = 0;

// Récupérer la catégiorie du mot à trouver
let categorie = "";

// Récupérer le mot à chercher
let motAchercher = "";

// Mot a rechercher, mais avec des underscores.
let motAchercherUnderscores = "";

// Récupérer le nombre d'essais pour trouver le mot
let nbEssais = "";

// Nombre d'underscores à afficher pour trouver le mot
let nbUnderscores = 0;

// Fonction pour lancer une partie
function lancerPartie() {

    motAchercherUnderscores = "";

    // Initialisation de la partie
    nbAleatoire = Math.floor(Math.random() * 4);
    categorie = tabMots[nbAleatoire][0];
    motAchercher = tabMots[nbAleatoire][1];
    nbEssais = parseInt(tabMots[nbAleatoire][2]);

    // Affichage du nombre d'essais
    document.getElementById("nbEssais").innerText = nbEssais;

    // Pour afficher le nombre d'underscores pour trouver le mot
    nbUnderscores = motAchercher.length;

    for (let i = 1; i <= nbUnderscores; i++) {
        motAchercherUnderscores += "_";
    }

    // Remplacer les espaces par des tirets
    for (let i = 0; i < motAchercher.length; i++) {
        if (motAchercher.charAt(i) == " ") {
            motAchercherUnderscores.charAt(i) += "-";
        }
    }

    document.getElementById("motAchercher").innerText = motAchercherUnderscores;
}
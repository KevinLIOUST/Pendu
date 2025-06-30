// Ingrédients

// Tableau de toutes les lettres de l'alphabet
let tabLettres = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Les mots disponibles pour jouer au jeu
let tabMots = [
  ["manga", "fairytail", "15"],
  ["jeu vidéo", "horizon zero dawn", "20"],
  ["film", "matrix", "10"],
  ["série", "the walking dead", "15"],
  ["youtuber", "squeezie", "10"],
];

// Le nombre aléatoire tiré à chaque début de game
let nbAleatoire = 0;

// Récupérer la catégiorie du mot à trouver
let categorie = "";

// Récupérer le mot à chercher
let motAchercher = "";

// Mot à reconstituer pour gagner la partie
let motArefaire = "";

// Récupérer le nombre d'essais pour trouver le mot
let nbEssais = "";

// Nombre d'underscores à afficher pour trouver le mot
let nbUnderscores = 0;

// Fonction pour désactiver tous les boutons en temps voulu
function disabledAllButtons() {
  for (let i = 0; i < tabLettres.length; i++) {
    let boutonAdesactiver = document.getElementById(
      "btn" + tabLettres[i].toUpperCase()
    );
    boutonAdesactiver.disabled = true;
  }
}

// Fonction pour activer tous les boutons en temps voulu
function activateAllButtons() {
  for (let i = 0; i < tabLettres.length; i++) {
    let boutonAdesactiver = document.getElementById(
      "btn" + tabLettres[i].toUpperCase()
    );
    boutonAdesactiver.disabled = false;
  }
}

// Fonction pour utiliser la zone de texte pour que le joueur puisse donner sa réponse avec le bouton valider
function validerReponse() {
  if (document.getElementById("textEntrer").value == motAchercher) {
    document.getElementById("motAchercher").innerText = motAchercher;
    document.getElementById("partiePerdueOuGagnee").innerText =
      "Vous avez gagné la partie ! ):";
    disabledAllButtons();
    document.getElementById("textEntrer").disabled = true;
    document.getElementById("btnValider").disabled = true;
    nbEssais--;
    document.getElementById("nbEssais").innerText = nbEssais;
  } else {
    perduOuGagnePartie();
    nbEssais--;
    document.getElementById("nbEssais").innerText = nbEssais;
  }
}

// Fonction pour savoir si le joueur a gagné la partie, soit perdu la partie
function perduOuGagnePartie() {
  if (nbEssais == 0 && motArefaire != motAchercher) {
    document.getElementById("partiePerdueOuGagnee").innerText =
      "Vous avez perdu la partie ! ):";
    document.getElementById("textEntrer").disabled = true;
    document.getElementById("btnValider").disabled = true;
    disabledAllButtons();
  } else if (motAchercher == motArefaire) {
    document.getElementById("partiePerdueOuGagnee").innerText =
      "Vous avez gagné(e) la partie ! :)";
    document.getElementById("textEntrer").disabled = true;
    document.getElementById("btnValider").disabled = true;
    disabledAllButtons();
  }
}

// Fonction pour utiliser une lettre
function utiliserLettre(lettre) {

  // On regarde si la lettre que le joueur a choisi est dans le mot à deviner.
  // Si la lettre est dans le mot à deviner, alors on modifie la chaine et on l'affiche au joueur.
  // Sinon, on fait rien.
  for (let i = 0; i < motAchercher.length; i++) {
    if (motAchercher[i] === lettre) {
      let newTabChaine = motArefaire.split(""); // Convertir la chaîne en tableau
      newTabChaine[i] = lettre; // Modifier la lettre à l'index donné
      motArefaire = newTabChaine.join(""); // Reconvertir en chaîne
    } else {
      let newTabChaine = motArefaire.split(""); // Convertir la chaîne en tableau
      newTabChaine[i] = "_"; // Modifier la lettre à l'index donné
      motArefaire = newTabChaine.join(""); // Reconvertir en chaîne
    }
  }

  document.getElementById("motAchercher").innerText = motArefaire;

  let boutonAdesactiver = document.getElementById("btn" + lettre.toUpperCase());
  boutonAdesactiver.disabled = true;
  nbEssais--;
  document.getElementById("nbEssais").innerText = nbEssais;

  perduOuGagnePartie();
}

// Fonction pour initialiser une partie
function initialiserPartie() {

  // Initialisation des variables pour les mots
  motAchercher = "";
  motArefaire = "";

  // On tire un nombre aléatoire pour deviner un mot au joueur au hasard
  nbAleatoire = Math.floor(Math.random() * 5);

  // La catégorie est choisie en fonction du mot tiré au hasard
  categorie = tabMots[nbAleatoire][0];

  // Le mot à faire deviner au joueur avec le nombre tiré au hasard
  motAchercher = tabMots[nbAleatoire][1];

  // Préparation du mot à refaire avec les espaces inclus
  for (let i = 0; i < motAchercher.length; i++) {
    if (motAchercher.charAt(i) == " ") {
      motArefaire += " ";
    } else {
      motArefaire += "_";
    }
  }

  nbEssais = parseInt(tabMots[nbAleatoire][2]);

  // Affichage du nombre d'essais
  document.getElementById("nbEssais").innerText = nbEssais;

  // Affichage de la catégorie du mot à trouver
  document.getElementById("categorie").innerText = categorie;

  // Pour afficher le nombre d'underscores pour trouver le mot
  nbUnderscores = motAchercher.length;

  // Pour remettre à 0 les underscores du mot à trouver
  document.getElementById("motAchercher").innerText = "";

  // Affichage du mot à refaire au fur et à mesure de la partie
  document.getElementById("motAchercher").innerText = motArefaire;

  // Affichage de l'état de la partie
  document.getElementById("partiePerdueOuGagnee").innerText =
    "Partie en cours...";

  // Rendre actif le bouton pour valider sa réponse au lancement du jeu
  document.getElementById("textEntrer").disabled = false;

  // Rendre actif la zone de texte au lancement du jeu
  document.getElementById("btnValider").disabled = false;

  // Activer tous les boutons au lancement du jeu
  activateAllButtons();
}

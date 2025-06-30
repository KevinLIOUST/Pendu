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
    nbEssais--;
    document.getElementById("textEntrer").disabled = true;
    document.getElementById("btnValider").disabled = true;
    document.getElementById("nbEssais").innerText = nbEssais
    document.getElementById("partiePerdueOuGagnee").innerText =
      "Vous avez perdu la partie ! ):";
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
  for (let i = 0; i < motAchercher.length; i++) {
    if (motAchercher[i] === lettre) {
      let newTabChaine = motArefaire.split(""); // Convertir la chaîne en tableau
      newTabChaine[i] = lettre; // Modifier la lettre à l'index donné
      motArefaire = newTabChaine.join(""); // Reconvertir en chaîne
      console.log(lettre);
      console.log(motAchercher[i]);
      console.log(motArefaire[i]);
    } else {
      motArefaire[i] = "z";
    }
  }

  document.getElementById("motAchercher").innerText = motArefaire;
  console.log(motAchercher);
  console.log(motArefaire);

  let boutonAdesactiver = document.getElementById("btn" + lettre.toUpperCase());
  boutonAdesactiver.disabled = true;
  nbEssais--;
  document.getElementById("nbEssais").innerText = nbEssais;

  perduOuGagnePartie();
}

// Fonction pour initialiser une partie
function initialiserPartie() {
  motAchercher = "";
  motArefaire = "";

  // Initialisation de la partie
  nbAleatoire = Math.floor(Math.random() * 5);
  // console.log(nbAleatoire);

  categorie = tabMots[nbAleatoire][0];
  // console.log(categorie);

  motAchercher = tabMots[nbAleatoire][1];
  // console.log(motAchercher);

  for (let i = 0; i < motAchercher.length; i++) {
    if (motAchercher.charAt(i) == " ") {
      motArefaire += " ";
    } else {
      motArefaire += "_";
    }
  }
  console.log(motArefaire);

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

  document.getElementById("motAchercher").innerText = motArefaire;

  document.getElementById("partiePerdueOuGagnee").innerText =
    "Partie en cours...";

  document.getElementById("textEntrer").disabled = false;
  document.getElementById("btnValider").disabled = false;

  activateAllButtons();
}

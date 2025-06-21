// src/translations.js
export const translations = {
  en: {
    // Home
    homeTitle: "Last Microbe Standing",
    start: "▶️ START",
    howToPlay: "📜 HOW TO PLAY",
    settings: "Settings",
    back: "← Back",

    // Spinner labels
    innerLabels: [
      "TEAL mobile DNA double, one copy moves to a nearby microbe",
      "Remove a mobile DNA from any microbe",
      "Remove a RED mobile DNA",
      "Pick a new mobile DNA and add it to a microbe",
      "Nobody moves! Mobile DNA stay where they are",
      "Add a RED mobile DNA to any microbe",
      "Remove a TEAL mobile DNA",
      "RED mobile DNA double, one copy moves to a nearby microbe",
    ],
    outerLabels: [
      "All GREEN microbes and their DNA double",
      "All PINK microbes and their DNA double",
      "YELLOW microbes are removed unless they have TEAL mobile DNA",
      "PINK microbes are removed unless they have RED mobile DNA",
      "Microbes with mobile DNA are doubled",
      "All microbes without mobile DNA are removed",
      "ORANGE microbes are removed unless they have TEAL mobile DNA",
      "Microbes with mobile DNA are removed",
      "BLUE microbes with a RED mobile DNA double",
      "GREEN microbes with a TEAL mobile DNA double",
      "Microbes with RED mobile DNA double",
      "Microbes with TEAL mobile DNA double",
      "Microbes with RED mobile DNA are removed",
      "Microbes with TEAL mobile DNA are removed",
      "All BLUE microbes are removed, along with their mobile DNA",
      "All ORANGE microbes are removed, along with their mobile DNA",
    ],

    // Spinner UI
    spinOuter: "🎯 Spin Outer",
    spinInner: "🎯 Spin Inner",
    modalTitleInner: "🎉 Inner Wheel Result 🎉",
    modalTitleOuter: "🎉 Outer Wheel Result 🎉",
    labelInner: "Inner",
    labelOuter: "Outer",
  },

  fr: {
    // Home
    homeTitle: "Dernier Microbe Debout",
    start: "▶️ COMMENCER",
    howToPlay: "📜 COMMENT JOUER",
    settings: "Paramètres",
    back: "← Retour",

    // Spinner labels (outer 16)
    outerLabels: [
      "Tous les microbes VERTS et leur ADN doublent",
      "Tous les microbes ROSES et leur ADN doublent",
      "Les microbes JAUNES sont enlevés sauf s’ils ont de l’ADN mobile BLEU SARCELLE",
      "Les microbes ROSES sont enlevés sauf s’ils ont de l’ADN mobile ROUGE",
      "Les microbes avec l’ADN mobile doublent",
      "Tous les microbes sans ADN mobile sont enlevés",
      "Les microbes ORANGE sont enlevés sauf s’ils ont de l’ADN mobile BLEU SARCELLE",
      "Les microbes avec de l’ADN mobile sont enlevés",
      "Les microbes BLEUS avec un ADN mobile ROUGE doublent",
      "Les microbes VERTS avec un ADN mobile BLEU SARCELLE doublent",
      "Les microbes avec l’ADN mobile ROUGE doublent",
      "Les microbes avec l’ADN mobile BLEU SARCELLE doublent",
      "Les microbes avec l’ADN mobile ROUGE sont enlevés",
      "Les microbes avec l’ADN mobile BLEU SARCELLE sont enlevés",
      "Tous les microbes BLEUS sont enlevés, ainsi que leur ADN mobile",
      "Tous les microbes ORANGE sont enlevés, ainsi que leur ADN mobile",
    ],
    // Spinner labels (inner 8)
    innerLabels: [
      "ADN mobiles BLEU SARCELLES se doublent, une copie se déplace à un microbe proche",
      "Enlève un ADN mobile de n’importe quel microbe",
      "Enlève un ADN mobile ROUGE",
      "Choisissez un nouvel ADN mobile et ajoutez-le à un microbe",
      "Personne ne bouge ! Les ADN mobiles restent où ils sont",
      "Ajoutez un ADN mobile ROUGE à n’importe quel microbe",
      "Enlève un ADN mobile BLEU SARCELLE",
      "L’ADN mobile ROUGE se duplique, une copie se déplace vers un microbe proche",
    ],

    // Spinner UI
    spinOuter: "🎯 Tour Extérieur",
    spinInner: "🎯 Tour Intérieur",
    modalTitleInner: "🎉 Résultat Roue Interne 🎉",
    modalTitleOuter: "🎉 Résultat Roue Externe 🎉",
    labelInner: "Interne",
    labelOuter: "Externe",
  },
};

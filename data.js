/* ============================================================
   ComptaQuest — Données du programme DEP 5231 (Comptabilité)
   Contenu porté depuis l'app source vers le moteur web (PWA).
   Format moteur: COMPETENCIES[].tiers[].questions[] avec choices[{fr,en,correct}].
   23 modules officiels (source: Programme d'études 5231,
   ministère de l'Éducation du Québec, 1999), 3 paliers par module.
   Les questions QCM sont des EXEMPLES à valider par les enseignants.
   ============================================================ */

const PROGRAM = {
  fr: {
    code: "5231",
    title: "Comptabilité",
    subtitle: "DEP 5231 — 1350 heures — 90 unités"
  },
  en: {
    code: "5231",
    title: "Accounting",
    subtitle: "DVS 5231 — 1350 hours — 90 credits"
  }
};


function ch(fr, en, correct) { return { fr, en, correct: !!correct }; }

/* Question de type vrai/faux: affirmation à juger. */
function tf(fr, en, isTrue) { return { type: "tf", fr, en, isTrue: !!isTrue }; }

/* Question de type "association de termes": l'élève touche un terme puis
   sa définition correspondante. pairs: tableau de
   { term_fr, term_en, def_fr, def_en }. Toutes les paires doivent être
   associées correctement pour que la question soit considérée réussie. */
function pair(term_fr, term_en, def_fr, def_en) { return { term_fr, term_en, def_fr, def_en }; }
function match(fr, en, pairs) { return { type: "match", fr, en, pairs }; }

/* Question de type "situation complexe" (mise en situation): un court
   scénario réaliste suivi d'un choix multiple basé sur le jugement
   professionnel. Réutilise le même format "choices" qu'un QCM standard. */
function scenario(fr, en, choices) { return { type: "scenario", fr, en, choices }; }

/* Paliers de difficulté d'une quête. Chaque compétence est maintenant
   divisée en 3 paliers progressifs (tiers[]), débloqués l'un après l'autre:
   Débutant -> Intermédiaire -> Avancé. Réussir le palier 1 d'une compétence
   déverrouille la compétence suivante sur la carte; réussir le palier 3
   (Avancé) accorde le badge de maîtrise de la compétence. */

/* Un palier de difficulté d'un module (compat. données Comptabilité). */
function lvl(level, label_fr, label_en, questions) { return { level, label_fr, label_en, questions }; }

const TIER_META = [
  { level: 1, name_fr: "Débutant", name_en: "Beginner", icon: "🌱" },
  { level: 2, name_fr: "Intermédiaire", name_en: "Intermediate", icon: "⚙️" },
  { level: 3, name_fr: "Avancé", name_en: "Advanced", icon: "🏆" }
];


const COMPETENCIES = [
  {
    id: "compta01", code: "461012", hours: 30, order: 1,
    title_fr: "Métier et formation", title_en: "Trade and Training",
    icon: "🧭",
    tiers: [
      lvl(1, "Facile", "Easy", [
        { fr: "Quel diplôme obtient-on à la fin du programme Comptabilité 5231?", en: "What diploma is awarded at the end of the Accounting 5231 program?",
          choices: [ ch("Un diplôme d'études professionnelles (DEP)", "A Diploma of Vocational Studies (DVS)", true), ch("Un diplôme d'études collégiales (DEC)", "A Diploma of College Studies (DEC)"), ch("Une attestation d'études collégiales (AEC)", "An Attestation of College Studies (AEC)"), ch("Un baccalauréat", "A Bachelor's degree") ] },
        { fr: "Quel métier ce programme prépare-t-il principalement à exercer?", en: "What trade does this program mainly prepare students for?",
          choices: [ ch("Commis-comptable", "Accounting clerk", true), ch("Comptable professionnel agréé (CPA)", "Chartered Professional Accountant (CPA)"), ch("Vérificateur fiscal à l'ARC", "Tax auditor at the CRA"), ch("Notaire", "Notary") ] },
        tf("Le programme Comptabilité 5231 comporte 23 modules.", "The Accounting 5231 program has 23 modules.", true)
      ]),
      lvl(2, "Intermédiaire", "Intermediate", [
        { fr: "Combien d'heures totalise le programme Comptabilité 5231?", en: "How many hours does the Accounting 5231 program total?",
          choices: [ ch("1350 heures", "1350 hours", true), ch("900 heures", "900 hours"), ch("1800 heures", "1800 hours"), ch("600 heures", "600 hours") ] },
        { fr: "Combien d'unités totalise le programme (1 unité = 15 heures)?", en: "How many credits does the program total (1 credit = 15 hours)?",
          choices: [ ch("90 unités", "90 credits", true), ch("60 unités", "60 credits"), ch("120 unités", "120 credits"), ch("45 unités", "45 credits") ] },
        tf("Le programme est structuré par compétences, formulé par objectifs et découpé en modules.", "The program is structured by competencies, formulated as objectives, and divided into modules.", true)
      ]),
      lvl(3, "Avancé", "Advanced", [
        { fr: "Le module « Intégration au travail » dure 120 heures. Combien d'unités cela représente-t-il?", en: "The 'Workplace Integration' module lasts 120 hours. How many credits does that represent?",
          choices: [ ch("8 unités", "8 credits", true), ch("6 unités", "6 credits"), ch("10 unités", "10 credits"), ch("12 unités", "12 credits") ] },
        { fr: "Lequel décrit le mieux l'approche du programme Comptabilité?", en: "Which best describes the approach of the Accounting program?",
          choices: [ ch("Une approche par compétences tenant compte des besoins de formation et de la situation de travail", "A competency-based approach that accounts for training needs and the work situation", true), ch("Un programme théorique sans lien avec le marché du travail", "A theoretical program with no link to the job market"), ch("Une formation universitaire menant à la maîtrise", "University training leading to a Master's degree"), ch("Une formation improvisée par chaque enseignant", "Training improvised by each teacher") ] },
        tf("L'obtention du DEP donne automatiquement le titre de CPA.", "Earning the DVS automatically grants the CPA designation.", false)
      ])
    ]
  },
  {
    id: "compta02", code: "461024", hours: 60, order: 2,
    title_fr: "Recherche d'information", title_en: "Information Research",
    icon: "🔍",
    tiers: [
      lvl(1, "Facile", "Easy", [
        { fr: "Pour trouver un taux de TPS/TVQ à jour, quelle source est la plus fiable?", en: "To find an up-to-date GST/QST rate, which source is most reliable?",
          choices: [ ch("Le site officiel de Revenu Québec ou de l'ARC", "The official Revenu Québec or CRA website", true), ch("Un blogue personnel", "A personal blog"), ch("Un forum de discussion", "A discussion forum"), ch("Un réseau social", "A social media post") ] },
        { fr: "Quelle méthode aide à valider la fiabilité d'une source trouvée en ligne?", en: "What helps validate the reliability of a source found online?",
          choices: [ ch("Vérifier l'auteur, la date de publication et l'organisme responsable", "Checking the author, publication date and responsible organization", true), ch("Choisir le premier résultat du moteur de recherche", "Picking the first search engine result"), ch("Se fier au nombre de partages", "Relying on the number of shares"), ch("Ignorer la source si le site est joli", "Ignoring the source if the site looks nice") ] },
        tf("Une information trouvée sur un forum public est toujours considérée comme une source fiable pour un dossier comptable.", "Information found on a public forum is always considered a reliable source for an accounting file.", false)
      ]),
      lvl(2, "Intermédiaire", "Intermediate", [
        { fr: "Où un commis-comptable trouve-t-il normalement les politiques internes de l'entreprise (ex. délais de paiement)?", en: "Where does an accounting clerk normally find a company's internal policies (e.g. payment terms)?",
          choices: [ ch("Dans le manuel de procédures ou la politique interne de l'entreprise", "In the company's procedures manual or internal policy", true), ch("Dans un magazine financier", "In a financial magazine"), ch("Sur un site de comparaison de prix", "On a price comparison website"), ch("Dans une encyclopédie générale", "In a general encyclopedia") ] },
        { fr: "Pour vérifier un numéro d'entreprise du Québec (NEQ), quel outil officiel utiliser?", en: "To verify a Québec enterprise number (NEQ), which official tool should be used?",
          choices: [ ch("Le Registre des entreprises du Québec (REQ)", "The Québec Enterprise Register (REQ)", true), ch("Un moteur de recherche cartographique", "A map search engine"), ch("Un annuaire papier", "A paper directory"), ch("Un réseau social professionnel", "A professional social network") ] },
        tf("Une recherche efficace commence par définir clairement le besoin d'information.", "Effective research starts by clearly defining the information need.", true)
      ]),
      lvl(3, "Avancé", "Advanced", [
        { fr: "Un commis-comptable doit confirmer un taux de TVQ appliqué l'an dernier pour corriger une écriture. Où trouver l'information la plus fiable?", en: "An accounting clerk needs to confirm last year's QST rate to correct an entry. Where is the most reliable information found?",
          choices: [ ch("Les archives officielles / bulletins historiques de Revenu Québec", "Revenu Québec's official archives / historical bulletins", true), ch("Un blogue comptable", "An accounting blog"), ch("Un forum en ligne", "An online forum"), ch("Une estimation de mémoire", "An estimate from memory") ] },
        { fr: "Deux sources en ligne donnent des taux différents pour un même impôt. Quelle est la meilleure démarche?", en: "Two online sources give different rates for the same tax. What is the best approach?",
          choices: [ ch("Vérifier la date de publication et privilégier la source gouvernementale la plus récente", "Check the publication date and favour the most recent government source", true), ch("Faire la moyenne des deux", "Average the two"), ch("Choisir la source la plus simple à lire", "Pick the easiest one to read"), ch("Ignorer le problème", "Ignore the issue") ] },
        tf("Une information officielle mais périmée peut être aussi trompeuse qu'une source non fiable.", "Official but outdated information can be just as misleading as an unreliable source.", true)
      ])
    ]
  },
  {
    id: "compta03", code: "461034", hours: 60, order: 3,
    title_fr: "Tableaux et graphiques", title_en: "Tables and Charts",
    icon: "📊",
    tiers: [
      lvl(1, "Facile", "Easy", [
        { fr: "Quelle fonction Excel additionne automatiquement une plage de cellules?", en: "Which Excel function automatically adds up a range of cells?",
          choices: [ ch("SOMME (SUM)", "SUM", true), ch("MOYENNE (AVERAGE)", "AVERAGE"), ch("NB (COUNT)", "COUNT"), ch("RECHERCHEV (VLOOKUP)", "VLOOKUP") ] },
        { fr: "Quel type de graphique convient le mieux pour montrer la répartition des dépenses par catégorie?", en: "Which chart type best shows the breakdown of expenses by category?",
          choices: [ ch("Un graphique circulaire (camembert)", "A pie chart", true), ch("Un nuage de points", "A scatter plot"), ch("Un graphique radar", "A radar chart"), ch("Un histogramme de fréquence cumulée", "A cumulative frequency histogram") ] },
        tf("RECHERCHEV (VLOOKUP) sert à retrouver une valeur dans un tableau à partir d'une clé de recherche.", "VLOOKUP is used to find a value in a table based on a lookup key.", true)
      ]),
      lvl(2, "Intermédiaire", "Intermediate", [
        { fr: "Que signifie l'utilisation du symbole $ dans une référence Excel comme $A$1?", en: "What does the $ symbol mean in an Excel reference like $A$1?",
          choices: [ ch("Une référence absolue (fixe)", "An absolute (fixed) reference", true), ch("Une référence relative", "A relative reference"), ch("Une erreur de formule", "A formula error"), ch("Un format monétaire", "A currency format") ] },
        { fr: "Quelle fonction compte le nombre de cellules non vides (texte ou nombres) dans une plage?", en: "Which function counts the number of non-empty cells (text or numbers) in a range?",
          choices: [ ch("NBVAL (COUNTA)", "COUNTA", true), ch("NB (COUNT)", "COUNT"), ch("SOMME (SUM)", "SUM"), ch("MOYENNE (AVERAGE)", "AVERAGE") ] },
        tf("Un graphique circulaire (camembert) est toujours le meilleur choix pour montrer une évolution dans le temps.", "A pie chart is always the best choice for showing change over time.", false)
      ]),
      lvl(3, "Avancé", "Advanced", [
        { fr: "On copie une formule =A1*$B$1 de la cellule C1 vers C2. Que devient la formule en C2?", en: "A formula =A1*$B$1 is copied from cell C1 to C2. What does the formula become in C2?",
          choices: [ ch("=A2*$B$1", "=A2*$B$1", true), ch("=A1*$B$1", "=A1*$B$1"), ch("=A2*$B$2", "=A2*$B$2"), ch("=A1*$B$2", "=A1*$B$2") ] },
        { fr: "Quelle combinaison permet de rechercher une valeur même si la colonne recherchée n'est pas la première du tableau (contrairement à RECHERCHEV classique)?", en: "Which combination finds a value even when the lookup column isn't the first one (unlike a basic VLOOKUP)?",
          choices: [ ch("INDEX et ÉQUIV (INDEX/MATCH)", "INDEX and MATCH", true), ch("RECHERCHEV seul", "VLOOKUP alone"), ch("SOMME.SI (SUMIF)", "SUMIF"), ch("NB.SI (COUNTIF)", "COUNTIF") ] },
        tf("Un tableau croisé dynamique modifie en permanence les données sources dès qu'on l'utilise.", "A pivot table permanently modifies the source data as soon as it's used.", false)
      ])
    ]
  },
  {
    id: "compta04", code: "461042", hours: 30, order: 4,
    title_fr: "Calcul de pièces", title_en: "Source Document Calculations",
    icon: "🧮",
    tiers: [
      lvl(1, "Facile", "Easy", [
        { fr: "Un article à 80 $ avec un rabais de 15 % coûte combien avant taxes?", en: "An item priced at $80 with a 15% discount costs how much before taxes?",
          choices: [ ch("68,00 $", "$68.00", true), ch("65,00 $", "$65.00"), ch("72,00 $", "$72.00"), ch("76,00 $", "$76.00") ] },
        { fr: "Avec un taux de TPS de 5 % et de TVQ de 9,975 %, quel est le montant total des taxes sur un achat de 100 $ avant taxes?", en: "With a 5% GST rate and 9.975% QST rate, what is the total tax on a $100 purchase before tax?",
          choices: [ ch("Environ 14,98 $", "About $14.98", true), ch("5,00 $", "$5.00"), ch("9,98 $", "$9.98"), ch("19,95 $", "$19.95") ] },
        tf("Un rabais de 20 % suivi d'un rabais additionnel de 10 % équivaut à un rabais total de 30 %.", "A 20% discount followed by an additional 10% discount equals a total 30% discount.", false)
      ]),
      lvl(2, "Intermédiaire", "Intermediate", [
        { fr: "Sur une facture de 500 $ avec conditions 2/10, n/30, combien doit-on payer si le client règle dans le délai de 10 jours?", en: "On a $500 invoice with terms 2/10, n/30, how much is owed if the customer pays within 10 days?",
          choices: [ ch("490,00 $", "$490.00", true), ch("500,00 $", "$500.00"), ch("480,00 $", "$480.00"), ch("510,00 $", "$510.00") ] },
        { fr: "Un article coûte 45 $ avant taxes. Avec des taxes totales de 14,975 %, quel est le montant de taxes arrondi au cent près?", en: "An item costs $45 before tax. With total taxes of 14.975%, what is the tax amount rounded to the nearest cent?",
          choices: [ ch("6,74 $", "$6.74", true), ch("4,50 $", "$4.50"), ch("6,00 $", "$6.00"), ch("7,50 $", "$7.50") ] },
        tf("L'escompte de caisse (comme 2/10, n/30) encourage un paiement rapide.", "A cash discount (like 2/10, n/30) encourages prompt payment.", true)
      ]),
      lvl(3, "Avancé", "Advanced", [
        { fr: "Une facture de 1200 $ a un rabais commercial de 10 %, puis un escompte de caisse de 2 % (payée à temps). Quel est le montant final payé?", en: "A $1,200 invoice has a 10% trade discount, then a 2% cash discount (paid on time). What is the final amount paid?",
          choices: [ ch("1058,40 $", "$1,058.40", true), ch("1056,00 $", "$1,056.00"), ch("1044,00 $", "$1,044.00"), ch("1076,40 $", "$1,076.40") ] },
        { fr: "Un bien coûte 250 $ avant taxes. Avec des taxes de 14,975 %, quel est le prix total arrondi au cent près?", en: "An item costs $250 before tax. With 14.975% tax, what is the total price rounded to the nearest cent?",
          choices: [ ch("287,44 $", "$287.44", true), ch("285,00 $", "$285.00"), ch("290,00 $", "$290.00"), ch("275,44 $", "$275.44") ] },
        tf("L'ordre d'application (rabais commercial avant escompte de caisse) peut changer le montant final payé.", "The order of application (trade discount before cash discount) can change the final amount paid.", true)
      ])
    ]
  },
  {
    id: "compta05", code: "461054", hours: 60, order: 5,
    title_fr: "Mise en page de correspondance", title_en: "Correspondence Layout",
    icon: "✉️",
    tiers: [
      lvl(1, "Facile", "Easy", [
        { fr: "Dans une lettre d'affaires, où se place généralement la date?", en: "In a business letter, where is the date usually placed?",
          choices: [ ch("En haut de la lettre, souvent alignée à droite", "At the top of the letter, often right-aligned", true), ch("Au bas de la lettre", "At the bottom of the letter"), ch("Dans la marge gauche seulement", "In the left margin only"), ch("Après la signature", "After the signature") ] },
        { fr: "Quel élément identifie clairement le destinataire d'une lettre d'affaires?", en: "Which element clearly identifies the recipient of a business letter?",
          choices: [ ch("La vedette (nom et adresse du destinataire)", "The inside address (recipient's name and address)", true), ch("L'objet seul", "The subject line alone"), ch("Le post-scriptum", "The postscript"), ch("La formule de salutation seulement", "The closing salutation alone") ] },
        tf("Le style « bloc » aligne tous les éléments de la lettre à la marge gauche, sans retrait.", "The 'block' style aligns every element of the letter to the left margin, with no indentation.", true)
      ]),
      lvl(2, "Intermédiaire", "Intermediate", [
        { fr: "Que doit toujours contenir une lettre d'affaires professionnelle avant la signature?", en: "What must a professional business letter always contain before the signature?",
          choices: [ ch("Une formule de salutation appropriée", "An appropriate closing salutation", true), ch("Un émoji", "An emoji"), ch("Une blague", "A joke"), ch("Rien du tout", "Nothing at all") ] },
        { fr: "Que signifie la mention « p. j. » dans une lettre?", en: "What does the abbreviation 'encl.' mean in a letter?",
          choices: [ ch("Pièce(s) jointe(s)", "Enclosure(s)", true), ch("Pour information", "For information"), ch("Personnel et joint", "Personal and joint"), ch("Priorité jointe", "Joint priority") ] },
        tf("L'objet d'une lettre est optionnel et n'a aucun lien avec le contenu du message.", "The subject line of a letter is optional and has no connection to the content of the message.", false)
      ]),
      lvl(3, "Avancé", "Advanced", [
        { fr: "Dans une lettre avec copie conforme envoyée à une troisième personne, quelle mention utilise-t-on?", en: "In a letter with a copy sent to a third party, which notation is used?",
          choices: [ ch("« c. c. »", "'cc'", true), ch("« p. j. »", "'encl.'"), ch("« N/Réf. »", "'Our ref.'"), ch("« À l'att. de »", "'Attn:'") ] },
        { fr: "Une lettre professionnelle contient une erreur d'adresse dans la vedette. Quelle est la meilleure pratique?", en: "A professional letter has an address error in the inside address. What is the best practice?",
          choices: [ ch("Corriger et réimprimer avant l'envoi", "Correct it and reprint before sending", true), ch("Envoyer telle quelle", "Send it as is"), ch("Ajouter une note manuscrite", "Add a handwritten note"), ch("Ignorer l'erreur", "Ignore the error") ] },
        tf("Le style « semi-bloc » indente le premier paragraphe, contrairement au style bloc.", "The 'semi-block' style indents the first line of paragraphs, unlike the block style.", true)
      ])
    ]
  },
  {
    id: "compta06", code: "461066", hours: 90, order: 6,
    title_fr: "Rédaction en français", title_en: "Writing in French",
    icon: "📝",
    tiers: [
      lvl(1, "Facile", "Easy", [
        { fr: "Quelle phrase respecte l'accord du participe passé?", en: "Which sentence correctly applies past-participle agreement?",
          choices: [ ch("Les frais qu'elle a payés", "Les frais qu'elle a payés", true), ch("Les frais qu'elle a payé", "Les frais qu'elle a payé"), ch("Les frais qu'elle a payées", "Les frais qu'elle a payées"), ch("Les frais qu'elle a payer", "Les frais qu'elle a payer") ] },
        { fr: "Quel mot complète correctement: « Veuillez trouver ____ la facture demandée. »?", en: "Which word correctly completes: 'Veuillez trouver ____ la facture demandée.'?",
          choices: [ ch("ci-joint", "ci-joint", true), ch("si joint", "si joint"), ch("cie-joint", "cie-joint"), ch("si-joint", "si-joint") ] },
        tf("Dans un texte professionnel, il faut éviter les anglicismes comme « canceller » au lieu de « annuler ».", "In professional writing, anglicisms like 'canceller' instead of 'annuler' should be avoided.", true)
      ]),
      lvl(2, "Intermédiaire", "Intermediate", [
        { fr: "Quelle phrase convient à un courriel professionnel?", en: "Which sentence is appropriate for a professional email?",
          choices: [ ch("Bonjour Madame Tremblay, veuillez trouver ci-joint le rapport demandé.", "Bonjour Madame Tremblay, veuillez trouver ci-joint le rapport demandé.", true), ch("Yo, le rapport est là, gère-toi.", "Yo, le rapport est là, gère-toi."), ch("Le rapport... peut-être... si t'as le temps mdr", "Le rapport... peut-être... si t'as le temps mdr"), ch("Rapport ci-joint STP merci bye", "Rapport ci-joint STP merci bye") ] },
        { fr: "Quelle est la formule de politesse la plus appropriée pour clore une lettre d'affaires formelle?", en: "Which closing is most appropriate for a formal business letter?",
          choices: [ ch("Nous vous prions d'agréer, Madame, l'expression de nos salutations distinguées.", "Nous vous prions d'agréer, Madame, l'expression de nos salutations distinguées.", true), ch("Salut, à plus!", "Salut, à plus!"), ch("Bien à toi mon chum", "Bien à toi mon chum"), ch("OK merci bye", "OK merci bye") ] },
        tf("Dans un texte d'affaires, plus les phrases sont longues et complexes, plus le texte paraît professionnel.", "In business writing, the longer and more complex the sentences, the more professional the text appears.", false)
      ]),
      lvl(3, "Avancé", "Advanced", [
        { fr: "Quelle phrase respecte le mieux la concordance des temps?", en: "Which sentence best respects tense agreement?",
          choices: [ ch("Elle a dit qu'elle enverrait la facture demain.", "Elle a dit qu'elle enverrait la facture demain.", true), ch("Elle a dit qu'elle enverra la facture hier.", "Elle a dit qu'elle enverra la facture hier."), ch("Elle dit qu'elle avait envoyé demain.", "Elle dit qu'elle avait envoyé demain."), ch("Elle disait qu'elle enverrait hier.", "Elle disait qu'elle enverrait hier.") ] },
        { fr: "Repérez la phrase sans faute:", en: "Identify the sentence without an error:",
          choices: [ ch("Ci-joint la facture que vous avez demandée.", "Ci-joint la facture que vous avez demandée.", true), ch("Ci-jointe la facture que vous avez demandé.", "Ci-jointe la facture que vous avez demandé."), ch("Ci-joints la facture que vous avez demandée.", "Ci-joints la facture que vous avez demandée."), ch("Ci-joint la facture que vous avez demandés.", "Ci-joint la facture que vous avez demandés.") ] },
        tf("« Malgré que » est une formulation fautive en français standard; on préfère « bien que » ou « malgré le fait que ».", "'Malgré que' is considered incorrect in standard French; 'bien que' or 'malgré le fait que' is preferred.", true)
      ])
    ]
  },
  {
    id: "compta07", code: "461074", hours: 60, order: 7,
    title_fr: "Traitement de pièces", title_en: "Processing Source Documents",
    icon: "🧾",
    tiers: [
      lvl(1, "Facile", "Easy", [
        { fr: "Quelle pièce justificative prouve un achat à crédit fait à un fournisseur?", en: "Which source document proves a credit purchase made from a supplier?",
          choices: [ ch("La facture d'achat", "The purchase invoice", true), ch("Le relevé bancaire", "The bank statement"), ch("Le bon de commande seul", "The purchase order alone"), ch("La carte professionnelle", "The business card") ] },
        { fr: "Dans le journal général, une augmentation d'un compte de charge s'enregistre...", en: "In the general journal, an increase to an expense account is recorded...",
          choices: [ ch("Au débit", "As a debit", true), ch("Au crédit", "As a credit"), ch("Ni l'un ni l'autre", "Neither"), ch("Dans les deux colonnes", "In both columns") ] },
        tf("Chaque écriture comptable doit toujours respecter l'égalité débit = crédit.", "Every accounting entry must always respect the equality debit = credit.", true)
      ]),
      lvl(2, "Intermédiaire", "Intermediate", [
        { fr: "Quel document interne demande officiellement un achat avant que la facture n'arrive?", en: "Which internal document formally requests a purchase before the invoice arrives?",
          choices: [ ch("Le bon de commande", "The purchase order", true), ch("Le relevé de compte", "The account statement"), ch("Le chèque", "The cheque"), ch("Le bordereau de dépôt", "The deposit slip") ] },
        { fr: "Une note de crédit émise à un client sert à...", en: "A credit note issued to a customer is used to...",
          choices: [ ch("Réduire le solde dû suite à un retour ou un rabais", "Reduce the balance owed following a return or an allowance", true), ch("Augmenter la dette du client", "Increase the customer's debt"), ch("Remplacer une facture normale", "Replace a normal invoice"), ch("Annuler un paiement de paie", "Cancel a payroll payment") ] },
        tf("Le bon de commande, et non le bon de réception, confirme que la marchandise a bien été reçue.", "The purchase order, not the receiving report, confirms that the goods were actually received.", false)
      ]),
      lvl(3, "Avancé", "Advanced", [
        { fr: "Une facture reçue indique un montant différent du bon de commande. Quelle est la bonne pratique?", en: "A received invoice shows an amount different from the purchase order. What is the correct practice?",
          choices: [ ch("Comparer bon de commande, bon de réception et facture avant de payer", "Compare the purchase order, receiving report and invoice before paying", true), ch("Payer immédiatement le montant facturé", "Pay the invoiced amount immediately"), ch("Ignorer l'écart", "Ignore the discrepancy"), ch("Modifier la facture soi-même", "Alter the invoice yourself") ] },
        { fr: "Quel effet a l'enregistrement d'une note de crédit fournisseur sur le compte fournisseur?", en: "What effect does recording a supplier credit note have on the accounts payable balance?",
          choices: [ ch("Diminue le solde à payer", "Decreases the balance owed", true), ch("L'augmente", "Increases it"), ch("Aucun effet", "No effect"), ch("Affecte seulement la caisse", "Only affects cash") ] },
        tf("Le rapprochement à trois voies concerne uniquement les états financiers de fin d'année, jamais les paiements courants.", "The three-way match only concerns year-end financial statements, never routine payments.", false)
      ])
    ]
  },
  {
    id: "compta08", code: "461083", hours: 45, order: 8,
    title_fr: "Gestion de l'encaisse", title_en: "Cash Management",
    icon: "💵",
    tiers: [
      lvl(1, "Facile", "Easy", [
        { fr: "Le fonds de petite caisse sert principalement à...", en: "The petty cash fund is mainly used to...",
          choices: [ ch("Payer de menues dépenses courantes", "Pay small routine expenses", true), ch("Payer les salaires", "Pay employee salaries"), ch("Payer les taxes annuelles", "Pay annual taxes"), ch("Investir en bourse", "Invest in the stock market") ] },
        { fr: "Lors du rapprochement bancaire, un chèque émis mais pas encore encaissé par le fournisseur est appelé...", en: "During bank reconciliation, a cheque issued but not yet cashed by the supplier is called a...",
          choices: [ ch("Chèque en circulation", "Outstanding cheque", true), ch("Dépôt en transit", "Deposit in transit"), ch("Frais bancaires", "Bank charges"), ch("Chèque sans provision (NSF)", "NSF cheque") ] },
        tf("Un dépôt en transit est un dépôt enregistré par l'entreprise mais qui n'apparaît pas encore sur le relevé bancaire.", "A deposit in transit is a deposit recorded by the company that has not yet appeared on the bank statement.", true)
      ]),
      lvl(2, "Intermédiaire", "Intermediate", [
        { fr: "Que doit-on faire si la petite caisse présente un déficit lors du renflouement?", en: "What should be done if petty cash shows a shortage when replenished?",
          choices: [ ch("Enregistrer l'écart dans un compte d'écarts de caisse", "Record the shortage in a cash-over-and-short account", true), ch("Ignorer l'écart", "Ignore the shortage"), ch("Modifier les reçus", "Alter the receipts"), ch("Augmenter le fonds sans justification", "Increase the fund without justification") ] },
        { fr: "Un chèque NSF (sans provision) reçu d'un client doit être...", en: "An NSF cheque received from a customer should be...",
          choices: [ ch("Retiré du compte banque et remis au compte client", "Removed from the cash account and the customer's balance restored", true), ch("Ignoré", "Ignored"), ch("Ajouté à la petite caisse", "Added to petty cash"), ch("Considéré comme un revenu", "Treated as revenue") ] },
        tf("Le rapprochement bancaire compare uniquement les dépôts, jamais les retraits ou les chèques en circulation.", "Bank reconciliation only compares deposits, never withdrawals or outstanding cheques.", false)
      ]),
      lvl(3, "Avancé", "Advanced", [
        { fr: "Le solde du relevé bancaire est de 3000 $. Il y a 400 $ de chèques en circulation et 250 $ de dépôt en transit. Quel est le solde bancaire rajusté?", en: "The bank statement balance is $3,000. There is $400 of outstanding cheques and $250 of deposit in transit. What is the adjusted bank balance?",
          choices: [ ch("2850 $", "$2,850", true), ch("3150 $", "$3,150"), ch("2350 $", "$2,350"), ch("3650 $", "$3,650") ] },
        { fr: "Le solde des livres est de 2850 $ avant des frais bancaires de 30 $ non enregistrés. Quel est le solde ajusté des livres?", en: "The book balance is $2,850 before $30 of unrecorded bank charges. What is the adjusted book balance?",
          choices: [ ch("2820 $", "$2,820", true), ch("2880 $", "$2,880"), ch("2850 $", "$2,850"), ch("2790 $", "$2,790") ] },
        tf("Après rapprochement, le solde ajusté de la banque doit être égal au solde ajusté des livres.", "After reconciliation, the adjusted bank balance must equal the adjusted book balance.", true)
      ])
    ]
  },
  {
    id: "compta09", code: "461093", hours: 45, order: 9,
    title_fr: "Législation des affaires", title_en: "Business Law",
    icon: "⚖️",
    tiers: [
      lvl(1, "Facile", "Easy", [
        { fr: "Quelle loi encadre les normes minimales de travail au Québec (salaire minimum, vacances, etc.)?", en: "Which law sets minimum labour standards in Québec (minimum wage, vacation, etc.)?",
          choices: [ ch("La Loi sur les normes du travail", "The Act respecting Labour Standards", true), ch("La Loi de l'impôt sur le revenu seule", "The Income Tax Act alone"), ch("Le Code civil seul", "The Civil Code alone"), ch("La Loi sur la protection du consommateur", "The Consumer Protection Act") ] },
        { fr: "Quel organisme perçoit la TPS et la TVQ au Québec?", en: "Which body collects GST and QST in Québec?",
          choices: [ ch("Revenu Québec", "Revenu Québec", true), ch("La CNESST", "The CNESST"), ch("Le Registraire des entreprises", "The Enterprise Registrar"), ch("La Banque du Canada", "The Bank of Canada") ] },
        tf("Une société par actions (compagnie incorporée) est une entité légale distincte de ses actionnaires.", "A corporation (incorporated company) is a legal entity distinct from its shareholders.", true)
      ]),
      lvl(2, "Intermédiaire", "Intermediate", [
        { fr: "Une entreprise individuelle doit-elle s'immatriculer au Registraire des entreprises du Québec?", en: "Must a sole proprietorship register with the Québec Enterprise Registrar?",
          choices: [ ch("Oui, si elle exploite sous un nom autre que celui du propriétaire", "Yes, if it operates under a name other than the owner's", true), ch("Non, jamais", "No, never"), ch("Seulement si elle a des employés", "Only if it has employees"), ch("Seulement les sociétés par actions doivent le faire", "Only corporations must do so") ] },
        { fr: "Quelle est la responsabilité d'un propriétaire d'entreprise individuelle envers les dettes de l'entreprise?", en: "What is a sole proprietor's liability for the debts of the business?",
          choices: [ ch("Illimitée: ses biens personnels peuvent être engagés", "Unlimited: personal assets can be at stake", true), ch("Limitée à sa mise de fonds", "Limited to their capital contribution"), ch("Nulle", "None"), ch("Partagée avec l'État", "Shared with the government") ] },
        tf("Dans une société par actions, les actionnaires sont toujours personnellement responsables de toutes les dettes de l'entreprise.", "In a corporation, shareholders are always personally liable for all of the company's debts.", false)
      ]),
      lvl(3, "Avancé", "Advanced", [
        { fr: "Une entreprise omet de s'immatriculer alors qu'elle exploite sous un nom commercial différent. Quelle est une conséquence possible?", en: "A business fails to register while operating under a different trade name. What is a possible consequence?",
          choices: [ ch("Une infraction pouvant entraîner des pénalités et des limites sur ses recours judiciaires", "An offence that can lead to penalties and limits on its ability to take legal action", true), ch("Aucune conséquence", "No consequence"), ch("Une dissolution automatique immédiate", "Immediate automatic dissolution"), ch("L'obligation de devenir une société par actions", "An obligation to become a corporation") ] },
        { fr: "Quelle affirmation distingue le mieux une société en nom collectif d'une société par actions?", en: "Which statement best distinguishes a general partnership from a corporation?",
          choices: [ ch("Dans une société en nom collectif, les associés répondent généralement des dettes; dans une société par actions, la responsabilité des actionnaires est limitée", "In a general partnership, partners are generally liable for debts; in a corporation, shareholder liability is limited", true), ch("C'est l'inverse", "It's the opposite"), ch("Les deux offrent une responsabilité illimitée", "Both offer unlimited liability"), ch("Les deux offrent une responsabilité limitée", "Both offer limited liability") ] },
        tf("La Loi sur les normes du travail fixe notamment le salaire minimum et les normes de vacances au Québec.", "The Act respecting Labour Standards notably sets the minimum wage and vacation standards in Québec.", true)
      ])
    ]
  },
  {
    id: "compta10", code: "461102", hours: 30, order: 10,
    title_fr: "Interactions professionnelles", title_en: "Professional Interactions",
    icon: "🤝",
    tiers: [
      lvl(1, "Facile", "Easy", [
        { fr: "Lorsqu'un client est insatisfait au téléphone, la meilleure attitude est...", en: "When a client is upset on the phone, the best attitude is to...",
          choices: [ ch("Écouter activement et rester calme et courtois", "Listen actively and stay calm and courteous", true), ch("Raccrocher", "Hang up"), ch("Argumenter fermement", "Argue firmly"), ch("Ignorer la plainte", "Ignore the complaint") ] },
        { fr: "Qu'est-ce que l'écoute active?", en: "What is active listening?",
          choices: [ ch("Reformuler pour confirmer sa compréhension", "Rephrasing to confirm understanding", true), ch("Parler sans arrêt", "Talking non-stop"), ch("Répondre avant que l'autre ait fini", "Answering before the other person finishes"), ch("Regarder son téléphone pendant la conversation", "Looking at your phone during the conversation") ] },
        tf("Le savoir-être (attitudes, ponctualité, respect) est aussi important que les compétences techniques en entreprise.", "Soft skills (attitude, punctuality, respect) are as important as technical skills in the workplace.", true)
      ]),
      lvl(2, "Intermédiaire", "Intermediate", [
        { fr: "En milieu de travail, le respect de la confidentialité des dossiers financiers est...", en: "In the workplace, respecting the confidentiality of financial files is...",
          choices: [ ch("Une obligation professionnelle essentielle", "An essential professional obligation", true), ch("Facultatif", "Optional"), ch("Important seulement pour les gros clients", "Important only for large clients"), ch("Sans importance", "Unimportant") ] },
        { fr: "Face à un collègue qui commet une erreur dans un dossier, la meilleure attitude est de...", en: "When a colleague makes an error in a file, the best attitude is to...",
          choices: [ ch("En parler respectueusement et proposer une correction", "Discuss it respectfully and suggest a correction", true), ch("Le dénoncer publiquement", "Call them out publicly"), ch("Ignorer l'erreur", "Ignore the error"), ch("Corriger sans en parler à personne", "Fix it without telling anyone") ] },
        tf("Un ton ferme et sec est toujours préférable à un ton respectueux lorsqu'on est en désaccord au travail.", "A firm, curt tone is always preferable to a respectful tone when disagreeing at work.", false)
      ]),
      lvl(3, "Avancé", "Advanced", [
        { fr: "Un client exige que tu modifies un montant sur une facture sans justification valable. Quelle est la bonne conduite?", en: "A client demands you alter an invoice amount without valid justification. What is the correct conduct?",
          choices: [ ch("Refuser poliment et expliquer les règles applicables", "Politely refuse and explain the applicable rules", true), ch("Accepter pour satisfaire le client", "Comply to satisfy the client"), ch("Modifier discrètement sans en parler", "Alter it quietly without telling anyone"), ch("Ignorer la demande sans répondre", "Ignore the request without responding") ] },
        { fr: "Lors d'un désaccord avec un supérieur sur une procédure, la meilleure approche est de...", en: "When disagreeing with a supervisor about a procedure, the best approach is to...",
          choices: [ ch("Exposer son point de vue avec des faits, dans le respect de la hiérarchie", "Present your view with facts, while respecting the hierarchy", true), ch("Refuser d'exécuter sans discussion", "Refuse to comply without discussion"), ch("Se plaindre à des collègues", "Complain to coworkers"), ch("Ignorer la directive", "Ignore the directive") ] },
        tf("La discrétion professionnelle s'applique aussi aux informations entendues par hasard au bureau.", "Professional discretion also applies to information overheard by chance at the office.", true)
      ])
    ]
  },
  {
    id: "compta11", code: "461115", hours: 75, order: 11,
    title_fr: "Communication en anglais", title_en: "Communication in English",
    icon: "🇬🇧",
    tiers: [
      lvl(1, "Facile", "Easy", [
        { fr: "Que signifie « invoice » en français?", en: "What does 'invoice' mean in French?",
          choices: [ ch("Facture", "Facture", true), ch("Reçu", "Reçu"), ch("Devis", "Devis"), ch("Relevé", "Relevé") ] },
        { fr: "Comment dit-on « compte à recevoir » en anglais?", en: "How do you say 'compte à recevoir' in English?",
          choices: [ ch("Accounts receivable", "Accounts receivable", true), ch("Accounts payable", "Accounts payable"), ch("Bank statement", "Bank statement"), ch("Petty cash", "Petty cash") ] },
        tf("« Payroll » signifie « liste de paie » en français.", "'Payroll' means 'liste de paie' in French.", true)
      ]),
      lvl(2, "Intermédiaire", "Intermediate", [
        { fr: "Quelle formule de politesse convient pour terminer un courriel d'affaires en anglais?", en: "Which closing is appropriate for a business email in English?",
          choices: [ ch("Best regards,", "Best regards,", true), ch("See ya,", "See ya,"), ch("Whatever,", "Whatever,"), ch("Bye bye,", "Bye bye,") ] },
        { fr: "Que signifie « past due » sur une facture?", en: "What does 'past due' mean on an invoice?",
          choices: [ ch("En retard de paiement", "Payment is overdue", true), ch("Payée d'avance", "Paid in advance"), ch("Annulée", "Cancelled"), ch("Gratuite", "Free of charge") ] },
        tf("« Statement of account » désigne un chèque annulé, pas un relevé de compte.", "'Statement of account' refers to a cancelled cheque, not an account statement.", false)
      ]),
      lvl(3, "Avancé", "Advanced", [
        { fr: "Quelle phrase anglaise convient le mieux pour relancer poliment un client en retard de paiement?", en: "Which English sentence is best to politely follow up with a client whose payment is overdue?",
          choices: [ ch("We would like to remind you that invoice #245 is now past due. Please arrange payment at your earliest convenience.", "We would like to remind you that invoice #245 is now past due. Please arrange payment at your earliest convenience.", true), ch("You still owe us money, pay now.", "You still owe us money, pay now."), ch("Whatever, just send the cheque.", "Whatever, just send the cheque."), ch("Invoice thing not paid yet I think?", "Invoice thing not paid yet I think?") ] },
        { fr: "Que signifie « net 30 » sur une facture en anglais?", en: "What does 'net 30' mean on an invoice?",
          choices: [ ch("Le paiement complet est dû dans les 30 jours", "Full payment is due within 30 days", true), ch("Un rabais de 30 %", "A 30% discount"), ch("Un solde net après taxes", "A net balance after taxes"), ch("Une garantie de 30 jours", "A 30-day warranty") ] },
        tf("« Outstanding balance » signifie le solde encore dû, non payé.", "'Outstanding balance' means the amount still owed, unpaid.", true)
      ])
    ]
  },
  {
    id: "compta12", code: "461122", hours: 30, order: 12,
    title_fr: "Production de paies", title_en: "Payroll Production",
    icon: "💰",
    tiers: [
      lvl(1, "Facile", "Easy", [
        { fr: "Quelles sont des retenues obligatoires courantes sur la paie au Québec?", en: "Which are common mandatory deductions on payroll in Québec?",
          choices: [ ch("RRQ, RQAP, assurance-emploi et impôts", "QPP, QPIP, Employment Insurance and income taxes", true), ch("Seulement l'impôt fédéral", "Only federal tax"), ch("Aucune retenue n'est obligatoire", "No deduction is mandatory"), ch("Seulement les cotisations REER", "Only RRSP contributions") ] },
        { fr: "Un relevé de paie (talon de chèque) doit indiquer...", en: "A pay stub must show...",
          choices: [ ch("Le salaire brut, les retenues et le salaire net", "Gross pay, deductions and net pay", true), ch("Seulement le salaire net", "Only net pay"), ch("Seulement les heures travaillées", "Only hours worked"), ch("Aucun détail précis", "No specific detail") ] },
        tf("Les heures supplémentaires sont généralement payées à un taux majoré, souvent 1,5 fois le taux normal.", "Overtime hours are generally paid at a premium rate, often 1.5 times the regular rate.", true)
      ]),
      lvl(2, "Intermédiaire", "Intermediate", [
        { fr: "Un employé gagne 22 $/heure et travaille 40 heures dans la semaine. Quel est son salaire brut?", en: "An employee earns $22/hour and works 40 hours in the week. What is their gross pay?",
          choices: [ ch("880 $", "$880", true), ch("800 $", "$800"), ch("920 $", "$920"), ch("440 $", "$440") ] },
        { fr: "Un employé à 18 $/heure travaille 44 heures dans une semaine (seuil des heures sup: 40h, majoration 1,5x). Quel est son salaire brut?", en: "An employee at $18/hour works 44 hours in a week (overtime threshold: 40h, at 1.5x). What is their gross pay?",
          choices: [ ch("828 $", "$828", true), ch("792 $", "$792"), ch("864 $", "$864"), ch("720 $", "$720") ] },
        tf("Les cotisations de l'employeur (RRQ, AE, RQAP) sont déjà incluses dans le salaire brut versé à l'employé.", "Employer contributions (QPP, EI, QPIP) are already included in the employee's gross pay.", false)
      ]),
      lvl(3, "Avancé", "Advanced", [
        { fr: "Un employé gagne 50 000 $/an, payé aux 2 semaines (26 périodes). Quel est son salaire brut par période?", en: "An employee earns $50,000/year, paid biweekly (26 periods). What is their gross pay per period?",
          choices: [ ch("1923,08 $", "$1,923.08", true), ch("2083,33 $", "$2,083.33"), ch("1666,67 $", "$1,666.67"), ch("1000,00 $", "$1,000.00") ] },
        { fr: "Une entreprise remet en retard les retenues à la source (RRQ, AE, impôts) à Revenu Québec/l'ARC. Quelle est la conséquence typique?", en: "A company remits source deductions (QPP, EI, taxes) late to Revenu Québec/CRA. What is the typical consequence?",
          choices: [ ch("Des pénalités et des intérêts pour remise en retard", "Penalties and interest for late remittance", true), ch("Aucune conséquence", "No consequence"), ch("Une réduction d'impôt", "A tax reduction"), ch("Un crédit automatique", "An automatic credit") ] },
        tf("Le salaire net est toujours plus élevé que le salaire brut, car il inclut les avantages sociaux.", "Net pay is always higher than gross pay, since it includes benefits.", false)
      ])
    ]
  },
  {
    id: "compta13", code: "461134", hours: 60, order: 13,
    title_fr: "Rédaction en anglais", title_en: "Writing in English",
    icon: "✍️",
    tiers: [
      lvl(1, "Facile", "Easy", [
        { fr: "Quelle phrase est correctement rédigée en anglais des affaires?", en: "Which sentence is correctly written in business English?",
          choices: [ ch("Please find attached the requested invoice.", "Please find attached the requested invoice.", true), ch("Find please the invoice attach.", "Find please the invoice attach."), ch("The invoice, attached is, please find.", "The invoice, attached is, please find."), ch("Please to find attach invoice.", "Please to find attach invoice.") ] },
        { fr: "Comment dit-on « ci-joint » en anglais dans un courriel?", en: "How do you say 'ci-joint' in an English email?",
          choices: [ ch("Attached / Please find attached", "Attached / Please find attached", true), ch("Close to", "Close to"), ch("Joined here", "Joined here"), ch("Near this", "Near this") ] },
        tf("« Dear Mr. Tremblay, » est une formule d'appel appropriée dans une lettre d'affaires en anglais.", "'Dear Mr. Tremblay,' is an appropriate salutation in an English business letter.", true)
      ]),
      lvl(2, "Intermédiaire", "Intermediate", [
        { fr: "Quel est le pluriel correct de « invoice »?", en: "What is the correct plural of 'invoice'?",
          choices: [ ch("invoices", "invoices", true), ch("invoicess", "invoicess"), ch("invoicies", "invoicies"), ch("invoice's", "invoice's") ] },
        { fr: "Quelle formule convient pour démarrer un courriel formel à une personne inconnue?", en: "Which greeting suits a formal email to an unknown recipient?",
          choices: [ ch("Dear Sir or Madam,", "Dear Sir or Madam,", true), ch("Hey you,", "Hey you,"), ch("To whom,", "To whom,"), ch("Hiya,", "Hiya,") ] },
        tf("En anglais des affaires, les contractions comme « don't » sont toujours préférées, même dans les lettres très formelles.", "In business English, contractions like 'don't' are always preferred, even in very formal letters.", false)
      ]),
      lvl(3, "Avancé", "Advanced", [
        { fr: "Quelle version convient le mieux pour informer poliment un fournisseur d'une erreur de facturation?", en: "Which version is best to politely inform a supplier of a billing error?",
          choices: [ ch("We noticed a discrepancy on invoice #112 and would appreciate your review at your earliest convenience.", "We noticed a discrepancy on invoice #112 and would appreciate your review at your earliest convenience.", true), ch("Your invoice is wrong, fix it.", "Your invoice is wrong, fix it."), ch("Something seems off maybe on that invoice thing.", "Something seems off maybe on that invoice thing."), ch("This invoice is a huge mistake on your part!!", "This invoice is a huge mistake on your part!!") ] },
        { fr: "Complétez correctement: « Enclosed ____ the documents you requested. »", en: "Complete correctly: 'Enclosed ____ the documents you requested.'",
          choices: [ ch("are", "are", true), ch("is", "is"), ch("be", "be"), ch("being", "being") ] },
        tf("« I would like to inform you that... » est une formule appropriée pour introduire une information importante dans une lettre d'affaires.", "'I would like to inform you that...' is an appropriate phrase to introduce important information in a business letter.", true)
      ])
    ]
  },
  {
    id: "compta14", code: "461144", hours: 60, order: 14,
    title_fr: "Traitement de données", title_en: "Data Processing",
    icon: "💻",
    tiers: [
      lvl(1, "Facile", "Easy", [
        { fr: "Qu'est-ce qu'un logiciel comptable comme Sage ou QuickBooks permet de faire principalement?", en: "What does accounting software like Sage or QuickBooks mainly do?",
          choices: [ ch("Tenir les livres comptables et générer des rapports financiers", "Keep the books and generate financial reports", true), ch("Faire de la retouche photo", "Edit photos"), ch("Gérer un réseau social", "Manage a social network"), ch("Concevoir des sites web", "Design websites") ] },
        { fr: "Pourquoi est-il important de faire des sauvegardes régulières des données comptables?", en: "Why is it important to back up accounting data regularly?",
          choices: [ ch("Pour éviter la perte de données en cas de problème informatique", "To avoid data loss in case of a computer problem", true), ch("Pour respecter une procédure de sécurité interne au bureau", "To follow an internal office security procedure"), ch("Cela n'est nécessaire que pour les très gros dossiers", "It is only necessary for very large files"), ch("Pour augmenter la taille des fichiers", "To increase file size") ] },
        tf("Un fichier CSV est un fichier de données séparées par des virgules, souvent utilisé pour importer/exporter des données.", "A CSV file contains comma-separated data, often used to import/export data.", true)
      ]),
      lvl(2, "Intermédiaire", "Intermediate", [
        { fr: "Restreindre les accès selon les rôles (permissions) aide surtout à...", en: "Restricting access based on roles (permissions) mainly helps to...",
          choices: [ ch("Protéger les données financières sensibles", "Protect sensitive financial data", true), ch("Ralentir le système", "Slow down the system"), ch("Uniquement la date de réception du document", "Only the document's date of receipt"), ch("Compliquer le travail sans raison", "Complicate work for no reason") ] },
        { fr: "Quelle pratique réduit le risque de perte de données comptables en cas de panne?", en: "Which practice reduces the risk of losing accounting data in case of a failure?",
          choices: [ ch("Des sauvegardes automatiques régulières sur un support externe ou infonuagique", "Regular automatic backups to an external or cloud location", true), ch("Ne rien sauvegarder", "Not backing up at all"), ch("Sauvegarder une fois par an", "Backing up once a year"), ch("Désactiver les mots de passe", "Disabling passwords") ] },
        tf("La force d'un mot de passe n'a aucune influence sur la sécurité des données comptables; seul le pare-feu compte.", "Password strength has no influence on accounting data security; only the firewall matters.", false)
      ]),
      lvl(3, "Avancé", "Advanced", [
        { fr: "Une entreprise perd l'accès à son ordinateur principal (panne matérielle). Quelle pratique aurait le mieux protégé ses données?", en: "A company loses access to its main computer (hardware failure). Which practice would have best protected its data?",
          choices: [ ch("Des sauvegardes régulières automatisées vers un emplacement distinct", "Regular automated backups to a separate location", true), ch("Un mot de passe complexe seulement", "A complex password alone"), ch("Un écran plus grand", "A bigger screen"), ch("Un logiciel plus récent", "Newer software") ] },
        { fr: "Pourquoi limiter les permissions d'accès selon les rôles (ex. commis vs superviseur) est-il important en comptabilité?", en: "Why is limiting access permissions by role (e.g. clerk vs supervisor) important in accounting?",
          choices: [ ch("Cela réduit le risque d'erreurs et de fraude en limitant qui peut modifier certaines données", "It reduces the risk of errors and fraud by limiting who can modify certain data", true), ch("Cela ralentit le travail sans bénéfice", "It slows down work with no benefit"), ch("Cela ne concerne que la présentation visuelle du document", "It only concerns the document's visual presentation"), ch("Cela empêche toute sauvegarde", "It prevents any backup") ] },
        tf("L'authentification à deux facteurs ajoute une couche de sécurité supplémentaire à l'accès aux systèmes comptables.", "Two-factor authentication adds an extra layer of security to access to accounting systems.", true)
      ])
    ]
  },
  {
    id: "compta15", code: "461154", hours: 60, order: 15,
    title_fr: "Tâches courantes", title_en: "Routine Tasks",
    icon: "📋",
    tiers: [
      lvl(1, "Facile", "Easy", [
        { fr: "Une tâche courante quotidienne d'un commis-comptable est...", en: "A typical daily task for an accounting clerk is to...",
          choices: [ ch("Enregistrer les factures reçues et émises", "Record invoices received and issued", true), ch("Préparer les états financiers vérifiés annuels", "Prepare audited annual financial statements"), ch("Négocier les conventions collectives", "Negotiate collective agreements"), ch("Auditer une entreprise concurrente", "Audit a competing company") ] },
        { fr: "Quand un client paie une facture en retard, que fait généralement le commis-comptable?", en: "When a client pays a late invoice, what does the accounting clerk generally do?",
          choices: [ ch("Enregistre le paiement et met à jour le compte client", "Record the payment and update the customer account", true), ch("Efface la facture du système", "Delete the invoice from the system"), ch("Ignore le paiement", "Ignore the payment"), ch("Augmente le prix", "Increase the price") ] },
        tf("Le grand livre auxiliaire des comptes clients détaille les soldes par client individuel.", "The accounts receivable subsidiary ledger details balances by individual customer.", true)
      ]),
      lvl(2, "Intermédiaire", "Intermediate", [
        { fr: "Le suivi des comptes clients par ancienneté (« aging ») sert à...", en: "Accounts receivable aging is used to...",
          choices: [ ch("Repérer les comptes en retard de paiement", "Identify overdue accounts", true), ch("Calculer la paie", "Calculate payroll"), ch("Remplir la déclaration de revenus", "Fill out the tax return"), ch("Choisir un fournisseur", "Choose a supplier") ] },
        { fr: "Lors de la réception d'un paiement partiel d'un client, le commis-comptable doit...", en: "When a partial payment is received from a customer, the accounting clerk should...",
          choices: [ ch("Enregistrer le montant reçu et laisser le solde restant au compte client", "Record the amount received and leave the remaining balance on the customer account", true), ch("Effacer toute la facture", "Delete the entire invoice"), ch("Refuser le paiement", "Refuse the payment"), ch("Créditer un autre client", "Credit a different customer") ] },
        tf("Le grand livre auxiliaire des fournisseurs présente uniquement un solde global, sans détail par fournisseur.", "The accounts payable subsidiary ledger only shows an overall balance, with no detail by supplier.", false)
      ]),
      lvl(3, "Avancé", "Advanced", [
        { fr: "Un rapport d'ancienneté des comptes clients montre plusieurs comptes en retard de plus de 90 jours. Quelle est l'action appropriée?", en: "An accounts receivable aging report shows several accounts over 90 days late. What is the appropriate action?",
          choices: [ ch("Signaler ces comptes au superviseur et amorcer un suivi de recouvrement", "Flag these accounts to the supervisor and start a collection follow-up", true), ch("Radier automatiquement les comptes", "Automatically write off the accounts"), ch("Ignorer le rapport", "Ignore the report"), ch("Augmenter leur limite de crédit", "Increase their credit limit") ] },
        { fr: "Une même transaction est enregistrée deux fois par erreur dans le journal des ventes. Quel est l'impact principal si l'erreur n'est pas corrigée?", en: "A transaction is mistakenly recorded twice in the sales journal. What is the main impact if uncorrected?",
          choices: [ ch("Les comptes clients et les ventes seront surévalués", "Accounts receivable and sales will be overstated", true), ch("Aucun impact", "No impact"), ch("Les charges seront sous-évaluées", "Expenses will be understated"), ch("La paie sera affectée", "Payroll will be affected") ] },
        tf("Les tâches courantes incluent la mise à jour quotidienne des comptes clients et fournisseurs.", "Routine tasks include the daily updating of accounts receivable and accounts payable.", true)
      ])
    ]
  },
  {
    id: "compta16", code: "461165", hours: 75, order: 16,
    title_fr: "Efficience", title_en: "Efficiency",
    icon: "⚡",
    tiers: [
      lvl(1, "Facile", "Easy", [
        { fr: "Quelle pratique améliore l'efficience d'un commis-comptable?", en: "Which practice improves an accounting clerk's efficiency?",
          choices: [ ch("Prioriser les tâches selon les échéances", "Prioritizing tasks based on deadlines", true), ch("Traiter les tâches au hasard", "Handling tasks at random"), ch("Reporter systématiquement", "Systematically postponing"), ch("Éviter les listes de tâches", "Avoiding to-do lists") ] },
        { fr: "À quoi servent les raccourcis clavier (ex. Ctrl+C / Ctrl+V) en comptabilité?", en: "What are keyboard shortcuts (e.g. Ctrl+C / Ctrl+V) used for in accounting?",
          choices: [ ch("Accélérer la saisie de données", "Speeding up data entry", true), ch("Rien d'utile", "Nothing useful"), ch("Créer un virus", "Creating a virus"), ch("Provoquer des erreurs de frappe", "Causing typing errors") ] },
        tf("Une bonne gestion du temps inclut la capacité à repérer et éliminer les tâches à faible valeur ajoutée.", "Good time management includes the ability to spot and eliminate low-value tasks.", true)
      ]),
      lvl(2, "Intermédiaire", "Intermediate", [
        { fr: "Automatiser les tâches répétitives (ex. modèles de factures) permet de...", en: "Automating repetitive tasks (e.g. invoice templates) helps to...",
          choices: [ ch("Réduire le temps de traitement et les erreurs", "Reduce processing time and errors", true), ch("Augmenter les erreurs", "Increase errors"), ch("Ralentir le travail", "Slow down the work"), ch("Ne rien changer", "Change nothing") ] },
        { fr: "Quelle méthode aide à traiter un grand volume de factures similaires plus rapidement?", en: "Which method helps process a large volume of similar invoices faster?",
          choices: [ ch("Utiliser un modèle standardisé et des formules automatisées", "Using a standardized template and automated formulas", true), ch("Tout retaper manuellement chaque fois", "Retyping everything manually each time"), ch("Éviter les modèles", "Avoiding templates"), ch("Ignorer les échéances", "Ignoring deadlines") ] },
        tf("Traiter chaque tâche individuellement, sans jamais les regrouper, est toujours plus efficient que le traitement par lots.", "Handling each task individually, never grouping them, is always more efficient than batch processing.", false)
      ]),
      lvl(3, "Avancé", "Advanced", [
        { fr: "Un commis-comptable ressaisit manuellement des données déjà présentes dans un autre système. Quelle solution améliore le plus l'efficience?", en: "An accounting clerk manually re-enters data already present in another system. Which solution improves efficiency the most?",
          choices: [ ch("Automatiser l'importation/exportation des données entre systèmes", "Automating data import/export between systems", true), ch("Embaucher plus de personnel sans changer le processus", "Hiring more staff without changing the process"), ch("Ressaisir plus vite manuellement", "Re-entering faster manually"), ch("Ignorer le problème", "Ignoring the problem") ] },
        { fr: "Entre deux méthodes équivalentes en exactitude, laquelle est la plus efficiente?", en: "Between two methods equally accurate, which is the most efficient?",
          choices: [ ch("Celle qui demande le moins de temps et d'étapes pour un résultat fiable", "The one requiring the least time and steps for a reliable result", true), ch("Celle qui est la plus compliquée", "The most complicated one"), ch("Celle qui prend le plus de temps", "The one that takes the longest"), ch("Cela n'a pas d'importance", "It doesn't matter") ] },
        tf("L'efficience mesure uniquement le temps total travaillé, sans lien avec le résultat obtenu.", "Efficiency only measures total time worked, with no connection to the result obtained.", false)
      ])
    ]
  },
  {
    id: "compta17", code: "461175", hours: 75, order: 17,
    title_fr: "Coût d'un bien et d'un service", title_en: "Cost of a Good or Service",
    icon: "🏷️",
    tiers: [
      lvl(1, "Facile", "Easy", [
        { fr: "Le coût de revient d'un produit inclut généralement...", en: "The cost of a product generally includes...",
          choices: [ ch("Les matières premières, la main-d'œuvre et les frais généraux", "Materials, labour and overhead", true), ch("Seulement le prix de vente", "Only the selling price"), ch("Seulement le profit visé", "Only the targeted profit"), ch("Seulement la taxe", "Only the tax") ] },
        { fr: "Si le coût total d'un service est 240 $ pour 6 heures de travail, le coût horaire est de...", en: "If the total cost of a service is $240 for 6 hours of work, the hourly cost is...",
          choices: [ ch("40 $/heure", "$40/hour", true), ch("24 $/heure", "$24/hour"), ch("60 $/heure", "$60/hour"), ch("4 $/heure", "$4/hour") ] },
        tf("Les frais généraux fixes (ex. loyer) ne varient pas selon le volume de production à court terme.", "Fixed overhead costs (e.g. rent) do not vary with production volume in the short term.", true)
      ]),
      lvl(2, "Intermédiaire", "Intermediate", [
        { fr: "Comment calcule-t-on la marge bénéficiaire brute?", en: "How is gross profit margin calculated?",
          choices: [ ch("(Ventes − Coût des marchandises vendues) ÷ Ventes", "(Sales − Cost of goods sold) ÷ Sales", true), ch("Ventes ÷ Coût", "Sales ÷ Cost"), ch("Coût − Ventes", "Cost − Sales"), ch("Ventes + Coût", "Sales + Cost") ] },
        { fr: "Un produit coûte 60 $ à produire et se vend 90 $. Quelle est la marge bénéficiaire brute en pourcentage?", en: "A product costs $60 to produce and sells for $90. What is the gross profit margin as a percentage?",
          choices: [ ch("33,3 %", "33.3%", true), ch("50 %", "50%"), ch("25 %", "25%"), ch("66,7 %", "66.7%") ] },
        tf("Le coût variable reste toujours constant, peu importe le volume de production.", "Variable cost always stays constant, regardless of production volume.", false)
      ]),
      lvl(3, "Avancé", "Advanced", [
        { fr: "Une entreprise produit 200 unités; coûts fixes 4000 $, coût variable unitaire 15 $. Quel est le coût de revient par unité?", en: "A company produces 200 units; fixed costs $4,000, variable cost per unit $15. What is the cost per unit?",
          choices: [ ch("35 $", "$35", true), ch("15 $", "$15"), ch("20 $", "$20"), ch("50 $", "$50") ] },
        { fr: "Si le prix de vente unitaire est 50 $ pour le produit ci-dessus, quelle est la marge bénéficiaire unitaire?", en: "If the selling price per unit is $50 for the product above, what is the profit margin per unit?",
          choices: [ ch("15 $", "$15", true), ch("35 $", "$35"), ch("20 $", "$20"), ch("10 $", "$10") ] },
        tf("Augmenter le volume de production augmente toujours le coût fixe unitaire, peu importe l'échelle.", "Increasing production volume always increases the fixed cost per unit, regardless of scale.", false)
      ])
    ]
  },
  {
    id: "compta18", code: "461185", hours: 75, order: 18,
    title_fr: "Tâches de fin de période", title_en: "Period-End Tasks",
    icon: "📅",
    tiers: [
      lvl(1, "Facile", "Easy", [
        { fr: "Une écriture de régularisation en fin de mois sert à...", en: "A month-end adjusting entry is used to...",
          choices: [ ch("Ajuster les comptes pour refléter la réalité économique", "Adjust accounts to reflect economic reality", true), ch("Créer de nouvelles factures", "Create new invoices"), ch("Payer les employés", "Pay employees"), ch("Fermer l'entreprise", "Close the business") ] },
        { fr: "Qu'est-ce qu'une balance de vérification?", en: "What is a trial balance?",
          choices: [ ch("Une liste de tous les comptes du grand livre avec leurs soldes", "A list of all general ledger accounts with their balances", true), ch("Un rapport d'impôt", "A tax report"), ch("Un contrat d'embauche", "An employment contract"), ch("Une facture client", "A customer invoice") ] },
        tf("Les charges payées d'avance (ex. assurance annuelle) doivent être réparties sur la période qu'elles couvrent.", "Prepaid expenses (e.g. annual insurance) must be spread over the period they cover.", true)
      ]),
      lvl(2, "Intermédiaire", "Intermediate", [
        { fr: "L'amortissement mensuel d'une immobilisation est enregistré par une écriture qui...", en: "Monthly depreciation on a fixed asset is recorded by an entry that...",
          choices: [ ch("Débite la charge d'amortissement et crédite l'amortissement cumulé", "Debits depreciation expense and credits accumulated depreciation", true), ch("Débite les ventes", "Debits sales"), ch("Crédite uniquement la caisse", "Credits cash only"), ch("N'affecte aucun compte", "Affects no account") ] },
        { fr: "Une charge à payer non enregistrée en fin de mois entraîne...", en: "An unrecorded accrued expense at month-end leads to...",
          choices: [ ch("Une sous-évaluation des charges et une surévaluation du bénéfice", "An understatement of expenses and an overstatement of profit", true), ch("Une surévaluation des charges", "An overstatement of expenses"), ch("Aucun effet", "No effect"), ch("Une sous-évaluation de l'actif seulement", "Only an understatement of assets") ] },
        tf("La balance de vérification régularisée est préparée avant les écritures de régularisation, pour les anticiper.", "The adjusted trial balance is prepared before the adjusting entries, to anticipate them.", false)
      ]),
      lvl(3, "Avancé", "Advanced", [
        { fr: "Une entreprise a payé 1200 $ d'assurance pour 12 mois le 1er janvier. Quelle charge doit apparaître à la fin février (2 mois)?", en: "A company paid $1,200 for 12 months of insurance on January 1. What expense should appear at the end of February (2 months)?",
          choices: [ ch("200 $", "$200", true), ch("100 $", "$100"), ch("1200 $", "$1,200"), ch("600 $", "$600") ] },
        { fr: "Un revenu de 900 $ a été perçu d'avance pour un service livré sur 3 mois. Après 1 mois, quel montant doit être reconnu comme produit gagné?", en: "$900 was received in advance for a service delivered over 3 months. After 1 month, how much should be recognized as earned revenue?",
          choices: [ ch("300 $", "$300", true), ch("900 $", "$900"), ch("450 $", "$450"), ch("600 $", "$600") ] },
        tf("Ne pas régulariser les comptes en fin de période fausse les résultats financiers de la période.", "Failing to adjust accounts at period-end distorts the period's financial results.", true)
      ])
    ]
  },
  {
    id: "compta19", code: "461195", hours: 75, order: 19,
    title_fr: "Tâches de fin d'année", title_en: "Year-End Tasks",
    icon: "📆",
    tiers: [
      lvl(1, "Facile", "Easy", [
        { fr: "À la fin de l'exercice, les comptes de produits et de charges sont...", en: "At year-end, revenue and expense accounts are...",
          choices: [ ch("Fermés et virés au compte de bénéfices non répartis", "Closed and transferred to retained earnings", true), ch("Laissés tels quels indéfiniment", "Left as-is indefinitely"), ch("Supprimés du système", "Deleted from the system"), ch("Transférés en petite caisse", "Transferred to petty cash") ] },
        { fr: "Quels sont les trois principaux états financiers?", en: "What are the three main financial statements?",
          choices: [ ch("Le bilan, l'état des résultats et l'état des flux de trésorerie", "The balance sheet, the income statement and the cash flow statement", true), ch("La facture, le reçu et le bon de commande", "The invoice, the receipt and the purchase order"), ch("Le budget, l'horaire et le contrat", "The budget, the schedule and the contract"), ch("Le relevé de paie seul", "The pay stub alone") ] },
        tf("Le bilan présente la situation financière de l'entreprise à une date précise.", "The balance sheet presents a company's financial position at a specific date.", true)
      ]),
      lvl(2, "Intermédiaire", "Intermediate", [
        { fr: "L'inventaire physique de fin d'année sert à...", en: "The year-end physical inventory count is used to...",
          choices: [ ch("Vérifier et ajuster le stock réel par rapport aux registres comptables", "Verify and adjust actual stock against accounting records", true), ch("Fixer les prix de vente", "Set selling prices"), ch("Remplacer la vérification bancaire", "Replace bank verification"), ch("Calculer la paie des employés", "Calculate employee payroll") ] },
        { fr: "Après la fermeture des livres, quel compte reflète le résultat net cumulé de l'exercice?", en: "After the books are closed, which account reflects the cumulative net result of the year?",
          choices: [ ch("Bénéfices non répartis", "Retained earnings", true), ch("Caisse", "Cash"), ch("Comptes clients", "Accounts receivable"), ch("Charges à payer", "Accrued liabilities") ] },
        tf("Les écritures de clôture ramènent tous les comptes, y compris le bilan, à zéro pour le nouvel exercice.", "Closing entries reset all accounts, including the balance sheet, to zero for the new fiscal year.", false)
      ]),
      lvl(3, "Avancé", "Advanced", [
        { fr: "Un inventaire physique révèle 3200 $ de marchandises en main, alors que les registres indiquent 3500 $. Quelle écriture est nécessaire?", en: "A physical count shows $3,200 of merchandise on hand, while records show $3,500. What entry is needed?",
          choices: [ ch("Réduire l'inventaire et enregistrer une charge de 300 $", "Reduce inventory and record a $300 expense", true), ch("Augmenter l'inventaire de 300 $", "Increase inventory by $300"), ch("Ignorer l'écart", "Ignore the discrepancy"), ch("Modifier les ventes de 300 $", "Adjust sales by $300") ] },
        { fr: "Pourquoi est-il important de fermer les comptes de produits et de charges à la fin de l'exercice?", en: "Why is it important to close revenue and expense accounts at year-end?",
          choices: [ ch("Pour repartir à zéro et mesurer correctement le résultat du prochain exercice", "To start fresh and properly measure the next period's result", true), ch("Pour effacer les dettes de l'entreprise", "To erase the company's debts"), ch("Pour éviter de payer les taxes", "To avoid paying taxes"), ch("Ce n'est pas nécessaire", "It isn't necessary") ] },
        tf("Le bilan de clôture d'un exercice devient le bilan d'ouverture de l'exercice suivant.", "The closing balance sheet of one year becomes the opening balance sheet of the next.", true)
      ])
    ]
  },
  {
    id: "compta20", code: "461204", hours: 60, order: 20,
    title_fr: "Déclaration de revenu", title_en: "Income Tax Return",
    icon: "🏛️",
    tiers: [
      lvl(1, "Facile", "Easy", [
        { fr: "Quel formulaire un particulier utilise-t-il pour produire sa déclaration de revenus fédérale?", en: "Which form does an individual use to file their federal income tax return?",
          choices: [ ch("Le T1", "The T1", true), ch("Le T4", "The T4"), ch("Le TP-1", "The TP-1"), ch("Le RL-1", "The RL-1") ] },
        { fr: "Quel feuillet fédéral un employeur remet-il à un employé pour ses revenus d'emploi annuels?", en: "Which federal slip does an employer give an employee for their annual employment income?",
          choices: [ ch("Le T4", "The T4", true), ch("Le T1", "The T1"), ch("Le RL-1", "The RL-1"), ch("Le sommaire de TPS/TVQ", "The GST/QST summary") ] },
        tf("Un particulier résident du Québec doit produire deux déclarations de revenus chaque année (fédérale et provinciale).", "A Québec resident individual must file two income tax returns each year (federal and provincial).", true)
      ]),
      lvl(2, "Intermédiaire", "Intermediate", [
        { fr: "Au Québec, quel feuillet équivalent au T4 est émis par l'employeur pour le provincial?", en: "In Québec, which provincial slip equivalent to the T4 does the employer issue?",
          choices: [ ch("Le Relevé 1 (RL-1)", "The Relevé 1 (RL-1)", true), ch("Le T4A", "The T4A"), ch("Le TP-1", "The TP-1"), ch("Le RL-5", "The RL-5") ] },
        { fr: "Quel formulaire un particulier utilise-t-il pour sa déclaration provinciale au Québec?", en: "Which form does an individual use for their Québec provincial tax return?",
          choices: [ ch("Le TP-1", "The TP-1", true), ch("Le T1", "The T1"), ch("Le T4", "The T4"), ch("Le RL-1", "The RL-1") ] },
        tf("Le feuillet T4 concerne uniquement les revenus de placement, jamais le revenu d'emploi.", "The T4 slip only concerns investment income, never employment income.", false)
      ]),
      lvl(3, "Avancé", "Advanced", [
        { fr: "Un employé reçoit un T4 et un RL-1 indiquant le même revenu d'emploi. Quelle affirmation est correcte?", en: "An employee receives a T4 and an RL-1 showing the same employment income. Which statement is correct?",
          choices: [ ch("Les deux feuillets rapportent le même revenu, mais servent à des déclarations différentes", "Both slips report the same income but serve different tax returns", true), ch("Ce sont des doublons inutiles", "They are useless duplicates"), ch("Seul le T4 est nécessaire au Québec", "Only the T4 is needed in Québec"), ch("Seul le RL-1 est nécessaire partout au Canada", "Only the RL-1 is needed across Canada") ] },
        { fr: "Une personne travaille dans plusieurs provinces durant l'année. Quel principe général s'applique à sa déclaration provinciale?", en: "A person works in several provinces during the year. What general principle applies to their provincial return?",
          choices: [ ch("Elle produit généralement sa déclaration selon sa province de résidence au 31 décembre", "They generally file according to their province of residence on December 31", true), ch("Elle produit une déclaration dans chaque province travaillée", "They file a return in every province worked in"), ch("Elle ne produit aucune déclaration provinciale", "They file no provincial return at all"), ch("Elle choisit la province qui lui convient", "They choose whichever province suits them") ] },
        tf("Les dates limites de production des déclarations fédérale et provinciale sont toujours très différentes, à plusieurs mois d'écart.", "Federal and provincial filing deadlines are always very different, several months apart.", false)
      ])
    ]
  },
  {
    id: "compta21", code: "461213", hours: 45, order: 21,
    title_fr: "Système comptable", title_en: "Accounting System",
    icon: "🗂️",
    tiers: [
      lvl(1, "Facile", "Easy", [
        { fr: "Quelle est la première étape du cycle comptable?", en: "What is the first step of the accounting cycle?",
          choices: [ ch("Analyser et enregistrer les transactions à partir des pièces justificatives", "Analyze and record transactions from source documents", true), ch("Préparer les états financiers", "Prepare financial statements"), ch("Fermer les livres", "Close the books"), ch("Produire la déclaration de revenus", "File the tax return") ] },
        { fr: "À quoi sert le plan comptable (liste des comptes)?", en: "What is the chart of accounts used for?",
          choices: [ ch("Organiser et classifier tous les comptes utilisés par l'entreprise", "Organize and classify all accounts used by the company", true), ch("Calculer la paie", "Calculate payroll"), ch("Remplacer les factures", "Replace invoices"), ch("Fixer les prix", "Set prices") ] },
        tf("Le cycle comptable se répète à chaque période (mensuelle, trimestrielle, annuelle).", "The accounting cycle repeats each period (monthly, quarterly, annually).", true)
      ]),
      lvl(2, "Intermédiaire", "Intermediate", [
        { fr: "Un système comptable informatisé permet notamment de...", en: "A computerized accounting system notably allows you to...",
          choices: [ ch("Générer automatiquement le grand livre et les rapports à partir des écritures saisies", "Automatically generate the general ledger and reports from entered transactions", true), ch("Éliminer le besoin de pièces justificatives", "Eliminate the need for source documents"), ch("Remplacer les employés comptables", "Replace accounting staff"), ch("Éviter les taxes", "Avoid taxes") ] },
        { fr: "Quel est l'ordre correct des étapes du cycle comptable (simplifié)?", en: "What is the correct order of the (simplified) accounting cycle steps?",
          choices: [ ch("Analyser et journaliser → Reporter au grand livre → Balance de vérification → États financiers", "Analyze and journalize → Post to the ledger → Trial balance → Financial statements", true), ch("États financiers → Journal → Grand livre → Balance", "Financial statements → Journal → Ledger → Trial balance"), ch("Balance de vérification → États financiers → Journal → Grand livre", "Trial balance → Financial statements → Journal → Ledger"), ch("Aucun ordre particulier n'est requis", "No particular order is required") ] },
        tf("Le grand livre et le journal général présentent toujours les transactions exactement de la même façon.", "The general ledger and the general journal always present transactions in exactly the same way.", false)
      ]),
      lvl(3, "Avancé", "Advanced", [
        { fr: "Une entreprise change de logiciel comptable en cours d'année. Quelle étape est essentielle pour assurer la continuité?", en: "A company switches accounting software mid-year. Which step is essential to ensure continuity?",
          choices: [ ch("Transférer avec exactitude les soldes d'ouverture et le plan comptable vers le nouveau système", "Accurately transfer opening balances and the chart of accounts to the new system", true), ch("Recommencer le plan comptable à zéro sans historique", "Start the chart of accounts from scratch with no history"), ch("Ignorer les soldes précédents", "Ignore previous balances"), ch("Fusionner tous les comptes en un seul", "Merge all accounts into one") ] },
        { fr: "Pourquoi la balance de vérification ne détecte-t-elle pas toutes les erreurs (ex. une transaction complètement omise)?", en: "Why doesn't a trial balance catch all errors (e.g. a transaction completely omitted)?",
          choices: [ ch("Parce qu'elle vérifie seulement l'égalité globale des débits et crédits", "Because it only checks the overall equality of debits and credits", true), ch("Parce qu'elle est toujours fausse", "Because it is always wrong"), ch("Parce qu'elle n'existe qu'en théorie", "Because it only exists in theory"), ch("Parce qu'elle remplace les états financiers", "Because it replaces financial statements") ] },
        tf("Un système comptable bien conçu facilite la production rapide et fiable des états financiers.", "A well-designed accounting system facilitates fast and reliable production of financial statements.", true)
      ])
    ]
  },
  {
    id: "compta22", code: "461222", hours: 30, order: 22,
    title_fr: "Cheminement professionnel", title_en: "Career Path Planning",
    icon: "🚀",
    tiers: [
      lvl(1, "Facile", "Easy", [
        { fr: "Après le DEP en Comptabilité, quelle formation permet d'approfondir vers un poste de technicien(ne) comptable?", en: "After the Accounting DVS, which further studies lead toward an accounting technician role?",
          choices: [ ch("Le DEC en Techniques de comptabilité et de gestion", "The DCS in Accounting and Management Techniques", true), ch("Un doctorat immédiat", "An immediate doctorate"), ch("Rien, ce diplôme est terminal", "Nothing, this diploma is terminal"), ch("Une maîtrise en droit", "A Master's in law") ] },
        { fr: "Quel ordre professionnel encadre le titre de CPA au Québec?", en: "Which professional order governs the CPA designation in Québec?",
          choices: [ ch("L'Ordre des comptables professionnels agréés du Québec", "The Ordre des comptables professionnels agréés du Québec", true), ch("La CCQ", "The CCQ"), ch("Le Barreau du Québec", "The Barreau du Québec"), ch("Le Collège des médecins", "The Collège des médecins") ] },
        tf("Il existe des passerelles reconnues entre le DEP Comptabilité et le DEC Techniques de comptabilité et de gestion.", "There are recognized bridging paths between the Accounting DVS and the Accounting and Management Techniques DCS.", true)
      ]),
      lvl(2, "Intermédiaire", "Intermediate", [
        { fr: "Se tenir à jour sur les lois fiscales et les logiciels comptables fait partie de...", en: "Staying current on tax laws and accounting software is part of...",
          choices: [ ch("La formation continue essentielle au métier", "The ongoing professional development essential to the trade", true), ch("Une option sans importance", "An unimportant option"), ch("Une obligation seulement pour les gestionnaires", "An obligation only for managers"), ch("Rien de nécessaire après le diplôme", "Nothing necessary after graduation") ] },
        { fr: "Quel est un avantage de poursuivre vers le DEC après le DEP en comptabilité?", en: "What is an advantage of continuing to the DCS after the Accounting DVS?",
          choices: [ ch("Accéder à des tâches de supervision et d'analyse plus avancées", "Access to more advanced supervisory and analytical tasks", true), ch("Perdre les compétences acquises", "Losing the skills acquired"), ch("Repartir sans aucune reconnaissance des acquis", "Starting over with no recognition of prior learning"), ch("Cela n'est utile que pour les très grandes entreprises", "It is only useful for very large companies") ] },
        tf("La reconnaissance des acquis et des compétences (RAC) concerne uniquement les diplômes universitaires, jamais les DEP.", "Prior learning assessment and recognition (PLAR) only applies to university degrees, never to DVS programs.", false)
      ]),
      lvl(3, "Avancé", "Advanced", [
        { fr: "Un commis-comptable souhaite éventuellement obtenir le titre de CPA. Quel est un chemin réaliste?", en: "An accounting clerk wants to eventually earn the CPA designation. What is a realistic path?",
          choices: [ ch("Poursuivre des études (DEC puis baccalauréat en comptabilité) menant aux exigences de l'Ordre des CPA", "Pursue further studies (DCS then a Bachelor's in accounting) leading to the CPA Order's requirements", true), ch("Le DEP donne directement accès au titre de CPA", "The DVS grants direct access to the CPA designation"), ch("Aucun cheminement n'existe", "No path exists"), ch("Il faut changer complètement de domaine", "One must change fields entirely") ] },
        { fr: "Pourquoi la planification de carrière est-elle importante dès le DEP?", en: "Why is career planning important as early as the DVS?",
          choices: [ ch("Elle aide à orienter les choix de formation continue et les opportunités d'emploi", "It helps guide ongoing education choices and job opportunities", true), ch("Elle n'a aucun effet sur la carrière", "It has no effect on one's career"), ch("Elle est seulement utile aux gestionnaires", "It is only useful to managers"), ch("Elle remplace l'expérience de travail", "It replaces work experience") ] },
        tf("Le marché du travail et les outils comptables évoluent, ce qui justifie une mise à jour continue des compétences.", "The job market and accounting tools keep evolving, which justifies continuously updating one's skills.", true)
      ])
    ]
  },
  {
    id: "compta23", code: "461238", hours: 120, order: 23,
    title_fr: "Intégration au travail", title_en: "Workplace Integration",
    icon: "🏢",
    tiers: [
      lvl(1, "Facile", "Easy", [
        { fr: "Le stage en milieu de travail à la fin du programme permet principalement de...", en: "The workplace internship at the end of the program mainly allows you to...",
          choices: [ ch("Mettre en pratique les compétences apprises dans un contexte réel", "Put the learned skills into practice in a real setting", true), ch("Remplacer l'examen final", "Replace the final exam"), ch("Éviter de chercher un emploi", "Avoid looking for a job"), ch("Obtenir automatiquement le titre de CPA", "Automatically obtain the CPA designation") ] },
        { fr: "Lors d'une entrevue d'embauche pour un poste de commis-comptable, il est important de...", en: "In a job interview for an accounting clerk position, it is important to...",
          choices: [ ch("Préparer des exemples concrets de ses compétences", "Prepare concrete examples of your skills", true), ch("Ne rien préparer", "Prepare nothing"), ch("Refuser de parler de ses compétences", "Refuse to talk about your skills"), ch("Éviter toutes les questions", "Avoid all questions") ] },
        tf("L'intégration au travail devrait se limiter strictement aux tâches techniques, sans aucune interaction sociale avec les collègues.", "Workplace integration should be strictly limited to technical tasks, without any social interaction with coworkers.", false)
      ]),
      lvl(2, "Intermédiaire", "Intermediate", [
        { fr: "Un bon comportement professionnel en stage inclut...", en: "Good professional conduct during an internship includes...",
          choices: [ ch("La ponctualité, la discrétion et le respect de la confidentialité", "Punctuality, discretion and respect for confidentiality", true), ch("Le retard fréquent", "Frequent lateness"), ch("Le partage des dossiers clients sur les réseaux sociaux", "Sharing client files on social media"), ch("L'absentéisme", "Absenteeism") ] },
        { fr: "Recevoir une rétroaction constructive d'un superviseur de stage devrait mener à...", en: "Receiving constructive feedback from an internship supervisor should lead to...",
          choices: [ ch("Ajuster son travail et poser des questions au besoin", "Adjusting your work and asking questions as needed", true), ch("Ignorer la rétroaction", "Ignoring the feedback"), ch("Se sentir offensé et cesser d'essayer", "Feeling offended and giving up"), ch("Contester systématiquement", "Systematically arguing back") ] },
        tf("Un stage réussi mène rarement à une offre d'emploi; la plupart des employeurs préfèrent embaucher à l'extérieur.", "A successful internship rarely leads to a job offer; most employers prefer to hire externally.", false)
      ]),
      lvl(3, "Avancé", "Advanced", [
        { fr: "Pendant un stage, on te demande d'effectuer une tâche pour laquelle tu ne te sens pas suffisamment formé. Quelle est la meilleure attitude?", en: "During an internship, you're asked to do a task you don't feel adequately trained for. What is the best attitude?",
          choices: [ ch("Communiquer honnêtement la situation à ton superviseur et demander de l'encadrement", "Honestly communicate the situation to your supervisor and ask for guidance", true), ch("Refuser d'obéir sans explication", "Refuse to comply without explanation"), ch("Faire la tâche sans rien dire même en cas de doute sérieux", "Do the task without saying anything even with serious doubts"), ch("Quitter le stage immédiatement", "Leave the internship immediately") ] },
        { fr: "Quelle attitude professionnelle est la plus susceptible de mener à une embauche après le stage?", en: "Which professional attitude is most likely to lead to a job offer after the internship?",
          choices: [ ch("Faire preuve de rigueur, de fiabilité et d'une bonne collaboration avec l'équipe", "Showing rigour, reliability and good teamwork", true), ch("Faire le strict minimum sans engagement", "Doing the bare minimum with no commitment"), ch("Éviter les interactions avec les collègues", "Avoiding interactions with coworkers"), ch("Contester régulièrement les méthodes de l'entreprise", "Regularly challenging the company's methods") ] },
        tf("Le stage d'intégration au travail représente une part importante du programme, avec 120 heures qui lui sont consacrées.", "The workplace integration internship represents a significant part of the program, with 120 hours dedicated to it.", true)
      ])
    ]
  }
];

const UI_TEXT = {
  fr: {
    appName: "ComptaQuest",
    tagline: "Deviens pro de la comptabilité — DEP 5231",
    start: "Commencer l'aventure",
    yourName: "Ton prénom",
    chooseAvatar: "Choisis ton avatar",
    map: "Mon parcours",
    badges: "Badges",
    trophies: "Trophées",
    leaderboard: "Palmarès",
    profile: "Profil",
    level: "Niveau",
    xp: "XP",
    locked: "Verrouillé",
    completeToUnlock: "Termine la quête précédente pour déverrouiller",
    startQuest: "Démarrer la quête",
    retryQuest: "Reprendre la quête",
    question: "Question",
    of: "sur",
    submit: "Valider",
    next: "Suivant",
    finish: "Terminer",
    correct: "Bonne réponse!",
    incorrect: "Ce n'est pas ça...",
    questResult: "Résultat de la quête",
    score: "Score",
    passed: "Quête réussie! 🎉",
    failed: "Pas encore réussi — réessaie pour débloquer le badge (seuil: 70%)",
    backToMap: "Retour à la carte",
    newBadge: "Nouveau badge!",
    newTrophy: "Nouveau trophée!",
    hours: "heures",
    switchLang: "EN",
    privacy: "Confidentialité",
    resetProgress: "Réinitialiser tout",
    confirmReset: "Tout réinitialiser? Ton avatar, tes badges, trophées et toute ta progression seront effacés. Cette action est irréversible.",
    installApp: "Installer l'application",
    rank: "Rang",
    you: "Toi",
    leaderboardNote: "Classement local (démo) — un vrai palmarès de classe nécessite un serveur partagé.",
    completedQuests: "quêtes complétées",
    chooseVehicle: "Choisis ta machine",
    myVehicle: "Ta machine",
    vehicleGrows: "Évolue avec ton expérience",
    maxSize: "Taille maximale atteinte!",
    trueLabel: "Vrai",
    falseLabel: "Faux",
    tfPrompt: "Vrai ou faux?",
    masteredLabel: "compétences maîtrisées",
    tierLabel: "Palier",
    matchPrompt: "Touche un terme, puis sa définition qui correspond.",
    scenarioLabel: "Mise en situation",
    masteryUnlocked: "Compétence maîtrisée — badge débloqué!",
    accessCodeTitle: "Code d'accès",
    accessCodePrompt: "Entre le code d'accès fourni par ton enseignant pour continuer.",
    accessCodeTrialOver: "Ton essai gratuit de 7 jours est terminé. Entre le code d'accès fourni par ton centre de formation pour continuer.",
    accessCodePlaceholder: "Code d'accès",
    accessCodeSubmit: "Valider",
    accessCodeChecking: "Vérification...",
    accessCodeInvalid: "Code invalide ou inactif. Vérifie auprès de ton enseignant.",
    accessCodeOffline: "Connexion Internet requise pour valider ton code la première fois. Réessaie une fois connecté.",
    accessCodeNotConfigured: "L'application n'est pas encore configurée. Contacte ton enseignant.",
    welcomeHeading: "Comment ça marche",
    welcomeIntro: "Avant de commencer, voici un survol rapide de l'application.",
    welcomeSteps: [
      { icon: "🗺️", title: "Mon parcours", text: "Chaque compétence du programme est une quête sur la carte. Termine-les dans l'ordre pour avancer." },
      { icon: "📝", title: "Questions", text: "Réponds à des questions à choix multiples et vrai/faux liées à chaque compétence." },
      { icon: "🎖️", title: "Badges", text: "Réussis une quête à 70% ou plus pour débloquer son badge." },
      { icon: "🏆", title: "Trophées", text: "Décroche des trophées spéciaux pour tes exploits et ta progression." },
      { icon: "📊", title: "Palmarès", text: "Compare ton avancement avec celui du reste de la classe." },
      { icon: "👷", title: "Ton avatar", text: "Choisis ton avatar — il évolue à mesure que tu gagnes de l'expérience." }
    ]
  },
  en: {
    appName: "ComptaQuest",
    tagline: "Become an accounting pro — DVS 5231",
    start: "Start the adventure",
    yourName: "Your first name",
    chooseAvatar: "Choose your avatar",
    map: "My path",
    badges: "Badges",
    trophies: "Trophies",
    leaderboard: "Leaderboard",
    profile: "Profile",
    level: "Level",
    xp: "XP",
    locked: "Locked",
    completeToUnlock: "Complete the previous quest to unlock",
    startQuest: "Start quest",
    retryQuest: "Retry quest",
    question: "Question",
    of: "of",
    submit: "Submit",
    next: "Next",
    finish: "Finish",
    correct: "Correct!",
    incorrect: "Not quite...",
    questResult: "Quest Result",
    score: "Score",
    passed: "Quest passed! 🎉",
    failed: "Not passed yet — try again to unlock the badge (threshold: 70%)",
    backToMap: "Back to map",
    newBadge: "New badge!",
    newTrophy: "New trophy!",
    hours: "hours",
    switchLang: "FR",
    privacy: "Privacy",
    resetProgress: "Reset everything",
    confirmReset: "Reset everything? Your avatar, badges, trophies and all progress will be erased. This cannot be undone.",
    installApp: "Install the app",
    rank: "Rank",
    you: "You",
    leaderboardNote: "Local (demo) ranking — a real class leaderboard needs a shared server.",
    completedQuests: "quests completed",
    chooseVehicle: "Choose your machine",
    myVehicle: "Your machine",
    vehicleGrows: "Evolves with your experience",
    maxSize: "Maximum size reached!",
    trueLabel: "True",
    falseLabel: "False",
    tfPrompt: "True or false?",
    masteredLabel: "competencies mastered",
    tierLabel: "Tier",
    matchPrompt: "Tap a term, then its matching definition.",
    scenarioLabel: "Scenario",
    masteryUnlocked: "Competency mastered — badge unlocked!",
    accessCodeTitle: "Access code",
    accessCodePrompt: "Enter the access code given by your teacher to continue.",
    accessCodeTrialOver: "Your free 7-day trial has ended. Enter the access code provided by your training center to continue.",
    accessCodePlaceholder: "Access code",
    accessCodeSubmit: "Submit",
    accessCodeChecking: "Checking...",
    accessCodeInvalid: "Invalid or inactive code. Check with your teacher.",
    accessCodeOffline: "Internet connection required to validate your code the first time. Try again once connected.",
    accessCodeNotConfigured: "The app isn't configured yet. Contact your teacher.",
    welcomeHeading: "How it works",
    welcomeIntro: "Before you start, here's a quick overview of the app.",
    welcomeSteps: [
      { icon: "🗺️", title: "My path", text: "Each program competency is a quest on the map. Complete them in order to move forward." },
      { icon: "📝", title: "Questions", text: "Answer multiple-choice and true/false questions tied to each competency." },
      { icon: "🎖️", title: "Badges", text: "Pass a quest with 70% or more to unlock its badge." },
      { icon: "🏆", title: "Trophies", text: "Earn special trophies for your achievements and progress." },
      { icon: "📊", title: "Leaderboard", text: "Compare your progress with the rest of the class." },
      { icon: "👷", title: "Your avatar", text: "Choose your avatar — it evolves as you earn experience." }
    ]
  }
};

/* ---- Paliers de niveau (basés sur XP total) ---- */
const LEVELS = [
  { min: 0,    name_fr: "Novice",       name_en: "Novice",     avatarStage: 0 },
  { min: 200,  name_fr: "Apprenti(e)",  name_en: "Apprentice", avatarStage: 2 },
  { min: 500,  name_fr: "Compétent(e)", name_en: "Competent",  avatarStage: 4 },
  { min: 1000, name_fr: "Chevronné(e)", name_en: "Seasoned",   avatarStage: 6 },
  { min: 2000, name_fr: "Expert(e)",    name_en: "Expert",     avatarStage: 9 },
  { min: 3500, name_fr: "Maître",       name_en: "Master",     avatarStage: 11 }
];

/* ---- Personnages d'avatar (ouvriers de chantier / camionneurs) ----
   Chaque personnage est dessiné en SVG dans app.js (fonction AVATAR_SVG).
   "accent" = couleur par défaut du casque/gilet, modifiable via la
   sélection de couleur. */
const AVATAR_CHARACTERS = [
 {
  "id": "dragon",
  "name_fr": "Dragon",
  "name_en": "Dragon",
  "title_fr": "Le Sage",
  "title_en": "The Sage",
  "stages": [
   "🥚",
   "🥚",
   "🦎",
   "🦎",
   "🐲",
   "🐲",
   "🐉",
   "🐉",
   "🐉",
   "🐉",
   "🐉",
   "🐉"
  ]
 },
 {
  "id": "licorne",
  "name_fr": "Licorne",
  "name_en": "Unicorn",
  "title_fr": "La Guérisseuse",
  "title_en": "The Healer",
  "stages": [
   "🥚",
   "🥚",
   "🐴",
   "🐴",
   "🦄",
   "🦄",
   "🦄",
   "🦄",
   "🦄",
   "🦄",
   "🦄",
   "🦄"
  ]
 },
 {
  "id": "phenix",
  "name_fr": "Phénix",
  "name_en": "Phoenix",
  "title_fr": "Le Résilient",
  "title_en": "The Resilient One",
  "stages": [
   "🥚",
   "🥚",
   "🐣",
   "🐣",
   "🐦",
   "🐦",
   "🦅",
   "🦅",
   "🦅",
   "🦅",
   "🦅",
   "🦅"
  ]
 },
 {
  "id": "griffon",
  "name_fr": "Griffon",
  "name_en": "Griffin",
  "title_fr": "Le Courageux",
  "title_en": "The Brave One",
  "stages": [
   "🥚",
   "🥚",
   "🐱",
   "🐱",
   "🦁",
   "🦁",
   "🦁",
   "🦁",
   "🦁",
   "🦁",
   "🦁",
   "🦁"
  ]
 }
];

const AVATAR_COLORS = [
  { id: "jaune",  hex: "#f7b500", name_fr: "Jaune sécurité", name_en: "Safety Yellow" },
  { id: "orange", hex: "#ff7a1a", name_fr: "Orange chantier", name_en: "Site Orange" },
  { id: "vert",   hex: "#3bb54a", name_fr: "Vert forêt", name_en: "Forest Green" },
  { id: "bleu",   hex: "#2a7de1", name_fr: "Bleu acier", name_en: "Steel Blue" },
  { id: "rouge",  hex: "#e13c3c", name_fr: "Rouge feu", name_en: "Fire Red" }
];

/* ---- Machines de l'élève (grossissent avec le XP) ----
   Le dessin SVG de chaque machine est dans app.js (fonction vehicleSVG). */
const VEHICLE_TYPES = [
  { id: "camion", name_fr: "Camion à benne", name_en: "Dump Truck" },
  { id: "pelle", name_fr: "Pelle mécanique", name_en: "Excavator" },
  { id: "bouteur", name_fr: "Bouteur", name_en: "Bulldozer" },
  { id: "chargeuse", name_fr: "Chargeuse", name_en: "Loader" }
];

/* La hauteur affichée (en pixels) interpole entre minHeight et maxHeight
   selon le XP actuel de l'élève (voir vehicleHeight() dans app.js). La
   largeur est calculée automatiquement pour respecter les proportions
   propres à chaque machine (voir VEHICLE_VIEWBOX dans app.js). */
const VEHICLE_GROWTH = { minHeight: 78, maxHeight: 178, maxXP: 3500 };

/* ---- Commandes de cabine (questions basées sur une image) ----
   Chaque machine a 4 commandes numérotées, dessinées par cabinSVG()
   dans app.js aux coordonnées cx/cy (viewBox 0 0 360 220). Ces mêmes
   coordonnées servent à la fois à dessiner l'illustration et à
   positionner les zones cliquables des questions de type "hotspot" —
   l'image et les questions restent donc toujours alignées.
   Configuration générique à titre pédagogique — la disposition réelle
   varie selon le fabricant et le modèle (à valider par l'enseignant). */
const CABIN_CONTROLS = {
  pelle: [
    { num: 1, cx: 100, cy: 168, kind: "joystick",
      label_fr: "Joystick gauche", label_en: "Left joystick",
      desc_fr: "Contrôle la rotation de la tourelle et le godet",
      desc_en: "Controls turret rotation and the bucket" },
    { num: 2, cx: 210, cy: 168, kind: "joystick",
      label_fr: "Joystick droit", label_en: "Right joystick",
      desc_fr: "Contrôle la flèche et le bras (balancier)",
      desc_en: "Controls the boom and the stick (arm)" },
    { num: 3, cx: 160, cy: 205, kind: "pedal",
      label_fr: "Pédales de translation", label_en: "Travel pedals",
      desc_fr: "Font avancer ou reculer les chenilles",
      desc_en: "Move the tracks forward or backward" },
    { num: 4, cx: 320, cy: 150, kind: "button",
      label_fr: "Klaxon", label_en: "Horn button",
      desc_fr: "Avertit les personnes autour de la machine avant un mouvement",
      desc_en: "Warns people around the machine before a movement" }
  ],
  bouteur: [
    { num: 1, cx: 110, cy: 172, kind: "lever",
      label_fr: "Levier de la lame", label_en: "Blade control lever",
      desc_fr: "Lève, abaisse et incline la lame",
      desc_en: "Raises, lowers and tilts the blade" },
    { num: 2, cx: 210, cy: 172, kind: "lever",
      label_fr: "Manettes de direction (chenilles)", label_en: "Steering clutch levers",
      desc_fr: "Contrôlent la direction en ralentissant une chenille à la fois",
      desc_en: "Control steering by slowing one track at a time" },
    { num: 3, cx: 160, cy: 205, kind: "pedal",
      label_fr: "Pédale de frein", label_en: "Brake pedal",
      desc_fr: "Ralentit ou immobilise la machine",
      desc_en: "Slows or stops the machine" },
    { num: 4, cx: 320, cy: 150, kind: "button",
      label_fr: "Klaxon", label_en: "Horn button",
      desc_fr: "Avertit les personnes autour de la machine avant un mouvement",
      desc_en: "Warns people around the machine before a movement" }
  ],
  chargeuse: [
    { num: 1, cx: 210, cy: 168, kind: "lever",
      label_fr: "Levier de commande du godet", label_en: "Bucket control lever",
      desc_fr: "Lève, abaisse et bascule le godet",
      desc_en: "Raises, lowers and tilts the bucket" },
    { num: 2, cx: 110, cy: 172, kind: "wheel",
      label_fr: "Volant de direction", label_en: "Steering wheel",
      desc_fr: "Contrôle la direction des roues",
      desc_en: "Controls the direction of the wheels" },
    { num: 3, cx: 160, cy: 205, kind: "pedal",
      label_fr: "Pédale d'accélérateur", label_en: "Accelerator pedal",
      desc_fr: "Contrôle le régime moteur et la vitesse",
      desc_en: "Controls engine speed and travel speed" },
    { num: 4, cx: 320, cy: 150, kind: "button",
      label_fr: "Klaxon", label_en: "Horn button",
      desc_fr: "Avertit les personnes autour de la machine avant un mouvement",
      desc_en: "Warns people around the machine before a movement" }
  ],
  niveleuse: [
    { num: 1, cx: 190, cy: 172, kind: "lever",
      label_fr: "Leviers de la lame", label_en: "Blade control levers",
      desc_fr: "Ajustent l'angle, la hauteur et l'inclinaison de la lame",
      desc_en: "Adjust the blade's angle, height and tilt" },
    { num: 2, cx: 100, cy: 172, kind: "wheel",
      label_fr: "Volant de direction", label_en: "Steering wheel",
      desc_fr: "Contrôle la direction des roues avant",
      desc_en: "Controls the direction of the front wheels" },
    { num: 3, cx: 255, cy: 172, kind: "switch",
      label_fr: "Commande d'articulation du châssis", label_en: "Frame articulation control",
      desc_fr: "Articule le châssis pour resserrer le rayon de braquage",
      desc_en: "Articulates the frame to tighten the turning radius" },
    { num: 4, cx: 320, cy: 150, kind: "button",
      label_fr: "Klaxon", label_en: "Horn button",
      desc_fr: "Avertit les personnes autour de la machine avant un mouvement",
      desc_en: "Warns people around the machine before a movement" }
  ]
};

/* ---- Trophées (méta-réussites) ---- */
const TROPHIES = [
  { id: "t_first", name_fr: "Premier pas", name_en: "First Step", icon: "🥉",
    desc_fr: "Réussir ton premier palier de compétence", desc_en: "Pass your first competency tier",
    check: (state) => Object.keys(state.completed).length >= 1 },
  { id: "t_half", name_fr: "Mi-parcours", name_en: "Halfway There", icon: "🥈",
    desc_fr: "Maîtriser 10 compétences (palier Avancé)", desc_en: "Master 10 competencies (Advanced tier)",
    check: (state) => (state.badges || []).length >= 10 },
  { id: "t_all", name_fr: "Diplômé virtuel", name_en: "Virtual Graduate", icon: "🏆",
    desc_fr: "Maîtriser les 20 compétences du programme", desc_en: "Master all 20 competencies of the program",
    check: (state) => (state.badges || []).length >= 20 },
  { id: "t_perfect", name_fr: "Sans faute", name_en: "Flawless", icon: "💯",
    desc_fr: "Obtenir 100% à un palier", desc_en: "Score 100% on a tier",
    check: (state) => Object.values(state.completed).some(s => s.score === 100) },
  { id: "t_safety", name_fr: "Zone sécurité", name_en: "Safety Zone", icon: "🦺",
    desc_fr: "Réussir le palier Débutant du module Santé et sécurité", desc_en: "Pass the Beginner tier of the Health & Safety module",
    check: (state) => state.completed["c02_1"] && state.completed["c02_1"].score >= 70 },
  { id: "t_streak", name_fr: "Assidu", name_en: "Dedicated", icon: "🔥",
    desc_fr: "Se connecter 3 jours différents", desc_en: "Log in on 3 different days",
    check: (state) => (state.loginDays || []).length >= 3 },
  { id: "t_podium", name_fr: "Sur le podium", name_en: "On the Podium", icon: "🏅",
    desc_fr: "Atteindre le top 3 du palmarès", desc_en: "Reach the top 3 of the leaderboard",
    check: (state) => (LEADERBOARD_SEED.filter(p => p.xp > state.xp).length) < 3 },
  { id: "t_matcher", name_fr: "Bon association", name_en: "Great Match", icon: "🧩",
    desc_fr: "Réussir 15 questions d'association de termes", desc_en: "Complete 15 term-matching questions",
    check: (state) => (state.matchesCompleted || 0) >= 15 }
];

/* ---- Palmarès (données d'exemple — classe fictive) ----
   À remplacer par de vraies données élèves lorsqu'un backend
   partagé sera branché (voir README). */
const LEADERBOARD_SEED = [
  { name: "Mia-Rose T.", xp: 3120, avatarChar: "operatrice_bouteur", avatarColor: "vert" },
  { name: "Xavier L.", xp: 2450, avatarChar: "contremaitre", avatarColor: "bleu" },
  { name: "Sam D.", xp: 1780, avatarChar: "camionneur", avatarColor: "orange" },
  { name: "Alicia P.", xp: 1290, avatarChar: "camionneuse", avatarColor: "rouge" },
  { name: "Kevin R.", xp: 860, avatarChar: "contremaitre", avatarColor: "jaune" },
  { name: "Noémie B.", xp: 430, avatarChar: "mecanicienne", avatarColor: "bleu" },
  { name: "Tommy G.", xp: 120, avatarChar: "camionneur", avatarColor: "vert" }
];

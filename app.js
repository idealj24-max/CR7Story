
const translations = {
  fr: {
    navHome: "Accueil",
    navCareer: "Carrière",
    navGoals: "Buts légendaires",
    navTrophies: "Trophées",
    navRecords: "Records",
    navGallery: "Galerie",
    navQuiz: "Quiz CR7",
    heroEyebrow: "L'HISTOIRE D'UNE LÉGENDE",
    heroSubtitle: "Une carrière. Des milliers d'émotions. Une légende éternelle.",
    discover: "DÉCOUVRIR SON HISTOIRE",
    viewTrophies: "VOIR SES TROPHÉES",
    introTitle: "PLUS QU'UN JOUEUR",
    introText: "De Madère aux plus grands stades du monde, découvrez le parcours exceptionnel d'un joueur qui a marqué l'histoire du football.",
    statsTitle: "UNE CARRIÈRE HISTORIQUE",
    statsNote: "Statistiques historiques indicatives. Vérification et actualisation nécessaires.",
    careerTitle: "LES CHAPITRES D'UNE LÉGENDE",
    goalsTitle: "LES BUTS LÉGENDAIRES",
    trophiesTitle: "LA SALLE DES TROPHÉES",
    recordsTitle: "LES RECORDS DE CR7",
    galleryTitle: "GALERIE DE LA LÉGENDE",
    quizTitle: "ES-TU UN VRAI EXPERT CR7 ?",
    footerText: "Un musée numérique dédié à l'histoire de Cristiano Ronaldo.",
    disclaimer: "Projet non officiel et indépendant, non affilié à Cristiano Ronaldo. Images et marques appartenant à leurs propriétaires respectifs.",
    all: "Tous",
    clubs: "Clubs",
    portugal: "Portugal",
    correct: "Bonne réponse !",
    wrong: "Mauvaise réponse !",
    next: "QUESTION SUIVANTE",
    start: "COMMENCER LE QUIZ",
    finished: "Quiz terminé !",
    score: "Ton résultat :",
    years: "Années :",
    country: "Pays :",
    competition: "Compétition :",
    type: "Catégorie :",
    question: "Question",
    of: "sur"
  },

  en: {
    navHome: "Home",
    navCareer: "Career",
    navGoals: "Legendary Goals",
    navTrophies: "Trophies",
    navRecords: "Records",
    navGallery: "Gallery",
    navQuiz: "CR7 Quiz",
    heroEyebrow: "THE HISTORY OF A LEGEND",
    heroSubtitle: "One career. Thousands of emotions. An eternal legend.",
    discover: "DISCOVER HIS STORY",
    viewTrophies: "VIEW TROPHIES",
    introTitle: "MORE THAN A PLAYER",
    introText: "From Madeira to the world's greatest stadiums, discover the extraordinary journey of a player who changed football history.",
    statsTitle: "A HISTORIC CAREER",
    statsNote: "Historical statistics are indicative and require verification and updates.",
    careerTitle: "CHAPTERS OF A LEGEND",
    goalsTitle: "LEGENDARY GOALS",
    trophiesTitle: "THE TROPHY ROOM",
    recordsTitle: "CR7 RECORDS",
    galleryTitle: "LEGEND GALLERY",
    quizTitle: "ARE YOU A TRUE CR7 EXPERT?",
    footerText: "A digital museum dedicated to Cristiano Ronaldo's story.",
    disclaimer: "Independent unofficial fan project, not affiliated with Cristiano Ronaldo. Images and trademarks belong to their respective owners.",
    all: "All",
    clubs: "Clubs",
    portugal: "Portugal",
    correct: "Correct answer!",
    wrong: "Wrong answer!",
    next: "NEXT QUESTION",
    start: "START THE QUIZ",
    finished: "Quiz completed!",
    score: "Your score:",
    years: "Years:",
    country: "Country:",
    competition: "Competition:",
    type: "Category:",
    question: "Question",
    of: "of"
  },

  ar: {
    navHome: "الرئيسية",
    navCareer: "المسيرة",
    navGoals: "الأهداف الأسطورية",
    navTrophies: "الجوائز",
    navRecords: "الأرقام القياسية",
    navGallery: "المعرض",
    navQuiz: "اختبار CR7",
    heroEyebrow: "تاريخ أسطورة",
    heroSubtitle: "مسيرة واحدة. آلاف المشاعر. أسطورة خالدة.",
    discover: "اكتشف قصته",
    viewTrophies: "شاهد الجوائز",
    introTitle: "أكثر من مجرد لاعب",
    introText: "من ماديرا إلى أكبر ملاعب العالم، اكتشف المسيرة الاستثنائية للاعب الذي صنع تاريخ كرة القدم.",
    statsTitle: "مسيرة تاريخية",
    statsNote: "إحصائيات تاريخية أولية تحتاج إلى التحقق والتحديث.",
    careerTitle: "فصول أسطورة",
    goalsTitle: "الأهداف الأسطورية",
    trophiesTitle: "قاعة الجوائز",
    recordsTitle: "أرقام CR7 القياسية",
    galleryTitle: "معرض الأسطورة",
    quizTitle: "هل أنت خبير حقيقي في CR7؟",
    footerText: "متحف رقمي مخصص لتاريخ كريستيانو رونالدو.",
    disclaimer: "مشروع مستقل وغير رسمي وغير تابع لكريستيانو رونالدو. الصور والعلامات التجارية مملوكة لأصحابها.",
    all: "الكل",
    clubs: "الأندية",
    portugal: "البرتغال",
    correct: "إجابة صحيحة!",
    wrong: "إجابة خاطئة!",
    next: "السؤال التالي",
    start: "ابدأ الاختبار",
    finished: "انتهى الاختبار!",
    score: "نتيجتك:",
    years: "السنوات:",
    country: "البلد:",
    competition: "المسابقة:",
    type: "الفئة:",
    question: "السؤال",
    of: "من"
  }
};

let currentLanguage = "fr";
let currentFilter = "all";
let quizIndex = -1;
let quizScore = 0;
let quizAnswered = false;

const $ = id => document.getElementById(id);

function translatePage() {
  const dictionary = translations[currentLanguage];

  document.documentElement.lang = currentLanguage;
  document.documentElement.dir =
    currentLanguage === "ar" ? "rtl" : "ltr";

  document.body.dir =
    currentLanguage === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;

    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  renderGoals();
  renderQuizButton();
}

function renderStats() {
  $("statsGrid").innerHTML = CR7_DATA.stats.map(stat => `
    <article class="stat-card">
      <span class="stat-number">${stat.value}</span>
      <span class="stat-label">${stat.label}</span>
    </article>
  `).join("");
}

function renderCareer() {
  $("careerGrid").innerHTML = CR7_DATA.career.map(item => `
    <article class="career-card">
      <img src="${item.image}" alt="${item.club}" loading="lazy">
      <div class="card-body">
        <h3>${item.club}</h3>
        <p>${item.description}</p>
        <div class="card-meta">
          ${item.years} · ${item.country}
        </div>
        <p style="margin-top:10px;color:#f4d58b;font-weight:700">
          ${item.title}
        </p>
      </div>
    </article>
  `).join("");
}

function renderGoals() {
  const items = CR7_DATA.goals.filter(goal =>
    currentFilter === "all" || goal.category === currentFilter
  );

  $("goalsGrid").innerHTML = items.map(goal => `
    <article class="content-card">
      <img src="${goal.image}" alt="${goal.title}" loading="lazy">
      <div class="card-body">
        <h3>${goal.title}</h3>
        <p>${goal.description}</p>
        <div class="card-meta">
          ${goal.year} · ${goal.competition}
        </div>
      </div>
    </article>
  `).join("");
}

function renderTrophies() {
  $("trophiesGrid").innerHTML = CR7_DATA.trophies.map(item => `
    <article class="trophy-card">
      <div class="trophy-icon">${item.icon}</div>
      <h3>${item.title}</h3>
      <span class="stat-number">${item.count}</span>
      <p>${item.years}</p>
      <p>${item.type}</p>
    </article>
  `).join("");
}

function renderRecords() {
  $("recordsGrid").innerHTML = CR7_DATA.records.map(item => `
    <article class="record-card">
      <div class="record-icon">${item.icon}</div>
      <div>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
    </article>
  `).join("");
}

function renderGallery() {
  $("galleryGrid").innerHTML = CR7_DATA.gallery.map(item => `
    <div class="gallery-item">
      <img
        src="${item.image}"
        alt="${item.title}"
        loading="lazy"
      >
    </div>
  `).join("");
}

function renderQuizButton() {
  $("nextQuestion").textContent =
    translations[currentLanguage].start;
}

function startQuiz() {
  quizIndex = 0;
  quizScore = 0;
  quizAnswered = false;
  renderQuestion();
}

function renderQuestion() {
  const t = translations[currentLanguage];

  if (quizIndex >= CR7_DATA.quiz.length) {
    $("quizContent").innerHTML = `
      <h3>${t.finished}</h3>
      <p>${t.score} ${quizScore} / ${CR7_DATA.quiz.length}</p>
    `;

    $("nextQuestion").textContent = t.start;
    $("quizScore").textContent = "";
    quizIndex = -1;
    return;
  }

  const question = CR7_DATA.quiz[quizIndex];
  quizAnswered = false;

  $("quizContent").innerHTML = `
    <p class="card-meta">
      ${t.question} ${quizIndex + 1} ${t.of} ${CR7_DATA.quiz.length}
    </p>
    <h3>${question.question}</h3>
    <div id="quizOptions">
      ${question.options.map((option, index) => `
        <button class="quiz-option" data-answer="${index}">
          ${option}
        </button>
      `).join("")}
    </div>
    <p id="answerFeedback"></p>
  `;

  document.querySelectorAll(".quiz-option").forEach(button => {
    button.addEventListener("click", () => {
      checkAnswer(Number(button.dataset.answer));
    });
  });

  $("nextQuestion").textContent = t.next;
  $("nextQuestion").disabled = true;
}

function checkAnswer(selected) {
  if (quizAnswered) return;

  quizAnswered = true;

  const question = CR7_DATA.quiz[quizIndex];
  const t = translations[currentLanguage];

  const buttons = document.querySelectorAll(".quiz-option");

  buttons.forEach((button, index) => {
    button.disabled = true;

    if (index === question.answer) {
      button.classList.add("correct");
    }

    if (index === selected && selected !== question.answer) {
      button.classList.add("wrong");
    }
  });

  const correct = selected === question.answer;

  if (correct) quizScore++;

  $("answerFeedback").textContent =
    correct ? t.correct : t.wrong;

  $("quizScore").textContent =
    `${t.score} ${quizScore} / ${CR7_DATA.quiz.length}`;

  $("nextQuestion").disabled = false;
}

function setupFilters() {
  document.querySelectorAll("[data-goal-filter]").forEach(button => {
    button.addEventListener("click", () => {
      currentFilter = button.dataset.goalFilter;

      document.querySelectorAll("[data-goal-filter]").forEach(item => {
        item.classList.remove("active");
      });

      button.classList.add("active");
      renderGoals();
    });
  });
}

function setupNavigation() {
  $("menuToggle").addEventListener("click", () => {
    $("mainNav").classList.toggle("open");
  });

  document.querySelectorAll(".main-nav a").forEach(link => {
    link.addEventListener("click", () => {
      $("mainNav").classList.remove("open");
    });
  });
}

function setupLanguage() {
  $("languageSelect").addEventListener("change", event => {
    currentLanguage = event.target.value;
    translatePage();
  });
}

function setupQuiz() {
  $("nextQuestion").addEventListener("click", () => {
    if (quizIndex === -1) {
      startQuiz();
      return;
    }

    if (!quizAnswered) return;

    quizIndex++;
    renderQuestion();
  });
}

function initializeApp() {
  renderStats();
  renderCareer();
  renderGoals();
  renderTrophies();
  renderRecords();
  renderGallery();

  setupFilters();
  setupNavigation();
  setupLanguage();
  setupQuiz();

  translatePage();

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("service-worker.js")
        .catch(error => console.error("Service Worker:", error));
    });
  }
}

document.addEventListener("DOMContentLoaded", initializeApp);

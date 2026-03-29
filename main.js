/**
 * Past Tense Practice Website - Logic
 */

const QUESTION_BANK = {
  simple: [
    { s: "He ______ (buy) a new car last week.", v: "buy", a: "bought" },
    { s: "They ______ (visit) Paris in 2019.", v: "visit", a: "visited" },
    { s: "I ______ (see) that movie yesterday.", v: "see", a: "saw" },
    { s: "She ______ (not / go) to the party on Friday.", v: "not go", a: "did not go" },
    { s: "We ______ (eat) dinner at 8 PM.", v: "eat", a: "ate" },
    { s: "Did you ______ (finish) your homework?", v: "finish", a: "finish" },
    { s: "It ______ (rain) heavily last night.", v: "rain", a: "rained" },
    { s: "My parents ______ (meet) in college.", v: "meet", a: "met" },
    { s: "Who ______ (invent) the telephone?", v: "invent", a: "invented" },
    { s: "The sun ______ (shine) brightly all day.", v: "shine", a: "shone" },
    { s: "I ______ (forget) my keys at home.", v: "forget", a: "forgot" },
    { s: "They ______ (win) the championship game.", v: "win", a: "won" },
    { s: "He ______ (speak) to the teacher after class.", v: "speak", a: "spoke" },
    { s: "We ______ (dance) all night long.", v: "dance", a: "danced" },
    { s: "The plane ______ (land) safely on time.", v: "land", a: "landed" },
    { s: "I ______ (write) a letter to my grandmother.", v: "write", a: "wrote" },
    { s: "She ______ (tell) me a secret.", v: "tell", a: "told" },
    { s: "They ______ (build) this house in 1950.", v: "build", a: "built" },
    { s: "We ______ (drink) some tea after dinner.", v: "drink", a: "drank" },
    { s: "He ______ (run) five miles this morning.", v: "run", a: "ran" }
  ],
  perfect: [
    { s: "She ______ (finish) her work before I arrived.", v: "finish", a: "had finished" },
    { s: "By the time we got there, the movie ______ (start).", v: "start", a: "had started" },
    { s: "I recognized him because I ______ (see) him before.", v: "see", a: "had seen" },
    { s: "They ______ (never / be) to London until last year.", v: "never be", a: "had never been" },
    { s: "The bus ______ (already / leave) when we reached the station.", v: "already leave", a: "had already left" },
    { s: "He was tired because he ______ (work) all day.", v: "work", a: "had worked" },
    { s: "The house was quiet because everyone ______ (go) to bed.", v: "go", a: "had gone" },
    { s: "She realized she ______ (lose) her wallet.", v: "lose", a: "had lost" },
    { s: "We ______ (not / eat) anything all day, so we were hungry.", v: "not eat", a: "had not eaten" },
    { s: "The crops died because it ______ (not / rain) for months.", v: "not rain", a: "had not rained" },
    { s: "Had you ______ (ever / hear) that song before tonight?", v: "ever hear", a: "ever heard" },
    { s: "They ______ (finish) the marathon before sunset.", v: "finish", a: "had finished" },
    { s: "I ______ (save) enough money for the trip.", v: "save", a: "had saved" },
    { s: "We ______ (live) there for ten years when they moved.", v: "live", a: "had lived" },
    { s: "He ______ (just / arrive) when the meeting started.", v: "just arrive", a: "had just arrived" },
    { s: "She ______ (study) French before she moved to Paris.", v: "study", a: "had studied" },
    { s: "They ______ (already / sell) the house by then.", v: "already sell", a: "had already sold" }
  ],
  continuous: [
    { s: "He ______ (wait) for an hour when the bus finally came.", v: "wait", a: "had been waiting" },
    { s: "The children ______ (play) outside all afternoon before it rained.", v: "play", a: "had been playing" },
    { s: "She ______ (study) for years before she got her degree.", v: "study", a: "had been studying" },
    { s: "How long ______ you ______ (look) for a job before you found one?", v: "look", a: "had you been looking" },
    { s: "They ______ (travel) for months before they ran out of money.", v: "travel", a: "had been traveling" },
    { s: "I ______ (work) at that company for 5 years when it closed.", v: "work", a: "had been working" },
    { s: "The phone ______ (ring) for several minutes before I answered it.", v: "ring", a: "had been ringing" },
    { s: "We ______ (drive) for two hours when we realized we were lost.", v: "drive", a: "had been driving" },
    { s: "The athletes ______ (train) hard since January.", v: "train", a: "had been training" },
    { s: "She was out of breath because she ______ (run).", v: "run", a: "had been running" },
    { s: "The fire ______ (burn) for hours before the firefighters arrived.", v: "burn", a: "had been burning" },
    { s: "He ______ (learn) Japanese for three years.", v: "learn", a: "had been learning" },
    { s: "I ______ (wait) for the news all morning.", v: "wait", a: "had been waiting" },
    { s: "They ______ (work) in the garden before it started to snow.", v: "work", a: "had been working" },
    { s: "She ______ (cry) because she lost her toy.", v: "cry", a: "had been crying" }
  ]
};

const UI = {
  app: document.getElementById("app"),
  score: document.getElementById("score"),
  accuracy: document.getElementById("accuracy"),
  currentTense: document.getElementById("current-tense-label"),
  quizCard: document.getElementById("quiz-card"),
  progressBar: document.getElementById("progress-bar"),
  category: document.getElementById("question-category"),
  index: document.getElementById("question-index"),
  text: document.getElementById("question-text"),
  input: document.getElementById("answer-input"),
  submitBtn: document.getElementById("submit-btn"),
  nextBtn: document.getElementById("next-btn"),
  resetBtn: document.getElementById("reset-btn"),
  themeToggle: document.getElementById("theme-toggle"),
  feedback: document.getElementById("feedback"),
  filterBtns: document.querySelectorAll(".filter-btn")
};

let state = {
  currentQuestions: [],
  currentIndex: 0,
  score: 0,
  totalAnswered: 0,
  correctCount: 0,
  currentTense: "mixed",
  theme: localStorage.getItem("theme") || "light"
};

function init() {
  document.body.setAttribute("data-theme", state.theme);
  generateQuestions();
  updateUI();
  attachEventListeners();
}

function generateQuestions() {
  let pool = [];
  if (state.currentTense === "mixed") {
    // Label them first
    const s = QUESTION_BANK.simple.map(q => ({ ...q, category: "Past Simple" }));
    const p = QUESTION_BANK.perfect.map(q => ({ ...q, category: "Past Perfect Simple" }));
    const c = QUESTION_BANK.continuous.map(q => ({ ...q, category: "Past Perfect Continuous" }));
    pool = [...s, ...p, ...c];
  } else {
    const cat = state.currentTense === "simple" ? "Past Simple" : 
                state.currentTense === "perfect" ? "Past Perfect Simple" : 
                "Past Perfect Continuous";
    pool = QUESTION_BANK[state.currentTense].map(q => ({ ...q, category: cat }));
  }

  // Shuffle and pick 10
  state.currentQuestions = shuffle(pool).slice(0, 10);
  state.currentIndex = 0;
}

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function updateUI() {
  const q = state.currentQuestions[state.currentIndex];
  if (!q) return;

  // Question Text
  UI.text.innerHTML = q.s.replace("______", `<span class="blank">______</span>`);
  UI.category.innerText = q.category;
  UI.index.innerText = `Question ${state.currentIndex + 1}/10`;
  
  // Progress
  UI.progressBar.style.width = `${((state.currentIndex + 1) / 10) * 100}%`;
  
  // Stats
  UI.score.innerText = state.score;
  const acc = state.totalAnswered === 0 ? 0 : Math.round((state.correctCount / state.totalAnswered) * 100);
  UI.accuracy.innerText = `${acc}%`;
  UI.currentTense.innerText = state.currentTense.charAt(0).toUpperCase() + state.currentTense.slice(1);

  // Input
  UI.input.value = "";
  UI.input.focus();
  
  // Feedback & Buttons
  UI.feedback.classList.add("hidden");
  UI.nextBtn.classList.add("hidden");
  UI.submitBtn.classList.remove("hidden");
  UI.input.disabled = false;
}

function checkAnswer() {
  const userAns = UI.input.value.trim().toLowerCase();
  const correctAns = state.currentQuestions[state.currentIndex].a.toLowerCase();
  
  state.totalAnswered++;
  
  UI.feedback.classList.remove("hidden");
  UI.input.disabled = true;
  UI.submitBtn.classList.add("hidden");
  UI.nextBtn.classList.remove("hidden");

  if (userAns === correctAns) {
    state.score += 10;
    state.correctCount++;
    UI.feedback.className = "feedback correct";
    UI.feedback.innerText = "✨ Correct! Well done.";
    UI.quizCard.classList.remove("shake");
  } else {
    UI.feedback.className = "feedback incorrect";
    UI.feedback.innerText = `❌ Incorrect. The correct answer is: ${state.currentQuestions[state.currentIndex].a}`;
    UI.quizCard.classList.add("shake");
    setTimeout(() => UI.quizCard.classList.remove("shake"), 400);
  }

  UI.score.innerText = state.score;
  const acc = Math.round((state.correctCount / state.totalAnswered) * 100);
  UI.accuracy.innerText = `${acc}%`;
}

function nextQuestion() {
  if (state.currentIndex < 9) {
    state.currentIndex++;
    updateUI();
  } else {
    // End of round
    alert(`Round Finished! Your final score: ${state.score}. Starting a new round with fresh questions.`);
    generateQuestions();
    updateUI();
  }
}

function attachEventListeners() {
  UI.submitBtn.addEventListener("click", checkAnswer);
  UI.nextBtn.addEventListener("click", nextQuestion);
  
  UI.input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      if (!UI.submitBtn.classList.contains("hidden")) {
        checkAnswer();
      } else if (!UI.nextBtn.classList.contains("hidden")) {
        nextQuestion();
      }
    }
  });

  UI.resetBtn.addEventListener("click", () => {
    state.score = 0;
    state.totalAnswered = 0;
    state.correctCount = 0;
    state.currentIndex = 0;
    generateQuestions();
    updateUI();
  });

  UI.filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      UI.filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.currentTense = btn.dataset.tense;
      
      // Reset progress
      state.currentIndex = 0;
      generateQuestions();
      updateUI();
    });
  });

  UI.themeToggle.addEventListener("click", () => {
    state.theme = state.theme === "light" ? "dark" : "light";
    document.body.setAttribute("data-theme", state.theme);
    localStorage.setItem("theme", state.theme);
  });
}

// Start the app
init();

/**
 * Past Tense Practice Website - Logic
 */

const QUESTION_BANK = {
  simple: [
    { type: "input", s: "He ______ (buy) a new car last week.", a: ["bought"] },
    { type: "input", s: "They ______ (visit) Paris in 2019.", a: ["visited"] },
    { type: "choice", s: "I ______ that movie yesterday.", choices: ["see", "saw", "had seen", "was seeing"], a: ["saw"] },
    { type: "input", s: "She ______ (not / go) to the party on Friday.", a: ["did not go"] },
    { type: "input", s: "We ______ (eat) dinner at 8 PM.", a: ["ate"] },
    { type: "choice", s: "Did you ______ your homework?", choices: ["finish", "finished", "had finished", "finishing"], a: ["finish"] },
    { type: "input", s: "It ______ (rain) heavily last night.", a: ["rained"] },
    { type: "input", s: "My parents ______ (meet) in college.", a: ["met"] },
    { type: "choice", s: "The sun ______ brightly all day.", choices: ["shine", "shone", "shined", "shining"], a: ["shone"] },
    { type: "input", s: "I ______ (forget) my keys at home.", a: ["forgot"] }
  ],
  perfect: [
    { type: "input", s: "She ______ (finish) her work before I arrived.", a: ["had finished"] },
    { type: "choice", s: "By the time we got there, the movie ______.", choices: ["starts", "started", "had started", "has started"], a: ["had started"] },
    { type: "input", s: "I recognized him because I ______ (see) him before.", a: ["had seen"] },
    { type: "input", s: "They ______ (never / be) to London until last year.", a: ["had never been"] },
    { type: "choice", s: "The bus ______ when we reached the station.", choices: ["already left", "had already left", "has already left", "already leaves"], a: ["had already left"] },
    { type: "input", s: "He was tired because he ______ (work) all day.", a: ["had worked"] },
    { type: "input", s: "The house was quiet because everyone ______ (go) to bed.", a: ["had gone"] }
  ],
  continuous: [
    { type: "input", s: "He ______ (wait) for an hour when the bus finally came.", a: ["had been waiting"] },
    { type: "input", s: "The children ______ (play) outside all afternoon before it rained.", a: ["had been playing"] },
    { type: "choice", s: "She ______ for years before she got her degree.", choices: ["studied", "had been studying", "has studied", "was studying"], a: ["had been studying"] },
    { type: "input", s: "They ______ (travel) for months before they ran out of money.", a: ["had been traveling"] },
    { type: "choice", s: "The phone ______ for several minutes before I answered it.", choices: ["rang", "had been ringing", "was ringing", "had rung"], a: ["had been ringing"] }
  ],
  mixed: [
    { type: "input", s: "After she ______ (finish) her homework, she ______ (go) to sleep.", a: ["had finished", "went"] },
    { type: "input", s: "They ______ (live) in Kyoto for 5 years before they ______ (move) to Tokyo.", a: ["had lived", "moved"] },
    { type: "input", s: "The man ______ (realize) that he ______ (lose) his wallet.", a: ["realized", "had lost"] },
    { type: "input", s: "When the teacher ______ (arrive), the students ______ (wait) for 10 minutes.", a: ["arrived", "had been waiting"] },
    { type: "input", s: "I ______ (see) that he ______ (be) crying.", a: ["saw", "had been"] },
    { type: "input", s: "By the time the firemen ______ (arrive), the house ______ (burn) for hours.", a: ["arrived", "had been burning"] }
  ],
  tags: [
    { type: "input", s: "You aren't coming to the party, ______ (tag)?", a: ["are you"] },
    { type: "input", s: "She likes music, ______ (tag)?", a: ["doesn't she"] },
    { type: "input", s: "They ______ (be) at home, weren't they?", a: ["were"] },
    { type: "input", s: "He ______ (go) to the store yesterday, didn't he?", a: ["went"] },
    { type: "input", s: "We have finished our work, ______ (tag)?", a: ["haven't we"] },
    { type: "input", s: "It won't rain tomorrow, ______ (tag)?", a: ["will it"] },
    { type: "choice", s: "You haven't seen my keys, ______?", choices: ["have you", "haven't you", "do you", "don't you"], a: ["have you"] },
    { type: "input", s: "Let's go for a walk, ______ (tag)?", a: ["shall we"] },
    { type: "input", s: "I am late, ______ (tag)?", a: ["aren't I"] },
    { type: "input", s: "She had never been there before, ______ (tag)?", a: ["had she"] }
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
    const m = QUESTION_BANK.mixed.map(q => ({ ...q, category: "Mixed Past Tense" }));
    const t = QUESTION_BANK.tags.map(q => ({ ...q, category: "Question Tags" }));
    pool = [...s, ...p, ...c, ...m, ...t];
  } else if (state.currentTense === "perfects") {
    // Mix only Perfect and Perfect Continuous
    const p = QUESTION_BANK.perfect.map(q => ({ ...q, category: "Past Perfect Simple" }));
    const c = QUESTION_BANK.continuous.map(q => ({ ...q, category: "Past Perfect Continuous" }));
    pool = [...p, ...c];
  } else {
    const cat = state.currentTense === "simple" ? "Past Simple" : 
                state.currentTense === "perfect" ? "Past Perfect Simple" : 
                state.currentTense === "continuous" ? "Past Perfect Continuous" : 
                "Question Tags";
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

  // 1. Hint removal (Challenge Modes)
  if (state.currentTense === "mixed" || state.currentTense === "perfects") {
    UI.category.innerText = state.currentTense === "mixed" ? "Global Challenge" : "Perfects Challenge";
    UI.category.classList.add("challenge");
  } else {
    UI.category.innerText = q.category;
    UI.category.classList.remove("challenge");
  }

  // Label Fix for stats
  let tenseLabel = state.currentTense;
  if (tenseLabel === "tags") tenseLabel = "Question Tags";
  UI.currentTense.innerText = tenseLabel.charAt(0).toUpperCase() + tenseLabel.slice(1);

  // 2. Question Text & Dynamic Inputs
  let questionHTML = q.s;
  let blankCount = 0;
  
  if (q.type === "input") {
    questionHTML = q.s.replace(/______/g, () => {
      blankCount++;
      return `<input type="text" class="inline-input" data-index="${blankCount - 1}" placeholder="..." autocomplete="off">`;
    });
    UI.text.innerHTML = questionHTML;
    UI.input.classList.add("hidden");
    UI.submitBtn.classList.remove("hidden");
    
    const firstInput = UI.text.querySelector('input');
    if (firstInput) firstInput.focus();
  } else if (q.type === "choice") {
    UI.text.innerHTML = q.s.replace("______", `<span class="blank">______</span>`);
    
    // Create choice buttons
    const choiceContainer = document.createElement("div");
    choiceContainer.className = "choice-grid";
    q.choices.forEach(choice => {
      const btn = document.createElement("button");
      btn.className = "choice-btn";
      btn.innerText = choice;
      btn.onclick = () => checkChoice(choice);
      choiceContainer.appendChild(btn);
    });
    UI.text.appendChild(choiceContainer);
    
    UI.input.classList.add("hidden");
    UI.submitBtn.classList.add("hidden");
  }
  
  UI.index.innerText = `Question ${state.currentIndex + 1}/10`;
  UI.progressBar.style.width = `${((state.currentIndex + 1) / 10) * 100}%`;
  
  // Stats
  UI.score.innerText = state.score;
  const acc = state.totalAnswered === 0 ? 0 : Math.round((state.correctCount / state.totalAnswered) * 100);
  UI.accuracy.innerText = `${acc}%`;
  UI.currentTense.innerText = state.currentTense.charAt(0).toUpperCase() + state.currentTense.slice(1);

  // Feedback & Buttons
  UI.feedback.classList.add("hidden");
  UI.nextBtn.classList.add("hidden");
}

function checkChoice(choice) {
  const q = state.currentQuestions[state.currentIndex];
  const isCorrect = choice.toLowerCase() === q.a[0].toLowerCase();
  finishQuestion(isCorrect, q.a.join(", "));
}

function checkAnswer() {
  const q = state.currentQuestions[state.currentIndex];
  if (q.type !== "input") return;

  const inputs = UI.text.querySelectorAll(".inline-input");
  let allCorrect = true;
  let userAnswers = [];
  
  inputs.forEach((input, i) => {
    const val = input.value.trim().toLowerCase();
    userAnswers.push(val);
    if (val !== q.a[i].toLowerCase()) {
      allCorrect = false;
      input.classList.add("error");
    } else {
      input.classList.add("success");
    }
  });

  finishQuestion(allCorrect, q.a.join(" / "));
}

function finishQuestion(isCorrect, correctStr) {
  state.totalAnswered++;
  
  UI.feedback.classList.remove("hidden");
  UI.submitBtn.classList.add("hidden");
  UI.nextBtn.classList.remove("hidden");
  
  // Disable all inputs/buttons
  const inputs = UI.text.querySelectorAll(".inline-input");
  inputs.forEach(i => i.disabled = true);
  const choiceBtns = UI.text.querySelectorAll(".choice-btn");
  choiceBtns.forEach(b => b.disabled = true);

  if (isCorrect) {
    state.score += 10;
    state.correctCount++;
    UI.feedback.className = "feedback correct";
    UI.feedback.innerText = "✨ Correct! Well done.";
  } else {
    UI.feedback.className = "feedback incorrect";
    UI.feedback.innerText = `❌ Incorrect. Correct: ${correctStr}`;
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

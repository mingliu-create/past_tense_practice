let QUESTION_BANK = {};



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

async function init() {
  document.body.setAttribute("data-theme", state.theme);
  
  try {
    const response = await fetch("./questions.json");
    QUESTION_BANK = await response.json();
    generateQuestions();
    updateUI();
  } catch (err) {
    console.error("Failed to load questions:", err);
    UI.text.innerHTML = "Failed to load questions. Please check questions.json.";
  }
  
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
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
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

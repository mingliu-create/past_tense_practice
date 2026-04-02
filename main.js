import confetti from 'canvas-confetti';

/**
 * TenseMaster Core Logic
 * Optimized for performance, persistence, and premium UX
 */

// --- Global State ---
let QUESTION_BANK = {};

const state = {
  currentQuestions: [],
  currentIndex: 0,
  score: parseInt(localStorage.getItem("tm_score")) || 0,
  streak: parseInt(localStorage.getItem("tm_streak")) || 0,
  totalAnswered: parseInt(localStorage.getItem("tm_total")) || 0,
  correctCount: parseInt(localStorage.getItem("tm_correct")) || 0,
  currentTense: "mixed",
  theme: localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"),
  isBusy: false,
  activeChoices: []
};

// --- DOM References ---
const UI = {
  app: document.getElementById("app"),
  score: document.getElementById("score"),
  streak: document.getElementById("streak"),
  accuracy: document.getElementById("accuracy"),
  currentTenseLabel: document.getElementById("current-tense-label"),
  quizCard: document.getElementById("quiz-card"),
  progressBar: document.getElementById("progress-bar"),
  category: document.getElementById("question-category"),
  text: document.getElementById("question-text"),
  submitBtn: document.getElementById("submit-btn"),
  nextBtn: document.getElementById("next-btn"),
  resetBtn: document.getElementById("reset-btn"),
  themeToggle: document.getElementById("theme-toggle"),
  feedback: document.getElementById("feedback"),
  filterBtns: document.querySelectorAll(".filter-btn")
};

// --- Initialization ---
async function init() {
  document.body.setAttribute("data-theme", state.theme);
  
  try {
    const response = await fetch("./questions.json");
    if (!response.ok) throw new Error("Network response was not ok");
    QUESTION_BANK = await response.json();
    
    setupGame();
    attachEventListeners();
  } catch (err) {
    console.error("Critical Failure:", err);
    UI.text.innerHTML = `<span style="color:red">Error: Failed to load curriculum. Please refresh.</span>`;
  }
}

function setupGame() {
  generateQuestionPool();
  updateQuestionDisplay();
  updateStatsDisplay();
}

// --- Question Engine ---
function generateQuestionPool() {
  let pool = [];
  const categories = {
    simple: "Past Simple",
    perfect: "Past Perfect Simple",
    continuous: "Past Perfect Continuous",
    mixed: "Advanced Mixed Tense",
    tags: "Question Tags"
  };

  if (state.currentTense === "mixed") {
    Object.keys(categories).forEach(key => {
      if (QUESTION_BANK[key]) {
        pool.push(...QUESTION_BANK[key].map(q => ({ ...q, category: categories[key] })));
      }
    });
  } else if (state.currentTense === "perfects") {
    const p = (QUESTION_BANK.perfect || []).map(q => ({ ...q, category: categories.perfect }));
    const c = (QUESTION_BANK.continuous || []).map(q => ({ ...q, category: categories.continuous }));
    pool = [...p, ...c];
  } else {
    pool = (QUESTION_BANK[state.currentTense] || []).map(q => ({ 
      ...q, 
      category: categories[state.currentTense] || "Grammar" 
    }));
  }

  state.currentQuestions = shuffleArray(pool).slice(0, 1000);
  state.currentIndex = 0;
}

function shuffleArray(array) {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

// --- UI Logic ---
function updateQuestionDisplay() {
  const q = state.currentQuestions[state.currentIndex];
  if (!q) {
    handleEndOfRound();
    return;
  }

  UI.feedback.classList.add("hidden");
  UI.nextBtn.classList.add("hidden");
  UI.submitBtn.classList.remove("hidden");
  
  UI.category.innerText = q.category;
  UI.currentTenseLabel.innerText = state.currentTense === "mixed" ? "Elite Challenge" : "Focus Mode";

  if (q.type === "input") {
    renderInputQuestion(q);
  } else if (q.type === "choice") {
    renderChoiceQuestion(q);
  }

  const progress = ((state.currentIndex) / state.currentQuestions.length) * 100;
  UI.progressBar.style.width = `${progress}%`;
  UI.progressBar.setAttribute("aria-valuenow", Math.round(progress));
}

function renderInputQuestion(q) {
  let blankIndex = 0;
  const questionHTML = q.s.replace(/______/g, () => {
    const html = `<input type="text" class="inline-input" data-ans-idx="${blankIndex}" 
                  aria-label="Grammar blank ${blankIndex + 1}" 
                  placeholder="..." autocomplete="off" spellcheck="false"
                  autocorrect="off" autocapitalize="none">`;
    blankIndex++;
    return html;
  });

  UI.text.innerHTML = questionHTML;
  
  const firstInput = UI.text.querySelector('input');
  if (firstInput) firstInput.focus();

  UI.text.querySelectorAll('input').forEach(input => {
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') validateAnswer();
    });
  });
}

function renderChoiceQuestion(q) {
  UI.text.innerHTML = q.s.replace("______", `<span class="blank" aria-label="blank">______</span>`);
  
  const choiceGrid = document.createElement("div");
  choiceGrid.className = "choice-grid";
  choiceGrid.setAttribute("role", "group");
  choiceGrid.setAttribute("aria-label", "Selection choices");
  
  const shuffledChoices = shuffleArray(q.choices || []);
  state.activeChoices = shuffledChoices;
  
  shuffledChoices.forEach((choice, idx) => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.innerHTML = `<span class="choice-key">${idx + 1}</span> ${choice}`;
    btn.setAttribute("aria-label", `Choice ${idx + 1}: ${choice}`);
    btn.onclick = () => submitChoice(choice);
    choiceGrid.appendChild(btn);
  });
  
  UI.text.appendChild(choiceGrid);
  UI.submitBtn.classList.add("hidden");
}

// --- Validation Logic ---
function validateAnswer() {
  if (state.isBusy) return;
  
  const q = state.currentQuestions[state.currentIndex];
  if (q.type !== "input") return;

  const inputs = UI.text.querySelectorAll(".inline-input");
  let allCorrect = true;
  let userAnswers = [];
  
  inputs.forEach((input, i) => {
    const val = input.value.trim().toLowerCase();
    const correctVal = q.a[i].toLowerCase();
    
    if (val === correctVal) {
      input.classList.add("success");
    } else {
      input.classList.add("error");
      allCorrect = false;
    }
  });

  finishQuestion(allCorrect, q.a.join(" / "));
}

function submitChoice(choice) {
  if (state.isBusy) return;
  const q = state.currentQuestions[state.currentIndex];
  const isCorrect = choice.toLowerCase() === q.a[0].toLowerCase();
  
  const btns = UI.text.querySelectorAll(".choice-btn");
  btns.forEach(btn => {
    btn.disabled = true;
    if (btn.innerText.includes(q.a[0])) {
      btn.style.borderColor = "var(--accent)";
      btn.style.background = "rgba(16, 185, 129, 0.1)";
    } else if (btn.innerText.includes(choice) && !isCorrect) {
      btn.style.borderColor = "#ef4444";
      btn.style.background = "rgba(239, 68, 68, 0.1)";
    }
  });

  finishQuestion(isCorrect, q.a[0]);
}

function finishQuestion(isCorrect, answerString) {
  state.isBusy = true;
  state.totalAnswered++;
  
  let pointsChange = 0;

  if (isCorrect) {
    state.correctCount++;
    state.streak++;
    
    // Multiplier Logic: 1x, 2x (3+), 3x (7+), 5x (12+)
    let multiplier = 1;
    if (state.streak >= 12) multiplier = 5;
    else if (state.streak >= 7) multiplier = 3;
    else if (state.streak >= 3) multiplier = 2;

    pointsChange = 10 * multiplier;
    state.score += pointsChange;
    
    triggerSuccessConfetti();
    showFeedback(multiplier > 1 ? `🔥 COMBO x${multiplier}! Excellent.` : "✨ Brilliant! You're mastering this.", "correct");
    showFloatingPoints(`+${pointsChange}${multiplier > 1 ? ' 🔥' : ''}`, "scoring");
  } else {
    state.streak = 0;
    pointsChange = -5;
    state.score = Math.max(0, state.score + pointsChange); // Prevent negative total
    
    UI.quizCard.classList.add("shake");
    setTimeout(() => UI.quizCard.classList.remove("shake"), 500);
    showFeedback(`❌ Not quite. Correct: ${answerString}`, "incorrect");
    showFloatingPoints(`${pointsChange}`, "deducting");
  }

  // Persist State
  localStorage.setItem("tm_score", state.score);
  localStorage.setItem("tm_streak", state.streak);
  localStorage.setItem("tm_total", state.totalAnswered);
  localStorage.setItem("tm_correct", state.correctCount);

  updateStatsDisplay(isCorrect ? "scoring" : "deducting");
  UI.submitBtn.classList.add("hidden");
  UI.nextBtn.classList.remove("hidden");
  UI.nextBtn.focus();
  state.isBusy = false;
}

function showFeedback(text, type) {
  UI.feedback.innerText = text;
  UI.feedback.className = `feedback ${type}`;
  UI.feedback.classList.remove("hidden");
}

function showFloatingPoints(text, type) {
  const float = document.createElement("div");
  float.className = `floating-points ${type === 'scoring' ? 'correct' : 'incorrect'}`;
  float.innerText = text;
  float.style.color = type === 'scoring' ? 'var(--accent)' : '#ef4444';
  
  // Position near the score
  const scoreRect = UI.score.getBoundingClientRect();
  float.style.left = `${scoreRect.left + (scoreRect.width / 2)}px`;
  float.style.top = `${scoreRect.top}px`;
  
  document.body.appendChild(float);
  setTimeout(() => float.remove(), 1000);
}

function updateStatsDisplay(animClass = null) {
  UI.score.innerText = state.score;
  UI.streak.innerText = state.streak;
  const acc = state.totalAnswered === 0 ? 0 : Math.round((state.correctCount / state.totalAnswered) * 100);
  UI.accuracy.innerText = `${acc}%`;
  
  // Update Multiplier Badge
  const multiplierEl = document.getElementById("streak-multiplier");
  let multiplier = 1;
  if (state.streak >= 12) multiplier = 5;
  else if (state.streak >= 7) multiplier = 3;
  else if (state.streak >= 3) multiplier = 2;

  if (multiplier > 1) {
    multiplierEl.innerText = `x${multiplier}`;
    multiplierEl.style.display = "block";
  } else {
    multiplierEl.style.display = "none";
  }

  if (animClass) {
    UI.score.classList.add(animClass);
    setTimeout(() => UI.score.classList.remove(animClass), 500);
  }
}

function triggerSuccessConfetti() {
  const count = 40;
  const defaults = { origin: { y: 0.7 }, zIndex: 1000 };
  const fire = (particleRatio, opts) => {
    confetti({ ...defaults, ...opts, particleCount: Math.floor(count * particleRatio) });
  };

  fire(0.25, { spread: 26, startVelocity: 55 });
  fire(0.2, { spread: 60 });
  fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
  fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
  fire(0.1, { spread: 120, startVelocity: 45 });
}

function handleEndOfRound() {
  alert(`Round complete! Final Score: ${state.score}. Loading fresh challenges...`);
  setupGame();
}

function handleReset() {
  if (confirm("Clear all your progress and achievements?")) {
    localStorage.clear();
    state.score = 0;
    state.streak = 0;
    state.totalAnswered = 0;
    state.correctCount = 0;
    setupGame();
  }
}

// --- Event Handlers ---
function attachEventListeners() {
  UI.submitBtn.onclick = validateAnswer;
  UI.nextBtn.onclick = () => {
    state.currentIndex++;
    updateQuestionDisplay();
  };

  UI.resetBtn.onclick = handleReset;

  UI.themeToggle.onclick = () => {
    state.theme = state.theme === "light" ? "dark" : "light";
    document.body.setAttribute("data-theme", state.theme);
    localStorage.setItem("theme", state.theme);
  };

  UI.filterBtns.forEach(btn => {
    btn.onclick = () => {
      UI.filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.currentTense = btn.dataset.tense;
      setupGame();
    };
  });

  window.onkeydown = (e) => {
    if ((e.key === "Enter" || e.key === "n") && !UI.nextBtn.classList.contains("hidden")) {
      UI.nextBtn.click();
      return;
    }
    if (e.key === "Enter" && !UI.submitBtn.classList.contains("hidden")) {
      validateAnswer();
      return;
    }
    if (["1", "2", "3", "4"].includes(e.key) && state.activeChoices.length > 0 && UI.nextBtn.classList.contains("hidden")) {
      const idx = parseInt(e.key) - 1;
      if (state.activeChoices[idx]) {
        submitChoice(state.activeChoices[idx]);
      }
    }
  };
}

init();

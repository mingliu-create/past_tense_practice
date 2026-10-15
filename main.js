import confetti from 'canvas-confetti';
import { MIDTERM_BANK } from './midterm-bank.js';
import { answerMatches, displayAnswers } from './answer-utils.js';
import { SCIENCE_CHAPTERS, SCIENCE_FIGURES, scienceQuestions } from './science-data.js';
import { renderScienceStudy } from './science-ui.js';

const CURRICULA = {
  current: {
    label: '這學期（期中考）',
    units: {
      mixed: '期中考綜合練習',
      tags: 'Week 1–2 附加問句',
      phrasal: 'Week 3 片語動詞',
      degree: 'Week 4–5 too / enough 填充',
      combine: 'Week 4–5 too / enough 句子合併',
      present: 'Week 6–7 混合練習'
    }
  },
  previous: {
    label: '上學期',
    units: {
      mixed: '綜合練習', perfects: '完成式混合', tags: '附加問句',
      simple: '過去式', perfect: '過去完成式', continuous: '過去完成進行式'
    }
  }
};

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
  semester: 'current',
  subject: new URLSearchParams(window.location.search).get('subject') === 'science' ? 'science' : 'english',
  englishSemester: 'current',
  scienceMode: 'glossary',
  answered: false,
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
  feedback: document.getElementById("feedback")
};
UI.semester = document.getElementById('semester-select');
UI.unit = document.getElementById('unit-select');
UI.instructions = document.getElementById('question-instructions');
UI.unitSummary = document.getElementById('unit-summary');
UI.subject = document.getElementById('subject-select');
UI.scienceMode = document.getElementById('science-mode-select');
UI.studyPanel = document.getElementById('science-study');
UI.stats = document.querySelector('.stats-bar');

function scienceStudyMode() {
  return state.subject === 'science' && ['glossary', 'review'].includes(state.scienceMode);
}

function unitLabels() {
  return state.subject === 'science'
    ? { mixed: '全部三章', ...Object.fromEntries(Object.entries(SCIENCE_CHAPTERS).map(([key, data]) => [key, data.title])) }
    : CURRICULA[state.semester].units;
}

// --- Initialization ---
async function init() {
  document.body.setAttribute("data-theme", state.theme);
  
  try {
    const response = await fetch("./questions.json");
    if (!response.ok) throw new Error("Network response was not ok");
    QUESTION_BANK = await response.json();
    setupUnitOptions();
    setupGame();
    attachEventListeners();
  } catch (err) {
    console.error("Critical Failure:", err);
    UI.text.innerHTML = `<span style="color:red">Error: Failed to load curriculum. Please refresh.</span>`;
  }
}

function setupGame() {
  const study = scienceStudyMode();
  UI.studyPanel.classList.toggle('hidden', !study);
  UI.quizCard.classList.toggle('hidden', study);
  UI.stats.classList.toggle('hidden', study);
  UI.subject.value = state.subject;
  document.body.dataset.subject = state.subject;
  document.getElementById('science-mode-control').classList.toggle('hidden', state.subject !== 'science');
  UI.semester.querySelector('[value="previous"]').disabled = state.subject === 'science';
  document.querySelector('.hero h2').textContent = state.subject === 'science' ? 'Science 自然複習' : '英文文法練習';
  document.querySelector('.hero p').textContent = state.subject === 'science'
    ? '人類的生殖、植物的繁殖與遺傳。從名詞理解開始，再練習應用與解釋。'
    : '選擇學期與練習範圍，依語境填入答案或合併完整句子。';
  if (study) {
    state.currentQuestions = [];
    state.activeChoices = [];
    state.answered = false;
    UI.nextBtn.classList.add('hidden');
    UI.unitSummary.textContent = `Science · ${unitLabels()[state.currentTense]} · ${UI.scienceMode.selectedOptions[0].textContent}`;
    renderScienceStudy(UI.studyPanel, state.currentTense, state.scienceMode);
    return;
  }
  generateQuestionPool();
  updateQuestionDisplay();
  updateStatsDisplay();
}

function setupUnitOptions() {
  UI.unit.replaceChildren();
  Object.entries(unitLabels()).forEach(([value, label]) => {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = label;
    UI.unit.appendChild(option);
  });
  state.currentTense = 'mixed';
  UI.unit.value = 'mixed';
}

// --- Question Engine ---
function generateQuestionPool() {
  let pool = [];
  const bank = state.semester === 'current' ? MIDTERM_BANK : QUESTION_BANK;

  if (state.subject === 'science') {
    pool = scienceQuestions(state.currentTense, state.scienceMode);
  } else if (state.currentTense === 'mixed') {
    pool = Object.values(bank).flat();
  } else if (state.currentTense === "perfects") {
    pool = [...(bank.perfect || []), ...(bank.continuous || [])];
  } else {
    pool = bank[state.currentTense] || [];
  }

  state.currentQuestions = shuffleArray(pool).slice(0, 1000);
  state.currentIndex = 0;
  UI.unitSummary.textContent = `${state.subject === 'science' ? 'Science · ' + UI.scienceMode.selectedOptions[0].textContent : CURRICULA[state.semester].label} · ${unitLabels()[state.currentTense]} · 題庫 ${pool.length} 題`;
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
  state.answered = false;
  state.activeChoices = [];
  const q = state.currentQuestions[state.currentIndex];
  if (!q) {
    handleEndOfRound();
    return;
  }

  UI.feedback.classList.add("hidden");
  UI.nextBtn.classList.add("hidden");
  UI.submitBtn.classList.remove("hidden");
  
  UI.category.innerText = `第 ${state.currentIndex + 1} / ${state.currentQuestions.length} 題`;
  UI.currentTenseLabel.innerText = { sentence: '句子合併', choice: '選擇練習', input: '填充練習', order: '流程排序', explain: '簡答・對照自評' }[q.type];
  UI.instructions.textContent = q.type === 'sentence'
    ? `使用 ${q.keyword}，將下列兩句合併成一個完整句子。保留原意，沿用第一句的主詞；不要只填片段。`
    : '';
  UI.instructions.classList.toggle('hidden', q.type !== 'sentence');

  if (q.type === 'explain') {
    renderExplanationQuestion(q);
  } else if (q.type === 'order') {
    renderOrderQuestion(q);
  } else if (q.type === 'sentence') {
    renderSentenceQuestion(q);
  } else if (q.type === "input") {
    renderInputQuestion(q);
  } else if (q.type === "choice") {
    renderChoiceQuestion(q);
  }
  if (q.figure) {
    const figure = document.createElement('figure');
    figure.className = 'science-figure';
    figure.innerHTML = SCIENCE_FIGURES[q.figure];
    if (figure.querySelector('table')) {
      const note = document.createElement('figcaption');
      note.className = 'table-scroll-note';
      note.textContent = '小螢幕可左右滑動表格。';
      figure.appendChild(note);
    }
    UI.text.prepend(figure);
  }

  const progress = ((state.currentIndex) / state.currentQuestions.length) * 100;
  UI.progressBar.style.width = `${progress}%`;
  UI.progressBar.setAttribute("aria-valuenow", Math.round(progress));
}

function renderInputQuestion(q) {
  let blankIndex = 0;
  const questionHTML = q.s.replace(/______/g, () => {
    const html = `<input type="text" class="inline-input" data-ans-idx="${blankIndex}" 
                  aria-label="Answer blank ${blankIndex + 1}"
                  placeholder="..." autocomplete="off" spellcheck="false"
                  autocorrect="off" autocapitalize="none">`;
    blankIndex++;
    return html;
  });

  UI.text.innerHTML = questionHTML;
  
  const firstInput = UI.text.querySelector('input');
  if (firstInput) firstInput.focus();

}

function renderSentenceQuestion(q) {
  UI.text.replaceChildren();
  const list = document.createElement('ol');
  list.className = 'source-sentences';
  q.sentences.forEach(sentence => {
    const item = document.createElement('li');
    item.textContent = sentence;
    list.appendChild(item);
  });
  const label = document.createElement('label');
  label.className = 'sentence-answer-label';
  label.textContent = '合併後的完整句子';
  const input = document.createElement('textarea');
  input.className = 'inline-input sentence-input';
  input.rows = 3;
  input.placeholder = '請輸入完整英文句子…';
  input.autocomplete = 'off';
  input.spellcheck = false;
  label.appendChild(input);
  UI.text.appendChild(list);
  UI.text.appendChild(label);
  input.focus();
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
    btn.dataset.answer = choice;
    btn.innerHTML = `<span class="choice-key">${idx + 1}</span> ${choice}`;
    btn.setAttribute("aria-label", `Choice ${idx + 1}: ${choice}`);
    btn.onclick = () => submitChoice(choice);
    choiceGrid.appendChild(btn);
  });
  
  UI.text.appendChild(choiceGrid);
  UI.submitBtn.classList.add("hidden");
}

function renderOrderQuestion(q) {
  UI.text.replaceChildren();
  UI.text.appendChild(Object.assign(document.createElement('p'), { textContent: q.s }));
  const options = shuffleArray(q.steps);
  const bank = document.createElement('ol');
  bank.className = 'order-bank';
  bank.type = 'A';
  options.forEach(text => bank.appendChild(Object.assign(document.createElement('li'), { textContent: text })));
  UI.text.appendChild(bank);
  const list = document.createElement('ol');
  list.className = 'order-steps';
  q.steps.forEach((_, i) => {
    const li = document.createElement('li');
    const select = document.createElement('select');
    select.className = 'inline-input order-select';
    select.setAttribute('aria-label', `Step ${i + 1}`);
    select.appendChild(Object.assign(document.createElement('option'), { value: '', textContent: '選擇這一步驟…' }));
    options.forEach((text, index) => select.appendChild(Object.assign(document.createElement('option'), { value: text, textContent: String.fromCharCode(65 + index) })));
    li.appendChild(select);
    list.appendChild(li);
  });
  UI.text.appendChild(list);
}

function renderExplanationQuestion(q) {
  UI.text.replaceChildren();
  UI.text.appendChild(Object.assign(document.createElement('p'), { textContent: q.s }));
  const label = document.createElement('label');
  label.className = 'sentence-answer-label';
  label.textContent = '用自己的話解釋（可用英文或中文）';
  const textarea = document.createElement('textarea');
  textarea.className = 'inline-input sentence-input';
  textarea.rows = 4;
  textarea.setAttribute('aria-label', 'Your scientific explanation');
  textarea.placeholder = '先寫下答案，再對照參考答案與重點…';
  label.appendChild(textarea);
  UI.text.appendChild(label);
}

function revealExplanation(q) {
  const textarea = UI.text.querySelector('textarea');
  if (!textarea.value.trim()) {
    showFeedback('請先寫下你的解釋，再對照答案。', 'incomplete');
    return;
  }
  textarea.disabled = true;
  UI.submitBtn.classList.add('hidden');
  const panel = document.createElement('section');
  panel.className = 'self-review';
  panel.appendChild(Object.assign(document.createElement('h3'), { textContent: '參考答案與自評' }));
  panel.appendChild(Object.assign(document.createElement('p'), { textContent: q.model }));
  panel.appendChild(Object.assign(document.createElement('p'), { textContent: '這題以重點自評計分。逐項確認你的答案有表達以下意思；不需要逐字相同。全部勾選視為答對，否則依原規則扣5分。' }));
  q.rubric.forEach(point => {
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    label.append(checkbox, document.createTextNode(point));
    panel.appendChild(label);
  });
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'primary-btn';
  button.textContent = '依勾選結果計分';
  button.onclick = () => {
    const allCorrect = [...panel.querySelectorAll('input')].every(input => input.checked);
    panel.querySelectorAll('input, button').forEach(el => { el.disabled = true; });
    finishQuestion(allCorrect, q.model);
  };
  panel.appendChild(button);
  UI.text.appendChild(panel);
  UI.feedback.classList.add('hidden');
}

// --- Validation Logic ---
function validateAnswer() {
  if (state.isBusy || state.answered || scienceStudyMode()) return;
  
  const q = state.currentQuestions[state.currentIndex];
  if (q.type === 'explain') {
    if (!UI.text.querySelector('.self-review')) revealExplanation(q);
    return;
  }
  if (!['input', 'sentence', 'order'].includes(q.type)) return;

  const inputs = UI.text.querySelectorAll(".inline-input");
  let allCorrect = true;
  if ([...inputs].some(input => !input.value.trim())) {
    showFeedback('請先填完所有答案，再送出。', 'incomplete');
    return;
  }
  
  inputs.forEach((input, i) => {
    if (answerMatches(input.value, q.a[i])) {
      input.classList.add("success");
    } else {
      input.classList.add("error");
      allCorrect = false;
    }
    input.disabled = true;
  });

  finishQuestion(allCorrect, displayAnswers(q.a));
}

function submitChoice(choice) {
  if (state.isBusy || state.answered) return;
  const q = state.currentQuestions[state.currentIndex];
  const isCorrect = answerMatches(choice, q.a[0]);
  
  const btns = UI.text.querySelectorAll(".choice-btn");
  btns.forEach(btn => {
    btn.disabled = true;
    if (answerMatches(btn.dataset.answer, q.a[0])) {
      btn.style.borderColor = "var(--accent)";
      btn.style.background = "rgba(16, 185, 129, 0.1)";
    } else if (btn.dataset.answer === choice && !isCorrect) {
      btn.style.borderColor = "#ef4444";
      btn.style.background = "rgba(239, 68, 68, 0.1)";
    }
  });

  finishQuestion(isCorrect, q.a[0]);
}

function finishQuestion(isCorrect, answerString) {
  if (state.answered) return;
  state.answered = true;
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
  const q = state.currentQuestions[state.currentIndex];
  if (q.explanation) UI.feedback.innerText += `\n${q.explanation}`;
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
    ['tm_score', 'tm_streak', 'tm_total', 'tm_correct'].forEach(key => localStorage.removeItem(key));
    state.score = 0;
    state.streak = 0;
    state.totalAnswered = 0;
    state.correctCount = 0;
    setupGame();
  }
}

// --- Event Handlers ---
function attachEventListeners() {
  UI.subject.onchange = () => {
    if (state.subject === 'english') state.englishSemester = state.semester;
    state.subject = UI.subject.value;
    state.semester = state.subject === 'science' ? 'current' : state.englishSemester;
    UI.semester.value = state.semester;
    const url = new URL(window.location.href);
    if (state.subject === 'science') url.searchParams.set('subject', 'science');
    else url.searchParams.delete('subject');
    window.history.replaceState(null, '', url);
    setupUnitOptions();
    setupGame();
  };
  UI.scienceMode.onchange = () => {
    state.scienceMode = UI.scienceMode.value;
    setupGame();
  };
  UI.submitBtn.onclick = validateAnswer;
  UI.nextBtn.onclick = () => {
    if (!state.answered) return;
    state.currentIndex++;
    updateQuestionDisplay();
  };

  UI.resetBtn.onclick = handleReset;

  UI.themeToggle.onclick = () => {
    state.theme = state.theme === "light" ? "dark" : "light";
    document.body.setAttribute("data-theme", state.theme);
    localStorage.setItem("theme", state.theme);
  };

  UI.semester.onchange = () => {
    state.semester = UI.semester.value;
    setupUnitOptions();
    setupGame();
  };
  UI.unit.onchange = () => {
    state.currentTense = UI.unit.value;
    setupGame();
  };

  window.onkeydown = (e) => {
    if (e.isComposing || e.repeat || scienceStudyMode() || UI.text.querySelector('.self-review:not(:has(button:disabled))')) return;
    const editing = ['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName);
    if (e.target.tagName === 'SELECT') return;
    if ((e.key === 'Enter' || (!editing && e.key === 'n')) && !UI.nextBtn.classList.contains("hidden")) {
      e.preventDefault();
      UI.nextBtn.click();
      return;
    }
    if (e.key === "Enter" && !UI.submitBtn.classList.contains("hidden")) {
      if (e.target.tagName === 'TEXTAREA' && !e.ctrlKey && !e.metaKey) return;
      e.preventDefault();
      validateAnswer();
      return;
    }
    if (!editing && ["1", "2", "3", "4"].includes(e.key) && state.activeChoices.length > 0 && UI.nextBtn.classList.contains("hidden")) {
      const idx = parseInt(e.key) - 1;
      if (state.activeChoices[idx]) {
        submitChoice(state.activeChoices[idx]);
      }
    }
  };
}

init();

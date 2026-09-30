(function () {
  'use strict';

  const STORAGE_KEY = 'histologyQuizStateV2';
  const RESULT_KEY = 'histologyQuizResultV2';
  const state = {
    questions: [],
    index: 0,
    score: 0,
    answered: false
  };

  function shuffle(array) {
    const a = array.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function buildGame() {
    // Keep question order; shuffle only the displayed choices.
    state.questions = QUESTIONS.map(function (q) {
      return {
        id: q.id,
        question: q.question,
        answer: q.answer,
        originalChoices: q.choices.map(function (c) { return c.text; }),
        choices: shuffle(q.choices.map(function (c) { return c.text; }))
      };
    });
    state.index = 0;
    state.score = 0;
    state.answered = false;
    saveState();
  }

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      questions: state.questions,
      index: state.index,
      score: state.score
    }));
  }

  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) return false;
      const data = JSON.parse(saved);
      if (!Array.isArray(data.questions) || !data.questions.length) return false;
      state.questions = data.questions;
      state.index = Number.isInteger(data.index) ? data.index : 0;
      state.score = Number.isInteger(data.score) ? data.score : 0;
      state.answered = false;
      return true;
    } catch (e) {
      return false;
    }
  }

  function correctText(q) {
    const answerIndex = q.answer.charCodeAt(0) - 65;
    return q.originalChoices[answerIndex];
  }

  function startNewGame() {
    buildGame();
    renderQuestion();
  }

  function renderQuestion() {
    const q = state.questions[state.index];
    if (!q) {
      finishQuiz();
      return;
    }

    const total = state.questions.length;
    const number = state.index + 1;
    const percent = Math.round((number / total) * 100);

    document.getElementById('progress').textContent = 'Question ' + number + ' / ' + total;
    document.getElementById('percent').textContent = percent + '%';
    document.getElementById('score').textContent = 'Score: ' + state.score;
    document.getElementById('progressBar').style.width = ((state.index / total) * 100) + '%';
    document.getElementById('questionText').textContent = q.question;

    const choices = document.getElementById('choices');
    choices.innerHTML = '';

    q.choices.forEach(function (text) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'choice-btn';
      button.textContent = text;
      button.addEventListener('click', function () {
        selectAnswer(text, button);
      });
      choices.appendChild(button);
    });

    const feedback = document.getElementById('feedback');
    feedback.textContent = '';
    feedback.className = 'feedback';

    const nextBtn = document.getElementById('nextBtn');
    nextBtn.disabled = true;
    nextBtn.textContent = state.index === total - 1 ? 'SEE RESULT →' : 'NEXT →';
    state.answered = false;
  }

  function selectAnswer(selectedText, clickedButton) {
    if (state.answered) return;
    state.answered = true;

    const q = state.questions[state.index];
    const answer = correctText(q);
    const buttons = Array.from(document.querySelectorAll('.choice-btn'));

    buttons.forEach(function (button) {
      button.disabled = true;
      if (button.textContent === answer) button.classList.add('correct');
    });

    const feedback = document.getElementById('feedback');
    if (selectedText === answer) {
      state.score += 1;
      clickedButton.classList.add('correct');
      feedback.textContent = '✓ Correct!';
      feedback.classList.add('correct-text');
    } else {
      clickedButton.classList.add('wrong');
      feedback.textContent = '✗ Incorrect — Correct answer: ' + answer;
      feedback.classList.add('wrong-text');
    }

    const total = state.questions.length;
    document.getElementById('score').textContent = 'Score: ' + state.score;
    document.getElementById('progressBar').style.width = (((state.index + 1) / total) * 100) + '%';
    document.getElementById('nextBtn').disabled = false;
    saveState();
  }

  function nextQuestion() {
    if (!state.answered) return;
    state.index += 1;
    if (state.index >= state.questions.length) {
      finishQuiz();
      return;
    }
    saveState();
    renderQuestion();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function finishQuiz() {
    localStorage.setItem(RESULT_KEY, JSON.stringify({
      score: state.score,
      total: state.questions.length
    }));
    localStorage.removeItem(STORAGE_KEY);
    window.location.href = 'result.html';
  }

  function renderResult() {
    let result = null;
    try {
      result = JSON.parse(localStorage.getItem(RESULT_KEY));
    } catch (e) {}
    if (!result) {
      window.location.href = 'index.html';
      return;
    }

    const percent = Math.round((result.score / result.total) * 100);
    document.getElementById('resultScore').textContent = result.score + ' / ' + result.total;
    document.getElementById('resultPercent').textContent = percent + '%';

    let message = 'Keep practicing!';
    if (percent >= 80) message = 'Excellent!';
    else if (percent >= 60) message = 'Good job!';
    else if (percent >= 50) message = 'Keep reviewing!';
    document.getElementById('resultMessage').textContent = message;
  }

  document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('questionText')) {
      const isNew = new URLSearchParams(window.location.search).get('new') === '1';
      if (isNew || !loadState()) startNewGame();
      else renderQuestion();

      document.getElementById('nextBtn').addEventListener('click', nextQuestion);
    }

    if (document.getElementById('resultScore')) renderResult();
  });
})();

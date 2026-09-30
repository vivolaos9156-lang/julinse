HUMAN HISTOLOGY QUIZ

This version is a simple HTML/CSS/JavaScript quiz. No Laravel, PHP, MySQL, or database is required.

FILES
- index.html  = home/start page
- quiz.html   = quiz page
- result.html = score page
- css/style.css
- js/app.js
- data/questions.js = 129 questions from the supplied source

HOW TO RUN IN VS CODE
1. Open the HistologyQuiz folder.
2. Install the VS Code extension "Live Server" if you do not have it.
3. Right-click index.html -> Open with Live Server.
4. Click START QUIZ.

IMPORTANT
The START QUIZ control is a normal link to quiz.html, so it does not depend on a JavaScript click handler.
The quiz page itself creates a new game automatically when opened for the first time.
Choices are shuffled while the correct answer is tracked by answer text.
A/B/C/D/E labels are not displayed.

For a public/secure exam, client-side JavaScript is not secure because the answer key is inside questions.js.

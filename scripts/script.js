const index = document.querySelector('nav .title');
const box = document.querySelector('section .box .box__question');
const answearsList = document.querySelector('section .box .box__answears-list');
const itemsFromAnswearsList = document.querySelector('section .box .box__answears-list').querySelectorAll('.box__answear')
const answearOne = document.querySelector('section .box__answears-list .answearOne');
const answearTwo = document.querySelector('section .box__answears-list .answearTwo');
const answearThree = document.querySelector('section .box__answears-list .answearThree');
const answearFour = document.querySelector('section .box__answears-list .answearFour');
const questionTitle = document.querySelector('section .box .box__question .box__title');
const button = document.querySelector('section .container .container__button');
const result = document.querySelector('section .container .container__result');
let x = 0;
let i = 0;

let answearTrue = 0;

index.addEventListener('click', () => window.location.href = "index.html");

function setCorrectAnswear() {
    result.classList.add('correct');
    result.classList.remove('wrong');
    result.textContent = 'Poprawna odpowiedź!';
    answearTrue++;
}

function setWrongAnswear() {
    result.classList.add('wrong');
    result.classList.remove('correct');
    result.textContent = 'Błędna odpowiedź!';
}

function assignQuestion() {
    if (document.URL.includes("games.html")) {
        if (x <= 9) {
            i = 0;
            box.style.display = 'flex';
            answearsList.style.display = 'flex';
            questionTitle.textContent = gamesQuestions[x].question;

            itemsFromAnswearsList.forEach((item) => {
                item.textContent = gamesQuestions[x].answears[i].text;
                i++
            });
        } else {
            box.style.display = 'none';
            answearsList.style.display = 'none';
            result.textContent = `Twój wynik to ${answearTrue}/10`;
            button.textContent = 'Wróc do wyboru kategorii';
            result.classList.add('correct');
            result.classList.remove('wrong');
        
            button.addEventListener('click', () => window.location.href = "index.html");
        }
    }

    if (document.URL.includes("music.html")) {
        if (x <= 9) {
            i = 0;
            box.style.display = 'flex';
            answearsList.style.display = 'flex';
            questionTitle.textContent = musicQuestions[x].question;
            
            itemsFromAnswearsList.forEach((item) => {
                item.textContent = musicQuestions[x].answears[i].text;
                i++
            });

        } else {
            box.style.display = 'none';
            answearsList.style.display = 'none';
            result.textContent = `Twój wynik to ${answearTrue}/10`;
            button.textContent = 'Wróc do wyboru kategorii';
            result.classList.add('correct');
            result.classList.remove('wrong');
        
            button.addEventListener('click', () => window.location.href = "index.html");
        }
    }
}

function isAnswearTrue() {
    if (document.URL.includes("games.html")) {
        for (let answearNumber = 0; answearNumber <= 3; answearNumber++) {
            itemsFromAnswearsList[answearNumber].addEventListener('click', () => {
                if (gamesQuestions[x].answears[answearNumber].correct == true) {
                    nextQuestion();
                    setCorrectAnswear();
                } else {
                    nextQuestion();
                    setWrongAnswear();
                }
            })
        }
    }

    if (document.URL.includes("music.html")) {
        for (let answearNumber = 0; answearNumber <= 3; answearNumber++) {
            itemsFromAnswearsList[answearNumber].addEventListener('click', () => {
                if (musicQuestions[x].answears[answearNumber].correct == true) {
                    nextQuestion();
                    setCorrectAnswear();
                } else {
                    nextQuestion();
                    setWrongAnswear();
                }
            })
        }
    }
}

button.addEventListener('click', () => {
    box.style.display = 'flex';
    button.textContent = 'Następne';
})

function nextQuestion() {
    box.style.display = 'none';
    answearsList.style.display = 'none';
    x++
    y = -1;
    button.addEventListener('click', () => {
        assignQuestion();
    })
}

assignQuestion();
isAnswearTrue();


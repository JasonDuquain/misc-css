// start on page 147, then 180, then 231 (change quiz from an arr of arrs to an arr of objs!!!), then 272, then 300, then 335, then 368, then 405, then 456, then 521, then 553, then 590

//////// AFTER PAGE 231:
const quiz = [
    { name: "Superman",realName: "Clark Kent" },
    { name: "Wonder Woman",realName: "Diana Prince" },
    { name: "Batman",realName: "Bruce Wayne" },
];

const game = {
    start(quiz) {
        this.questions = [...quiz];
        this.score = 0;
        for (const question of this.questions) {
            this.question = question;
            this.ask();
        }
        this.gameOver();
    },
    ask() {
        const question = `what is ${this.question.name}'s FULL name?`;
        const response = prompt(question);
        this.check(response);
    },
    check(response) {
        const answer = this.question.realName;
        if (response === answer) {
            console.log('correct');
            this.score++;
        } else {
            console.log(`wrong. the correct ans was ${answer}`);
        }
    },
    gameOver() {
        console.log(`game over. you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
    }
};

game.start(quiz);


/* AFTER PAGE 300:

const quiz = [
    { name: "Superman",realName: "Clark Kent" },
    { name: "Wonder Woman",realName: "Diana Prince" },
    { name: "Batman",realName: "Bruce Wayne" },
];

const view = {
    score: document.querySelector('#score strong'),
    question: document.getElementById('question'),
    result: document.getElementById('result'),
    info: document.getElementById('info'),
    start: document.getElementById('start'),
    render(target, content, attributes) {
        for (const key in attributes) {
            target.setAttribute(key, attributes[key]);
        }
        target.innerHTML = content;
    },
    show(element) {
        element.style.display = 'block';
    },
    hide(element) {
        element.style.display = 'none';
    }
    
};

const game = {
    start(quiz) {
        this.questions = [...quiz];
        view.hide(view.start);
        this.score = 0;
        for (const question of this.questions) {
            this.question = question;
            this.ask();
        }
        
        this.gameOver();
    },
    ask() {
        const question = `what is ${this.question.name}'s FULL name?`;
        view.render(view.question, question);
        const response = prompt(question);
        this.check(response);
    },
    check(response) {
        const answer = this.question.realName;
        if (response === answer) {
            view.render(view.result, 'correct', {'class': 'correct'});
            console.log('correct');
            this.score++;
            view.render(view.score, this.score)
        } else {
            view.render(view.result, `wrong. the correct ans was ${answer}`, {'class': 'wrong'});
            console.log(`Wrong! The correct answer was ${answer}`);
        }
    },
    gameOver() {
        view.render(view.info, `game over you scored ${this.score} point${this.score !== 1 ? 's' : ""}`);
        view.show(view.start);
    }
    
};

game.start(quiz);

view.start.addEventListener('click', () => game.start((quiz)));



*/
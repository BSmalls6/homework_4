// 1. create start card, with start quiz button
// i. start quiz button displays first question
// ii. when first question displays, timer starts counting down
// 2. create questions
const myQuestions = [
    {
        question: "Who was the first Avenger?",
        answers: {
            a: "Steve Rogers",
            b: "Iron Man",
            c: "Captain Marvel",
            d: "Thor"
        },
        correctAnswer: "a"
    },
    {
        question: "Who guides seekers to the Soul Stone on Vormir?",
        answers: {
            a: "The temple guardian",
            b: "The Red Skull",
            c: "Thanos",
            d: "The Grandmaster"
        },
        correctAnswer: "b"
    },
    {
        question: "Which substance/or item is key to time travel in Endgame?",
        answers: {
            a: "The Time Stone",
            b: "The Bifrost",
            c: "Pym Particles",
            d: "The Reality Engine"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the itme used to start Ragnarok in Thor 3?",
        answers: {
            a: "The Power Stone",
            b: "Surturs Crown",
            c: "Stormbreaker",
            d: "Arc Reactor"
        },
        correctAnswer: "b"
    },
    {
        question: "Who is Starlords Daddy?",
        answers: {
          a: "Thanos",
          b: "Ego the living planet",
          c: "Iron Man",
          d: "Yondu"
        },
        correctAnswer: "d"
      }
];
// 3. each question has a right answer=true, all other answers=false.
// 4. clicking on each question displays either correct or incoorect
    // i. right answer click = sound #1
    // ii. wrong answer click = sound #2
// 5. when an answer is clicked, next question is displayed
// 6. when all questions have been answered, it displays your score and your ranking on the leaderboard
// 7. when leaderboard screen is displayed, there is a button that allows the user to start the quikz over again.
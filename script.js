// 1. create start card, with start quiz button
$(document).ready(function () {
    var myQuestions = [
        {
            question: "Who was the first Avenger?",
            answers: [
                "Steve Rogers",
                "Iron Man",
                "Captain Marvel",
                "Thor"
            ],
            correctAnswer: 0
        },
        {
            question: "Who guides seekers to the Soul Stone on Vormir?",
            answers: [
                "The temple guardian",
                "The Red Skull",
                "Thanos",
                "The Grandmaster"
            ],
            correctAnswer: 1
        },
        {
            question: "Which substance/or item is key to time travel in Endgame?",
            answers: [
                "The Time Stone",
                "The Bifrost",
                "Pym Particles",
                "The Reality Engine"
            ],
            correctAnswer: 2
        },
        {
            question: "What is the item used to start Ragnarok in Thor 3?",
            answers: [
                "The Power Stone",
                "Surturs Crown",
                "Stormbreaker",
                "Arc Reactor"
            ],
            correctAnswer: 1
        },
        {
            question: "Who is Starlords Daddy?",
            answers: [
                "Thanos",
                "Ego the living planet",
                "Iron Man",
                "Yondu"
            ],
            correctAnswer: 3
        }
    ];
    // i. start quiz button displays first question
    var i = 0;
    var score = 0;

    $("#start").on("click", startQuiz);
    // ii. when first question displays, timer starts counting down

    // 2. build quiz
    function startQuiz() {
        event.preventDefault();
        timer();
        buildQuiz();
        $(".Start").hide();
        $(".Qslide").show();
        // get question
        // for (let i = 0; i < myQuestions.length; i++) {
    };


    // timer function
    function timer() {
        // When start button is clicked, timer is sent to "75"
        var timeLeft = 75;
        var elem = document.getElementById('timer');
        var timerId = setInterval(countdown, 1000);

        function countdown() {
            if (timeLeft == -1) {
                clearTimeout(timerId);
            } else {
                elem.innerHTML = timeLeft + ' seconds remaining';
                timeLeft--;
            }
        };
    }
    $(".choices").on("click", '#choice' ,  function () {
        var selection = $(this).attr("value");
        console.log(selection);
        console.log(myQuestions[i].correctAnswer);

        if (selection === myQuestions[i].correctAnswer) {
            score++;
            $(".question").append("Correct!")
            i++;
            $(".choices").empty();
            buildQuiz();
        }
        else {
            timeleft = -15
            $(".question").append("Wrong")
            i++;
            $(".choices").empty();
            buildQuiz();
        }
    });

    function buildQuiz() {
        var currentQuestion = myQuestions[i];
        var lastQ = myQuestions[4];
        $(".question").html(currentQuestion.question);
        for (let j = 0; j < 4; j++) {
            var choicebtn = $("<div id='choice'></div>")
            var currentAns = currentQuestion.answers[j];
            choicebtn.addClass("btn btn-primary")
            choicebtn.attr("value" , j)
            $(".choices").append(choicebtn);
            choicebtn.html(currentAns)
            console.log(currentAns)          // if answer = correct answer - show correct, else show wrong
        }
        
    };

});
// function test () {
//     var selection = parseInt(this.value);
//     console.log(selection);
//     console.log(myQuestions[i].correctAnswer);

//     if (selection === myQuestions[i].correctAnswer) {
//         score++;
//         $(".question").append("Correct!")
//         i++;
//         buildQuiz();
//     }
//     else {
//         timeleft = -15
//         $(".question").append("Wrong")
//         i++;
//         buildQuiz();
//     }
// }

    // if answer = correct answer - show green, else show red
    // get correct answer
// 4. clicking on each question displays either correct or incoorect
    // i. right answer click = sound #1
    // ii. wrong answer click = sound #2
// 5. when an answer is clicked, next question is displayed
// 6. when all questions have been answered, it displays your score and your ranking on the leaderboard
// 7. when leaderboard screen is displayed, there is a button that allows the user to start the quikz over again
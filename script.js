$(document).ready(function () {
    // My questions in an array
    var myQuestions = [
        {
            // individual questions are an object in the array
            question: "Who was the first Avenger?",
            // answers are an array within the question object
            answers: [
                "Steve Rogers",
                "Iron Man",
                "Captain Marvel",
                "Thor"
            ],
            // correct answer is object within question object
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
    // Sets the score and the question # to 0
    var i = 0;
    var score = 0;
// Click Events for each button
    // start starts the quiz and goes until all 5 questions have been answered
    $("#start").on("click", startQuiz);
    // reset saves the score and reloads the quiz
    $("#reset").on("click", function(){
        event.preventDefault();
        saveScore();
        alert("Your Score has been saved")
        location.reload();
        });
        // results shows the highscores
    $("#results").on("click", highScores);


    // 2. start quiz, hides all html except the quiz and the header elements, starts the timer
    function startQuiz() {
        timer();
        $(".start").hide();
        $(".qSlide").show();
        $(".endSlide").hide();
        $(".scorePage").hide();
        buildQuiz();
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
    };
    // Answer checker - adds click listener to answer buttons, 

    $(".choices").on("click", '#choice', function () {
        var selection = parseInt($(this).attr("value"));
        // console.log(typeof selection);
        // console.log(myQuestions[i].correctAnswer);
            // checks if answer is right or wrong
        if (selection === myQuestions[i].correctAnswer) {
            // adds +1 to the score variable
            score++;
            $(".grade").html("Correct!")
            // adds +1 to the question, so that it displays the next question in the array
            i++;
            // clears the section to display the next question
            $(".choices").empty();
            // checks what question we are on, if we complete the last question,use different function
            if (i <= 4) {
                buildQuiz();
            }
            else {
                showScore();
            }
            console.log("correct",score);
        }
        else {
            timeleft = -15
            $(".grade").html("Wrong")
            i++;
            $(".choices").empty();
            // console.log(i)
            if (i <= 4) {
                buildQuiz();
            }
            else {
                showScore();
            }
            console.log("wrong",score);

        }
    });

    function buildQuiz() {
        // grabs the current question based on the value of i
        var currentQuestion = myQuestions[i];
        // displays the current question in the div
        $(".question").html(currentQuestion.question);
    //    loops through the answers, creates a div for each one
        for (let j = 0; j < 4; j++) {
            var choicebtn = $("<div id='choice'></div>")
            var currentAns = currentQuestion.answers[j];
            // adds classes to the divs, makes them buttons
            choicebtn.addClass("btn btn-primary");
            choicebtn.attr("value", j);
        //    adds each button next to each other
            $(".choices").append(choicebtn);
            // changes the text content of each button to the answer, relative to j value
            choicebtn.html(currentAns);
            // console.log(currentAns)          // if answer = correct answer - show correct, else show wrong
        }

    };
    // displays the ending screen
    function showScore() {
        // hides the question div
        $(".qSlide").hide();
        // shows the ending screen
        $(".endSlide").show();
        // shows your score within the score span, which is within a text div in the HTML
        $("#displayScore").text(score);
    };
    // saves the score to local storage, resets the quiz
    function saveScore(){
        var nameInput = document.getElementById('name');

        $('#reset').on('click', function (e) {
        
            //prevent the normal submission of the form
            e.preventDefault();
        localStorage.setItem('newScore',nameInput.value+' '+score)
            console.log(nameInput.value+" "+score);    
        });
    };
    function highScores(){
        $("scorePage").show();
        $(".start").hide();
        $(".qSlide").hide();
        $(".endSlide").hide();
        localStorage.getItem('newScore')
        $('scoreTable').append(newScore);
    };

});
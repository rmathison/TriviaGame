$(document).ready(function() {
    var quizLock = false;


    var rightAnswer1 = 0;
    var rightAnswer2 = 0;
    var rightAnswer3 = 0;
    var rightAnswer4 = 0;
    var answerArray = ["1. Drogon", " 2. Nymeria", " 3. Aegon", " 4. Frostfangs"];
    var myFunchin = function() {
        $(location).attr('href', '../index.html')
    };

    var count = 30;

    var counter = setInterval(timer, 1000);

    function timer() {
        count = count - 1;
        if (count <= -.0000) {
            var totalScore = rightAnswer1 + rightAnswer2 + rightAnswer3 + rightAnswer4;
            $(".results").append("Time is up!");
            $(".results").append(" You scored " + totalScore + " out of 4.");
            clearInterval(counter);

            setTimeout(twoSeconds, 1000 * 2);

            function twoSeconds() {
                $(".results").append(" - The answers are: " + answerArray);
                setTimeout(threeSeconds, 1000 * 3);

                function threeSeconds() {
                    myFunchin();
                    return;
                }
            }

        }

        $("#timer").html(count + "");
    }



    $("#drogon1").on("click", function() {
        rightAnswer1 = 1;
        var totalScore = rightAnswer1 + rightAnswer2 + rightAnswer3 + rightAnswer4;
        console.log(totalScore);
    });

    $("#viserion").on("click", function() {
        rightAnswer1 = 0;
        var totalScore = rightAnswer1 + rightAnswer2 + rightAnswer3 + rightAnswer4;
        console.log(totalScore);
    });
    $("#rhaegel").on("click", function() {
        rightAnswer1 = 0;
        var totalScore = rightAnswer1 + rightAnswer2 + rightAnswer3 + rightAnswer4;
        console.log(totalScore);
    });


    $("#nymeria").on("click", function() {
        rightAnswer2 = 1;
        var totalScore = rightAnswer1 + rightAnswer2 + rightAnswer3 + rightAnswer4;
        console.log(totalScore);
    });
    $("#summer").on("click", function() {
        rightAnswer2 = 0;
        var totalScore = rightAnswer1 + rightAnswer2 + rightAnswer3 + rightAnswer4;
        console.log(totalScore);
    });
    $("#shaggy").on("click", function() {
        rightAnswer2 = 0;
        var totalScore = rightAnswer1 + rightAnswer2 + rightAnswer3 + rightAnswer4;
        console.log(totalScore);
    });
    $("#aegon").on("click", function() {
        rightAnswer3 = 1;
        var totalScore = rightAnswer1 + rightAnswer2 + rightAnswer3 + rightAnswer4;
        console.log(totalScore);
    });
    $("#daeron").on("click", function() {
        rightAnswer3 = 0;
        var totalScore = rightAnswer1 + rightAnswer2 + rightAnswer3 + rightAnswer4;
        console.log(totalScore);
    });
    $("#jahaerys").on("click", function() {
        rightAnswer3 = 0;
        var totalScore = rightAnswer1 + rightAnswer2 + rightAnswer3 + rightAnswer4;
        console.log(totalScore);
    });
    $("#frostfangs").on("click", function() {
        rightAnswer4 = 1;
        var totalScore = rightAnswer1 + rightAnswer2 + rightAnswer3 + rightAnswer4;
        console.log(totalScore);
    });
    $("#thenns").on("click", function() {
        rightAnswer4 = 0;
        var totalScore = rightAnswer1 + rightAnswer2 + rightAnswer3 + rightAnswer4;
        console.log(totalScore);
    });
    $("#skirlings").on("click", function() {
        rightAnswer4 = 0;
        var totalScore = rightAnswer1 + rightAnswer2 + rightAnswer3 + rightAnswer4;
        console.log(totalScore);
    });




});
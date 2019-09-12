var randomScore = 50;
var userScore = 0;
var wins = 0;
var losses = 0;

$(".crystalImg1").on("click", function() {
    userScore +=10;
    alert("your score: " + userScore)
    if (userScore === randomScore) {
        alert("YOU WIN!");
    } else if (userScore >= randomScore) {
        alert("YOU LOOSE!");

    }
})

$("#randomScore").text(randomScore)
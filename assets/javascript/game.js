var randomScore = 50;
var userScore;
var wins = 0;
var losses = 0;

$(".crystalImg").on("click", function() {
    userScore += 10;
})

$("#randomScore").text(randomScore)
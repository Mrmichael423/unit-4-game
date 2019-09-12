var randomScore = 50;
var userScore = 0;
var wins = 0;
var losses = 0;
var crystalImages = ["assets/images/crystal1.jpg", "assets/images/crystal2.jpg", "assets/images/crystal3.jpg", "assets/images/cryastal4.jpg"]

for (var i = 0; i < 4; i++) {
    var crystalPics = $("<img>");
    crystalPics.addClass("crystalImg");
    crystalPics.attr("scr", crystalImages[i]);
    crystalPics.attr("data-value", Math.floor(Math.random() * 13 ));
    $("#crystals").append(crystalPics);

}

$(".crystalImg").on("click", function() {
    //grabs the value for each of the crystals
    var crystalVal = ($(this).attr("data-value"));
    //turns crystalVal from string to number so it can be added
    crystalVal = parseInt(crystalVal)
    
        alert("your score: " + userScore)
        if (userScore === randomScore) {
        alert("YOU WIN!");
        } else if (userScore > randomScore) {
        alert("YOU LOOSE!");

    }
})

$("#randomScore").text(randomScore)
var randomScore = Math.floor(Math.random() *129) + 19;
var userScore = 0;
var wins = 0;
var losses = 0;
//var for crystals in an array
var crystalImages = ["assets/images/crystal1.jpg", "assets/images/crystal2.jpg", "assets/images/crystal3.jpg", "assets/images/cryastal4.jpg"]

//for loop to randomize crystal values and put them on the page
for (var i = 0; i < 4; i++) {
    var crystalPics = $("<img>");
    crystalPics.addClass("crystalImg");
    crystalPics.attr("scr", crystalImages[i]);
    crystalPics.attr("data-value", Math.floor(Math.random() * 13 ) + 1);
    $("#crystals").append(crystalPics);

}

$(".crystalImg").on("click", function() {
    //grabs the value for each of the crystals
    var crystalVal = ($(this).attr("data-value"));
    //turns crystalVal from string to number so it can be added
    crystalVal = parseInt(crystalVal)

    userScore += crystalVal
    
        // alert("your score: " + userScore)
        if (userScore === randomScore) {
            wins++
        alert("YOU WIN!");
        } else if (userScore > randomScore) {
            losses++
        alert("YOU LOOSE!");

    }
    $("#yourScore").text(userScore);
    $("#wins").text(wins);
    $("#losses").text(losses);
})

$("#randomScore").text(randomScore);
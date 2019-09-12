var randomScore = Math.floor(Math.random() * 129) + 19;
var userScore = 0;
var wins = 0;
var losses = 0;
//var for crystals in an array
var crystalImages = ["./assets/images/crystal1.jpg", "./assets/images/crystal2.jpg", "./assets/images/crystal3.jpg", "./assets/images/crystal7.jpg"]

RanCrystalVal ()
//for loop to randomize crystal values and put them on the page
function RanCrystalVal () {
for (var i = 0; i < 4; i++) {
    var crystalPics = $("<img>");
    crystalPics.addClass("crystalImg");
    crystalPics.attr("src", crystalImages[i]);
    crystalPics.attr("data-value", Math.floor(Math.random() * 13 ) + 1);
    $("#crystals").append(crystalPics);
    console.log("Crystals: " + crystalPics)
}}
//reset function to restart the game without loosing wins/losses
function reset() {
    randomScore = Math.floor(Math.random() * 129) + 19;
    userScore = 0;
    $("#crystals").empty()
    RanCrystalVal ()
}

$("#crystals").on("click", ".crystalImg", function() {
    console.log(this)
    //grabs the value for each of the crystals
    var crystalVal = ($(this).attr("data-value"));
    //turns crystalVal from string to number so it can be added
    crystalVal = parseInt(crystalVal)
    
    userScore += crystalVal
    
    // alert("your score: " + userScore)
    if (userScore === randomScore) {
        wins++;
        alert("YOU WIN!");
        reset()
        } else if (userScore > randomScore) {
            losses++;
            alert("YOU LOOSE!");
            reset()

        }
        //text to put on the page from the jQuery
        $("#yourScore").text(userScore);
        $("#wins").text(wins);
        $("#losses").text(losses);
        $("#randomScore").text(randomScore);
})

$("#randomScore").text(randomScore);

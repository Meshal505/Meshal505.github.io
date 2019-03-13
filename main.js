//Store Player moves
let player1 = [];
let player2 = [];
console.log(player1)
var player1Score = 0;
var player2Score = 0;
//this to know who is player is playing adn to set the first player to play 
let current_player = 0;
//this to stop function checkwhoWins function when there is winner so its used as a light switch.
var whoWins = false;
// winning comb to compare players moves with them.
let winCombo = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],

    [1, 5, 9],
    [3, 5, 7],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9]
];

// this to rest the game when there is a winner or when i click on the button 
//its named function 
function resetGame() {
    $(".square").attr("style", "undefined")
    $(".square").removeAttr("style");
    whoWins = false
    player1 = [];
    player2 = [];
    current_player = 0;
    $("#dev").html("If you want to play again you must open the dev tools.");


}
// anonymous function so when the button is clicked the game will restart
$("#btn").on("click", function () {
    resetGame()
})

//this is named function to changePlayers
function changePlayer() {

    if (current_player == 0) {
        current_player = 1
    } else {
        current_player = 0
    }
}

//this is to check if the square that the user will click on has style or not if it does not have style then it will apply style on it.
$(".square").on("click", function () { //when click on any zone1
    console.log(player1.length)

    let id = $(this).attr("id") //get the attribute of id of particular square clicked and store in variable id
    if (current_player == 0) {
        if (whoWins == false) {
            if ($(this).attr("style") == undefined || $(this).attr("style") == "undefined") {
                $(this).css("background-image", "url('https://i.ytimg.com/vi/tRx9TCKJWSs/maxresdefault.jpg')").css("background-size", "100px 100px")
                player1.push(parseInt(id));
                console.log(id);


                changePlayer()
            }
        }
        if (player1.length == 4) {
            console.log("hi")
            resetGame();
        }

    }
    else if (current_player == 1) {
        if (whoWins == false) {
            if ($(this).attr("style") == undefined || $(this).attr("style") == "undefined") {
                $(this).css("background-image", "url('http://pluspng.com/img-png/circle-png-circle-png-hd-1600.png')").css("background-size", "100px 100px")
                player2.push(parseInt(id));

                changePlayer()
            }
        }
    }

// here the function checkwhoWins will only run if the value of who wins is not true once its true then it will stop running.
    if (whoWins !== true) {
        checkWhoWins(player1, player2)

    }
});

function checkWhoWins(player1, player2) {
    for (var i = 0; i < winCombo.length; i++) {


        if (player1.sort().join('') == winCombo[i].join('')) {

            whoWins = true;
            if (whoWins == true) {
                player1Score++
                $("#player1").html(player1Score)


                console.log(player1Score);
            }
            swal({
                title: "EXCELLENT X WON !",
                icon: "success",
            });
            resetGame();




        }


// here we sort to organize and join to make them as string 
        else if (player2.sort().join('') == winCombo[i].join('')) {
            whoWins = true;
            if (whoWins == true) {
                player2Score++
                $('#player2').html(player2Score)
                console.log(player2Score);
                console.log("Player 2 won ")
                swal({
                    title: "EXCELLENT O  WON !",
                    icon: "success",
                });

                resetGame();

            }
            
        }

    }
}
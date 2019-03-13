//Store Player moves
let player1 = [];
let player2 = [];
console.log(player1)
var player1Score = 0;
var player2Score = 0;
//this to know who is player is playing.
let current_player = 0 ;
//o x
var whoWins = false;
// let win = ""
let winCombo = [
        [1,2,3],
        [4,5,6], 
        [7,8,9],
    
        [1,5,9],
        [3,5,7],
        [1,4,7],
        [2,5,8],
        [3,6,9]
                ];
             

// console.log(winCombo);
// function startNewRound (){

    
     whoWins = false
     player1 = [];
     player2 = [];
     console.log(player1)
    //  console.log(player2)
    

// }
function resetGame (){
    $(".square").attr("style", "undefined")
    $(".square").removeAttr("style");

    // $(".square").each( function(){
    //         $(this).removeAttr("style");
    //         console.log(this)
        whoWins = false
        player1 =[];
        player2 =[];
        current_player = 0;
        $("#dev").html("If you want to play again you must open the dev tools.");

    // });

}
$("#btn").on("click", function(){
     resetGame ()
})


function changePlayer(){

   if( current_player == 0){
    current_player = 1
   }else{
    current_player = 0
   }
}


$(".square").on("click", function(){ //when click on any zone1
    console.log(player1.length)
    
    let id = $(this).attr("id") //get the attribute of id of particular square clicked and store in variable id
            if(current_player == 0){
                            if (whoWins == false){
                            if ($(this).attr("style") == undefined || $(this).attr("style") == "undefined"){ 
                                $(this).css("background-image", "url('https://i.ytimg.com/vi/tRx9TCKJWSs/maxresdefault.jpg')").css("background-size","100px 100px")
                              player1.push(parseInt(id));
                              console.log(id);
                              
                             
                             changePlayer() } }
                             if (player1.length == 4) { 
                                console.log("hi")
                              resetGame();
                          }

    }
    else if (current_player ==1){
                         if (whoWins == false) {
                         if ($(this).attr("style") == undefined || $(this).attr("style") == "undefined") {
                              $(this).css("background-image", "url('http://pluspng.com/img-png/circle-png-circle-png-hd-1600.png')").css("background-size","100px 100px")
                        player2.push(parseInt(id));
        
                                changePlayer() } } }
                             
    
    if (whoWins !== true){
        checkWhoWins(player1,player2)
        
    }
    });

function checkWhoWins (player1,player2){ 
                for ( var i = 0; i < winCombo.length ; i++ ){
                       
                        
                        if (player1.sort().join('') == winCombo[i].join('')){
                            
                            whoWins = true;
                            if (whoWins == true) {
                                player1Score++
                               $("#player1").html(player1Score) 
                               
                                
                                console.log(player1Score);}
                                swal({
                                    title: "EXCELLENT X WON !",
                                    icon: "success",
                                  });
                                  resetGame ();
                                 
                                    
                                    
                        
                            }
                            
                        

                           else if (player2.sort().join('') == winCombo[i].join('')) {
                            whoWins = true;
                            if(whoWins == true) {
                                player2Score++
                                $('#player2').html(player2Score)
                                console.log(player2Score);
                                console.log("Player 2 won ")
                                swal({
                                    title: "EXCELLENT O  WON !",
                                    icon: "success",
                                  });
                                
                                  resetGame ();
                            
                            }
                            // document.write("player 2 won");
                        }
                        
                }
            }
            
            // }
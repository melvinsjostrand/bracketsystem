
        // Declare playerNames outside of functions
        let playerNames = [];
        let scoreInputs = [];
        let playerInput = [];

        // JavaScript function to update the bracket with player names
        function init() 
        {
            scoreInputs = document.querySelectorAll('input[type="number"]');
            playerInput = document.querySelectorAll('input[type="text"]');
            updateBracket();
            console.log(playerInput);
            let clear = document.getElementById("btn1");
            clear.addEventListener("click" , event=>{
                resetTournament();
            })
            let playername = document.getElementsByClassName("name");
            for(Element of playername){
                console.log(Element);
                Element.addEventListener("input" , event=>{
                    updateBracket();
                })
            }
           // let i = 0;
            /*scoreInputs.forEach((input) => {
                input.addEventListener("change", function () {
                    //console.log("input " + input.name.substring(5,6) + " " + input.name.substring(12,13));
                    updateScore(i);
                    i++;
                });
            });*/

            for(let i = 1;i < scoreInputs.length;i+=2){
                scoreInputs[i].addEventListener("change", function () {
                    //console.log("input " + input.name.substring(5,6) + " " + input.name.substring(12,13));
                    updateScore(i);
                    i++;
                });
            }
        } // End init
        window.onload = init; // Se till att init aktiveras då sidan är inladdad
        


        function updateBracket() {

            playerNames.length = 0; // Clear the playerNames array
            for (let i = 1; i <= 8; i++) {
                const playerName = document.getElementById(`player${i}`).value;
                playerNames.push(playerName);
            }

            const round1Inputs = document.querySelectorAll('.round-1 input[type="text"]');
            for (let i = 0; i < round1Inputs.length; i++) {
                round1Inputs[i].value = playerNames[i] || '';
            }
        }
        
        

       /* document.addEventListener("DOMContentLoaded", function () {
            const scoreInputs = document.querySelectorAll('input[type="number"]');
            scoreInputs.forEach((input) => {
                input.addEventListener("input", function () {
                    updateScore(this);
                });
            });*/

        // JavaScript function to update the winner of each round based on scores
        function updateScore(index) {
            console.log("index " + index);
            const scoreInputs = document.querySelectorAll('input[type="number"]');
            const score1 = parseFloat(scoreInputs[index-1].value);
            const score2 = parseFloat(scoreInputs[index].value);

            console.log("Score 1 " + score1);
            console.log("score 2 " + score2);
        
            if (!isNaN(score1) && !isNaN(score2)) {
                console.log("Vinnare");
                
                //const winnerInput = document.querySelector('input[type="text"]');
                if (score1 > score2) {
                    console.log("Player 1");
                    console.log("Spelare " + playerNames[index-1]);
                    playerInput[index+7].value = playerNames[index-1];
                    //winnerInput.value = playerNames[gameContainer.dataset.player1 - 1];
                } else if (score2 > score1) {
                    console.log("Player 2");
                    console.log("Spelare " + playerNames[index]);
                    playerInput[index+7].value = playerNames[index];
                    //winnerInput.value = playerNames[gameContainer.dataset.player2 - 1];
                } else {
                    //winnerInput.value = "Tie";
                }
        
                // Update Semifinalist 1 input when appropriate
                /*if (gameContainer.classList.contains('round-1')) {
                    const round2Game = gameContainer.nextElementSibling.querySelector('.game-top input[type="text"]');
                    if (round2Game) {
                        round2Game.value = winnerInput.value;
        
                        // Move the winner to the semifinal match
                        const semifinalContainer = round2Game.closest('.round');
                        const semifinalInputs = semifinalContainer.querySelectorAll('input[type="text"]');
                        semifinalInputs.forEach((input) => {
                            if (input.value === "Semifinalist 1") {
                                input.value = winnerInput.value;
                            }
                        });
                    }
                }*/
            }
        }
 
        
            // Initialize the bracket when the page loads
          //  updateBracket();
        //});
        
        

        // JavaScript function to reset the tournament
        function resetTournament() {
            // Clear player names
            for (let i = 1; i <= 8; i++) {
                document.getElementById(`player${i}`).value = '';
            }

            // Clear scores and winner names
            for (let i = 0; i < scoreInputs.length; i++) {
                scoreInputs[i].value = '';
            }

           
            for (let i = 0; i < playerInput.length; i++) {
                playerInput[i].value = '';
            }

            playerNames = [];
            scoreInputs = [];
            playerInput = [];
        }



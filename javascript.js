
        // Declare playerNames outside of functions
        const playerNames = [];

        // JavaScript function to update the bracket with player names
        function init() 
        {
            updateBracket();
            clear = document.getElementById("btn1");
            clear.addEventListener("click" , event=>{
                resetTournament();
            })
            playername = document.getElementsByClassName("name");
            for(Element of playername){
                console.log(Element);
                Element.addEventListener("input" , event=>{
                    updateBracket();
                })
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
        function updateScore() {
            const scoreInputs = gameContainer.querySelectorAll('input[type="number"]');
            const score1 = parseFloat(scoreInputs[0].value);
            const score2 = parseFloat(scoreInputs[1].value);
        
            if (!isNaN(score1) && !isNaN(score2)) {
                const winnerInput = gameContainer.querySelector('input[type="text"]');
                if (score1 > score2) {
                    winnerInput.value = playerNames[gameContainer.dataset.player1 - 1];
                } else if (score2 > score1) {
                    winnerInput.value = playerNames[gameContainer.dataset.player2 - 1];
                } else {
                    winnerInput.value = "Tie";
                }
        
                // Update Semifinalist 1 input when appropriate
                if (gameContainer.classList.contains('round-1')) {
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
                }
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
            const scoreInputs = document.querySelectorAll('input[type="number"]');
            for (let i = 0; i < scoreInputs.length; i++) {
                scoreInputs[i].value = '';
            }

            const winnerInputs = document.querySelectorAll('input[type="text"]');
            for (let i = 0; i < winnerInputs.length; i++) {
                winnerInputs[i].value = '';
            }
            document.getElementById("btn1").onclick=resetTournament();
        }
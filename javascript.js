
        // Declare playerNames outside of functions
        const playerNames = [];

        // JavaScript function to update the bracket with player names
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

        // JavaScript function to update the winner of each round based on scores
        function updateScore(input) {
            const gameContainer = input.closest('.game');
            const scoreInputs = gameContainer.querySelectorAll('input[type="number"]');
            const score1 = parseInt(scoreInputs[0].value);
            const score2 = parseInt(scoreInputs[1].value);

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
                    }
                }
            }
        }

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
        }
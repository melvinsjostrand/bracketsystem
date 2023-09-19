
        // Declare playerNames outside of functions
        let playerNames = [];
        let scoreInputs = [];
        let playerInput = [];
        let clear;

        // JavaScript function to update the bracket with player names
        function init() 
        {
            scoreInputs = document.querySelectorAll('input[type="number"]');
            playerInput = document.querySelectorAll('input[type="text"]');
            updateBracket();
            //console.log(playerInput);
            clear = document.getElementById("btn1");
            clear.addEventListener("click" , event=>{
                resetTournament();
            })
            let playername = document.getElementsByClassName("name");
            for(Element of playername){
                //console.log(Element);
                Element.addEventListener("input" , event=>{
                    updateBracket();
                })
            }
            
            let pos = 8;
            for(let i = 0;i < scoreInputs.length;i++){
                scoreInputs[i].addEventListener("change", function () {
                    //console.log("input " + input.name.substring(5,6) + " " + input.name.substring(12,13));
                    //console.log(scoreInputs[i]);
                    updateScore(i,pos);
                    if(i%2===0){
                        //console.log("hej " + i);
                        i++;
                    }else{
                        //console.log("hej " + i);
                        i++;
                        pos++;  
                    }                    
                    //console.log("index: " + i + " pos: " + pos);
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
        
        

        // JavaScript function to update the winner of each round based on scores
        function updateScore(index, position) {
            let score1;
            let score2;
           
           // const scoreInputs = document.querySelectorAll('input[type="number"]');
            if(index%2===0){
                //console.log("hej! " +index);
                score1 = parseFloat(scoreInputs[index].value);
                score2 = parseFloat(scoreInputs[index+1].value);
                //console.log("Score 1 " + score1);
            }else{
                //console.log("hej2! " +index);
                score1 = parseFloat(scoreInputs[index-1].value);
                score2 = parseFloat(scoreInputs[index].value);
            }            
            


            //console.log("score 2 " + score2);
        
            if (!isNaN(score1) && !isNaN(score2)) {
                //console.log("Vinnare");
                //console.log("index " + index + " position: " + position);
                //const winnerInput = document.querySelector('input[type="text"]');
                if (score1 > score2) {
                    //console.log("Player 1");
                    console.log("Player " + index + playerNames[index-1]);
                    playerInput[position].value = playerNames[index-1];
                    playerNames[position] = playerNames[index-1];
                    console.log(playerNames);
                    //winnerInput.value = playerNames[gameContainer.dataset.player1 - 1];
                } else if (score2 > score1) {
                    //console.log("Player 2 " + position);
                    console.log("Player " + playerNames[index]);
                    playerInput[position].value = playerNames[index];
                    playerNames[position] = playerNames[index];
                    console.log(playerNames);
                    //console.log("Ruta: " + playerInput[position].value);
                    //winnerInput.value = playerNames[gameContainer.dataset.player2 - 1];
                } else {
                      //När semifinalen blir lika = undefined.
                      //hur ska vi lägga upp det ifall det blir lika en match. just nu blir det pos++ vi måste göra så pos är samma som den va under den matchen
                      
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
            for (let i = 0; i < scoreInputs.length; i++) {
                scoreInputs[i].value = '';
            }

           
            for (let i = 0; i < playerInput.length; i++) {
                playerInput[i].value = '';
            }



            scoreInputs = [];
            console.log(scoreInputs);
            playerInput = [];
            console.log(playerInput);
        }



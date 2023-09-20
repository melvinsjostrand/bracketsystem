
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
            console.log(playerInput);
            clear = document.getElementById("btn1");
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
            
            let pos = 8;
            console.log("pos " + pos);
            for(let i = 0;i < scoreInputs.length;i++){
                scoreInputs[i].addEventListener("change", function () {
                    console.log(scoreInputs[i]);
                    updateScore(i,pos);
                    if(i%2===0){
                        console.log("hej " + i);
                        i++;
                    }else{
                        console.log("hej " + i);
                        i++;
                        pos++;  
                    }                    

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
            console.log("position i update " + position);
            console.log("index " + index);
            let score1;
            let score2;
           
           
            if(index%2===0){
            
                score1 = parseFloat(scoreInputs[index].value); //kan inte läsa av value andra rundan
                score2 = parseFloat(scoreInputs[index+1].value);
                console.log(score1);
                console.log(score2);
             
            }else{
         
                score1 = parseFloat(scoreInputs[index-1].value); //kan inte läsa av value andra rundan
                score2 = parseFloat(scoreInputs[index].value);
                console.log(score1);
                console.log(score2);
            }            
            



        
            if (!isNaN(score1) && !isNaN(score2)) {

                if (score1 > score2) {
                    //console.log("Player 1");
                    console.log("Player " + index + playerNames[index-1]);
                    playerInput[position].value = playerNames[index-1];
                    playerNames[position] = playerNames[index-1];
                    console.log(playerNames);
     
                } else if (score2 > score1) {
                  
                    console.log("Player " + playerNames[index]);
                    playerInput[position].value = playerNames[index];
                    playerNames[position] = playerNames[index];
                    console.log(playerNames);
        
                } else {
                      //När semifinalen blir lika = undefined.
                      //hur ska vi lägga upp det ifall det blir lika en match. just nu blir det pos++ vi måste göra så pos är samma som den va under den matchen
                      
                }
        
                
            }
        }
        

        // JavaScript function to reset the tournament
        function resetTournament(i,pos) {
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
            console.log("score i clear knapp " + scoreInputs);
            playerInput = [];
            console.log("player i clear knapp " + playerInput);
            pos = 8;
            console.log("pos i clear knapp" + position);
            i = 0;
            console.log("i clear " + index);
        }


//position = 15 efter clear
//index = 1 men ska vara 0
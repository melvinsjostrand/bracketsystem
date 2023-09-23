// Declare playerNames outside of functions
let playerNames = [];
let scoreInputs = [];
let playerInput = [];
let clear;
let pos;
let Vavada;
// JavaScript function to update the bracket with player names
function init() {
   scoreInputs = document.querySelectorAll('input[type="number"]');
   playerInput = document.querySelectorAll('input[type="text"]');
   updateBracket();
   console.log(playerInput);
   clear = document.getElementById("btn1");
   clear.addEventListener("click", event => {
      resetTournament();
   })
   let playername = document.getElementsByClassName("name");
   for (Element of playername) {
      console.log(Element);
      Element.addEventListener("input", event => {
         updateBracket();
      })
   }

   pos = 8;
   console.log("pos " + pos);
   ScoreInput();
   Vavada = document.getElementById("vavadabracket");
   Vavada.addEventListener("click", event =>{
      verify();
   })
  
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
            }else{
         
                score1 = parseFloat(scoreInputs[index-1].value); //kan inte läsa av value andra rundan
                score2 = parseFloat(scoreInputs[index].value);
            }            


   if (!isNaN(score1) && !isNaN(score2)) {

      if (score1 > score2) {
         //console.log("Player 1");
         console.log("Player " + index + playerNames[index - 1]);
         playerInput[position].value = playerNames[index - 1];
         playerNames[position] = playerNames[index - 1];
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

function ScoreInput() {
   scoreInputs = document.querySelectorAll('input[type="number"]');
   console.log(scoreInputs);
   for (let i = 0; i < scoreInputs.length; i++) {
      scoreInputs[i].addEventListener("change", function () {
         updateScore(i, pos);
         if (i % 2 === 0) {
            console.log("hej " + i);
            i++;
         } else {
            console.log("hej " + i);
            i++;
            pos++;
         }
      });
   }
}

// JavaScript function to reset the tournament
function resetTournament() {
   location.reload();
}


//id 0 och 1 ska vara kopplade till plats 8
//id 2 och 3 ska vara kopplade till plats 9
//id 4 och 5 ska vara kopplade till plats 10
//id 6 och 7 ska vara kopplade till plats 11
//id 8 och 9 ska vara kopplade till plats 12
//id 10 och 11 ska vara kopplade till plats 13
//id 12 och 13 ska vara kopplade till plats 14












//logga in sak, ifall vi ska lägga på server. endast admin ska nå
async function verify(){
   let VavadaBracket = document.getElementById("vavadabracket");
   let userverify = "";
   let response = await fetch(userverify, {
       headers:{
           "Authorization": localStorage.getItem("GUID")
       }
   });

   let role = await response.text();
   console.log(role);
   if(role==="standard"){
       uppload.addEventListener("click",event=> {
           location.href = "https://new2.heaton.nu/";
           VavadaBracket.remove();
       });

   }
   else if(role==="Admin"){
       uppload.addEventListener("click",event=> {
       location.href = "Vavada.html";
       });
   }
   return role;
}

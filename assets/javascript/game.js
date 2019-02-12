var guessList = ["pizza", "pepperoni", "mozzarella", "calzone", "sauce","parmesan", "pineapple"];

var winNumber = 0;
// var gameWord = guessList[winNumber];
var gameWord = guessList[Math.floor(Math.random() * guessList.length)];
var wordLength = 0;
var guessRemain = 10;
var usedLetters = [];
var wrongDuplicateLetters = [];
// var wrongLetters = [];
var anwserArray = [];
var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 

function gameStart(){
    for (i=0;i<gameWord.length; i++){
        anwserArray.push("_");
    }
    document.getElementById("gameProgress").innerText = anwserArray.join(" ");
}

function letterChecker (){
    document.onkeyup = function(event) {
        keyPressed = event.key;
        if (usedLetters.includes(keyPressed)){

        } else if (wrongDuplicateLetters.includes(keyPressed)) {
            
            
        } else { 
            guessRemain--;
            // Couldn't figure out where to place guessRemain so that it only removes 1 guess per turn
            // Putting it in the for loop made the numbers all wonky
            
            setTimeout(gameLoose, 1000);
            console.log(guessRemain);
            for (i=0; i< gameWord.length; i++ ){
                if (keyPressed === gameWord.charAt(i)){
                    usedLetters.push(keyPressed);
                    anwserArray[i] = keyPressed;
                    wordLength++
                    document.getElementById("gameProgress").innerText = anwserArray.join(" ");
                    setTimeout(gameWin,1000);
                   
                }else {
                    wrongDuplicateLetters.push(keyPressed);
                    
                }


            }
            removeDuplicates();
            document.getElementById("livesDisplay").innerText = guessRemain;
            document.getElementById("letDisplay").innerText = removeDuplicates().join(" ");
                   
        }
    }
}



function removeDuplicates(){
    let wrongLetters = Array.from(new Set(wrongDuplicateLetters))
    wrongLetters = wrongLetters.filter(function(val){
        return usedLetters.indexOf(val) == -1;
    });
    return wrongLetters
}

function displayProgress (){
    anwserArray.join(" ");
}

function gameLoose(){
    if (guessRemain === 0){
        alert ("You LOOSE!\nHit Refresh to Restart");
        
    }else {
        console.log("KEEP GOING IDIOT");
    }
}

function gameWin(){
    if (usedLetters.length === gameWord.length){
        document.getElementById("gameImage").src = "assets/images/pizza.jpeg";
        playAudio();
        console.log("WINNER");
        alert ("You WIN!\nHit Refresh to Restart");
        
        
        
       
        
} else{
    console.log("KEEP GOING");
}

}



        
    


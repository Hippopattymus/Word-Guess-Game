
        var finished = false;
        var playAgain = "true";
        
        var userGuess;
        const maxTries= 8;
        var remainingGuesses;
        var computerChoices = ["space", "jam", "slam", "monstars", 'daffy', 'bugs', "bunny", "looney", "tunes", "nerdlucks",
                                "squad", "marvin", "yosemite", "basketball"];


        var win = 0;
        var gamesPlayed = 0;

        var word;
        var remainingLetters;
        var answerArray = [];
        var guessedLetters = [];
        
        
        function reset() {
            remainingGuesses = maxTries;

            word = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            console.log("Resetting Game");
            console.log(word);
            remainingLetters = word.length;

            guessedLetters = [];
            answerArray = [];

            for (var i = 0; i < word.length; i++) {
                console.log(word.length);
                answerArray.push("_");
            }
            updateDisplay();
        };
        

        
        reset(); //initial reset/initialization
        document.onkeyup = function (event) { //
            userGuess = event.key;
            
            
            console.log(word.length);
            if (finished == true && gamesPlayed != 0){ 
                reset();
                finished = false;
            }
            else{ 
                if (event.keyCode >= 65 && event.keyCode <= 90){
                    if (word.indexOf(userGuess) != -1) {        //checks if the userGuess is inside word
                        for (var i = 0; i < word.length; i++) { //loops all characters
                            if (word.charAt(i) == userGuess && word.charAt(i) != answerArray[i]) {
                            answerArray[i] = userGuess;
                            remainingLetters--;
                            
                            
                         }
                        }
                    } 
                    else if (guessedLetters.indexOf(userGuess) === -1) {
                    guessedLetters.push(userGuess);
                
                    remainingGuesses--;
            
                }
                updateDisplay();
                }   
            }
            if (remainingLetters == 0) {
                alert("You Win!");
                alert("Press Any Key To Reset");
                win++;
                gamesPlayed++;
                finished = true;
            }
            
        };

        function checkWin(){ 

        }
        function updateDisplay() {
            document.getElementById("totalWins").innerText = "Wins: " + win;
            document.getElementById("currentWord").innerText =" ";
            for (var i = 0; i < answerArray.length; i++) {
                document.getElementById("currentWord").append(answerArray[i]);
            }
            document.getElementById("remainingGuesses").innerText = "Remaining Guesses: " + remainingGuesses;
            console.log(guessedLetters);
            document.getElementById("guessedLetters").innerText = "Incorrect Guesses: " + guessedLetters;
            if (remainingGuesses <= 0) {
                alert("Game Over");
                alert("Press Any Key To Try Again");
                finished = true;
                gamesPlayed++;
            }
        };
     
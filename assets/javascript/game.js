
    var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var wins = 0;
    var losses = 0;
    var guessesLeft = 10;
    var guessesSoFar = [];

    function gameStart() {
        guessesLeft = 9;
        guessesSoFar = [];
        console.log("Game Start")
    }

    document.onkeyup=function(){
        var userguess = String.fromCharCode(event.keyCode).
        toLowerCase()

        console.log(userguess);
        
        var computerguess = letters[Math.floor(Math.random()* letters.length)];

        console.log(computerguess);

        guessesSoFar.push(userguess);

        console.log(guessesSoFar);

         // If userguess is the same as (type and value) computer guess is a wins
         // If win, count goes up
         if ((userguess == computerguess)){
             wins++;

             guessesLeft = 9;
             guessesSoFar = 0;
            gameStart();
         }
        
        // If userguess is not the same as computerguess, Guess Left decriment down one
        else if(guessesLeft == 0){
            losses ++;

            guessesSoFar = 0;
            guessesLeft = 9;

            gameStart();
        } 
        // If decrement counter is 0 it's a loss count goes up
        else if(userguess !== computerguess){

            guessesLeft--;
        }

        var html = "<p>Guess what letter I'm thinking of!</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses Left: " + guessesLeft + "</p>" +
        "<p>Guesses So Far: " + guessesSoFar + "</p>";
    
        document.querySelector('#game').innerHTML = html;
    }

    

    
    

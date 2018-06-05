

    var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var guessSoFar = [];
    

    document.onkeyup=function(){
        var userguess = String.fromCharCode(event.keyCode).
        toLowerCase()
        console.log(letters.length);
    
         var computerguess = letters[Math.floor(Math.random()* letters.length)];

        

        





        var html = "<p>Guess what letter I'm thinking of!</p>" +
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>" +
            "<p>Guess Left: " + guessesLeft + "</p>" +
            "<p> Your Guesses So Far: " + guessSoFar + "</p>";

            document.querySelector('#game').innerHTML = html;

    }

    
    

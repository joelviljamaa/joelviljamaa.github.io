/*   (joku vanha tehtävä) 
    var doCoolStuff = function () {
    var currentClassName = document.getElementById('cool').className;

    if (currentClassName == 'cool') {
        document.getElementById('cool').className = 'cool red'
    } else {
        document.getElementById('cool').className = 'cool'
    }jkljkl

    changing class namedocument.getElementById('cool').className = 'cool red';
*/

/* Timer settings */
var timer = null;
var countdownNumber = 10;



/* Timer Countdown and pictures for when coundown goes to a certain amount */
var changeState= function(state){
    document.body.className = 'body-state'+ state;
    clearInterval(timer);
    if(state == 2) {
        timer = setInterval(function() {
            countdownNumber = countdownNumber -1;
            document.getElementById('countdown').innerHTML= countdownNumber;
            
            if (countdownNumber > 3 && countdownNumber <= 6) {
                document.getElementById('nervous').className = 'nervous show';
            } else {
                document.getElementById('nervous').className = 'nervous';
            }

            if (countdownNumber == 3) {
                document.getElementById('cant-wait').className = 'cant-wait show';
            } else {
                document.getElementById('cant-wait').className = 'cant-wait';
            }


            if (countdownNumber <= 0){
                changeState(3);
            };
        }, 200);

    }      
    /* When countdown goes to zero
    randomizes a number and if over 5, launches the rocket.
    If the number is under 5, the rocket explodes. */
    else if (state == 3) {
            var success = setTimeout (function(){

                var randomNumber = Math.round(Math.random()*10);

                console.log('randomNumber:',randomNumber)
                // success
                if (randomNumber > 5) {
                    changeState(4);

                } else {
                    changeState(5); //oh no!
                }
            }, 2000);


        };
    }
/*   joku vanha tehtävä          var doCoolStuff = function () {
    var currentClassName = document.getElementById('cool').className;

    if (currentClassName == 'cool') {
        document.getElementById('cool').className = 'cool red'
    } else {
        document.getElementById('cool').className = 'cool'
    }jkljkl

    changing class namedocument.getElementById('cool').className = 'cool red';
*/
var timer = null;
var countdownNumber = 10;

var changeState= function(state){
    document.body.className = 'body-state'+ state;
    clearInterval(timer);
    if(state == 2) {
        timer = setInterval(function() {
            countdownNumber = countdownNumber -1;
            document.getElementById('countdown').innerHTML= countdownNumber;
            
            if (countdownNumber <= 0){
                changeState(3);
            }
        }, 200);

    }      
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
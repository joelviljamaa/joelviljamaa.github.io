var doCoolStuff = function () {
    var currentClassName = document.getElementById('cool').className;

    if (currentClassName == 'cool') {
        document.getElementById('cool').className = 'cool red'
    } else {
        document.getElementById('cool').className = 'cool'
    }jkljkl

    //changing class namedocument.getElementById('cool').className = 'cool red';
}
var sayMyName = function (name) {
    alert('My name is: '+name);
};

var car = {
    make: 'VW',
    type: 'Polo',
    color: 'blue',
    isTurnedOn: false,
    numberOfWheels: 4,
    seats: [
        'seat1',
        'seat2',
        'seat3',
        'seat4',
],
turnOn: function () {
    this.isTurnedOn = true;
},
fly: function () {
    alert('fly');
},
switchCar: function (isOn) {
    console.log('turn car'+isOn)
        ;
    if (isOn = true) {
        this.isTurnedOn = true;
    } else {
        thsi.isTurnedOn = false;
    }
}
};

var timer = null;
var countdownNumber = 10;

var changeState = function (state) {
    document.body.className = 'body-state'+ state;

    if (state == 2) {
        timer = setInterval(function () {
            document.getElementById('countdown').innerHTML = countdownNumber;
            countdownNumber = countdownNumber -1;
            if (countdownNumber <= 0) {
                changeState(3);
            };
        },1000);
        else if (state == 3); {
            var success = setTimeout(function ())
            {
                var randomNumber = math.round
                (Math.random()*10)

                if (randomNumber > 5) {
                    //do smthn
                }
                else {
                    //do smthn else
                }
            } 
        }
    };
}




console.log('hello there friends!');
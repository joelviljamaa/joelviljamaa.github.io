var fullname = function (firstname, secondname) {
    return firstname + ' ' +secondname;
};


var number1 = 10;
var number2 = 100;

if (number1 <= number2) {
    alert('Joel');
   }  else {alert('Viljamaa');
   };

var name1 ='Rich';
var name2 ='Bob';

if(name1 == 'Rich') {
    alert('true1');
} else if (name2 == 'Rich') {
    alert('true2'); 
} else {
    alert('false');
}



var name1 ='Rich';
var name2 ='Bob';

if(name1 == 'Rich' || name2 == 'Bob') {
    alert('true1');
} else if (name2 == 'Rich') {
    alert('true2'); 
} else {
    alert('false');
}



var name1 ='Rich';
var name2 ='Bob';

if(name1 == 'Rich' && name2 == 'Bob') {
    alert('true1');
} else if (name2 == 'Rich') {
    alert('true2'); 
} else {
    alert('false');
}
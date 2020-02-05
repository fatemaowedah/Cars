function funcGetName() {
  var person = prompt("Please enter your name", "");
  if (person != null) {
    var today= new Date();
    var hourNow = today.getHours();
    var greeting;
    if (hourNow > 18) {
      greeting= 'Good evening';
    }else if (hourNow > 12) {
      greeting = ' Good afternoon';
    }else if (hourNow > 0) {
      greeting = 'Good morning';
    }else {
      greeting = 'Welcome ' ;}
    document.getElementById("username").innerHTML = greeting +"  " + person ;

    var Age = prompt("please enter your age")
    var gender = prompt("please enter your age")
    confirm("Confirm the data")
     var color = prompt(greeting +" " + person + ", Please enter the color that you want on the Background?");
     document.body.style.backgroundColor = color; 

  }else {
      greeting = 'Welcome ' ;
     var color = prompt(greeting +" " + person + ", Please enter the color that you want on the Background?");
     document.body.style.backgroundColor = color; }

  
};


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
    
     var color = prompt("Enter the color that you want on the Background?");
     document.body.style.backgroundColor = color; 

  }
};


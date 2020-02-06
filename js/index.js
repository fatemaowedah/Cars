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
    var gender = prompt("please enter your gender")
    confirm("Confirm the data")
     var color = prompt(greeting +" " + person + ", Please enter the color that you want on the Background?");
     document.body.style.backgroundColor = color; 

  }else {
      greeting = 'Welcome ' ;
     var color = prompt(greeting +" " + person + ", Please enter the color that you want on the Background?");
     document.body.style.backgroundColor = color; }

  
};

var shownorder = function(){
  var userorder;
var numberofimage;
var orderimage = '';
while ( userorder !== "blue" && userorder !== "white"){
  userorder = prompt("please enter blue or white ?")
  numberofimage = prompt("how many image do you want ?")
for (var i = 0 ; i < numberofimage ; i++){
  console.log("index is " + i);
  if ( userorder === "white"){
      orderimage = orderimage + '<img src="https://46dd0265f4a73ea7187f-03cdd43964c9c4de53583e4ed5a3979f.ssl.cf1.rackcdn.com/SALZJ2FX3LH019421/d73834579f2464c8ae47756509074dd6.jpg">';
  }else if ( userorder === "blue"){
      orderimage = orderimage + '<img src="https://auto.ndtvimg.com/car-images/large/land-rover/range-rover/land-rover-range-rover.jpg?v=9">';
  }console.log(orderimage);
  
}return orderimage;
}
}
document.write ('<p>' + shownorder() + '<p>');
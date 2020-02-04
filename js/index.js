function funcGetName() {
  var person = prompt("Please enter your name", "");
  if (person != null) {
    document.getElementById("username").innerHTML =
    "Welcome " + person + "";
  }
};

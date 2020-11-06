//BI Logic
function neighbor(number, name ) { 
  let array = [];
  for (let i = 0; i <= number; i++) {
    let outcome = i.toString();
    if (outcome.includes(3)) {
      array.push(" Won't you be my neighbor" + ", " + name + "? ");
    } else if (outcome.includes(2)) {
      array.push(' "Boop!"');
    } else if (outcome.includes(1)) {
      array.push(' "Beep!"');
    }
  }
  return array;
}
  //Caps input name
function capName(inputName) {
  const upper = inputName.split(" ");
  for (let i = 0; i < upper.length; i++) {
  upper[i] = upper[i][0].toUpperCase() + upper[i].substr(1);
  }
  let finalName = upper.join(" ");
  return finalName
}
//UI LOGIC
$(document).ready(function() {
  $("#pickNumber").submit(function(event) {
    event.preventDefault();
    let fullName = $("#inputName").val();
    let number = $("#inputNumber").val();
    let beepBoop = neighbor(number, capName(fullName));
    $("#output").text(beepBoop);
    $("img").show();
    $("#reverseBtn").show();
    $("#reverseBtn").click(function() {
    $("#output").text(beepBoop.reverse());
    });
  });
});
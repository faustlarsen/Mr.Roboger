$(document).ready(function() {
  $("#pickNumber").submit(function(event) {
    event.preventDefault();
    let name = $("#inputName").val();
    let number = $("#inputNumber").val();
    let array = [];
    for (let i = 0; i <= number; i++) {
      let outcome = i.toString();
      if (outcome.includes(1)) {
        array.push('"Beep!"');
      } else if (outcome.includes(2)) {
        array.push('"Boop!"');
      } else if (outcome.includes(3)) {
        array.push("Won't you be my neighbor" + ", " + name + "? ");
      } else {
        array.push(outcome);
      }
    }
    $("#output").text(array);
  });
});







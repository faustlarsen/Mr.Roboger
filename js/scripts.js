$(document).ready(function() {
  $("#pickNumber").submit(function(event) {
    event.preventDefault();
    let name = $("#inputName").val();
    const upper = name.split(" ");
    for (let i = 0; i < upper.length; i++) {
    upper[i] = upper[i][0].toUpperCase() + upper[i].substr(1);
  }
    let final = upper.join(" ");

    let number = $("#inputNumber").val();
    let array = [];
    for (let i = 0; i <= number; i++) {
      let outcome = i.toString();
      if (outcome.includes(3)) {
        array.push(" Won't you be my neighbor' " + ", " + final + "? ");
      } else if (outcome.includes(2)) {
        array.push(' "Boop!" ');
      } else if (outcome.includes(1)) {
        array.push(' "Beep!" ');
      } else {
        array.push(outcome);
      }
    }

    $("#output").text(array);
    $("#reverse").click(function() {
      $("#output").text(array.reverse());
    });
  });
});
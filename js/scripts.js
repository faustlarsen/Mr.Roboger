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
      } else {
        array.push(outcome);
      }
      $("#output").text(array);
    }
  });
});







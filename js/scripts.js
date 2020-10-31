$(document).ready(function() {
  $("#pickNumber").submit(function(event) {
    event.preventDefault();

    let number = $("#inputNumber").val();
    let array = [];
    for (let i = 0; i <= number; i++) {
      array.push(i);
      $("#output").text(array);
    }
  });
});







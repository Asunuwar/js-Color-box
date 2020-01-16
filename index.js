/*
 * NOTES
*/
// waits for the page load
document.addEventListener('DOMContentLoaded', function() {

  // select the red button
  // var redButton = document.querySelector('.btn.red');
  //
  // // track a click on the red button
  // redButton.addEventListener('click', function() {
  //
  //   var boxContainer = document.querySelector('.box-container');
  //   var box = document.createElement('div');
  //
  //   box.className = 'box red';
  //   boxContainer.appendChild(box);
  // });

  // select ALL of the buttons
  var buttons = document.querySelectorAll('.btn');


  // loop through each button that you found in your list
  // then run the code inside of the function
  buttons.forEach(function(button) {
    // runs 3 times
    button.addEventListener('click', function() {
      var color = button.getAttribute('data-color');
      var boxContainer = document.querySelector('.box-container');
      var box = document.createElement('div');
      box.className = 'box ' + color;
      boxContainer.appendChild(box);
    });
  });
});

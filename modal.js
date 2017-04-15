$(document).ready(function(){
  // Get the modal
  var modal = document.getElementById('myModal');

  // Get the button that opens the modal
  var btn = document.getElementById("filter");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  btn.onclick = function() {
      $(modal).fadeIn('slow');
    //  modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      $(modal).fadeOut('slow');
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          $(modal).fadeOut('slow');
      }
  }

 $('#age').hide();
 $('#ageText').on('click', function(){
        $('#age').toggle();
 });

 $('#ageOne').on('click',function(){
       var text = $(this).text();
      $('ageText').val(text);
      $('#age').hide();
 });






});

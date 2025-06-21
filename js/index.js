document.getElementById('contactBtn').addEventListener('click', function() {
  var modal = document.getElementById('contactModal');
  modal.style.display = 'block';
});

var closeButton = document.getElementsByClassName('close-button')[0];
closeButton.addEventListener('click', function() {
  var modal = document.getElementById('contactModal');
  modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
  var modal = document.getElementById('contactModal');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});

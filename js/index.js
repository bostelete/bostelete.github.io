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


document.querySelectorAll('.big-rounded-button').forEach(function(button) {
    button.addEventListener('click', function() {
        var linkUrl = this.getAttribute('data-link');
        window.location.href = linkUrl;
    });
});

document.querySelectorAll('.big-rounded-button').forEach(function(button) {
    button.addEventListener('click', function() {
        var linkUrl = this.getAttribute('data-link');
        window.location.href = linkUrl;
    });
});

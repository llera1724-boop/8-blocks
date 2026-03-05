document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('subscribe-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thanks! This is a demo form on a static page.');
  });
});

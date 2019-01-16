;(function(){
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

  var linkNav = document.querySelectorAll('a[href^="#"]');

  linkNav.forEach(function(item) {
    item.addEventListener('click', smoothScroll);
  });

  function smoothScroll(e) {
    e.preventDefault();
    var linkPosition = window.pageYOffset;
    var targetId = e.target.getAttribute('href').slice(1);
    var targetPosition;
    if (targetId === '') {
      targetPosition = document.querySelector('.container').offsetTop;
    } else {
      targetPosition = document.getElementById(targetId).offsetTop;
    }
    var distance = targetPosition - linkPosition;
    var start = null;
    requestAnimationFrame(step);

    function step(time) {
      if (start === null) {
        start = time;
      }
      var progress = time - start;
      var scrollSpeed = 500;
      window.scrollTo(0, distance * (progress / scrollSpeed) + linkPosition);
      if (progress < scrollSpeed) {
        requestAnimationFrame(step);
      }
    }
  }
}());
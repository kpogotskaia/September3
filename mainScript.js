window.requestAnimFrame = (function() {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function(callback,  element) {
        window.setTimeout(callback, 1000 / 60);
      }
    );
  })();

  
const calendar = document.querySelector('.calendar');

  calendar.addEventListener('click', () =>
{
    document.querySelector('.calendar__img').classList.add('flip');
});

calendar.addEventListener('animationend', AnimationHandler, false);

function AnimationHandler () {
    document.querySelector('.calendar__img').classList.remove(".flip")
}
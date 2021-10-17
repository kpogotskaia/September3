const FLIP_CLASS_NAME = 'flip';
const LS_COUNTER_KEY = 'counter';

const $calendar = document.querySelector('.calendar');
const $calendarImg = document.querySelector('.calendar__img');
const $counter = document.querySelector('.js-counter');

const state = {
  counter: 0
};

const updateCounter = (updated) => {
  state.counter = updated;
  localStorage.setItem(LS_COUNTER_KEY, state.counter);
  $counter.innerHTML = state.counter;
};

const lsCounter = +localStorage.getItem(LS_COUNTER_KEY);
updateCounter(lsCounter || 0);

const startAnimationAndUpdateState = () => {
  $calendarImg.classList.add(FLIP_CLASS_NAME);
  updateCounter(state.counter + 1);
};

const stopAnimation = () => {
  $calendarImg.classList.remove(FLIP_CLASS_NAME);
  $calendar.addEventListener('click', startAnimationAndUpdateState, {once:true});
}

$calendar.addEventListener('click', startAnimationAndUpdateState, {once:true});
$calendar.addEventListener('animationend', stopAnimation);

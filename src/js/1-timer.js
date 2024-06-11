import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  startBtn: document.querySelector('[data-start]'),
  timer: document.querySelector('.timer'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
  input: document.querySelector('.input-timer'),
};
let newTime;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),

  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDates = selectedDates[0];
    refs.startBtn.disabled = true;
    if (selectedDates < new Date()) {
      iziToast.show({
        iconUrl: '../img/javascript.svg',
        title: 'Error',
        titleColor: 'white',
        message: 'Illegal operation',
        messageColor: 'white',
        messageSize: '16px',
        backgroundColor: '#ef4040',
        position: 'topRight',
        theme: 'dark',
      });
    } else {
      refs.startBtn.disabled = false;
      refs.startBtn.classList.add('button-on');
    }
  },
};

console.log(options.defaultDate);
flatpickr('#datetime-picker', options, {});

let userSelectedDate;
refs.startBtn.disabled = true;

refs.startBtn.addEventListener('click', () => {
  const initTime = new Date(refs.input.value);
  refs.startBtn.classList.remove('button-on');
  refs.startBtn.disabled = true;
  userSelectedDate = setInterval(() => {
    const currentTime = Date.now();
    const diff = initTime - currentTime;
    const time = convertMs(diff);
    const str = getTime(time);
  }, 1000);

  setTimeout(() => {
    clearInterval(userSelectedDate);
  }, initTime - Date.now());
});

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function getTime({ days, hours, minutes, seconds }) {
  days = days.toString().padStart(2, 0);
  hours = hours.toString().padStart(2, 0);
  minutes = minutes.toString().padStart(2, 0);
  seconds = seconds.toString().padStart(2, 0);

  return `${(refs.days.textContent = days)} 
  ${(refs.hours.textContent = hours)} 
  ${(refs.minutes.textContent = minutes)} 
  ${(refs.seconds.textContent = seconds)}`;
}

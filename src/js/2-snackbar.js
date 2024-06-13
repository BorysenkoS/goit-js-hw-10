import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import imageUrl from '../img/group.svg';
import image from '../img/javascript.svg';

const refs = {
  formElem: document.querySelector('.form'),
  createBtn: document.querySelector('.snackbar-btn'),
  snackInput: document.querySelector('.form-input'),
  fulfilled: document.querySelector('.js-input-fulfilled'),
  rejected: document.querySelector('.js-input-rejected'),
  area: document.querySelector('#editing-view-port'),
};

function onFulfilled() {
  console.log('Success');
}

function onRejected() {
  console.log('Error');
}

function createPromise() {
  const delay = refs.snackInput.value;
  const status = refs.fulfilled.checked;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status)
        resolve(
          iziToast.show({
            iconUrl: imageUrl,
            title: 'OK',
            titleColor: 'white',
            message: `Fulfilled promise in ${delay}ms`,
            messageColor: 'white',
            messageSize: '16px',
            backgroundColor: '#59a10d',
            position: 'topRight',
            theme: 'dark',
          })
        );
      else
        reject(
          iziToast.show({
            iconUrl: image,
            title: 'Error',
            titleColor: 'white',
            message: `Rejected promise in ${delay}ms`,
            messageColor: 'white',
            messageSize: '16px',
            backgroundColor: '#ef4040',
            position: 'topRight',
            theme: 'dark',
          })
        );
    }, delay);
  });

  return promise;
}

refs.formElem.addEventListener('submit', e => {
  e.preventDefault();
  createPromise().then(onFulfilled).catch(onRejected);
  refs.formElem.reset();
});

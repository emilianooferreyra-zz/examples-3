const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

function logText(event) {
  // console.log(this.classList.value);
  // console.log(this);
  // event.stopPropagation(); // stop bubbling!
}

// document.body.addEventListener('click', logText);
divs.forEach(div => div.addEventListener('click', logText, {
  capture: false,
  once: true
}));

button.addEventListener('click', () => {
  console.log('Click!!!');
}, {
  once: true
});
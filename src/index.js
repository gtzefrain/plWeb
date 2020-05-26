import _ from 'lodash'; //TODO REMOVE
import AOS from 'aos';


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


// AOS.init();

let counter = 1;

var $loader = document.querySelector('.loader')

// window.onload = function() {
//   $loader.classList.remove('loader--active')
// };

function updateCounter() {
  window.setTimeout(function () {
    const currentElement = document.getElementById(`page-${counter}`);
    currentElement.classList.remove('active');
    counter += 1;
    const nextElement = document.getElementById(`page-${counter}`);
    nextElement.classList.add('active')
  }, 1000)

}
document.querySelector('.btn').addEventListener('click', function () {
  $loader.classList.add('loader--active')
  updateCounter()
  window.setTimeout(function () {
    $loader.classList.remove('loader--active')
  }, 2000)
})
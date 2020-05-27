import _ from 'lodash'; //TODO REMOVE
import AOS from 'aos';
import Typed from 'typed.js';

function addNeon(){
  const currentElement = document.getElementById('main-button');
  console.log('button', currentElement);
  currentElement.classList.add('neon');
}

let options = [{
  strings: ['hola. ^500 esperamos que estes bien. ^500 queremos compartir algo contigo...', 'fue un proceso largo.^500 vivimos alejados un poco el uno del otro.^500 asi que usamo el poder del internet...'],
  typeSpeed: 40,
  backSpeed: 10,
}, {
  strings: [''],
  typeSpeed: 40
}, {
  strings: ['Esperamos lo disfruten tanto como nosotros'],
  typeSpeed: 40,
  backSpeed: 40,
  startDelay: 1700, 
  onComplete: function() { addNeon() },
  }
];

const on = (element, event, selector, handler) => {
  element.addEventListener(event, e => {
    if (e.target.closest(selector)) {
      handler(e);
    }
  });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


AOS.init();

let counter = 1;

var $loader = document.querySelector('.loader')
var typed = new Typed('#page-1-text', options[counter - 1]);
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
    window['page-' + counter + -'text'] = new Typed(`#page-${counter}-text`, options[counter - 1]);
    console.log(window['page-' + counter + -'text']);
    
  }, 1000)

}

on(document, 'click', '.btn', e => {
  $loader.classList.add('loader--active')
  updateCounter()
  window.setTimeout(function () {
    $loader.classList.remove('loader--active')
  }, 2000)
});




// var contentPage1 = 'Hola! Este es un texto de prueba y es como una introduccion bla bla bla bla bla';

// var ele = '<span>' + contentPage1.split('').join('</span><span>') + '</span>';
// console.log('ele', ele);

// ele.style.display = 'none';
// ele.appendTo('#page-1-text').each(function (i) {
//   window.setTimeout(function () {
//     ele.delay(100 * i).css({
//       display: 'inline',
//       opacity: 0
//   }).animate({
//       opacity: 1
//   }, 100);
//   })
// });

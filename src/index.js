import _ from 'lodash'; //TODO REMOVE
import AOS from 'aos';
import Typed from 'typed.js';

function addNeon() {
  const currentElement = document.getElementById('main-button');
  currentElement.classList.add('neon');
}
let messages = ['hey!', 'hola!', 'ya puedes escuchar el EP!', 'QUEEEE?!', 'si, mira...'];

let options = [{
  strings: [''],
  typeSpeed: 40
}, {
  strings: ['hola. esto es sueño en stereo! ^500 gracias por formar parte del inicio de nuestro viaje.', 'para nosotros fue un proceso largo pero divertido', '^500 haz click en la flecha para ver un poco más :)'],
  typeSpeed: 40,
  backSpeed: 10,
}, {
  strings: [''],
  typeSpeed: 40
}, {
  strings: ['Esperamos lo disfruten tanto como nosotros!'],
  typeSpeed: 40,
  backSpeed: 40,
  startDelay: 1700,
  onComplete: function () { addNeon() },
}
];

function addMessages(messages) {
  // let counter = 0
  let container = document.querySelector(".chat");
  // for (let index = 0; index < messages.length; index++) {
  //   window.setTimeout(function () {
  //     var paragraph = document.createElement("P");
  //     var node = document.createTextNode(messages[counter]);
  //     paragraph.classList.add(counter % 2 === 0 ? 'from-me' : 'from-them')
  //     container.appendChild(node)
  //   }, 1000);
  // }
  setTimeout(function () {
    let phone = document.querySelector(".phone-container");
    phone.classList.add('show')
    let chat = document.querySelector(".chat-container");
    chat.classList.add('show')
    chat.classList.remove('hide')
    var counter = 0;
    var interval = setInterval(function () {
      if (counter <= messages.length - 1) {
        var paragraph = document.createElement("P");
        var node = document.createTextNode(messages[counter]);
        paragraph.appendChild(node)
        paragraph.classList.add(counter % 2 === 0 ? 'from-me' : 'from-them')
        container.appendChild(paragraph)

      } else {
        clearInterval(interval);
        console.log('letfuckinggoooo');
        swipe() 
      }
      counter++;
    }, 2500);
  }, 30000);
  setTimeout(function () {
    let phone = document.querySelector(".video");
    phone.classList.add('hide')
  }, 10000);
}
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
var headphone = document.querySelector('.headphone')
var headphone_container = document.querySelector('.headphone-container')
var button__badge = document.querySelector('.button__badge')

window.onload = function () {
  // $loader.classList.remove('loader--active')  
  headphone_container.classList.remove('small')
  headphone.addEventListener("animationend", function () {
    headphone.classList.add('heartbeat')
    button__badge.classList.add('heartbeat')
    button__badge.classList.remove('hide')
  }, false);

};

function updateCounter() {
  window.setTimeout(function () {
    const currentElement = document.getElementById(`page-${counter}`);
    currentElement.classList.remove('active');
    counter += 1;
    const nextElement = document.getElementById(`page-${counter}`);
    nextElement.classList.add('active')
    if (counter === 3) {
      addMessages(messages);
    } else {
      window['page-' + counter + -'text'] = new Typed(`#page-${counter}-text`, options[counter - 1]);
    }
    // console.log(window['page-' + counter + -'text']);
  }, 2000)
}

function swipe() {
  $loader.classList.add('loader--active')
  updateCounter()
  window.setTimeout(function () {
    $loader.classList.remove('loader--active')
  }, 2000)
}
on(document, 'click', '.btn', e => {
  swipe()
});
on(document, 'click', '.down-btn', e => {
  const element = document.querySelector('#final')
  const topPos = element.getBoundingClientRect().top + window.pageYOffset

  window.scrollTo({
    top: topPos, // scroll so that the element is at the top of the view
    behavior: 'smooth' // smooth scroll
  })

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

const scrollDown = document.querySelector('.scroll-down');
const targetElement = document.querySelector('#target-element');

scrollDown.addEventListener('click', () => {
    targetElement.scrollIntoView({
        behavior: 'smooth'
    });
});

const menuIcon = document.querySelector('.bx-menu');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    console.log('Menu icon clicked');
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('slide');
});
// const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

// document.querySelectorAll("[data-value]").forEach(element => {
//     element.addEventListener('mouseenter', event => {
//         let iterations = 0;

//         const interval = setInterval(() => {
//             event.target.innerText = event.target.innerText
//                 .split("")
//                 .map((letter, index) => {
//                     if (index < iterations) {
//                         return event.target.dataset.value[ index ];
//                     }
//                     return letters[ Math.floor(Math.random() * (26 + 10)) ];
//                 })
//                 .join("");

//             if (iterations >= event.target.dataset.value.length) {
//                 clearInterval(interval);
//             }

//             iterations += 1 / 2;
//         }, 100);
//     });

//     element.addEventListener('mouseleave', event => {
//         event.target.innerText = event.target.dataset.value;
//     });
// });

var googleMap = document.querySelector('.google-map');
var mapHeight = 0;
var maxMapHeight = 500;
var scrollThreshold = 500;

googleMap.addEventListener('transitionend', function () {
    if (googleMap.style.height > '31px') {
        googleMap.style.backgroundColor = 'transparent';
    } else {
        googleMap.style.backgroundColor = 'red';
    }
});

window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;
    if (scrollPosition > scrollThreshold) {
        mapHeight = Math.min(maxMapHeight, (scrollPosition - scrollThreshold) * 2);
        googleMap.style.height = mapHeight + 'px';
        googleMap.style.borderRadius = (50 - mapHeight / maxMapHeight * 50) + '%';
        googleMap.style.backgroundColor = 'transparent';
    }
});

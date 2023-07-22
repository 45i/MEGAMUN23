const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('slide');
});
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

document.querySelectorAll("[data-value]").forEach(element => {
    element.addEventListener('mouseenter', event => {
        let iterations = 0;

        const interval = setInterval(() => {
            event.target.innerText = event.target.innerText
                .split("")
                .map((letter, index) => {
                    if (index < iterations) {
                        return event.target.dataset.value[ index ];
                    }
                    return letters[ Math.floor(Math.random() * (26 + 10)) ];
                })
                .join("");

            if (iterations >= event.target.dataset.value.length) {
                clearInterval(interval);
            }

            iterations += 1 / 2;
        }, 100);
    });

    element.addEventListener('mouseleave', event => {
        event.target.innerText = event.target.dataset.value;
    });
});
var googleMap = document.querySelector('.google-map');
var mapHeight = 0;
var maxMapHeight = 500;
var scrollThreshold = 500;

window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;
    if (scrollPosition > scrollThreshold) {
        mapHeight = Math.min(maxMapHeight, (scrollPosition - scrollThreshold) * 2);
        googleMap.style.height = mapHeight + 'px';
        googleMap.style.borderRadius = (50 - mapHeight / maxMapHeight * 50) + '%';
    }
});

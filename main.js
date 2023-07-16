var loader = document.getElementById("preloader");
window.addEventListener("load", function() {
  loader.style.display = "none";
});

let launchDate = new Date("October 5, 2023 00:00:00").getTime();

let timer = setInterval(tick, 1000);

function tick() {
    let now = new Date().getTime();
    let t = launchDate - now;
    if(t>0){
        let days = Math.floor(t / (1000 * 60 * 60 *24));
        if(days<10)
        {
            days = "0" + days;
        }
        let hours = Math.floor(t % (1000 * 60 * 60 * 24) / (1000 * 60 * 60 ));
        if(hours<10)
        {
            hours = "0" + hours;
        }
        let minutes = Math.floor(t % (1000 * 60 * 60) / (1000 * 60));
        if(minutes<10)
        {
            minutes = "0" + minutes;
        }
        let seconds = Math.floor(t % (1000 * 60) / 1000);
        if(seconds<10)
        {
            seconds = "0" + seconds;
        }

        let time = `${days} : ${hours} : ${minutes} : ${seconds}`;

        document.querySelector('.countdown').innerText = time;
    }
}

const menuToggle = document.querySelector('.menu-toggle input');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', function() {
  menu.classList.toggle('slide');
});

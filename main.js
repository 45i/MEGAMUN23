// const menuIcon = document.querySelector('.bx-menu');
// const navbar = document.querySelector('.navbar');

// menuIcon.onclick = () => {
//   console.log('Menu icon clicked');
//   menuIcon.classList.toggle('bx-x');
//   navbar.classList.toggle('open');
// };
// JavaScript to set the CSS variable based on computed background color
// const elements = document.querySelectorAll('*'); // Select all elements, you can narrow this down as needed

// elements.forEach(element => {
//   const styles = getComputedStyle(element);
//   const bgColor = styles.backgroundColor || 'transparent';
//   element.style.setProperty('--fallback-bg-color', bgColor);
// });
document.addEventListener("DOMContentLoaded", function () {
  const footer = document.querySelector(".juto");
  var button = document.querySelector(".retract");
  const retractButton = document.querySelector('.retract');
  button=retractButton;
  // const icon = button.getElementById("ret");

  // Initial state
  let isCollapsed = false;
  footer.style.height = "auto"; // Show the footer initially

  button.addEventListener('click', () => {
      isCollapsed = !isCollapsed;
      
      console.log(button);
      if (isCollapsed) {
          // Collapse the footer
          footer.style.height = "0";
          button.innerHTML = '<i class="fas fa-chevron-up"></i>';
          console.log(button);
          // icon.classList.remove("fa-chevron-down");
          // icon.classList.add("fa-chevron-up");
      } else {
          // Expand the footer
          footer.style.height = "auto";
          button.innerHTML = '<i class="fas fa-chevron-down"></i>';
          console.log(button);

          // icon.classList.remove("fa-chevron-up");
          // icon.classList.add("fa-chevron-down");
      }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var readMoreElements = document.querySelectorAll('.readmoretext');
  readMoreElements.forEach(function (element) {
    var content = element.innerHTML;
    var limit = 100; // Set the character limit
    if (content.length > limit) {
      var visibleText = content.substring(0, limit);
      var hiddenText = content.substring(limit);
      console.log("Read More");

      element.innerHTML = visibleText +
        '<span class="more-dots">...</span>' +
        '<span class="hidden-text">' + hiddenText + '</span>' +
        '<span class="read-more-button"> Read more</span>';

      var readMoreButton = element.querySelector('.read-more-button');
      var moreDots = element.querySelector('.more-dots');
      var hiddenTextSpan = element.querySelector('.hidden-text');

      readMoreButton.addEventListener('click', function () {
        hiddenTextSpan.style.display = 'inline';
        console.log("Read More");
        moreDots.style.display = 'none';
        readMoreButton.style.display = 'none';
      });
    }
  });
});
let prevScrollpos = window.scrollY;
window.onscroll = function() {
  let currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("nav").classList.remove("hidden");
    
  } else {
    document.querySelector("nav").classList.add("hidden");

  }
  prevScrollpos = currentScrollPos;
}
// const days = document.querySelector('.days');
// const text = 'days ';
// let index = 0;
// let isDeleting = false;

// function type() {
//   const currentText = days.textContent;

//   if (!isDeleting) {
//     days.textContent = text.slice(0, index);
//     index++;
//   } else {
//     days.textContent = text.slice(0, index);
//     index--;
//   }

//   if (index > text.length) {
//     isDeleting = true;
//   }

//   if (index === 0) {
//     isDeleting = false;
//   }

//   const delay = isDeleting ? 100 : 200;

//   setTimeout(type, delay);
// }

// days.addEventListener('mouseover', () => {
//   type();
// });
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
// document.addEventListener('DOMContentLoaded', function () {
//   new Splide('#image-carousel', {
//     heightRatio: 0.5,
//   }).mount();
// });
const back = document.querySelector('.header');

// window.addEventListener('scroll', () => {
//   const scrollPos = window.scrollY;
//   const angle = scrollPos / 1;
//   back.style.background = `linear-gradient(${angle*100}deg, #08001f, #210c5e, #30197d)`;
// });
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});
const scrollDown = document.querySelector('.scroll-down');
const targetElement = document.querySelector('#target-element');

scrollDown.addEventListener('click', () => {
  targetElement.scrollIntoView({
    behavior: 'smooth'
  });
});

let launchDate = new Date("October 11, 2023 00:00:00").getTime();

let timer = setInterval(tick, 1000);
function tick() {
    let now = new Date().getTime();
    let t = launchDate - now;
    if (t > 0) {
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        if (days < 10) {
            days = "0" + days;
          }
          let hours = Math.floor(t % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        if (hours < 10) {
            hours = "0" + hours;
        }
        let minutes = Math.floor(t % (1000 * 60 * 60) / (1000 * 60));
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        let seconds = Math.floor(t % (1000 * 60) / 1000);
        if (seconds < 10) {
            seconds = "0" + seconds;
        }

      let time = `<span class="days">${days}</span> : <span class="hours">${hours}</span> : <span class="minutes">${minutes}</span> : <span class="seconds">${seconds}</span>`;

        document.querySelector('.countdown').innerHTML = time;

        // Add event listener to the days span element
        // const daysSpan = document.querySelector('.days');
        // daysSpan.addEventListener('mouseover', () => {
        //     daysSpan.innerText = `${days} days`;
        // });
        // daysSpan.addEventListener('mouseout', () => {
        //     daysSpan.innerText = `${days}`;
        // });
    }
}
const tds = document.querySelectorAll('td');

tds.forEach(td => {
  td.addEventListener('click', function() {
    const text = this.innerText;
    const tempInput = document.createElement('input');
    tempInput.setAttribute('value', text);
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    console.log('Copied to clipboard:', text);
  });
});
const imgBoxes = document.querySelectorAll('.img-box');

imgBoxes.forEach(imgBox => {
  imgBox.addEventListener('mousemove', e => {
    const x = e.clientX - imgBox.offsetLeft;
    const y = e.clientY - imgBox.offsetTop;
    const centerX = imgBox.clientWidth / 2;
    const centerY = imgBox.clientHeight / 2;
    const deltaX = (centerX - x) / centerX;
    const deltaY = (centerY - y) / centerY;
    imgBox.querySelector('img').style.transform = `perspective(1000px) rotateY(${deltaX * 5.1}deg) rotateX(${deltaY * 5.1}deg) scale(1.1)`;
  });
  
  imgBox.addEventListener('mouseleave', () => {
    imgBox.querySelector('img').style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1.1)';
  });

  
  
});

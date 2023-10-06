// // Include the external Google Translate script
// $(document).ready(function() {
//   $('#\\3A 1\\.container').click(function() {
//     var immediateParent = $(this).parent(); // This selects the immediate parent (1)
//     var grandParent = immediateParent.parent(); // This selects the grandparent (2)

//     $(this).add(grandParent).animate({ top: '-200%' }, 'slow');
//   });
// });


const body = document.body;

let sx = 0, // For scroll positions
  sy = 0;
let dx = sx, // For container positions
  dy = sy;

// Bind a scroll function
window.addEventListener('scroll', easeScroll);

function easeScroll() {
  sx = window.pageXOffset;
  sy = window.pageYOffset;
}

window.requestAnimationFrame(render);

function render() {
  // We calculate our container position by linear interpolation method
  dx = li(dx, sx, 0.2);
  dy = li(dy, sy, 0.2);

  dx = Math.floor(dx * 100) / 100;
  dy = Math.floor(dy * 100) / 100;

  body.style.transform = `translate3d(-${dx}px, -${dy}px, 0px)`;

  window.requestAnimationFrame(render);
}

function li(a, b, n) {
  return (1 - n) * a + n * b;
}


function supportsBackdropFilter() {
  const testElement = document.createElement('div');
  testElement.style.backdropFilter = 'blur(10px)';
  return testElement.style.backdropFilter !== undefined;
}

// Apply backdrop filter or sepia based on support
function applyFilter() {
  if (!supportsBackdropFilter()) {
    const allElements = document.querySelectorAll('*');
    allElements.forEach(element => {
      element.style.filter = 'sepia(100%)';
    });
  }
}

// Call the function to apply the filter
applyFilter();


document.addEventListener("DOMContentLoaded", function () {
  // Create and append the 'description' meta tag
  const descriptionMeta = document.createElement('meta');
  descriptionMeta.name = 'description';
  descriptionMeta.content = "Official MEGAMUN'23 website";
  document.head.appendChild(descriptionMeta);

  // Create and append the 'og:site_name' meta tag
  const ogSiteNameMeta = document.createElement('meta');
  ogSiteNameMeta.name = 'og:site_name';
  ogSiteNameMeta.content = "MEGAMUN'23";
  document.head.appendChild(ogSiteNameMeta);

  // Create and append the 'og:image' meta tag
  const ogImageMeta = document.createElement('meta');
  ogImageMeta.property = 'og:image';
  ogImageMeta.content = 'megamun.png';
  document.head.appendChild(ogImageMeta);

  // Create and append the 'theme-color' meta tag
  const themeColorMeta = document.createElement('meta');
  themeColorMeta.name = 'theme-color';
  themeColorMeta.content = '#2A1472';
  document.head.appendChild(themeColorMeta);

  // Create and append the Font Awesome CSS link
  const fontAwesomeLink = document.createElement('link');
  fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
  fontAwesomeLink.rel = 'stylesheet';
  document.head.appendChild(fontAwesomeLink);
});


document.addEventListener("DOMContentLoaded", function () {
  // Fetch the contents of the navbar HTML file
  fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
      // Insert the navbar HTML into the navbar-container element
      const navbarContainer = document.querySelector('.navbar-container');
      navbarContainer.innerHTML = data;

      // Access the menuIcon element and add a click event listener
      var icon = document.querySelector('.main');
      var menuIcon = document.querySelector('.icon');
      var navbar = document.querySelector('.navbar');
      menuIcon.addEventListener('click', function () {
        console.log("clicked");
        icon.classList.toggle('open');
        if (icon.classList.contains('open')) {
          menuIcon.innerHTML = '<i class="fas fa-times"></i>';
        } else {
          menuIcon.innerHTML = '<i class="fas fa-bars"></i>';
        }
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('open');
      });

      // Select all dropdown menus with the class "committee-menu"
      // Select all elements with class "committee"
var committees = document.querySelectorAll(".committee");

// Define the function to toggle the chevron icon and menu
function toggleChevronIcon(event) {
  var committee = event.currentTarget;
  var committeeIcon = committee.querySelector(".ico");
  var dropdownMenu = committee.nextElementSibling; // Assumes the menu is right after the .committee element
  
  // Toggle the display of the dropdown menu
  dropdownMenu.style.display = (dropdownMenu.style.display === "none" || !dropdownMenu.style.display) ? "block" : "none";
  
  // Rotate the chevron icon based on the display state
  if (dropdownMenu.style.display === "block") {
    committeeIcon.style.transform = "rotate(180deg)";
  } else {
    committeeIcon.style.transform = "rotate(0deg)";
  }
}

// Attach the click event listener to each .committee element
committees.forEach(function(committee) {
  committee.addEventListener("click", toggleChevronIcon);
});
document.addEventListener("click", function (event) {
  var dropdownMenus = document.querySelectorAll(".committee-menu");
  dropdownMenus.forEach(function (menu) {
    if (menu.style.display === "block") {
      // Check if the click occurred outside of the menu and the committee
      if (!menu.contains(event.target)) {
        toggleChevronIcon();
      }
    }
  });
});
    });
});
// footer.js

document.addEventListener("DOMContentLoaded", function () {
  fetch("footer.html")
    .then(response => response.text())
    .then(data => {
      const footerContainer = document.querySelector('.footer-container');
      footerContainer.innerHTML = data;
      const footer = document.querySelector(".footer-container");
      const button = footer.querySelector("footer").querySelector(".retract");
      // var btn2 = document.createElement('button');
      // btn2.innerHTML = '<i class="fas fa-chevron-up"></i>';
      // btn2.style.position = 'relative';
      // btn2.style.bottom = '0';
      // btn2.style.right = '0';
      // btn2.style.zIndex = '9999';
      // let isCollapsed = false;
      // footer.insertAdjacentElement('beforebegin', btn2);
      // footer.style.display = "block";
      // btn2.style.display = "none";
      // button.addEventListener('click', () => {
      //   isCollapsed = !isCollapsed;
      //   footer.style.display = "none";
      //   btn2.innerHTML = '<i class="fas fa-chevron-up"></i>';
      //   btn2.style.display = "block";
      // });
      // btn2.addEventListener('click', () => {
      //   footer.style.display = "block";
      //   button.innerHTML = '<i class="fas fa-chevron-down"></i>';
      //   btn2.style.display = "none";
      // });
      var translate = document.querySelector(".translate-button");
      translate.addEventListener('click', function () {
        googleTranslateElementInit();
        toggleTranslateElement();
      }); function googleTranslateElementInit() {
        // Your code for initializing the Google Translate element goes here
        new google.translate.TranslateElement(
          { pageLanguage: 'en' },
          'google_translate_element'
        );
      }
      var script = document.createElement('script');
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.type = 'text/javascript';
      document.getElementsByTagName('head')[0].appendChild(script);
      var translateElementVisible = false;

      // Function to toggle the Google Translate element and button icon
      function toggleTranslateElement() {
        var translateElement = document.getElementById('google_translate_element');
        var translateButton = document.querySelector('.translate-button');
        var icon = translateButton.querySelector('i');

        if (translateElementVisible) {
          translateElement.style.display = 'none';
          icon.className = 'fas fa-language';
        } else {
          translateElement.style.display = 'block';
          icon.className = 'fas fa-times';
        }

        translateElementVisible = !translateElementVisible;
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
window.onscroll = function () {
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
            return event.target.dataset.value[index];
          }
          return letters[Math.floor(Math.random() * (26 + 10))];
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
let launchDate = new Date("October 11, 2023 8:00:00").getTime();

let timer = setInterval(tick, 1000);

function tick() {
  let now = new Date().getTime();
  let t = launchDate - now;

  if (t <= 0) {
    document.querySelector('.countdown').innerHTML = "The Gavel Drops!";
    document.querySelector('.inf').innerHTML="MEGAMUN23 Commences ";
    clearInterval(timer); // Stop the timer when the event begins
  } else if (now > new Date("October 13, 2023 14:00:00").getTime()) { // Replace someOtherDate with your desired end date
    document.querySelector('.countdown').innerHTML = "And That's A Wrap!";
    clearInterval(timer); // Stop the timer when the event ends
  } else {
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
  }
}

const tds = document.querySelectorAll('td');

tds.forEach(td => {
  td.addEventListener('click', function () {
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
const abbrElements = document.querySelectorAll('abbr');

// Loop through each abbr element and remove the title attribute
abbrElements.forEach(abbr => {
  abbr.addEventListener('mouseenter', function () {
    this.removeAttribute('title');
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

function splitWords() {
  let quote = document.querySelector("blockquote q");
  quote.innerText.replace(/(<([^>]+)>)/ig, "");
  quotewords = quote.innerText.split(" "),
    wordCount = quotewords.length;
  quote.innerHTML = "";
  for (let i = 0; i < wordCount; i++) {
    quote.innerHTML += "<span>" + quotewords[i] + "</span>";
    if (i < quotewords.length - 1) {
      quote.innerHTML += " ";
    }
  }
  quotewords = document.querySelectorAll("blockquote q span");
  fadeWords(quotewords);
}

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function fadeWords(quotewords) {
  Array.prototype.forEach.call(quotewords, function (word) {
    let animate = word.animate([{
      opacity: 0,
      filter: "blur(" + getRandom(2, 5) + "px)"
    }, {
      opacity: 1,
      filter: "blur(0px)"
    }],
      {
        duration: 1000,
        delay: getRandom(500, 3300),
        fill: 'forwards'
      }
    )
  })
}


// Function to check if an element is in the viewport
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}



// Get all blockquote elements on the page
var blockquotes = document.querySelectorAll('blockquote');

// Function to handle scroll events
function handleScroll() {
  blockquotes.forEach(function (blockquote) {
    if (isElementInViewport(blockquote)) {
      // Call the splitWords() function when a blockquote is in view
      splitWords();

      // Remove the event listener to stop further calls
      window.removeEventListener('scroll', handleScroll);
    }
  });
}

// Add the initial scroll event listener
window.addEventListener('scroll', handleScroll);

// main.js



window.onscroll = function() {makeSticky()};


var navbar = document.querySelector('header nav');


var sticky = navbar.offsetTop;


function makeSticky() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// window.onscroll = function() { makeSticky() };

// var navbar = document.querySelector('header nav');
// var sticky = navbar.offsetTop;

// function makeSticky() {
//   if (window.scrollY >= sticky) {
//     navbar.classList.add("sticky");
//   } else {
//     navbar.classList.remove("sticky");
//   }

//   var currentScrollPos = window.scrollY;
  
//   if (previousScrollPos > currentScrollPos) {
//     navbar.style.top = "0";
//   } else {
//     navbar.style.top = "-50px"; 
//   }
//   previousScrollPos = currentScrollPos;
// }


// var previousScrollPos = window.scrollY;


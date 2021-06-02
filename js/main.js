var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n);
}
function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("slajd");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

const navSlide1 = () =>{
    // const dugme1 = document.querySelector('.prev');
    // const dugme2 = document.querySelector('.next');
    const nav = document.querySelector('.tekst1');
    const navLinks = document.querySelectorAll('.tekst1 h1'); 

        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation='';
            }else{
                link.style.animation = `navLinkFade 0.4s ease forwards  ${index / 5 + 0.1}s`;
            }
        });


}
navSlide1();
const navSlide2 = () =>{
    // const dugme1 = document.querySelector('.prev');
    // const dugme2 = document.querySelector('.next');
    const nav = document.querySelector('.tekst2');
    const navLinks = document.querySelectorAll('.tekst2 h1'); 

        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation='';
            }else{
                link.style.animation = `navLinkFade 0.4s ease forwards  ${index / 5 + 0.1}s`;
            }
        });


}
navSlide2();
const navSlide3 = () =>{
    // const dugme1 = document.querySelector('.prev');
    // const dugme2 = document.querySelector('.next');
    const nav = document.querySelector('.tekst3');
    const navLinks = document.querySelectorAll('.tekst3 h1'); 

        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation='';
            }else{
                link.style.animation = `navLinkFade 0.4s ease forwards  ${index / 5 + 0.1}s`;
            }
        });


}
navSlide3();
const navSlide4 = () =>{
    // const dugme1 = document.querySelector('.prev');
    // const dugme2 = document.querySelector('.next');
    const nav = document.querySelector('.tekst4');
    const navLinks = document.querySelectorAll('.tekst4 h1'); 

        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation='';
            }else{
                link.style.animation = `navLinkFade 0.4s ease forwards  ${index / 5 + 0.1}s`;
            }
        });


}
navSlide4();

window.onscroll = function() {

    var body1 = document.body; //IE 'quirks'
    var document1 = document.documentElement; //IE with doctype
    document1 = (document1.clientHeight) ? document1 : body1;

    if (document1.scrollTop == 0) {
        document1.querySelector(".ididole").style.display = "block";
    }else{
        document1.querySelector(".ididole").style.display = "none";
    }       
};

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
// var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("div-idi-dole").style.display = "block";
//   } else {
//     document.getElementById("div-idi-dole").style.animation = `Fade 0.3s`
//     document.getElementById("div-idi-dole").style.display = "none";
//   }
//   prevScrollpos = currentScrollPos;
// }



// document.addEventListener('backbutton', function(){
//   if(modal1.style.display == "block"){
//     modal1.style.display = "none";
//     document.querySelector("body").style.overflowY = 'visible';
//   }
//   return false;
// });
// document.addEventListener('backbutton', function(){
//   if(modal2.style.display == "block"){
//     modal2.style.display = "none";
//     document.querySelector("body").style.overflowY = 'visible';
//   }
//   return false;
// });
// document.addEventListener('backbutton', function(){
//   if(modal3.style.display == "block"){
//     modal3.style.display = "none";
//     document.querySelector("body").style.overflowY = 'visible';
//   }
//   return false;
// });
// document.addEventListener('backbutton', function(){
//   if(modal4.style.display == "block"){
//     modal4.style.display = "none";
//     document.querySelector("body").style.overflowY = 'visible';
//   }
//   return false;
// });

// document.addEventListener("backbutton", onBackKeyDown, false);

// function onBackKeyDown() {
//   modal1.style.display = "none";
//   modal2.style.display = "none";
//   modal3.style.display = "none";
//   modal4.style.display = "none";
//   document.querySelector("body").style.overflowY = 'visible';
// // }
// function onLoad() {
//   document.addEventListener("deviceready", onDeviceReady, false);
// }
// function onDeviceReady() {
//   // Register the event listener
//   document.addEventListener("backbutton", onBackKeyDown, false);
// }
// function onBackKeyDown() {
//   modal1.style.display = "none";
//   modal2.style.display = "none";
//   modal3.style.display = "none";
//   modal4.style.display = "none";
//   document.querySelector("body").style.overflowY = 'visible';
// }
// window.addEventListener("hashchange", function(e) {
//   if(e.oldURL.length !== e.newURL.length){
//   if(modal1.style.display == "block"){
//     modal1.style.display = "none";
//     document.querySelector("body").style.overflowY = 'visible';
//   }
//   if(modal2.style.display == "block"){
//     modal2.style.display = "none";
//     document.querySelector("body").style.overflowY = 'visible';
//   }
//   if(modal3.style.display == "block"){
//     modal3.style.display = "none";
//     document.querySelector("body").style.overflowY = 'visible';
//   }
//   if(modal4.style.display == "block"){
//     modal4.style.display = "none";
//     document.querySelector("body").style.overflowY = 'visible';
//   }
//   window.history.forward();
// }
// });
// if(modal1.style.display == "block" || modal2.style.display == "block" || modal3.style.display == "block" || modal4.style.display == "block" ){

// (function (global) {
//   if(modal1.style.display == "block" || modal2.style.display == "block" || modal3.style.display == "block" || modal4.style.display == "block" ){


//   if(typeof (global) === "undefined") {
//       throw new Error("window is undefined");
//   }

//   var _hash = "!";
//   var noBackPlease = function () {
//       global.location.href += "#";

//       // Making sure we have the fruit available for juice (^__^)
//       global.setTimeout(function () {
//           global.location.href += "!";
//       }, 50);
//   };

//   global.onhashchange = function () {
//       if (global.location.hash !== _hash) {
//           global.location.hash = _hash;
//       }
//   };

//   global.onload = function () {
//       noBackPlease();

//       // Disables backspace on page except on input fields and textarea..
//       document.body.onkeydown = function (e) {
//           var elm = e.target.nodeName.toLowerCase();
//           if (e.which === 8 && (elm !== 'input' && elm  !== 'textarea')) {
//               e.preventDefault();
//           }
//           // Stopping the event bubbling up the DOM tree...
//           e.stopPropagation();
//       };
//   }
// }
// })(window);
// }
// window.onbeforeunload = function(event) { 
//   modal1.style.display = "none";
//   modal2.style.display = "none";
//   modal3.style.display = "none";
//   modal4.style.display = "none";
//   document.querySelector("body").style.overflowY = 'visible';
//  };
// window.addEventListener('beforeunload', function (e) {
//   // Cancel the event
//   e.preventDefault(); // If you prevent default behavior in Mozilla Firefox prompt will always be shown
//   // Chrome requires returnValue to be set
//     modal1.style.display = "none";
//     modal2.style.display = "none";
//     modal3.style.display = "none";
//     modal4.style.display = "none";
//     document.querySelector("body").style.overflowY = 'visible';
//     e.returnValue='0';
// });


// Get the modal 1
var modal1 = document.getElementById("myModal1");

// Get the button that opens the modal
var btn1 = document.getElementById("myBtn1");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];

// When the user clicks on the button, open the modal
btn1.onclick = function() {
  modal1.style.display = "block";
  document.querySelector("body").style.overflowY = 'hidden';
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
  document.querySelector("body").style.overflowY = 'visible';
}

// When the user clicks anywhere outside of the modal, close it
modal1.onclick = function() {
  modal1.style.display = "none";
  document.querySelector("body").style.overflowY = 'visible';
}



// Get the modal 2
var modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
var btn2 = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks on the button, open the modal
btn2.onclick = function() {
   modal2.style.display = "block";
   document.querySelector("body").style.overflowY = 'hidden';
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
   modal2.style.display = "none";
   document.querySelector("body").style.overflowY = 'visible';
}

// When the user clicks anywhere outside of the modal, close it
modal2.onclick = function() {
     modal2.style.display = "none";
   document.querySelector("body").style.overflowY = 'visible';
}



// Get the modal 3
var modal3 = document.getElementById("myModal3");

// Get the button that opens the modal
var btn3 = document.getElementById("myBtn3");

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close3")[0];

// When the user clicks on the button, open the modal
btn3.onclick = function() {
  modal3.style.display = "block";
  document.querySelector("body").style.overflowY = 'hidden';
}

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
  modal3.style.display = "none";
  document.querySelector("body").style.overflowY = 'visible';
}

// When the user clicks anywhere outside of the modal, close it
modal3.onclick = function() {
    modal3.style.display = "none";
    document.querySelector("body").style.overflowY = 'visible';
}



// Get the modal 4
var modal4 = document.getElementById("myModal4");

// Get the button that opens the modal
var btn4 = document.getElementById("myBtn4");

// Get the <span> element that closes the modal
var span4 = document.getElementsByClassName("close4")[0];

// When the user clicks on the button, open the modal
btn4.onclick = function() {
  modal4.style.display = "block";
  document.querySelector("body").style.overflowY = 'hidden';
}

// When the user clicks on <span> (x), close the modal
span4.onclick = function() {
  modal4.style.display = "none";
  document.querySelector("body").style.overflowY = 'visible';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal4) {
    modal4.style.display = "none";
    document.querySelector("body").style.overflowY = 'visible';
  }
}

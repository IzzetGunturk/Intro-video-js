// functie gemaakt om de audio af te spelen
document.getElementById("buttonPlay").addEventListener("click", function () {
  var audio = new Audio("music/mocromaffia.mp3");
  audio.play();
})

// functie aan gemaakt om de titel, button en de achtergrond te hiden bij het klikken van de button
document.getElementById("buttonPlay").addEventListener("click", function () {
  document.body.style.backgroundImage = 'none';
  var titel = document.getElementById("titel");
  var button = document.getElementById("buttonPlay");
  var frontpage = document.getElementById("frontpage");
  frontpage.style.display = 'none';
  button.style.display = 'none';
  titel.style.display = 'none';

})

// functie aangemaakt om de eerste animatie/foto te laten zien
document.getElementById("buttonPlay").addEventListener("click", function () {
  var currentAnimation = document.getElementById("animationPage1");
  currentAnimation.style.display = "block";
})

// functie aangemaakt om de volgende dia/animatie te laten zien bron: "https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/animationend_event"
document.getElementById("buttonPlay").addEventListener("click", function () {
  var currentAnimation = document.getElementById("animationPage1");
  // na de huidige animatie begint de volgende animatie
  const animated = document.querySelector('#animationPage1');
  
  animated.addEventListener('animationend', () => {
    var nextAnimation = document.getElementById("animationPage2");
    // display van de current animation is none dus animation page 1 hide zich
    currentAnimation.style.display = "none";
    // display van next animation is block dus animation page 2 komt nu in beeld
    nextAnimation.style.display = "block";
  });
})

document.getElementById("buttonPlay").addEventListener("click", function () {
  var currentAnimation = document.getElementById("animationPage2");
  const animated = document.querySelector('#animationPage2');

  animated.addEventListener('animationend', () => {
    var nextAnimation = document.getElementById("animationPage3");
    currentAnimation.style.display = "none";
    nextAnimation.style.display = "block";
  });
})

document.getElementById("buttonPlay").addEventListener("click", function () {
  var currentAnimation = document.getElementById("animationPage3");
  const animated = document.querySelector('#animationPage3');

  animated.addEventListener('animationend', () => {
    var nextAnimation = document.getElementById("animationPage4");
    currentAnimation.style.display = "none";
    nextAnimation.style.display = "block";
  });
})

document.getElementById("buttonPlay").addEventListener("click", function () {
  var currentAnimation = document.getElementById("animationPage4");
  const animated = document.querySelector('#animationPage4');

  animated.addEventListener('animationend', () => {
    var nextAnimation = document.getElementById("animationPage5");
    currentAnimation.style.display = "none";
    nextAnimation.style.display = "block";
  });
})

document.getElementById("buttonPlay").addEventListener("click", function () {
  var currentAnimation = document.getElementById("animationPage5");
  const animated = document.querySelector('#animationPage5');

  animated.addEventListener('animationend', () => {
    var nextAnimation = document.getElementById("animationPage6");
    currentAnimation.style.display = "none";
    nextAnimation.style.display = "block";
  });
})

document.getElementById("buttonPlay").addEventListener("click", function () {
  var currentAnimation = document.getElementById("animationPage6");
  const animated = document.querySelector('#animationPage6');

  animated.addEventListener('animationend', () => {
    var nextAnimation = document.getElementById("animationPage7");
    currentAnimation.style.display = "none";
    nextAnimation.style.display = "block";
  });
})

document.getElementById("buttonPlay").addEventListener("click", function () {
  var currentAnimation = document.getElementById("animationPage7");
  const animated = document.querySelector('#animationPage7');

  animated.addEventListener('animationend', () => {
    var nextAnimation = document.getElementById("animationPage8");
    currentAnimation.style.display = "none";
    nextAnimation.style.display = "block";
  });
})

document.getElementById("buttonPlay").addEventListener("click", function () {
  var currentAnimation = document.getElementById("animationPage8");
  const animated = document.querySelector('#animationPage8');

  animated.addEventListener('animationend', () => {
    var nextAnimation = document.getElementById("animationPage9");
    currentAnimation.style.display = "none";
    nextAnimation.style.display = "block";
  });
})

document.getElementById("buttonPlay").addEventListener("click", function () {
  var currentAnimation = document.getElementById("animationPage9");
  const animated = document.querySelector('#animationPage9');

  animated.addEventListener('animationend', () => {
    var nextAnimation = document.getElementById("animationPage10");
    currentAnimation.style.display = "none";
    nextAnimation.style.display = "block";
  });
})

document.getElementById("buttonPlay").addEventListener("click", function () {
  var currentAnimation = document.getElementById("animationPage10");
  const animated = document.querySelector('#animationPage10');

  animated.addEventListener('animationend', () => {
    var nextAnimation = document.getElementById("animationPage11");
    currentAnimation.style.display = "none";
    nextAnimation.style.display = "block";
  });
})

document.getElementById("buttonPlay").addEventListener("click", function () {
  var currentAnimation = document.getElementById("animationPage11");
  const animated = document.querySelector('#animationPage11');

  animated.addEventListener('animationend', () => {
    var nextAnimation = document.getElementById("animationPage12");
    currentAnimation.style.display = "none";
    nextAnimation.style.display = "block";
  });
})

document.getElementById("buttonPlay").addEventListener("click", function () {
  var currentAnimation = document.getElementById("animationPage12");
  const animated = document.querySelector('#animationPage12');

  animated.addEventListener('animationend', () => {
    var nextAnimation = document.getElementById("animationPage13");
    currentAnimation.style.display = "none";
    nextAnimation.style.display = "block";
  });
})

document.getElementById("buttonPlay").addEventListener("click", function () {
  var currentAnimation = document.getElementById("animationPage13");
  const animated = document.querySelector('#animationPage13');

  animated.addEventListener('animationend', () => {
    var nextAnimation = document.getElementById("animationPage14");
    currentAnimation.style.display = "none";
    nextAnimation.style.display = "block";
  });
})

// document.getElementById("buttonPlay").addEventListener("click", function () {
//   var currentAnimation = document.getElementById("animationPage14");
//   const animated = document.querySelector('#animationPage14');

//   animated.addEventListener('animationend', () => {
//     var nextAnimation = document.getElementById("frontpage");
//     var button = document.getElementById("buttonPlay");
//     var titel = document.getElementById("titel");
//     currentAnimation.style.display = "none";
//     nextAnimation.style.display = "block";
//     button.style.display = "block";
//     titel.style.display = "block";
//   });
// })

// restart button gemaakt om naar de homepage te gaan
document.getElementById("buttonRestart").addEventListener("click", function () {
  window.location.reload();
})
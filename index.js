const animations = [
  "animationPage1",
  "animationPage2",
  "animationPage3",
  "animationPage4",
  "animationPage5",
  "animationPage6",
  "animationPage7",
  "animationPage8",
  "animationPage9",
  "animationPage10",
  "animationPage11",
  "animationPage12",
  "animationPage13",
  "animationPage14",
];


document.getElementById("buttonPlay").addEventListener("click", function () {
  var audio = new Audio("music/mocromaffia.mp3");
  audio.play();
  
  document.body.style.backgroundImage = 'none';
  var titel = document.getElementById("titel");
  var button = document.getElementById("buttonPlay");
  var frontpage = document.getElementById("frontpage");
  frontpage.style.display = 'none';
  button.style.display = 'none';
  titel.style.display = 'none';

  document.getElementById(animations[0]).style.display = "block";

  for (var i = 0; i < animations.length; i++) {
    const currentAnimation = document.getElementById(animations[i]);
    const nextAnimation = document.getElementById(animations[i + 1]);

    if (i == 14){ 
      break; 
    }

    currentAnimation.addEventListener('animationend', () => {
      currentAnimation.style.display = "none";
      if (nextAnimation) {
        nextAnimation.style.display = "block";
      }
    });
  }
});
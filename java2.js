$(document).ready(function() {
    /* Progress Bar animation */
    $(".progress-bar").animate({
        width: "100%"
    }, 250 ); // start in under a sec
});

setTimeout(loaderFadeOut, 2700);

function loaderFadeOut() {
  let loader = document.querySelector('.section');
  loader.style.opacity = 0;
  loader.style.width = 0;
  loader.style.height = 0;
};
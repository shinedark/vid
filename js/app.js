window.addEventListener('keydown', function(e){
    
    var audio = document.querySelector("audio[data-key=\"" + e.keyCode + "\"]");
    var animation = document.querySelector("span[data-key=\"" + e.keyCode + "\"]");
    var el = document.querySelector("span[data-key=\"" + e.keyCode + "\"]");
    if (!audio) return;
    if(!animation) return;

    el.style.display = 'block';
    animation.style.animationPlayState = "running";
    animation.style.animationDuration = "0.3s";
    audio.play();
   
  
  
});


window.addEventListener('keyup', function(e){
    
    var audio = document.querySelector("audio[data-key=\"" + e.keyCode + "\"]");
    var animation = document.querySelector("span[data-key=\"" + e.keyCode + "\"]");
    var el = document.querySelector("span[data-key=\"" + e.keyCode + "\"]");
    console.log(e);
    if (!audio) return;
    if(!animation) return;

    el.style.display = "none";
    animation.style.animationPlayState = "paused";
    animation.style.animationDuration = "0s";
    audio.currentTime = 0;
    audio.pause();

  
  
});











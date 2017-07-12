window.addEventListener('keydown', function(e){
    
    var audio = document.querySelector("audio[data-key=\"" + e.keyCode + "\"]");
    var animation = document.querySelector("span[data-key=\"" + e.keyCode + "\"]");
    var el = document.querySelector("span[data-key=\"" + e.keyCode + "\"]");

   
    
    if (!audio) return;
    if(!animation) return;
    

    audio.play();
    el.classList.add('show');
    animation.style.animationPlayState = "running";
    animation.style.animationDuration = "0.3s";
    
   
  
  
});


window.addEventListener('keyup', function(e){
    
    var audio = document.querySelector("audio[data-key=\"" + e.keyCode + "\"]");
    var animation = document.querySelector("span[data-key=\"" + e.keyCode + "\"]");
    var el = document.querySelector("span[data-key=\"" + e.keyCode + "\"]");

    if (!audio) return;
    if(!animation) return;
    
    
    audio.currentTime = 0;
    audio.pause();
    el.classList.remove('show');
    animation.style.animationPlayState = "paused";
    animation.style.animationDuration = "0s";
    

  
  
});











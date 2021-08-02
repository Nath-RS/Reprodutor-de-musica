var myaudio = document.getElementById("audio");

function playpause(){
    if(myaudio.paused){
        myaudio.play();
    }
    else{
        myaudio.pause();
    }
}
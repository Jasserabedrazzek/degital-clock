function Times() {
    var date = new Date(); 
    var day = date.getDay(); 
    var hours = date.getHours(); 
    var minutes = date.getMinutes(); 
    document.querySelector('.hours').innerHTML = addZero(hours);
    document.querySelector('.minutes').innerHTML = addZero(minutes);

    document.querySelector(`.day${day}`).style.opacity = '1'; // Highlight current day
}


function addZero(z) {
    return z < 10 ? `0${z}` : z;
}

setInterval(Times, 500);


let isMuted = true;
const video = document.getElementById('video'); // Select the video element
const MuteBtn = document.getElementById('Muted'); // Select the button element

function Muted() {
    isMuted = !isMuted;
    video.muted = isMuted;
    MuteBtn.innerHTML = isMuted 
        ? '<i class="fa fa-volume-mute"></i>' 
        : '<i class="fa fa-volume-up"></i>';
    MuteBtn.style.color = isMuted 
        ? 'red' 
        : 'rgb(0, 255, 0)';
}

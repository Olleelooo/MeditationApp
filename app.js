const app = () => {
    const song = document.querySelector('.song');
    const play = document.querySelector('.play');
    const outline = document.querySelector('.moving-outline circle');
    const video = document.querySelector('.video-container video');
    
    //Sounds
    const sounds = document.querySelectorAll('.sound-picker button');

    //Time Display
    const timeDisplay = document.querySelector('.time-display');

    //Get the length of the outline
    const outlineLength = outline.getTotalLength();
    
    //Duration
    let fakeDuration = 300;

    outline.style.strokeDasharray = outlineLength;
    outline.style.strokeDasharray = outlineLength;

    //play songs
    play.addEventListener('click', () => {
        checkPlaying(song);
    });

    //Function that stops and plays the sound
    const checkPlaying = song => {
        if (song.paused) {
            song.play();
            video.play();
            play.src = "./svg/pause.svg";
        } else {
            song.pause();
            video.pause();
            play.src = "./svg/play.svg"; 
        }
    }

};
app();
const toggleThemeBtns = document.querySelectorAll('.toggle-theme'),
    playTrackCart = document.querySelectorAll('.play-track'),
    playerImg = document.querySelector('#player-img'),
    playerSection = document.querySelector('#player-section'),
    wave = document.querySelector('#wave'),
    currentTime = document.querySelector('#current-time'),
    totalDuration = document.querySelector('#total-duration'),
    repeatTrackBtn = document.querySelector('#repeat-track'),
    seek_slider = document.querySelector('.seek_slider'),
    volume_slider = document.querySelector('.volume_slider'),
    playpauseTrackBtn = document.querySelector('#playpause-track');


toggleThemeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (localStorage.theme === 'dark') {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
    })
})
document.addEventListener("DOMContentLoaded", () => {
const swiper_section = new Swiper(".section-slider", {
    slidesPerView: "auto",
    spaceBetween: 20,
});
    const swiper_cart_1 = new Swiper(".cart-slider-1", {
        slidesPerView: "auto",
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: ".right-button-1",
            prevEl: ".left-button-1",
        },
    });
    const swiper_cart_2 = new Swiper(".cart-slider-2", {
        slidesPerView: "auto",
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: ".right-button-2",
            prevEl: ".left-button-2",
        },
    });
});
let curr_track = document.createElement('audio');
let isPlaying = false;
let isRepeat = false;
let updateTimer;

playTrackCart.forEach((element) => {
    element.addEventListener('click', function (){
        playerSection.style.display = 'block';
        trackPic = this.getAttribute('data-track-pic');
        trackLick = this.getAttribute('data-track-link');
        clearInterval(updateTimer);
        reset();
        curr_track.src = trackLick;
        playerImg.src = trackPic;
        curr_track.load();
        updateTimer = setInterval(setUpdate, 1000);
        curr_track.addEventListener('ended', ()=>{
            reset();
            pauseTrack();
        });
    })
})
function reset() {
    currentTime.textContent = "0";
    totalDuration.textContent = "00:00";
    seek_slider.value = 0;
}
function repeatTrack() {
    isRepeat ? offRepeat() : onRepeat();
}
function onRepeat() {
    isRepeat = true;
    repeatTrackBtn.classList.remove('text-zinc-800');
    repeatTrackBtn.classList.add('text-zinc-900');
    curr_track.loop = true;
}
function offRepeat() {
    isRepeat = false;
    repeatTrackBtn.classList.remove('text-zinc-900');
    repeatTrackBtn.classList.add('text-zinc-800');
    curr_track.loop = false;
}

function playpauseTrack() {
    isPlaying ? pauseTrack() : playTrack();
}

function playTrack() {
    curr_track.play();
    isPlaying = true;
    wave.classList.add('loader');
    playpauseTrackBtn.innerHTML = '<svg class="w-4 h-4"><use href="#pause-icon"></use></svg>';
}
function pauseTrack() {
    curr_track.pause();
    isPlaying = false;
    wave.classList.remove('loader');
    playpauseTrackBtn.innerHTML = '<svg class="w-4 h-4"><use href="#play-icon"></use></svg>';
}
function seekTo() {
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
    console.log(seek_slider.value);
}

seek_slider.addEventListener('mousedown', () => {
    clearInterval(updateTimer);
})
seek_slider.addEventListener('mouseup', () => {
    updateTimer = setInterval(setUpdate, 1000);
})
function setVolume() {
    curr_track.volume = volume_slider.value / 100;
}
function setUpdate() {
    let seekPosition = 0;
    if (!isNaN(curr_track.duration)) {
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
        if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
        if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }
        if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }

        currentTime.textContent = currentMinutes + ":" + currentSeconds;
        totalDuration.textContent = durationMinutes + ":" + durationSeconds;
    }
}
function closePlayerSection(){
    pauseTrack();
    playerSection.style.display = 'none';
}
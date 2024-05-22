const daleButton = document.getElementById('daleButton');
const musicContainer = document.querySelector('.music-container');
const audio = document.querySelector('#audio');



const loadSong = () => {
    audio.src = `https://res.cloudinary.com/dpaxljhpr/video/upload/v1716421794/Portfolio%202.0/Small.mp3`
}

loadSong();

const playSong = () =>{
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');

    audio.play()
}

const pauseSong = () => {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');

    audio.pause();
}


playBtn.addEventListener('click', ()=>{
    const isPlaying = musicContainer.classList.contains('play');

    if(isPlaying){
        pauseSong();
    } else {
        playSong();
    }
})

daleButton.addEventListener('click', () => {
    playSong();
})
/* const daleButton = document.getElementById('daleButton');
const musicContainer = document.querySelector('.music-container');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const title = document.querySelector('#title');


const songs = ['Small', 'Heart'];

let songIndex = 0;

const loadSong = (song) => {
    title.innerText = song;
    audio.src = `/src/media/music/${song}.mp3`
}

loadSong(songs[songIndex]);

const playSong = () =>{
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');

    audio.play()
}

const pauseSong = () => {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');

    audio.pause();
}

const prevSong = () => {
    songIndex--;

    if(songIndex < 0){
        songIndex = songs.length - 1;
    }

    loadSong(songs[songIndex]);

    playSong()

}

const nextSong = () => {
    songIndex++;

    if(songIndex > songs.length - 1){
        songIndex = 0;
    }

    loadSong(songs[songIndex]);

    playSong()

}

const updateProgress = (e) => {
    const {duration, currentTime} = e.srcElement;

    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`

}

//  REVISAR //
const setProgress = (e) => {
    const width = progress.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    console.log(audio.currentTime)

    audio.currentTime = (clickX / width) * duration;
}


playBtn.addEventListener('click', ()=>{
    const isPlaying = musicContainer.classList.contains('play');

    if(isPlaying){
        pauseSong();
    } else {
        playSong();
    }
})

prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)

audio.addEventListener('timeupdate', updateProgress)
audio.addEventListener('ended', nextSong)

progressContainer.addEventListener('click', setProgress)
daleButton.addEventListener('click', () => {
    playSong();
}) */
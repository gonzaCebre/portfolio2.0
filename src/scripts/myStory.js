const noButton = document.getElementById('noButton');
const daleButton = document.getElementById('daleButton');
const pregunta = document.getElementById('pregunta');

const previous = document.getElementById('previous');
const forward = document.getElementById('forward');
const music = document.getElementById('music');

noButton.addEventListener('click', () => {
    pregunta.classList.add('noMostrar')
    
})

daleButton.addEventListener('click', () => {
    pregunta.classList.add('noMostrar')    
    music.classList.add('playing')
    playSong()
})
let margin = 8300;

const firstFragment = document.getElementById('firstFragment');
forward.addEventListener('click', ()=> forwardStory())
previous.addEventListener('click', ()=> previousStory())



const forwardStory = () =>{
    if(margin !== -7900) {
        margin = margin - 1800;
        
        firstFragment.style.transition = 'margin-left 1s ease-in-out';
        firstFragment.style.marginLeft = `${margin}px`;
    }
}

const previousStory = () =>{

    if(margin !== 8300) {
        margin = margin + 1800;
    
        firstFragment.style.transition = 'margin-left 1s ease-in-out';
        firstFragment.style.marginLeft = `${margin}px`;
    }
}

const audio = document.querySelector('#audio');

const songs = ['Small', 'Heart'];

let songIndex = 0;

const loadSong = (song) => {
    audio.src = `/src/media/music/${song}.mp3`
}

loadSong(songs[songIndex]);

const playSong = () =>{
    audio.play()
    music.classList.add('playing')
}

const pauseSong = () => {
    audio.pause();
    music.classList.remove('playing')
}



const nextSong = () => {
    songIndex++;

    if(songIndex > songs.length - 1){
        songIndex = 0;
    }

    loadSong(songs[songIndex]);

    playSong()

}


music.addEventListener('click', ()=>{
    const isPlaying = music.classList.contains('playing');

    if(isPlaying){
        pauseSong();
    } else {
        playSong();
    }
})


audio.addEventListener('ended', nextSong)

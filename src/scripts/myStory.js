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


const loadSong = () => {
    audio.src = `https://res.cloudinary.com/dpaxljhpr/video/upload/v1716421794/Portfolio%202.0/Small.mp3`
}

loadSong();

const playSong = () =>{
    audio.play()
    music.classList.add('playing')
}

const pauseSong = () => {
    audio.pause();
    music.classList.remove('playing')
}




music.addEventListener('click', ()=>{
    const isPlaying = music.classList.contains('playing');

    if(isPlaying){
        pauseSong();
    } else {
        playSong();
    }
})



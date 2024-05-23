const vamosButton = document.getElementById('vamosButton');
const subite = document.getElementById('subite');

vamosButton.addEventListener('click', () => {
    subite.classList.add('noMostrar')
})

const vamos = () => {
    setTimeout(()=> {
        subite.classList.add('noMostrar')
    }, 3000)
}

vamos()



// MUSIC

const daleButton = document.getElementById('daleButton');
const audio = document.querySelector('#audio');
const musicButton = document.querySelector('#music');



const loadSong = () => {
    audio.src = `https://res.cloudinary.com/dpaxljhpr/video/upload/v1716421794/Portfolio%202.0/Small.mp3`
}

loadSong();

const playSong = () =>{
    musicButton.classList.add('play');

    audio.play()
}

const pauseSong = () => {
    musicButton.classList.remove('play');

    audio.pause();
}


musicButton.addEventListener('click', ()=>{
    const isPlaying = musicButton.classList.contains('play');

    if(isPlaying){
        pauseSong();
    } else {
        playSong();
    }
})

daleButton.addEventListener('click', () => {
    playSong();
})
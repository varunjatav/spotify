let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItem = Array.from(document.getElementsByClassName("songItem"));
let songName = document.getElementsByClassName("songName");
let backward = document.getElementById("backward");
let forward = document.getElementById("forward");
let playedMusicName = document.getElementById("playedMusicName");


let songs = [
    { songName: "Warriyo - Mortals (feat. Laura Breha) [NCS Release]", filePath:"songs/1.mp3", coverPath: "covers/1.jpg"},
    { songName: "Cielo - Huma-Huma", filePath:"songs/2.mp3", coverPath: "covers/2.jpg"},
    { songName: "DEAF KEY - Invisible [NCS Relaease]-320k", filePath:"songs/3.mp3", coverPath: "covers/3.jpg"},
    { songName: "Different Heaven & EH!DE -My Heart [NCS Release]-320k", filePath:"songs/4.mp3", coverPath: "covers/4.jpg"},
    { songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath:"songs/5.mp3", coverPath: "covers/5.jpg"},
    { songName: "Salam-e-Ishq", filePath:"songs/6.mp3", coverPath: "covers/6.jpg"},
    { songName: "Salam-e-Ishq", filePath:"songs/7.mp3", coverPath: "covers/7.jpg"},
    { songName: "Salam-e-Ishq", filePath:"songs/8.mp3", coverPath: "covers/8.jpg"},
    { songName: "Salam-e-Ishq", filePath:"songs/9.mp3", coverPath: "covers/9.jpg"},
    { songName: "Salam-e-Ishq", filePath:"songs/10.mp3", coverPath: "covers/10.jpg"},
];

songItem.forEach((element,i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
    
})

// audioElement.play();

// handle Play/pause audio

masterPlay.addEventListener("click", () =>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
    }else{
        audioElement.pause();
        masterPlay.classList.add("fa-circle-play");
        masterPlay.classList.remove("fa-circle-pause");
        gif.style.opacity = 0;
    }
})

// Listen to audio events
audioElement.addEventListener("timeupdate" ,() => {
 let progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
 myProgressBar.value = progress;
})

myProgressBar.addEventListener("change", () =>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
       
            element.classList.add("fa-circle-play");
            element.classList.remove("fa-circle-pause");
        
        
    })
}
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener("click", (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        audioElement.currentTime = 0;
        audioElement.src = `songs/${songIndex+1}.mp3`;
        audioElement.play();
        gif.style.opacity = 1;
        playedMusicName.innerText = songs[songIndex - 1].songName;
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
    });
});

// forward and backward

forward.addEventListener("click", (e) => {
    if(songIndex >=9){
        songIndex = 0;
    }else{
        songIndex+=1;
    }
    audioElement.currentTime = 0;
    audioElement.src = `songs/${songIndex+1}.mp3`;
    playedMusicName.innerText = songs[songIndex].songName;
    console.log(playedMusicName)
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
   
})
backward.addEventListener("click", (e) => {
    if(songIndex <= 0){
        songIndex = 0;
       
    }else{
        songIndex-=1;
    }
    audioElement.currentTime = 0;
    audioElement.src = `songs/${songIndex+1}.mp3`;
    playedMusicName.innerText = songs[songIndex].songName;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    
});
console.log("Welcome to Spotify");
// initialize the variables
let songIndex = 0;
let audioElement = new Audio('music/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Tu thodi der aur thaher ja", filePath: "music/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Banzara", filePath: "music/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Dil dil dil ye dil", filePath: "music/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Pahle pyar ka pahla gam", filePath: "music/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Meri mehbooba", filePath: "music/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "O jaana", filePath: "music/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Piya o re piya", filePath: "music/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Laal chunariya", filePath: "music/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Ishq hai ishq hai", filePath: "music/9.mp3", coverPath: "covers/9.jpg"},

]
songItems.forEach((element, i)=>{
 element.getElementsByTagName("img")[0].src = songs[i].coverPath;
 element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
 
 
})
// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
     gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    console.log(progress);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
const makeAllplays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
       console.log(e.target);
       makeAllplays();
       songIndex = parseInt(e.target.id);
       e.target.classList.remove('fa-circle-play');
       e.target.classList.add('fa-circle-pause');
       audioElement.src = `music/${songIndex+1}.mp3`;
       masterSongName.innerText = songs[songIndex].songName;
       audioElement.currentTime = 0;
       audioElement.play();

       masterPlay.classList.remove('fa-circle-play');
       masterPlay.classList.add('fa-circle-pause');
    })

    })
    document.getElementById('next').addEventListener('click',()=>{
        if(songIndex>8){
            songIndex = 0
        }
        else{
        songIndex += 1;
        }
        audioElement.src = `music/${songIndex+1}.mp3`;
        masterSongName.innerText = music[songIndex].songName;
       audioElement.currentTime = 0;
       audioElement.play();
       gif.style.opacity = 1;
       masterPlay.classList.remove('fa-circle-play');
       masterPlay.classList.add('fa-circle-pause');
    })
    document.getElementById('previous').addEventListener('click',()=>{
        if(songIndex<=0){
            songIndex = 0
        }
        else{
        songIndex -= 1;
        }
        audioElement.src = `music/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
       audioElement.currentTime = 0;
       audioElement.play();
       masterPlay.classList.remove('fa-circle-play');
       masterPlay.classList.add('fa-circle-pause');
    })

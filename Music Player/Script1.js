let songs = [
    "songs/Chalo-Door-Kahin.mp3",
    "songs/Main Rahun.mp3",
    "songs/Khasara.mp3",
    "songs/Har Baar.mp3",
    "songs/Guzaarishein.mp3",
    "songs/Hoor.mp3"
];

let titles = [
    "Chalo-Door-Kahin",
    "Main Rahun",
    "Khasara",
    "Har Baar",
    "Guzaarishein",
    "Hoor"
];

let currentSong = 0;

let audio = document.getElementById("audio");

let title = document.getElementById("song-title");


audio.src = songs[currentSong];

function playPause() {

    if (audio.paused) {

        audio.play();

    } else {

        audio.pause();
    }
}

function nextSong() {

    currentSong++;

    if (currentSong >= songs.length) {

        currentSong = 0;
    }

    audio.src = songs[currentSong];

    title.innerText = titles[currentSong];

    audio.play();
}

function prevSong() {

    currentSong--;

    if (currentSong < 0) {

        currentSong = songs.length - 1;
    }

    audio.src = songs[currentSong];

    title.innerText = titles[currentSong];

    audio.play();
}
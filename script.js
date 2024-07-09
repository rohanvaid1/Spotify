const songs = [
    {
        title: "Song Title 1",
        artist: "Artist Name 1",
        src: "path/to/song1.mp3",
        albumArt: "images/album_art1.jpg"
    },
    {
        title: "Song Title 2",
        artist: "Artist Name 2",
        src: "path/to/song2.mp3",
        albumArt: "images/album_art2.jpg"
    }
];

let currentSongIndex = 0;
let isPlaying = false;

const playPauseButton = document.getElementById('play-pause');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const songTitle = document.getElementById('song-title');
const artistName = document.getElementById('artist-name');
const nowPlayingImage = document.querySelector('.now-playing img');
const audio = new Audio(songs[currentSongIndex].src);

playPauseButton.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        playPauseButton.textContent = 'Play';
    } else {
        audio.play();
        playPauseButton.textContent = 'Pause';
    }
    isPlaying = !isPlaying;
});

prevButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    if (isPlaying) audio.play();
});

nextButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    if (isPlaying) audio.play();
});

function loadSong(index) {
    const song = songs[index];
    songTitle.textContent = song.title;
    artistName.textContent = song.artist;
    nowPlayingImage.src = song.albumArt;
    audio.src = song.src;
    playPauseButton.textContent = 'Play';
    isPlaying = false;
}

loadSong(currentSongIndex);

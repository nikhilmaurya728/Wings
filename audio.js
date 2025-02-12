
let songs = ["song1.mp3", "song2.mp3", "song3.mp3", "song4.mp3"];
songs = [];
let currentSongIndex = 0;
let playMode = 0; // 0: Stop Mode, 1: Repeat, 2: Next Song

function playMusic(track, button) {
  const player = document.getElementById('musicPlayer');
  const audio = document.getElementById('audioPlayer');
  const source = document.getElementById('audioSource');
  const trackName = document.getElementById('trackName');



  source.src = track;

  audio.load();
  audio.volume = 0.2; // Set initial volume to 30%
  audio.play();
  trackName.textContent = `Now Playing: ${track}`;
  player.style.display = 'block';

  document.querySelectorAll('.audiocontent button').forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');

  currentSongIndex = songs.indexOf(track);

  audio.onended = handleSongEnd;
}

const playpause = document.getElementById('playpause');
function togglePlayPause(modetype) {
  const audio = document.getElementById('audioPlayer');
  if (modetype == 'button') {
    if (audio.paused) {
      audio.play();
      playpause.textContent = "S";
    } else {
      audio.pause();
      playpause.textContent = "P";

    }
  }
  else {
    if (audio.paused) {
      audio.pause();
      playpause.textContent = "P";
    } else {
      audio.play();
      playpause.textContent = "S";

    }
  }
}

function closePlayer() {
  const player = document.getElementById('musicPlayer');
  player.style.display = 'none';
  const audio = document.getElementById('audioPlayer');

  audio.pause();
}

function skipTime(seconds) {
  const audio = document.getElementById('audioPlayer');
  audio.currentTime += seconds;
}

function previousSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  playMusic(songs[currentSongIndex], document.querySelectorAll('.audiocontent button')[currentSongIndex]);
}

function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  playMusic(songs[currentSongIndex], document.querySelectorAll('.audiocontent button')[currentSongIndex]);
}

function toggleMode() {
  const modeButton = document.getElementById('modeButton');
  playMode = (playMode + 1) % 3;

  if (playMode === 0) {
    modeButton.textContent = "Stop Mode";
  } else if (playMode === 1) {
    modeButton.textContent = "Repeat Mode";
  } else {
    modeButton.textContent = "Next Song";
  }
}

function handleSongEnd() {
  if (playMode === 0) {
    closePlayer();
  } else if (playMode === 1) {
    document.getElementById('audioPlayer').play();
  } else if (playMode === 2) {
    nextSong();
  }
}
let isMinimized = false;
function toggleMinimize() {
  const player = document.getElementById('musicPlayer');
  const fullPlayer = document.getElementById('fullPlayer');
  const minimizedPlayer = document.getElementById('minimizedPlayer');
  const toggleButton = document.getElementById('minimize'); // First button in top-buttons
  togglePlayPause('fun');

  isMinimized = !isMinimized;
  if (isMinimized) {
    player.classList.add('minimized');
    fullPlayer.style.display = 'none';
    minimizedPlayer.style.display = 'block';
    toggleButton.textContent = '=';


  } else {
    player.classList.remove('minimized');
    fullPlayer.style.display = 'block';
    minimizedPlayer.style.display = 'none';
    toggleButton.textContent = '-';
  }
}
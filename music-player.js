if (!window.globalMusicPlayer) {
  const audio = new Audio("./asset/amin.mp3");
  audio.loop = true;
  audio.volume = 0.7;
  window.globalMusicPlayer = audio;
}

const popup = document.getElementById("music-popup");
const yesBtn = document.getElementById("music-yes");
const noBtn = document.getElementById("music-no");
const toggleBtn = document.getElementById("musicToggle");

function updateIcon() {
  toggleBtn.textContent = globalMusicPlayer.paused ? "▶️" : "⏸";
}

const hasChosenMusic = localStorage.getItem("musicPlayed");

if (!hasChosenMusic) {
  popup.style.display = "flex";
}

yesBtn?.addEventListener("click", () => {
  globalMusicPlayer.play();
  popup.style.display = "none";
  localStorage.setItem("musicPlayed", "true");
  updateIcon();
});

noBtn?.addEventListener("click", () => {
  popup.style.display = "none";
  localStorage.setItem("musicPlayed", "false");
});

toggleBtn?.addEventListener("click", () => {
  if (globalMusicPlayer.paused) {
    globalMusicPlayer.play();
  } else {
    globalMusicPlayer.pause();
  }
  updateIcon();
});

if (hasChosenMusic === "true") {
  globalMusicPlayer.play();
}
updateIcon();

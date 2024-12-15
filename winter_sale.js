// JavaScript for Snowfall Effect
function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.style.left = `${Math.random() * window.innerWidth}px`;
    snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`; // 2-5 seconds
    snowflake.style.opacity = Math.random();
    document.body.appendChild(snowflake);
    setTimeout(() => snowflake.remove(), 5000);
  }
  setInterval(createSnowflake, 100);

// JavaScript for Play Music Button
document.addEventListener('DOMContentLoaded', () => {
  // JavaScript for Play Music Button
  const playMusicButton = document.getElementById('play-music');
  const backgroundMusic = document.getElementById('background-music');

  if (playMusicButton && backgroundMusic) {
    playMusicButton.addEventListener('click', () => {
      if (backgroundMusic.paused) {
        backgroundMusic.play(); // Play the music
        playMusicButton.textContent = 'Pause Music'; // Update button text
      } else {
        backgroundMusic.pause(); // Pause the music
        playMusicButton.textContent = 'Play Music'; // Update button text
      }
    });
  } else {
    console.error('Play Music button or background music element not found.');
  }
<<<<<<< Updated upstream
});
=======
});
>>>>>>> Stashed changes

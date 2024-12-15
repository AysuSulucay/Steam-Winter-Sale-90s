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
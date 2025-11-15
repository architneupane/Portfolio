document.addEventListener("DOMContentLoaded", () => {
  const animatedText = document.querySelector(".animated-text");
  const phrases = [ "Student","MERN Stack Developer","Software Developer"];
  let index = 0;

  function updateText() {
    animatedText.textContent = phrases[index];
    index = (index + 2) % phrases.length;
  }

  setInterval(updateText, 3000); // Change text every 3 seconds
  updateText(); // Initialize with the first phrase
});
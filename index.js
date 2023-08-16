const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

let intervalId = null;

const createTimerAnimator = () => {
  return (seconds) => {
    if (intervalId) clearInterval(intervalId);

    intervalId = setInterval(() => {
      if (seconds === 0) {
        clearInterval(intervalId);
        timerEl.textContent = "00:00:00";
        return;
      }

      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const secs = seconds % 60;

      timerEl.textContent = `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
      seconds--;
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", () => {
  inputEl.value = inputEl.value.replace(/[^0-9]/g, "");
});

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);
  if (isNaN(seconds)) return;

  animateTimer(seconds);

  inputEl.value = "";
});

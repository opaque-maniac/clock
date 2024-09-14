type ClockElement = HTMLElement | null;

document.addEventListener("DOMContentLoaded", () => {
  const hour = document.querySelector(
    ".iconic-clock-hour-hand"
  ) as ClockElement;
  const minute = document.querySelector(
    ".iconic-clock-minute-hand"
  ) as ClockElement;
  const second = document.querySelector(
    ".iconic-clock-second-hand"
  ) as ClockElement;

  if (!hour || !minute || !second) {
    return;
  }

  const updateClock = () => {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
    const hourAngle = (h % 12) * 30 + m * 0.5;
    const minutesAngle = m * 6 + s * 0.1;
    const secondsAngle = s * 6;
    console.log(
      `hour: ${hourAngle}, minute: ${minutesAngle}, second: ${secondsAngle}`
    );
    hour.style.transform = `rotate(${hourAngle}deg)`;
    minute.style.transform = `rotate(${minutesAngle}deg)`;
    second.style.transform = `rotate(${secondsAngle + 111}deg)`;
  };
  setInterval(updateClock, 1000);
});

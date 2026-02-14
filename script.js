function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;

  minutes = minutes < 10 ? "0" + minutes : minutes;

  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  const dayName = days[now.getDay()];
  const monthName = months[now.getMonth()];
  const dayNum = now.getDate();
  const year = now.getFullYear();

  const timeString = `${hours}:${minutes} ${ampm}`;
  const dateString = `${dayName}, ${monthName} ${dayNum}, ${year}`;

  document.querySelectorAll("#clock").forEach(clock => {
    clock.innerHTML = `${timeString}<br>${dateString}`;
  });
}

setInterval(updateClock, 1000);
updateClock();


// Real battery on homepage only
async function updateBattery() {
  const batteryElement = document.getElementById("battery");
  if (!batteryElement) return;

  if (!navigator.getBattery) {
    batteryElement.innerHTML = "🔋 N/A";
    return;
  }

  const battery = await navigator.getBattery();

  function refreshBattery() {
    let percent = Math.round(battery.level * 100);
    batteryElement.innerHTML = `🔋 ${percent}%`;
  }

  refreshBattery();
  battery.addEventListener("levelchange", refreshBattery);
}

updateBattery();

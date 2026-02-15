function updateClock() {
  const now = new Date();

  const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const date = now.toLocaleDateString([], { weekday: 'long', month: 'short', day: 'numeric' });

  document.getElementById("clock").innerHTML = `${time}<br>${date}`;
}

updateClock();
setInterval(updateClock, 1000);

// Battery (works on supported browsers only)
if (navigator.getBattery) {
  navigator.getBattery().then(function(battery) {
    function updateBattery() {
      let percent = Math.round(battery.level * 100);
      document.getElementById("battery").innerText = `🔋 ${percent}%`;
    }
    updateBattery();
    battery.addEventListener("levelchange", updateBattery);
  });
} else {
  document.getElementById("battery").innerText = "🔋 --%";
}

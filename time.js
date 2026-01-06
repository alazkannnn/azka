function tampilWaktu() {
  const sekarang = new Date();
  const jam = sekarang.getHours();

  let salam = "";

  if (jam >= 4 && jam < 11) {
    salam = "Good Morning 🌅";
  } else if (jam >= 11 && jam < 15) {
    salam = "Good Afternoon ☀️";
  } else if (jam >= 15 && jam < 18) {
    salam = "Good Evening 🌇";
  } else {
    salam = "Good Night 🌙";
  }

  const salamEl = document.getElementById("salam-waktu");
  if (salamEl) {
    salamEl.innerText =
      salam + ", then have a nice day!";
  }
}

function jamRealtime() {
  const sekarang = new Date();
  const waktu =
    sekarang.getHours().toString().padStart(2, "0") + ":" +
    sekarang.getMinutes().toString().padStart(2, "0") + ":" +
    sekarang.getSeconds().toString().padStart(2, "0");

  const jamEl = document.getElementById("jam");
  if (jamEl) jamEl.innerText = "Waktu sekarang: " + waktu;
}

tampilWaktu();
setInterval(jamRealtime, 1000);

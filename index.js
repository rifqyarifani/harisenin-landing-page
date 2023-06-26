const btnMain = document.getElementById("btn-main");
const btnDaftar = document.getElementById("btn-daftar");
const btnMasuk = document.getElementById("btn-masuk");
const waktu = document.getElementById("waktu");

btnDaftar.addEventListener("click", () => {
  const email = prompt("Masukkan email");
  const password = prompt("Masukkan password");
  alert("Anda Berhasil Daftar");
});

btnMasuk.addEventListener("click", () => {
  const email = prompt("Masukkan email");
  const password = prompt("Masukkan password");
  alert("Anda Berhasil Masuk");
});

function clock() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  waktu.innerHTML = `${hours}:${minutes}:${seconds}`;
}

setInterval(() => {
  clock();
}, 1000);

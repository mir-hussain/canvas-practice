const canvas = document.getElementById("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 4;

const ctx = canvas.getContext("2d");

for (let i = 0; i < 200; i++) {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;

  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  ctx.beginPath();
  ctx.arc(x, y, 50, 0, 2 * Math.PI);
  ctx.fillStyle = `rgb(${r}, ${g}, ${b}, 0.3)`;
  ctx.fill();
}

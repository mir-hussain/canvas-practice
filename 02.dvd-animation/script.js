const canvas = document.getElementById("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 4;

const ctx = canvas.getContext("2d");

function Circle(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;

  this.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
  };
}

let x = 50;
let y = 50;
let dx = 3;
let dy = 2;
let radius = 50;
let color = "rgb(138, 55, 255, 0.3)";

function generateRandomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgba(${r}, ${g}, ${b}, 0.3)`;
}

function animate() {
  requestAnimationFrame(animate);
  const circle = new Circle(x, y, radius, color);
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  circle.draw();

  if (x + radius > window.innerWidth || x - radius < 0) {
    dx = -dx;
    color = generateRandomColor();
  }
  if (y + radius > window.innerHeight || y - radius < 0) {
    dy = -dy;
    color = generateRandomColor();
  }

  x += dx;
  y += dy;
}

animate();

// for (let i = 0; i < 200; i++) {
//   const x = Math.random() * window.innerWidth;
//   const y = Math.random() * window.innerHeight;

// }

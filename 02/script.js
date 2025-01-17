const canvas = document.getElementById("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 4;

const ctx = canvas.getContext("2d");

//   const r = Math.floor(Math.random() * 255);
//   const g = Math.floor(Math.random() * 255);
//   const b = Math.floor(Math.random() * 255);

function Circle(x, y, radius) {
  this.x = x;
  this.y = y;
  this.radius = radius;

  this.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = "rgb(138, 55, 255, 0.3)";
    ctx.fill();
  };
}

for (let i = 0; i < 200; i++) {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;

  const circle = new Circle(x, y, 50);
  circle.draw();
}

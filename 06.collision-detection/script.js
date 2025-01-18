const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 4;

const mouse = {
  x: undefined,
  y: undefined,
};

window.addEventListener("mousemove", (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
});

const getDistance = (x1, y1, x2, y2) => {
  const xDistance = x1 - x2;
  const yDistance = y1 - y2;

  return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
};

class Ball {
  constructor(x, y, dy, radius, color) {
    this.x = x;
    this.y = y;
    this.dy = dy;
    this.radius = radius;
    this.color = color;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}

let ball1;
let ball2;

const init = () => {
  ball1 = new Ball(
    window.innerWidth / 2,
    window.innerHeight / 2,
    2,
    100,
    "black"
  );
  ball2 = new Ball(10, 10, 2, 50, "red");
};

const animate = () => {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  ball1.draw();
  ball2.draw();
  ball2.x = mouse.x;
  ball2.y = mouse.y;

  if (
    getDistance(ball1.x, ball1.y, ball2.x, ball2.y) <
    ball1.radius + ball2.radius
  ) {
    ball1.color = "red";
  } else {
    ball1.color = "black";
  }
};

init();
animate();

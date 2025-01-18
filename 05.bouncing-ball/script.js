const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 4;

const gravity = 1;
const friction = 0.6;
let ballsArray = [];

const mouse = {
  x: undefined,
  y: undefined,
};

function generateRandomColor() {
  const colorArray = [
    "rgba(38, 70, 83, 0.5)",
    "rgba(42, 157, 143, 0.5)",
    "rgba(233, 196, 106, 0.5)",
    "rgba(244, 162, 97, 0.5)",
    "rgba(231, 111, 81, 0.5)",
  ];

  return colorArray[Math.floor(Math.random() * 5)];
}

window.addEventListener("mousedown", (event) => {
  let ball = new Ball(
    event.x,
    event.y,
    2,
    Math.floor(Math.random() * 45) + 5,
    generateRandomColor()
  );
  ballsArray.push(ball);
});

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

  update() {
    if (this.y + this.radius + this.dy > canvas.height) {
      this.dy = -this.dy * friction;
    } else {
      this.dy += gravity;
    }

    setTimeout(() => {
      if (this.radius > 0) {
        this.radius -= 1;
      }
    }, 2000);

    this.y += this.dy;

    this.draw();
  }
}

let ball;

// const init = () => {
//   ball = new Ball(window.innerWidth / 2, window.innerHeight / 2, 2, 50, "red");
// };

const animate = () => {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  for (let ball of ballsArray) {
    ball.update();
  }
};

// init();
animate();

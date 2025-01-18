const canvas = document.getElementById("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 4;

const ctx = canvas.getContext("2d");

let maxRadius = 40;
let cursorArea = 60;

const mouse = {
  x: undefined,
  y: undefined,
};

window.addEventListener("mousemove", (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
});

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight - 4;

  init();
});

class Circle {
  constructor(x, y, dx, dy, radius, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = color;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  update() {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    if (
      mouse.x - this.x < cursorArea &&
      mouse.x - this.x > -cursorArea &&
      mouse.y - this.y < cursorArea &&
      mouse.y - this.y > -cursorArea
    ) {
      if (this.radius < maxRadius) {
        this.radius += 1;
      }
    } else if (this.radius > this.minRadius) {
      this.radius -= 1;
    }

    this.draw();
  }
}

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

let circleArray = [];

function init() {
  let totalCircleCount = (window.innerHeight + window.innerWidth) * 2;

  console.log(totalCircleCount);
  circleArray = [];
  for (let i = 0; i < totalCircleCount; i++) {
    let radius = Math.floor(Math.random() * 3) + 2;
    let x = Math.random() * (window.innerWidth - radius * 2) + radius;
    let y = Math.random() * (window.innerHeight - radius * 2) + radius;
    let dx = Math.random() - 0.5;
    let dy = Math.random() - 0.5;
    // let color = "rgba(206, 121, 251, 0.3)";
    let color = generateRandomColor();

    const circle = new Circle(x, y, dx, dy, radius, color);
    circleArray.push(circle);
  }
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  for (let circle of circleArray) {
    circle.update();
  }
}

init();
animate();

let lines = [];

function setup() {
  createCanvas(1440, 600);
  background(255);
  strokeWeight(2);
  noFill();
}

function draw() {
  clear();

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    line.update();
    line.display();
  }

  lines = lines.filter((line) => !line.isOffScreen());

  let mouseXRatio = mouseX / width;
  let mouseYRatio = mouseY / height;
  let newLine = new DynamicLine(mouseXRatio, mouseYRatio);
  lines.push(newLine);
}

class DynamicLine {
  constructor(xRatio, yRatio) {
    this.startX = width * xRatio;
    this.startY = height * yRatio;
    this.angle = random(TWO_PI);
    this.speed = random(0.5, 2);
    this.color = color(random(255), 43, 255, 227, random(255)); // Violet and Red
    this.opacity = 255; // Initial opacity
  }

  update() {
    this.startX += cos(this.angle) * this.speed;
    this.startY += sin(this.angle) * this.speed;
    this.speed *= 1; // Slow down the line movement
    this.opacity -= 1; // Reduce opacity as the line moves away
  }

  display() {
    stroke(
      red(this.color),
      green(this.color),
      blue(this.color),
      this.opacity
    );
    line(
      this.startX,
      this.startY,
      this.startX + cos(this.angle) * 20,
      this.startY + sin(this.angle) * 20
    );
  }

  isOffScreen() {
    return (
      this.startX < 0 ||
      this.startX > width ||
      this.startY < 0 ||
      this.startY > height ||
      this.opacity <= 0
    );
  }
}
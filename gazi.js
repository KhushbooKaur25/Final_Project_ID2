let sketch3 = (p) => {
  let lines = [];

  p.setup = function () {
    let canvas = p.createCanvas(1440, 600);
    canvas.parent("sketch3Container");
    p.background(255);
    p.strokeWeight(2);
    p.noFill();
  };

  p.draw = function () {
    p.clear();

    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      line.update();
      line.display();
    }

    lines = lines.filter((line) => !line.isOffScreen());

    let mouseXRatio = p.mouseX / p.width;
    let mouseYRatio = p.mouseY / p.height;
    let newLine = new DynamicLine(mouseXRatio, mouseYRatio);
    lines.push(newLine);
  };

  class DynamicLine {
    constructor(xRatio, yRatio) {
      this.startX = p.width * xRatio;
      this.startY = p.height * yRatio;
      this.angle = p.random(p.TWO_PI);
      this.speed = p.random(0.5, 2);
      this.color = p.color(p.random(255), 43, 255, 227, p.random(255));
      this.opacity = 255;
    }

    update() {
      this.startX += p.cos(this.angle) * this.speed;
      this.startY += p.sin(this.angle) * this.speed;
      this.speed *= 1;
      this.opacity -= 1;
    }

    display() {
      p.stroke(
        p.red(this.color),
        p.green(this.color),
        p.blue(this.color),
        this.opacity
      );
      p.line(
        this.startX,
        this.startY,
        this.startX + p.cos(this.angle) * 20,
        this.startY + p.sin(this.angle) * 20
      );
    }

    isOffScreen() {
      return (
        this.startX < 0 ||
        this.startX > p.width ||
        this.startY < 0 ||
        this.startY > p.height ||
        this.opacity <= 0
      );
    }
  }
};

new p5(sketch3);

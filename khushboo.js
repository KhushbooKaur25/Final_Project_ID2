let sketch4 = (p) => {
  let octahedron;
  let octahedron2;
  let logoScale = 0.01;

  p.preload = function () {
    octahedron = p.loadModel("bluecube3.obj");
    octahedron2 = p.loadModel("pinkcube3.obj");
  };

  p.setup = function () {
    let canvas = p.createCanvas(544, 720, p.WEBGL);
    canvas.parent("sketch4Container");
  };

  p.draw = function () {
    p.clear(0);

    p.ambientLight(250);
    p.ambientMaterial(220, 99, 153);
    p.pointLight(100, 20, 255);

    p.push();
    p.rotateX(p.frameCount * 0.01);
    p.rotateY(p.frameCount * 0.02);
    p.scale(12, 12, 12);
    p.model(octahedron);
    p.pop();

    p.ambientMaterial(118, 195, 230);
    p.pointLight(21, 20, 25);

    p.push();
    p.rotateX(p.frameCount * 0.01);
    p.rotateY(p.frameCount * 0.01);
    p.scale(12, 12, 12);
    p.model(octahedron2);
    p.pop();
  };
};

new p5(sketch4);

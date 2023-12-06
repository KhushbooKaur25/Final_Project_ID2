let sketch4 = (p) => {
  let octahedron;
  let octahedron2;
  let logoScale = 0.01;

  p.preload = function () {
    octahedron = p.loadModel("bluecube3.obj");
    octahedron2 = p.loadModel("pinkcube3.obj");
  };

  p.setup = function () {
    let canvas = p.createCanvas(400, 400, p.WEBGL);
    canvas.parent("sketch4Container");
  };

  p.draw = function () {
    p.background(200);

    p.ambientLight(250);
    p.ambientMaterial(220, 99, 153);
    p.pointLight(100, 20, 255);

    p.push();
    p.rotateX(p.frameCount * 0.01);
    p.rotateY(p.frameCount * 0.02);
    p.scale(8, 8, 8);
    p.model(octahedron);
    p.pop();

    p.ambientMaterial(118, 195, 230);
    p.pointLight(21, 20, 25);

    p.push();
    p.rotateX(p.frameCount * 0.01);
    p.rotateY(p.frameCount * 0.01);
    p.scale(8, 8, 8);
    p.model(octahedron2);
    p.pop();
  };
};

new p5(sketch4);

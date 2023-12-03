//draw a spinning octahedron
let octahedron;
let octahedron2;
let logoScale = 0.01;

function preload() {
  octahedron = loadModel('bluecube3.obj');
  octahedron2 = loadModel('pinkcube3.obj');
}

function setup() {
  createCanvas(400,400, WEBGL);
  // describe('Vertically rotating 3-d octahedron.');
}

function draw() {
 background(200);
  
  ambientLight(250);
  // Set the color of the 3D model to DC6399
  ambientMaterial(220,99,153);
  pointLight(100,20, 255);
  
  push();
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.02);
  scale(8,8,8);
  model(octahedron);
  pop();
  
  
  
 // ambientLight(250);
  // Set the color of the 3D model to DC6399
  ambientMaterial(118,195,230);
 pointLight(21,20, 25);
  
  
  push();
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  scale(8,8,8);
  model(octahedron2);
  pop();
}
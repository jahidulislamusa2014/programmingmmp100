

var cells = [];

function setup() {
  createCanvas(500, 500);
  cells.push(new Cell());
  cells.push(new Cell());
}

function draw() {
  background(40);
  for (var i = 0; i < cells.length; i++) {
    cells[i].move();
    cells[i].show();

    fill(150);
    ellipse(mouseX, mouseY, 12, 12);


    textSize(25);
    strokeWeight(30);
    textStyle(BOLD);
    fill(255, 255, 255);
    text("Press on bubble to see magic", 60, 60);


  }
}

function mousePressed() {
  for (var i = cells.length - 1; i >= 0; i--) {
    if (cells[i].clicked(mouseX, mouseY)) {
      cells.push(cells[i].mitosis());
      cells.push(cells[i].mitosis());
      cells.splice(i, 1);
    }
  }
}

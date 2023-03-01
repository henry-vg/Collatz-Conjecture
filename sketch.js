const length = 7,
  speed = 50;
let angle,
  n = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

  angle = ((1 + sqrt(5)) / 2) / 10;

  noFill();
  stroke(255);
  strokeWeight(0.2);

  background(0);
}

function draw() {
  for (let i = 0; i < speed; i++) {
    translate(width / 2, height);
    rotate(-PI / 2);

    const sequence = collatz(n);

    let curAngle = 0,
      xOff = 0,
      yOff = 0;

    beginShape();
    for (let j = 0; j < sequence.length; j++) {
      if (sequence[j] % 2 == 0) {
        curAngle += angle;
      }
      else {
        curAngle -= angle
      }

      const newX = xOff + length * cos(curAngle),
        newY = yOff + length * sin(curAngle);

      vertex(xOff, yOff);

      xOff = newX;
      yOff = newY;
    }
    endShape();
    n++;
    resetMatrix();
  }
}

function collatz(num) {
  sequence = [num];
  while (num > 1) {
    if (num % 2 == 0) {
      num = num / 2;
    }
    else {
      num = (num * 3 + 1) / 2;
    }
    sequence.push(num);
  }

  return sequence.reverse();
}
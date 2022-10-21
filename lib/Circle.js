// TODO: Find a better way to import this. Maybe NPM?
import Vector2 from "./Vector2.js";

class Circle {
  static radius = 5;

  #stroke;
  #fill;

  #dx;
  #dy;

  constructor(context, x, y) {
    this.radius = Circle.radius;
    this.speed = 1;

    this.#stroke;
    this.#fill;

    this.x = x;
    this.y = y;

    /** @type {CanvasRenderingContext2D} */
    this.c = context;

    [this.#dx, this.#dy] = Vector2.random().toArray();
  }

  get stroke() {
    return this.#stroke;
  }

  set stroke(value) {
    this.#stroke = value;
  }

  get fill() {
    return this.#fill;
  }

  set fill(value) {
    this.#fill = value;
  }

  draw = () => {
    this.c.strokeStyle = this.#stroke;
    this.c.fillStyle = this.#fill;
    this.c.beginPath();
    this.c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    this.c.fill();
  };

  update = () => {
    if (this.x - this.radius < 0 || this.x + this.radius > innerWidth)
      this.#dx *= -1;
    if (this.y - this.radius < 0 || this.y + this.radius > innerHeight)
      this.#dy *= -1;

    this.x += this.speed * this.#dx;
    this.y += this.speed * this.#dy;

    if (this.radius > Circle.radius) this.radius -= 0.1;
  };

  distanceTo = (x, y) => Math.sqrt((this.x - x) ** 2 + (this.y - y) ** 2);
}

export default Circle;

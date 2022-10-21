import {
  COLORS,
  randomElement,
  inflateCircles,
  resizeCanvas,
} from "./lib/helper.js";
import Circle from "./lib/Circle.js";

/* == CONSTANTS == */
/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("my-canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

/* == SETUP == */
const c = canvas.getContext("2d");

let circles;

const setup = (event) => {
  event && event.preventDefault();

  circles = Array(800)
    .fill()
    .map((circle) => {
      const x =
        Circle.radius + Math.random() * (innerWidth - 2 * Circle.radius);
      const y =
        Circle.radius + Math.random() * (innerHeight - 2 * Circle.radius);

      circle = new Circle(c, x, y);
      circle.fill = randomElement(COLORS);

      return circle;
    });
};

window.addEventListener("mousemove", (event) => inflateCircles(circles, event));
window.addEventListener("contextmenu", setup);
window.addEventListener("resize", () => resizeCanvas(canvas, circles));

/* == MAIN == */
const animate = () => {
  requestAnimationFrame(animate);

  c.clearRect(0, 0, innerWidth, innerHeight);

  circles.forEach((cir) => cir.update());
};

setup();
animate();

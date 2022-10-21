import { COLORS, randomElement, inflateCircles } from "./lib/helper.js";
import Circle from "./lib/Circle.js";

/* == CONSTANTS == */
/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("my-canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

/* == SETUP == */
const c = canvas.getContext("2d");

const circles = Array(800)
  .fill()
  .map((circle) => {
    const x = Circle.radius + Math.random() * (innerWidth - 2 * Circle.radius);
    const y = Circle.radius + Math.random() * (innerHeight - 2 * Circle.radius);

    circle = new Circle(c, x, y);
    circle.fill = randomElement(COLORS);

    return circle;
  });

window.addEventListener("mousemove", (event) => inflateCircles(circles, event));

window.addEventListener("resize", () => resizeCanvas(canvas, circles));

/* == MAIN == */
const animate = () => {
  requestAnimationFrame(animate);

  c.clearRect(0, 0, innerWidth, innerHeight);

  circles.forEach((cir) => {
    cir.update();
    cir.draw();
  });
};

animate();

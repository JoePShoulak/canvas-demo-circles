import { Do, randomElement } from "./lib/helper.js";
import Circle from "./lib/Circle.js"

/* == CONSTANTS == */
/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('my-canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// /** @type {CanvasRenderingContext2D} */
const c = canvas.getContext('2d');

const MOUSE_RADIUS = 100;
const COLORS = [
    '#3288F0',
    '#34FA99',
    '#B1E33B',
    '#FABF34',
    '#F04C22'
]

/* == HELPERS == */
const inflateCircles = (event) => {
    circles
        .filter((circle) => {
            return circle.distanceTo(event.x, event.y) < MOUSE_RADIUS;
        })
        .forEach(cir => cir.radius = Math.min(cir.radius + 1, Circle.radius * 3));
}

const resizeCanvas = (event) => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // validate circles
    circles
        .filter(cir => {
            return cir.x > innerWidth ||
                cir.y > innerHeight ||
                cir.x < 0 ||
                cir.y < 0
        })
        .map((cir) => {
            cir.x = Circle.radius + Math.random() * (innerWidth - 2 * Circle.radius);
            cir.y = Circle.radius + Math.random() * (innerHeight - 2 * Circle.radius);
        })
}

/* == SETUP == */
const circles = [];

Do(800).times(() => {
    const x = Circle.radius + Math.random() * (innerWidth - 2 * Circle.radius);
    const y = Circle.radius + Math.random() * (innerHeight - 2 * Circle.radius);
    circles.push(new Circle(c, x, y));
})

circles.map((cir) => cir.fill = randomElement(COLORS));

window.addEventListener('mousemove', inflateCircles)
window.addEventListener('resize', resizeCanvas)

/* == MAIN == */
const animate = () => {
    requestAnimationFrame(animate);

    c.clearRect(0, 0, innerWidth, innerHeight)

    circles.forEach(cir => {
        cir.update();
        cir.draw();
    });
};

animate();

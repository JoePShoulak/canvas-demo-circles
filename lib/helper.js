import Circle from "./Circle.js";

/* == COLOR HELPERS == */
export const randomColor = () => {
  return {
    r: Math.random(),
    g: Math.random(),
    b: Math.random(),
  };
};

export const colorToCSS = (color) => {
  return `rgba(${[...Object.values(color).map((n) => n * 255), 1].join(", ")})`;
};

export const COLORS = ["#3288F0", "#34FA99", "#B1E33B", "#FABF34", "#F04C22"];

/* == CANVAS HELPERS == */
const MOUSE_RADIUS = 100;

export const inflateCircles = (circles, event) => {
  circles
    .filter((circle) => {
      return circle.distanceTo(event.x, event.y) < MOUSE_RADIUS;
    })
    .forEach(
      (cir) => (cir.radius = Math.min(cir.radius + 1, Circle.radius * 3))
    );
};

const resizeCanvas = (canvas, circles) => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // validate circles
  circles
    .filter((cir) => {
      return (
        cir.x > innerWidth || cir.y > innerHeight || cir.x < 0 || cir.y < 0
      );
    })
    .map((cir) => {
      cir.x = Circle.radius + Math.random() * (innerWidth - 2 * Circle.radius);
      cir.y = Circle.radius + Math.random() * (innerHeight - 2 * Circle.radius);
    });
};

/* == MISC HELPERS == */
export const Do = (n) => {
  return {
    times: (callback) => [...Array(n).keys()].forEach(callback),
  };
};

export const randRange = (min, max) => min + Math.random() * max;

export const randomElement = (array) =>
  array[Math.floor(Math.random() * array.length)];

export const randomColor = () => {
    return {
        r: Math.random(),
        g: Math.random(),
        b: Math.random()
    };
};

export const colorToCSS = (color) => {
    return `rgba(${[...Object.values(color).map(n => n * 255), 1].join(", ")})`;
}

export const Do = (n) => {
    return {
        times: (callback) => [...Array(n).keys()].forEach(callback)
    };
};

export const randRange = (min, max) => min + Math.random()*max;

export const randomElement = (array) => array[Math.floor(Math.random()*array.length)];

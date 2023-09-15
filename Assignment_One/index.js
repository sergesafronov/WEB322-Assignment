// Traffic lights

// EventEmitter
const { EventEmitter } = require('events');
const trafficLightsEventEmitter = new EventEmitter();

// Structuring Data
const lights = [
    { color: "Red", duration: 5000 },
    { color: "Yellow", duration: 2000 },
    { color: "Green", duration: 5000 }
];

// Emit an event when the color changes
let colorIdx = 0;
function changeColor() {
   
    const currentColor = lights[colorIdx].color;
    trafficLightsEventEmitter.emit('colorChange', currentColor);    

    colorIdx++;
    if (colorIdx === lights.length) {
        colorIdx = 0;
    }

    setTimeout(changeColor, lights[colorIdx].duration);
}

// Event listener for color change
trafficLightsEventEmitter.on('colorChange', (color) => {
    console.log(`${color}`);
});

// Start the program
changeColor();
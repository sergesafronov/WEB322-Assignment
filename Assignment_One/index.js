// WEB322
// Assignment #1
// Traffic lights

// Full Name : Serge Safronov
// Student ID# : 132736224
// Email : SSafronov@myseneca.ca
// Section : NFF 

// EventEmitter
// 1) require('events') - using require() import 'events' module, the built-in module in Node.js.
// 2) const { EventEmitter } = object destructuring to extract the EventEmitter class from the 'events' module.
//    The module contains several classes and functions, but in this case, only EventEmitter class is being used.
// 3) Create a new instance of 'EventEmitter' - an object that can emit events and manage event listeners.
const { EventEmitter } = require('events');
const trafficLightsEventEmitter = new EventEmitter();


// Structuring Data
// 1)  The array that contains objects representing traffic light signals. Each object has two properties.
const lights = [
    { color: "Red", duration: 5000 },
    { color: "Yellow", duration: 2000 },
    { color: "Green", duration: 5000 }
];

// Emit an event when the color changes
// 1) trafficLightsEventEmitter.emit('colorChange', currentColor) - This line is using the emit() method
//    of the trafficLightsEventEmitter object to emit an event named 'colorChange'
//    and pass the currentColor as data associated with this event.
// 2) setTimeout(changeColor, lights[colorIdx].duration) - setTimeout function will wait before executing changeColor.
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
// 1) on() - method will register an event listener for the 'colorChange' event
// 2) (color) => { ... } - arrow function that defines what should happen when the 'colorChange' event is emitted.
// 3) 'color' - this parameter represents the data associated with the event, which was passed 
//    when the event was emitted using trafficLightsEventEmitter.emit('colorChange', currentColor).
trafficLightsEventEmitter.on('colorChange', (color) => {
    console.log(`${color}`);
});

// Start the program
changeColor();
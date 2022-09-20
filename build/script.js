"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Duck_1 = require("./Duck");
var pato = new Duck_1.Duck('Patolino', 3, 1.50, 2, true, 'branco');
function takeOff(animal) {
    animal.fly();
}
function departure(animal) {
    animal.walk();
}
function jump(animal) {
    animal.swim();
}
takeOff(pato);
departure(pato);
jump(pato);

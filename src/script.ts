import { Duck } from "./Duck";
import { ICanFly } from "./ICanFly";
import { ICanSwim } from "./ICanSwim";
import { ICanWalk } from "./ICanWalk";

const pato = new Duck('Patolino', 3, 1.50, 2, true, 'branco');

function takeOff(animal: ICanFly){
    animal.fly();
}
function departure(animal: ICanWalk){
    animal.walk();
}
function jump(animal: ICanSwim){
    animal.swim();
}
takeOff(pato);
departure(pato);
jump(pato);
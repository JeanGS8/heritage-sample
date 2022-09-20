import { Bird } from "./Bird";
import { ICanSwim } from "./ICanSwim";
import { ICanFly } from "./ICanFly";
import { ICanWalk } from "./ICanWalk";

class Duck extends Bird implements ICanSwim, ICanFly, ICanSwim {
    public color: string;

    constructor(name: string, lifeTime: number, size: number, weight: number, canFly: boolean, color: string){
        super(name, lifeTime, size, weight, canFly);
        this.color = color;
    }

    public fly(): void {
        console.log(`${this.name} starts to fly!`);
    }
    public swim(): void {
        console.log(`${this.name} starts to swin!`);
    }
    public walk(): void {
        console.log(`${this.name} starts to walk!`);
    }
}
export {Duck};
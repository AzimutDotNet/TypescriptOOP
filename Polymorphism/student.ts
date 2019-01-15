import IWork from "./iWork";

class Student implements IWork{
    public adolescent : boolean;
    constructor(){
        this.adolescent = true;
    }
    public work():void{
        console.log(`I am studying ${this.adolescent}`);
    }
}
export default Student;
import IWork from "./iWork";

class Muncitor implements IWork{
    averageSalary: string;
    constructor(){
        this.averageSalary = "1500$"
    }
    public work(): void {
        console.log(`i am building ${this.averageSalary}`);
    }
}

export default Muncitor;
///<reference path='Person.ts'/>
class Main {
    private person1: Person = null;
    private person2: Person = null;
    constructor() {
        this.person1 = new Person();
        this.person1.age = 20;

        this.person2 = new Person();
        console.log(this.person1);
        console.log(this.person2);
    }
}
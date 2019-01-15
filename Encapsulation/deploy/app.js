var Person = /** @class */ (function () {
    function Person() {
        this._age = 1;
    }
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (val) {
            if (this._age > 0) {
                this._age = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
///<reference path='Person.ts'/>
var Main = /** @class */ (function () {
    function Main() {
        this.person1 = null;
        this.person2 = null;
        this.person1 = new Person();
        this.person1.age = 20;
        this.person2 = new Person();
        console.log(this.person1);
        console.log(this.person2);
    }
    return Main;
}());

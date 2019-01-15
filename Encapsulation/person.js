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

"use strict";
exports.__esModule = true;
var porotermBrick_1 = require("./porotermBrick");
var Wall = /** @class */ (function () {
    function Wall(w, h) {
        this.wallWidth = 0;
        this.wallHeight = 0;
        this.wallWidth = w;
        this.wallHeight = h;
        this.build();
    }
    Wall.prototype.build = function () {
        var runtime = 0;
        for (var i = 1; i < this.wallHeight; i++) {
            for (var j = 0; j < this.wallWidth; j++) {
                runtime++;
                var inst = 'Instance ' + runtime;
                var brick = new porotermBrick_1["default"]();
            }
        }
    };
    return Wall;
}());
exports.Wall = Wall;
exports["default"] = Wall;

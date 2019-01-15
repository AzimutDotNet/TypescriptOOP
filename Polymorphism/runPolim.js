"use strict";
exports.__esModule = true;
var student_1 = require("./student");
var muncitor_1 = require("./muncitor");
var supervisor_1 = require("./supervisor");
var student = new supervisor_1["default"](new student_1["default"]());
var muncitor = new supervisor_1["default"](new muncitor_1["default"]());

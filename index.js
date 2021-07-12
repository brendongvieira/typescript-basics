"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(brand, model, maxSpeed) {
        if (maxSpeed === void 0) { maxSpeed = 220; }
        this.brand = brand;
        this.model = model;
        this.maxSpeed = maxSpeed;
        this.currentSpeed = 0;
    }
    Car.prototype.changeSpeed = function (delta) {
        var newSpeed = this.currentSpeed + delta;
        if (newSpeed >= 0 && newSpeed <= this.maxSpeed) {
            this.currentSpeed = newSpeed;
        }
        else {
            this.currentSpeed = delta > 0 ? this.maxSpeed : 0;
        }
    };
    Car.prototype.accelerate = function () {
        this.changeSpeed(5);
    };
    Car.prototype.break = function () {
        this.changeSpeed(-5);
    };
    return Car;
}());
var car = new Car("Chevrolet", "Prisma", 250);
//Heritage
var FutureCar = /** @class */ (function (_super) {
    __extends(FutureCar, _super);
    function FutureCar() {
        var _this = _super.call(this, "Chevrolet", "Camaro", 500) || this;
        _this.fly = false;
        return _this;
    }
    FutureCar.prototype.pressFly = function () {
        this.fly = true;
    };
    return FutureCar;
}(Car));
var futureCar = new FutureCar();
futureCar.accelerate();
futureCar.pressFly();
console.log(futureCar);

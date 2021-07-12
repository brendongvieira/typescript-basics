class Car {
  private currentSpeed: number = 0;

  constructor(
    public brand: string,
    public model: string,
    private maxSpeed: number = 220
  ) {}

  private changeSpeed(delta: number) {
    const newSpeed = this.currentSpeed + delta;

    if (newSpeed >= 0 && newSpeed <= this.maxSpeed) {
      this.currentSpeed = newSpeed;
    } else {
      this.currentSpeed = delta > 0 ? this.maxSpeed : 0;
    }
  }

  accelerate() {
    this.changeSpeed(5);
  }

  break() {
    this.changeSpeed(-5);
  }
}

const car = new Car("Chevrolet", "Prisma", 250);

//Heritage

class FutureCar extends Car {
  private fly = false;
  constructor() {
    super("Chevrolet", "Camaro", 500);
  }
  pressFly() {
    this.fly = true;
  }
}

const futureCar = new FutureCar();
futureCar.accelerate();
futureCar.pressFly();

console.log(futureCar);

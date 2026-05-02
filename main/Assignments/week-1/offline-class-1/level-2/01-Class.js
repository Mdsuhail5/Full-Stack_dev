
class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
}


const dog = new Animal("dog", 4)
console.log(dog.describe());

//example
class Car {

  constructor(name, color) {
    this.name = name
    this.color = color
  }

  print() {
    return `I have ${this.name} of ${this.color} color`
  }
}

let mycar = new Car("Mercedes", "black")
console.log(mycar.print())


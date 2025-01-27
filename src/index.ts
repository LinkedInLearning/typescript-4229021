// Les classes

class Animal {
    name: string;
    age: number;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    move() {
        alert(this.name + " se déplace");
    }
}

let pet = new Animal("Rex", 5)

class Dog extends Animal {
    makeSound() {
        alert(this.name + "aboie !")
    }
}

let pet2 = new Dog("Simba", 12)
pet2.move();
pet2.makeSound();

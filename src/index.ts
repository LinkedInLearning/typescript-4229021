// Les classes et la visibilité des membres

class Animal {
    private readonly name: string; // public, protected
    age: number;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    move() {
        alert(this.name + " se déplace");
    }
}

class Dog extends Animal {
    makeSound() {
        alert(this.name + "aboie !")
    }
}

let pet = new Dog("Simba", 12)
pet.name = "Meddor"
pet.move();
pet.makeSound();

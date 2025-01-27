// Les classes abstraites

abstract class Person {
    abstract getName(): string;
    sayHello() {
        console.log("Hello" + this.getName());
    }
}

const a = new Person();

class Employee extends Person {
    getName(): string {
        return "Tony";
    }

}

const b = new Employee();
b.getName();
b.sayHello();


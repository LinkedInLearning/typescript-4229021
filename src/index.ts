function f1(target, context) {
    console.log("Ici le decorateur f")
}

class MaClasse {
    @f1
    sayHello() {
        console.log("Bonjour, je suis la méthode sayHello()");
    }
}
const user = new MaClasse();
user.sayHello();

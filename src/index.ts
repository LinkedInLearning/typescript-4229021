function f1(target, context) {
    console.log("Ici le decorateur f")
}

function f2(param) {
    return function (target, context) {
        console.log("Ici le decorateur f2 avec " + param)
    }
}

class MaClasse {
    @f1
    @f2("un paramètre")
    sayHello() {
        console.log("Bonjour, je suis la méthode sayHello()");
    }
}
const user = new MaClasse();
user.sayHello();

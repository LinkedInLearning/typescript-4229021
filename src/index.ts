// Compatibilité des types

// X est compatible avec Y, si Y a au moins les mêmes membres que X.
// Vérifie di le type particulier est sous-type d'un autre type

interface Person {
    name: string;
}
let x: Person;
let y = { name: "John", age: 30 };

x = y
y = x


let myString: string = "Hello";
let myBoolean: boolean = true;
myString = myBoolean
myBoolean = myString



// Compatibilité des classes
// Les classes doivent avoir les mêmes membres d'instance.

class Person {
    name: string;
};
class IPerson {
    name: string;
    age: number
}
let bobby: Person = {
    name: "Bob",
};
let fred: IPerson = {
    name: "Fred",
    age: 27
};

bobby = fred;
fred = bobby



// Compatibilité des fonctions et des types
// La fonction cible doit avoir au moins les mêmes paramètres que la fonction source

let add = (a: number, b: number, c: number): number => a + b + c;
let sum = (x: number, y: number): number => x + y;
sum = add;
add = sum

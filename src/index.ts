// Les types conditionnels

// Basique
interface Animal {
    live(): void;
}
interface Car {
    test(): void;
}
interface Dog extends Animal {
    woof(): void;
}

type Example1 = Dog extends Animal ? number : string;
type Example2 = Car extends Animal ? number : string;



// Générique
type IsNumArray<T> = T extends number[] ? number : string;
const numA: IsNumArray<number[]> = 5;
const numB: IsNumArray<string[]> = '5';



// Contraintes de types conditionnels
type ConditionalType<T extends number | string> = T extends number ? number : string;

let x: ConditionalType<number> = 10;
let y: ConditionalType<string> = 'Hello';
let z: ConditionalType<boolean> = true;



// Déduction dans les types conditionnels
type Box<T> = T extends Array<infer Item> ? Item : never;
type Books = Box<string[]>

// Classe générique

class MaClasse<T, U> {
    dataA: T;
    dataB: U;
}

let value = new MaClasse<number, string>();
value.dataA = 999;
value.dataB = "du texte";



// Interface générique
interface MonInterface<T, U> {
    dataA: T;
    dataB: U;
}

let key1: MonInterface<number, string> = { dataA: 1, dataB: "Steve" };
let key2: MonInterface<number, number> = { dataA: 2, dataB: 12345 };



// Contraintes génériques
interface Person {
    firstName: string;
    lastName: string;
}

function display<T extends Person>(arg: T): void {
    console.log(arg.firstName + " " + arg.lastName);
}

display({ firstName: "Bob", lastName: "Marley", age: 33 });
display("Tony Stark"); 
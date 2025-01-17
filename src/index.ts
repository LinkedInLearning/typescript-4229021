// Annotation de type dans TypeScript

let a: string = "du texte";
let b: number = 123;
let c: boolean = true;
let d: boolean = false;

let arr1: any[] = [];
let arr2: number[] = [10, 30, 40];

function maFonctionA(): void {
}

// Annotation de type de paramètre
function maFonctionB(id: number, name: string) {
    console.log("Id = " + id + ", Name = " + name);
}

// Annotation de type dans un objet
let employee: {
    id: number;
    name: string;
};

employee = {
    id: 100,
    name: "John"
}

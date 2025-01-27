// Partial 
// rend les propriétés d'un objet facultatives

interface Point {
    x: number;
    y: number;
}

let pointPart: Partial<Point> = {}; // x et y sont optionnelles
pointPart.x = 10;


// Required
// rend les propriétés d'un objet obligatoires.

interface Car {
    make: string;
    model: string;
    mileage?: number; // propriété optionnelle
}

let myCar: Required<Car> = {
    make: 'Ford',
    model: 'Focus',
    mileage: 12000 // `Required` force mileage à être défini
};


// Omit
// supprime les clés d'un type d'objet.

interface PersonA {
    name: string;
    age: number;
    location?: string;
}

const bob: Omit<PersonA, 'age' | 'location'> = {
    name: 'Bob'
    // `Omit` a supprimé age and location, ils ne peuvent pas être défini ici
};


// Pick
// supprime toutes les clés sauf celles spécifiées d'un type d'objet.

interface PersonB {
    name: string;
    age: number;
    location?: string;
}

const marley: Pick<PersonB, 'name'> = {
    name: 'Bob'
    // `Pick` a seulement gardé name. age et location ont été supprimé
};


// Readonly
// crée un nouveau type où toutes les propriétés sont en lecture seule, 
// ce qui signifie qu'elles ne peuvent pas être modifiées une fois
// qu'une valeur leur est attribuée.

interface Employee {
    id: number;
    name: string;
}

let emp1: Readonly<Employee> = {
    id: 1,
    name: "Steve"
}

emp1.id = 100;
emp1.name = 'Bill';


// L'opérateur keyof

type ContactDetails = { name: string; email: string; mobile: string };

type Contact = keyof ContactDetails;

const friend: Contact = "mobile"



// Autre exemple

interface Person {
    name: string;
    age: number;
}

function showPerson(obj: Person, property: keyof Person) {
    console.log(property + " : " + obj[property]);
}

let personA = {
    name: "Booby",
    age: 32
};

showPerson(personA, "name"); 

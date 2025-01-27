// Les interfaces

interface Person {
    id: number;
    name: string;
    phone?: string
}

let personA: Person = { id: 1, name: "Tony", phone: "0123456789" };

class Friend implements Person {
    id;
    name;
    surname;
}

const personB = new Friend()

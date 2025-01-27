// Les types mappés

type Person = {
    name: string;
    age: number;
};

type Booleanify<T> = {
    [P in keyof T]: boolean;
};

const boolPerson: Booleanify<Person> = {
    name: true,
    age: true,
};

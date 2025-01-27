// Les types d'accès indexés

type Person = { age: number; name: string; alive: boolean };
type Age = Person["age"];

type AgeName = Person["age" | "name"];

type key = "age";
type T = Person[key]

// Le type any

let nbr: any = 7;
nbr = "abc";


// Le type unknown

let notSure: unknown = 4;
notSure = "peut être en une string";
notSure = false;


// Différence entre unknown et any

let vAny: any = 10;
let vUnknown: unknown = 10;

let s1: string = vAny;     // Any est attribuable à n'importe quoi
let s2: string = vUnknown; // Invalide; Nous ne pouvons attribuer vUnknown à aucun autre type

vAny.method();     // Ok; Tout fonctionne avec any
vUnknown.method(); // Erreur; nous ne savons rien de cette variable !

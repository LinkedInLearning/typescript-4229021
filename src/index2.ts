interface Person {
    id: number;
    name: string;
    phone?: string
}

// Extension d'une interface
interface Employee extends Person {
    job: string;
}

let employeeA: Employee = {
    id: 1,
    name: "Tony",
    job: "Web developer"
}



// Avec fonction
function callEmployee(user: Employee): Employee {
    return user;
}

let b = callEmployee(employeeA);



// Avec un tableau
interface NumList {
    [index: number]: number
}

let numArr: NumList = [1, 2, 3];
numArr[0];
numArr[1];


interface IStringList {
    [index: string]: string
}

let strArr: IStringList = { TS: 'TypeScript', JS: 'JavaScript' };
strArr["TS"];
strArr["JS"];

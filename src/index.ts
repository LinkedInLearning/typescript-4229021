// Typage par assertion

let code: any = 123;
// let employeeCode = <number> code;
let employeeCode = code as number;
typeof (employeeCode);

let x = "bonjour" as number;

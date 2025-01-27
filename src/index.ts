// Les unions

let a: (string | number);
a = "ABC";
a = 123;
a = true;

let b: string | number | boolean;
b = 111;
b = "E111";
b = true;


function displayType(x: string | number) {
    if (typeof (x) === "number") {
        console.log('X est de type number')
    } else if (typeof (x) === "string") {
        console.log('X est de type string')
    }
}

displayType(123);
displayType("ABC");
displayType(true); // ERREUR

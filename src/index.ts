// Typage de fonctions

function calculA(x, y) {
    return x + y;
}
calculA(2, 3);



function calculB(x, y?) {
    return x + y;
}
calculB(2);



function calculC(x, y = 1) {
    return x + y;
}
calculC(2, 3);



function calculD(x: string, y: number): string {
    return x + y;
}
calculD("abc", 3);
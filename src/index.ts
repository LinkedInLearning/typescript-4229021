// Le type never

function maFonctionA(errorMsg): never {
    throw new Error(errorMsg);
}

function maFonctionB(x: string | number) {
    if (typeof x === "string") {
        // fait quelque chose
    } else if (typeof x === "number") {
        // faire quelque chose d'autre
    } else {
        x; // possède le type 'never'!
    }
}
